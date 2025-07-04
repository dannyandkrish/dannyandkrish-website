import { getImageByFilename, getImageCollection } from '../utils/googleDrive';

// Test image URLs
console.log('Testing image URLs:');
console.log('IMG_3111.jpg:', getImageByFilename('IMG_3111.jpg'));
console.log('IMG_5199.JPG:', getImageByFilename('IMG_5199.JPG'));
console.log('hero-background.jpg:', getImageByFilename('hero-background.jpg'));

// Test image collections
console.log('\nTesting image collections:');
console.log('Hero collection:', getImageCollection('hero'));
console.log('Performance collection:', getImageCollection('performance'));
console.log('About collection:', getImageCollection('about'));
