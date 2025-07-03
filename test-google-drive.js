// Quick test to verify Google Drive integration
import { getImageByFilename, getImageCollection } from './src/utils/googleDrive.js';

console.log('Testing Google Drive integration...');

// Test the specific image you updated
const testImage = getImageByFilename('IMG_3111.jpg');
console.log('IMG_3111.jpg URL:', testImage);

// Test the hero collection
const heroImages = getImageCollection('hero');
console.log('Hero collection:', heroImages);

// Check if IMG_3111.jpg is in the hero collection
const img3111InHero = heroImages.find(img => img.filename === 'IMG_3111.jpg');
console.log('IMG_3111.jpg in hero collection:', img3111InHero);
