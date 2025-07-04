// Test Google Drive image URL generation
const { getImageByFilename, realImages } = require('./src/utils/googleDrive.js');

console.log('Testing image URL generation:');
console.log('IMG_5199.JPG file ID:', realImages['IMG_5199.JPG']);
console.log('Generated URL:', getImageByFilename('IMG_5199.JPG'));

// Test a few more images
console.log('\nOther images:');
console.log('IMG_3111.jpg:', getImageByFilename('IMG_3111.jpg'));
console.log('hero-background.jpg:', getImageByFilename('hero-background.jpg'));
