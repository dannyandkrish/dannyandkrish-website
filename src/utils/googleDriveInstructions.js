// Instructions for updating Google Drive images:
// 1. Upload images to your Google Drive folder
// 2. Right-click each image and select "Get link"
// 3. Copy the file ID from the sharing URL (the part after /d/ and before /view)
// 4. Replace the "1example1", "1example2", etc. with your actual file IDs in Gallery.js

// Example:
// If your sharing URL is: https://drive.google.com/file/d/1ABC123xyz789/view?usp=sharing
// Your file ID is: 1ABC123xyz789
// Replace: "https://drive.google.com/uc?export=view&id=1example1"
// With: "https://drive.google.com/uc?export=view&id=1ABC123xyz789"

export const GOOGLE_DRIVE_INSTRUCTIONS = `
To replace the placeholder images with real Google Drive images:

1. Upload your photos to Google Drive
2. For each photo:
   - Right-click and select "Get link"
   - Change sharing to "Anyone with the link can view"
   - Copy the file ID from the URL (between /d/ and /view)
3. Replace the "1example1", "1example2", etc. in Gallery.js with your real file IDs
4. Make sure the images are publicly viewable

The format should be: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
`;

export default GOOGLE_DRIVE_INSTRUCTIONS;
