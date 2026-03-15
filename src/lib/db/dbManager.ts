import { supabase } from './supabase';
import clientPromise from './mongodb';

export class DbManager {
    /**
     * Save contact submission logic with auto-failover.
     * Attempts Supabase first. If it fails or times out, falls back to MongoDB.
     */
    static async saveContactSubmission(data: any): Promise<{ success: boolean; source: string; error?: any }> {
        const payload: any = {
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.mobile || data.phone || null,
            message: data.message,
            created_at: new Date().toISOString(),
        };

        // Add service if provided
        if (data.service) {
            payload.service = data.service;
        }

        try {
            // 1. Try Supabase with full payload
            const { error } = await supabase.from('contacts').insert([payload]);

            if (error) {
                // If the error is "column not found" for 'service', retry without it
                if (error.message.includes("column 'service' not found") || error.details?.includes("column \"service\" of relation \"contacts\" does not exist")) {
                    console.warn('Supabase "service" column missing. Retrying with augmented message...');
                    
                    const fallbackPayload = { ...payload };
                    delete fallbackPayload.service;
                    fallbackPayload.message = `[Service: ${payload.service}]\n${payload.message}`;
                    
                    const { error: retryError } = await supabase.from('contacts').insert([fallbackPayload]);
                    if (!retryError) {
                        console.log('Supabase insertion successful after service column fallback');
                        return { success: true, source: 'supabase' };
                    }
                    throw retryError;
                }
                
                const isRLSError = error.code === '42501';
                throw new Error(isRLSError ? `RLS Policy Blocking: ${error.message}` : error.message);
            }

            console.log('Supabase insertion successful');
            return { success: true, source: 'supabase' };
        } catch (supabaseError: any) {
            console.warn('Supabase failed, initiating failover to MongoDB. Error:', supabaseError.message);

            try {
                // 2. Fallback to MongoDB
                const mongoClient = await clientPromise;
                
                if (!mongoClient) {
                    console.warn('MongoDB failover skipped: MONGODB_URI not configured.');
                    return { success: false, source: 'none', error: supabaseError };
                }

                const db = mongoClient.db('quantifyre');
                const collection = db.collection('contacts');

                await collection.insertOne({
                    ...data,
                    createdAt: new Date(),
                });

                return { success: true, source: 'mongodb' };
            } catch (mongoError: any) {
                console.error('MongoDB insertion also failed. Error:', mongoError.message);
                // Return the primary error (Supabase) as it's the main database requested
                return { success: false, source: 'none', error: supabaseError };
            }
        }
    }
}
