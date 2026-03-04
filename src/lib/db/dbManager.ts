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
                    phone: data.phone,
                    message: data.message,
                    created_at: new Date().toISOString(),
                },
            ]);

            if (error) {
                console.error('Supabase insertion failed:', error);
                throw new Error(error.message); // Trigger failover
            }

            return { success: true, source: 'supabase' };
        } catch (supabaseError) {
            console.warn('Initiating Failover to MongoDB...');

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
            } catch (mongoError) {
                console.error('MongoDB insertion also failed:', mongoError);
                return { success: false, source: 'none', error: mongoError };
            }
        }
    }
}
