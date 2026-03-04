import { NextResponse } from 'next/server';
import { DbManager } from '@/lib/db/dbManager';

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

        const result = await DbManager.saveContactSubmission(data);

        if (result.success) {
            return NextResponse.json(
                { message: 'Submission successful', source: result.source },
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
