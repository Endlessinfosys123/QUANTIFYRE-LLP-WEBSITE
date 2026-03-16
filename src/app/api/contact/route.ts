import { NextResponse } from 'next/server';
import { DbManager } from '@/lib/db/dbManager';
import { EmailService } from '@/lib/email/emailService';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.name || !data.email || !data.message || !data.service) {
            return NextResponse.json(
                { error: 'Name, email, service, and message are required fields.' },
                { status: 400 }
            );
        }

        // 1. Save to Database (Supabase with MongoDB failover)
        const dbResult = await DbManager.saveContactSubmission(data);

        if (dbResult.success) {
            // 2. Await email notification (critical for serverless environments)
            let emailStatus: any = { success: false, error: 'Not attempted' };
            try {
                emailStatus = await EmailService.sendInquiryNotification({
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    mobile: data.mobile,
                    service: data.service,
                    message: data.message,
                });
            } catch (emailErr: any) {
                console.error('Background Email Error:', emailErr);
                emailStatus = { success: false, error: emailErr.message };
            }

            return NextResponse.json(
                {
                    message: 'Submission successful',
                    source: dbResult.source,
                    emailSent: emailStatus.success,
                    emailError: emailStatus.error
                },
                { status: 200 }
            );
        } else {
            console.error('Database Submission Failed:', dbResult.error);
            return NextResponse.json(
                {
                    error: 'Failed to submit the form.',
                    details: dbResult.error?.message || 'Unknown database error'
                },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message
        }, { status: 500 });
    }
}
