// Helper script to get all Google Drive file IDs
// Run this in your browser console on the Google Drive folder page

console.log('🚀 Google Drive File ID Extractor for Danny & Krish');
console.log('================================================');

// List of all files we need
const targetFiles = [
  'IMG_3111.jpg', 'IMG_3115.jpg', 'IMG_3131.jpg', 'photo-output.JPEG',
  'IMG_5199.JPG', 'IMG_5133.JPG', 'IMG_5081.JPG', 'IMG_5090.JPG',
  'IMG_5132.JPG', 'IMG_5148.JPG', 'IMG_5158.JPG', 'IMG_5136.JPG',
  'IMG_5091.JPG', 'IMG_5115.JPG', 'IMG_5202.JPG', 'IMG_5151.JPG',
  'IMG_5192.JPG', 'IMG_5160.JPG', 'IMG_5113.JPG', 'IMG_5088.JPG'
];

console.log('Files to process:', targetFiles);
console.log('\n📋 INSTRUCTIONS:');
console.log('1. Go to: https://drive.google.com/drive/folders/1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV');
console.log('2. For each file below, right-click → "Get link" → copy the sharing URL');
console.log('3. Paste each URL below to get the file ID\n');

// Function to extract file ID from sharing URL
function extractFileId(shareUrl) {
  const match = shareUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : 'INVALID_URL';
}

// Helper function for user to get file ID
window.getFileId = function(filename, shareUrl) {
  const fileId = extractFileId(shareUrl);
  console.log(`✅ ${filename}: '${fileId}'`);
  return fileId;
};

console.log('💡 USAGE EXAMPLE:');
console.log('getFileId("IMG_3115.jpg", "https://drive.google.com/file/d/1ABC123.../view?usp=sharing")');
console.log('\nReady! Call getFileId() for each image file.');
