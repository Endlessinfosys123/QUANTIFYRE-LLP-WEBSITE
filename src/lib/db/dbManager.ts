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
                    company: data.company, // Added company field
                    phone: data.phone || null, // Handle missing phone
                    message: data.message,
                    created_at: new Date().toISOString(),
                },
            ]);

            if (error) {
                console.error('Supabase insertion error details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                throw new Error(error.message); // Trigger failover
            }

            return { success: true, source: 'supabase' };
        } catch (supabaseError: any) {
            console.warn('Supabase failed, initiating failover to MongoDB. Error:', supabaseError.message);

            try {
                // 2. Fallback to MongoDB
                const mongoClient = await clientPromise;
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
