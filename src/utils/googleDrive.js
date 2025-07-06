// Google Drive image and video utilities for dannyandkrish.com
// This file helps manage real Google Drive images and videos for the band website

// The shared Google Drive folder ID
const GOOGLE_DRIVE_FOLDER_ID = '1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV';

// Real image file names from the Google Drive folder
// To get the file ID for each image, you'll need to:
// 1. Right-click on the image in Google Drive
// 2. Select "Get link" 
// 3. Extract the file ID from the shareable link
// 4. Replace the placeholder IDs below with real ones

export const realImages = {
  // Hero background image
  'hero-background.jpg': '1sT36eZNSa7h9gpd2_a6sc2131wmNpKVr', // Hero background image
  
  // Recent photos (Dec 2024)
  'IMG_3111.jpg': '1JNXbWEzGz8q38F02Y0PhHIjThm8OA6IC', // 5.2 MB - DONE
  'IMG_3115.jpg': '1j-CkpeGdWXSjjxRY7uy3sGSfcp9SbIcC', // 2.4 MB  
  'IMG_3131.jpg': '1S8C0-ZiJJ-tmAP7xhRt2qeFSjz5wMIEW', // 3.6 MB
  'photo-output.JPEG': '1y45igCiPJQhiZ_x4yrBh1cRRVbdv8X0U', // 379 KB
  
  // Performance/band photos (June 2024)
  'IMG_5199.JPG': '1p_9c16-ZxP7xQst7BUHfzi5e-vRj0iJV', // 1.3 MB
  'IMG_5133.JPG': '1Tsu8RitXvEjrJWvuF1gxFbFBgPz2XT8Z', // 1.4 MB
  'IMG_5081.JPG': '1rdRvQVLponqVKmgbfcAKMQQK6ND5u_-v', // 1.1 MB
  'IMG_5090.JPG': '1xUieZJSRxh-w9ea6X_22ViA3vZq9SrpR', // 1.1 MB
  'IMG_5132.JPG': '1TAPns4TbmIcSlqxogMF4lXPJAVkTxu8l', // 1.2 MB
  'IMG_5148.JPG': '1hfNpizqUvCDT2G-sZTgwY2cPsgce9x6S', // 1.2 MB
  'IMG_5158.JPG': '1V8vMLoq0chzEDcGjAy5eprOpcottZP8h', // 1.4 MB
  'IMG_5136.JPG': '1Xq3SdKvXzLODqOd5TXdw5Ib0jfeSBssT', // 1.9 MB
  'IMG_5091.JPG': '1xroAh0Wj9uVZqywlRWHqtj2Kku2YJk6T', // 1.3 MB
  'IMG_5115.JPG': '1nvDe9FZBY2vN5glg68FDz_6cm-xj-6-e', // 1.1 MB
  'IMG_5202.JPG': '1Mb_QkUvUiRWWStRSO1McfchLGJvUMK2b', // 1.9 MB
  'IMG_5151.JPG': '1c6pJNJb-o_5_F90A8ZHm_6WJcf2uLw5U', // 1.7 MB
  'IMG_5192.JPG': '1R03BlHxxRcpzV_ihAdI56QJrK9u7zgI_', // 1.5 MB
  'IMG_5160.JPG': '1OmTXu0VecSpWhvjbmGD3QdlsFHwK8MS1', // 1.8 MB
  'IMG_5113.JPG': '1muABSwFGd0VKGvGiNjkkE8hRm4S90NKf', // 2.5 MB
  'IMG_5088.JPG': '1bONlGHigQM1MabIZvV77iT13PjHqWxIj', // 2.5 MB
};

// Real video file IDs from Google Drive - Videos folder
// Folder: https://drive.google.com/drive/folders/1-3SCmepB8xIDFON-1zJR3IF82WGOSfjD?usp=sharing
export const realVideos = {
  // Performance and music videos
  'alehouse-video.mp4': '1y92Eh1gx9To4Bker_7GQg-Q1I3Yzw7mr', // 115 MB - Alehouse video
  'hindi-performance.mp4': '1dLQ57Pryor1AMulHpN0aHgx1OAdUX1ee', // Hindi language performance
  'english-performance.mp4': '1Z-ryMrqqTCaPAY2FBWRpB4jacWtmPo6L', // English language performance 
  'telugu-performance.mp4': '1uPmYxcgV0_f-fotpcoCYp1e6UJHmVYY9', // Telugu language performance
  'tamil-performance.mp4': '1Sm8OXSvJR7wjgz6vP_evX4WcWrsXsjzF', // Tamil language performance
};

