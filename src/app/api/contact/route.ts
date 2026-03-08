import { NextResponse } from 'next/server';
import { DbManager } from '@/lib/db/dbManager';
import { EmailService } from '@/lib/email/emailService';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // 1. Save to Database (Supabase with MongoDB failover)
        const dbResult = await DbManager.saveContactSubmission(data);

        if (dbResult.success) {
            // 2. Fire-and-forget email notifications (don't block the response)
            EmailService.sendInquiryNotification({
                name: data.name,
                email: data.email,
                company: data.company,
                message: data.message,
            }).catch(emailErr => {
                console.error('Background Email Error:', emailErr);
            });

            return NextResponse.json(
                { message: 'Submission successful', source: dbResult.source },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: 'Failed to submit the form. Please try again later.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
