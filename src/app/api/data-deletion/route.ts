import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, reason } = body;

        // Validation
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required." },
                { status: 400 }
            );
        }

        // Mocking the deletion request handling
        // In a real application, you would save this to a database or trigger a workflow
        console.log("Data Deletion Request Received:", { name, email, reason, timestamp: new Date().toISOString() });

        // Simulate a slight delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json(
            { message: "Deletion request submitted successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error (Data Deletion):", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