// Helper function to extract file ID from Google Drive sharing URL
export const extractFileIdFromUrl = (shareUrl) => {
  const match = shareUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

// Helper function to batch update file IDs (for your convenience)
export const updateFileIds = (fileIdMappings) => {
  Object.keys(fileIdMappings).forEach(filename => {
    if (realImages[filename]) {
      realImages[filename] = fileIdMappings[filename];
    }
  });
};

// Function to get direct Google Drive image URL
export const getGoogleDriveImageUrl = (fileId, size = 'w800') => {
  if (!fileId || fileId.startsWith('PLACEHOLDER')) {
    // Fallback to picsum for placeholder file IDs
    return `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;
  }
  
  // Use the EXACT format that was confirmed working
  // Format: https://lh3.googleusercontent.com/d/{fileId}=w1000-h800
  return `https://lh3.googleusercontent.com/d/${fileId}=w1000-h800`;
};

// Function to get image by filename
export const getImageByFilename = (filename, size = 'w800') => {
  const fileId = realImages[filename];
  return getGoogleDriveImageUrl(fileId, size);
};

// Curated image collections for different sections
export const imageCollections = {
  // Hero/banner images - use the best quality recent photos
  hero: [
    'IMG_3111.jpg',
    'IMG_3115.jpg', 
    'IMG_3131.jpg'
  ],
  
  // Performance photos for gallery
  performance: [
    'IMG_5199.JPG',
    'IMG_5133.JPG',
    'IMG_5081.JPG',
    'IMG_5090.JPG',
    'IMG_5132.JPG',
    'IMG_5148.JPG',
    'IMG_5158.JPG'
  ],
  
  // Behind the scenes / candid photos
  candid: [
    'IMG_5136.JPG',
    'IMG_5091.JPG',
    'IMG_5115.JPG',
    'IMG_5202.JPG',
    'IMG_5151.JPG',
    'IMG_5192.JPG',
    'IMG_5160.JPG',
    'IMG_5113.JPG',
    'IMG_5088.JPG',
    'photo-output.JPEG'
  ],
  
  // About page images
  about: [
    'IMG_3111.jpg',
    'IMG_5199.JPG',
    'IMG_5133.JPG'
  ],
  
  // Album artwork - specific images for track thumbnails
  albumArtwork: [
    'IMG_3111.jpg', // Chuttamalle X Manike
    'IMG_5199.JPG', // Kanmani Anbodu X Inthandham  
    'IMG_5133.JPG', // Thangame X Pani Da
    'IMG_5148.JPG', // World Fusion collection
    'IMG_5081.JPG', // City Lights
    'IMG_5090.JPG'  // Whispered Words
  ]
};

// Function to get direct Google Drive video URL (for embedding)
export const getGoogleDriveVideoUrl = (fileId) => {
  if (!fileId || fileId.startsWith('PLACEHOLDER')) {
    // Return null for placeholder IDs - don't show broken videos
    return null;
  }
  
  // Use Google Drive's direct streaming URL format for better embedding
  // This format is more reliable for iframe embedding
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

// Alternative function to get Google Drive video as direct download/view link
export const getGoogleDriveVideoDirectUrl = (fileId) => {
  if (!fileId || fileId.startsWith('PLACEHOLDER')) {
    return null;
  }
  
  // This creates a direct view link (opens in new tab)
  return `https://drive.google.com/file/d/${fileId}/view`;
};

// Function to get Google Drive video thumbnail
export const getGoogleDriveVideoThumbnail = (fileId) => {
  if (!fileId || fileId.startsWith('PLACEHOLDER')) {
    return null;
  }
  
  // Google Drive provides thumbnails for videos
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w480-h360`;
};

// Function to get video by filename
export const getVideoByFilename = (filename) => {
  const fileId = realVideos[filename];
  return getGoogleDriveVideoUrl(fileId);
};

// Video collections for different sections
export const videoCollections = {
  // Performance videos
  performances: [
    'alehouse-video.mp4',
    'hindi-performance.mp4',
    'english-performance.mp4',
    'telugu-performance.mp4',
    'tamil-performance.mp4'
  ],
  
  // Music videos
  musicVideos: [
    'alehouse-video.mp4'
  ],
  
  // Language-specific performances
  multiLanguage: [
    'hindi-performance.mp4',
    'english-performance.mp4',
    'telugu-performance.mp4',
    'tamil-performance.mp4'
  ]
};

// Helper function to get a collection of images
export const getImageCollection = (collectionName, size = 'w800') => {
  const collection = imageCollections[collectionName] || [];
  return collection.map(filename => ({
    filename,
    url: getImageByFilename(filename, size),
    id: realImages[filename]
  }));
};

// Helper function to get a collection of videos
export const getVideoCollection = (collectionName) => {
  const collection = videoCollections[collectionName] || [];
  return collection.map(filename => ({
    filename,
    url: getVideoByFilename(filename),
    id: realVideos[filename],
    embedUrl: getGoogleDriveVideoUrl(realVideos[filename])
  }));
};

// Enhanced video orientation and metadata utilities
export const videoMetadata = {
  'alehouse-video.mp4': {
    orientation: 'portrait',
    aspectRatio: '9:16',
    language: 'English',
    category: 'live-performances',
    duration: '4:32',
    description: "Live performance of our track 'Alehouse' - raw energy captured on stage."
  },
  'hindi-performance.mp4': {
    orientation: 'portrait',
    aspectRatio: '9:16',
    language: 'Hindi',
    category: 'music-videos',
    duration: '6:45',
    description: "Showcasing our Hindi repertoire with classic and contemporary tracks."
  },
  'english-performance.mp4': {
    orientation: 'portrait',
    aspectRatio: '9:16',
    language: 'English',
    category: 'music-vidoes',
    duration: '5:20',
    description: "Intimate acoustic performance featuring our English songs."
  },
  'telugu-performance.mp4': {
    orientation: 'portrait',
    aspectRatio: '9:16',
    language: 'Telugu',
    category: 'live-performances',
    duration: '7:15',
    description: "Exploring the rich musical heritage of Telugu songs."
  },
  'tamil-performance.mp4': {
    orientation: 'portrait',
    aspectRatio: '9:16',
    language: 'Tamil',
    category: 'music-videos',
    duration: '6:30',
    description: "Our take on timeless Tamil musical classics."
  }
};

// Function to get video metadata by filename
export const getVideoMetadata = (filename) => {
  return videoMetadata[filename] || {
    orientation: 'landscape',
    aspectRatio: '16:9',
    language: 'English',
    category: 'performance',
    duration: '0:00',
    description: 'Video description not available'
  };
};

// Function to detect if a video is portrait based on filename or metadata
export const isPortraitVideo = (filename) => {
  const metadata = getVideoMetadata(filename);
  const lowerName = filename.toLowerCase();
  
  // Check metadata first
  if (metadata.orientation === 'portrait') return true;
  if (metadata.aspectRatio === '9:16') return true;
  
  // Fallback to filename detection
  return lowerName.includes('portrait') || 
         lowerName.includes('phone') ||
         lowerName.includes('vertical') ||
         lowerName.includes('9x16') ||
         lowerName.includes('mobile') ||
         lowerName.includes('story') ||
         lowerName.includes('reel');
};

// Function to get responsive container styles for videos
export const getVideoContainerStyles = (filename) => {
  const isPortrait = isPortraitVideo(filename);
  
  return {
    containerClass: isPortrait 
      ? "relative w-full max-w-sm mx-auto bg-gray-100 rounded-lg overflow-hidden"
      : "relative w-full bg-gray-100 rounded-lg overflow-hidden",
    aspectRatioStyle: isPortrait 
      ? { paddingBottom: '177.78%' } // 9:16 aspect ratio
      : { paddingBottom: '56.25%' }, // 16:9 aspect ratio
    isPortrait
  };
};

// Enhanced dynamic video management system
export const createDynamicVideoSections = () => {
  // This function would be called from your Videos.js component
  // It automatically generates sections based on available videos
  
  const sections = [
    {
      id: 'featured',
      title: 'Featured Video',
      type: 'hero',
      filter: (videos) => videos.slice(0, 1) // Just the first video
    },
    {
      id: 'performances',
      title: 'Live Performances',
      type: 'grid',
      filter: (videos) => videos.filter(v => v.category === 'performance' || v.language)
    },
    {
      id: 'multilingual',
      title: 'Multilingual Collection',
      type: 'grid',
      filter: (videos) => videos.filter(v => ['Hindi', 'Telugu', 'Tamil', 'English'].includes(v.language))
    }
  ];
  
  // Get all available videos (only those with real IDs)
  const availableVideos = Object.entries(realVideos)
    .filter(([filename, id]) => id && !id.startsWith('PLACEHOLDER'))
    .map(([filename, id]) => ({
      filename,
      id,
      embedUrl: getGoogleDriveVideoUrl(id),
      // You could extract metadata from filename or have a separate metadata object
      title: filename.replace(/\.[^/.]+$/, "").replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      language: extractLanguageFromFilename(filename),
      category: extractCategoryFromFilename(filename)
    }));
  
  // Generate sections dynamically
  return sections.map(section => ({
    ...section,
    videos: section.filter(availableVideos),
    hasContent: section.filter(availableVideos).length > 0
  })).filter(section => section.hasContent);
};

// Helper functions to extract metadata from filename
const extractLanguageFromFilename = (filename) => {
  const lowerName = filename.toLowerCase();
  if (lowerName.includes('hindi')) return 'Hindi';
  if (lowerName.includes('tamil')) return 'Tamil';
  if (lowerName.includes('telugu')) return 'Telugu';
  if (lowerName.includes('english')) return 'English';
  return 'English'; // default
};

const extractCategoryFromFilename = (filename) => {
  const lowerName = filename.toLowerCase();
  if (lowerName.includes('performance')) return 'performance';
  if (lowerName.includes('studio')) return 'studio';
  if (lowerName.includes('acoustic')) return 'acoustic';
  return 'performance'; // default
};

// Instructions for updating with real file IDs:
/*
TO UPDATE WITH REAL GOOGLE DRIVE FILE IDs:

1. Go to https://drive.google.com/drive/folders/1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV
2. For each image file you want to use:
   a. Right-click on the image
   b. Select "Get link" or "Share"
   c. Make sure it's set to "Anyone with the link can view"
   d. Copy the shareable link (looks like: https://drive.google.com/file/d/FILE_ID/view?usp=sharing)
   e. Extract the FILE_ID from the URL
   f. Replace the corresponding PLACEHOLDER_FILE_ID in the realImages object above

3. After updating the file IDs, the images will automatically appear on your website!

Example:
If the shareable link is: https://drive.google.com/file/d/1ABC123def456GHI789jkl/view?usp=sharing
Then the FILE_ID is: 1ABC123def456GHI789jkl

Replace 'PLACEHOLDER_FILE_ID_1': 'PLACEHOLDER_FILE_ID_1'
With:    'PLACEHOLDER_FILE_ID_1': '1ABC123def456GHI789jkl'

TO UPDATE WITH REAL GOOGLE DRIVE VIDEO IDS:

1. Go to https://drive.google.com/drive/folders/1-3SCmepB8xIDFON-1zJR3IF82WGOSfjD
2. For each video file you want to use:
   a. Right-click on the video
   b. Select "Get link" or "Share"
   c. Make sure it's set to "Anyone with the link can view"
   d. Copy the shareable link (looks like: https://drive.google.com/file/d/VIDEO_ID/view?usp=sharing)
   e. Extract the VIDEO_ID from the URL
   f. Replace the corresponding PLACEHOLDER_VIDEO_ID in the realVideos object above

3. After updating the video IDs, the videos will automatically appear on your website!

Example:
If the shareable link is: https://drive.google.com/file/d/1XYZ456def789JKL012mno/view?usp=sharing
Then the VIDEO_ID is: 1XYZ456def789JKL012mno

Replace 'PLACEHOLDER_VIDEO_ID_1': 'PLACEHOLDER_VIDEO_ID_1'
With:    'PLACEHOLDER_VIDEO_ID_1': '1XYZ456def789JKL012mno'
*/
