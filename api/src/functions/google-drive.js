// api/google-drive.js - Azure Static Web Apps API function
const { google } = require('googleapis');

module.exports = async function (context, req) {
    try {
        // Set up Google Drive API with service account
        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: 'service_account',
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
            },
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });

        const drive = google.drive({ version: 'v3', auth });
        const folderId = req.query.folderId || '1-3SCmepB8xIDFON-1zJR3IF82WGOSfjD';

        // Get all files in the folder
        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed=false`,
            fields: 'files(id,name,mimeType,size,createdTime,webViewLink)',
            orderBy: 'createdTime desc'
        });

        // Organize by type and subfolder
        const files = response.data.files;
        const organizedFiles = {
            videos: files.filter(file => file.mimeType.startsWith('video/')),
            images: files.filter(file => file.mimeType.startsWith('image/')),
            folders: files.filter(file => file.mimeType === 'application/vnd.google-apps.folder')
        };

        context.res = {
            status: 200,
            body: {
                success: true,
                data: organizedFiles,
                totalFiles: files.length
            }
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {
                success: false,
                error: error.message
            }
        };
    }
};
