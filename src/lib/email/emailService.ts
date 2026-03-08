import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password, not your regular password
    },
});

const PRIMARY_EMAIL = 'Info.endlessinfosys@gmail.com';
const SECONDARY_EMAIL = 'contact.quantifyrellp@gmail.com';

export class EmailService {
    static async sendInquiryNotification(data: {
        name: string;
        email: string;
        company?: string;
        message: string;
    }) {
        try {
            const mailOptions = {
                from: `"Quantifyre Website" <${process.env.GMAIL_USER}>`,
                to: `${PRIMARY_EMAIL}, ${SECONDARY_EMAIL}`,
                subject: `New Inquiry from ${data.name} via Quantifyre Website`,
                html: `
                    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                        <h2 style="color: #1b6d85; border-bottom: 2px solid #1b6d85; padding-bottom: 10px;">New Website Inquiry</h2>
                        <p><strong>Name:</strong> ${data.name}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
                        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #1b6d85; margin: 20px 0;">
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap;">${data.message}</p>
                        </div>
                        <footer style="font-size: 0.9em; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
                            Sent from the Quantifyre LLP Contact Form
                        </footer>
                    </div>
                `,
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully:', info.messageId);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            console.error('Error sending email:', error);
            return { success: false, error };
        }
    }
}
