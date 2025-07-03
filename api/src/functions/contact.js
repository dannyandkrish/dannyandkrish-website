const { app } = require('@azure/functions');
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Contact form submission received');

        // Set CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        };

        // Handle preflight requests
        if (request.method === 'OPTIONS') {
            return {
                status: 200,
                headers: corsHeaders
            };
        }

        try {
            // Parse request body
            const body = await request.json();
            const { name, email, subject, message, type } = body;

            // Validate required fields
            if (!name || !email || !subject || !message) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    jsonBody: {
                        success: false,
                        error: 'All required fields must be provided'
                    }
                };
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    jsonBody: {
                        success: false,
                        error: 'Invalid email format'
                    }
                };
            }

            // If SendGrid is not configured, just log and return success
            if (!process.env.SENDGRID_API_KEY || !process.env.NOTIFICATION_EMAIL) {
                context.log('SendGrid not configured, logging form submission:', body);
                return {
                    status: 200,
                    headers: corsHeaders,
                    jsonBody: {
                        success: true,
                        message: 'Form submitted successfully (email service not configured)'
                    }
                };
            }

            // Prepare email content
            const emailContent = `
New contact form submission from Danny & Krish website:

Name: ${name}
Email: ${email}
Type: ${type}
Subject: ${subject}

Message:
${message}

Submitted at: ${new Date().toISOString()}
            `.trim();

            // Send notification email
            const msg = {
                to: process.env.NOTIFICATION_EMAIL,
                from: process.env.NOTIFICATION_EMAIL, // Must be verified in SendGrid
                replyTo: email,
                subject: `[Danny & Krish] New ${type} inquiry: ${subject}`,
                text: emailContent,
                html: emailContent.replace(/\n/g, '<br>')
            };

            await sgMail.send(msg);

            // Send confirmation email to user
            const confirmationMsg = {
                to: email,
                from: process.env.NOTIFICATION_EMAIL,
                subject: 'Thank you for contacting Danny & Krish',
                text: `Hi ${name},\n\nThank you for reaching out to Danny & Krish! We've received your message and will get back to you as soon as possible.\n\nBest regards,\nDanny & Krish`,
                html: `
                    <h2>Thank you for contacting Danny & Krish!</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for reaching out to Danny & Krish! We've received your message and will get back to you as soon as possible.</p>
                    <p>Best regards,<br>Danny & Krish</p>
                `
            };

            await sgMail.send(confirmationMsg);

            context.log('Emails sent successfully');

            return {
                status: 200,
                headers: corsHeaders,
                jsonBody: {
                    success: true,
                    message: 'Message sent successfully! We\'ll get back to you soon.'
                }
            };

        } catch (error) {
            context.log.error('Error processing contact form:', error);

            return {
                status: 500,
                headers: corsHeaders,
                jsonBody: {
                    success: false,
                    error: 'Internal server error. Please try again later.'
                }
            };
        }
    }
});
