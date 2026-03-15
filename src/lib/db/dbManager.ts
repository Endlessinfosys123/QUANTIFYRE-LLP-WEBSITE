import { supabase } from './supabase';
import clientPromise from './mongodb';

export class DbManager {
    /**
     * Save contact submission logic with auto-failover.
     * Attempts Supabase first. If it fails or times out, falls back to MongoDB.
     */
    static async saveContactSubmission(data: any): Promise<{ success: boolean; source: string; error?: any }> {
        try {
            // 1. Try Supabase
            const { error } = await supabase.from('contacts').insert([
                {
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    phone: data.mobile || data.phone || null, // Capture mobile
                    service: data.service || null,           // Capture selected service
                    message: data.message,
                    created_at: new Date().toISOString(),
                },
            ]);

            if (error) {
                const isRLSError = error.code === '42501';
                console.error('Supabase Insertion Error:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code,
                    diagnostics: isRLSError ? 'CRITICAL: Row Level Security (RLS) is blocking inserts. Check Supabase Policies.' : 'Standard database error.'
                });
                
                const errorMessage = isRLSError 
                    ? `RLS Policy Violation: Enable "anon" insert permissions on "contacts" table. (${error.message})`
                    : `Supabase Error: ${error.message}`;
                
                throw new Error(errorMessage); // Trigger failover
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
