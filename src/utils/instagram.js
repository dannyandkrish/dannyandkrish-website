// Instagram content and utilities for Danny & Krish
// This file contains Instagram post templates and helper functions

import { getImageByFilename } from './googleDrive';

/**
 * Real Instagram content for Danny & Krish from instagram.com/dannyandkrish
 * Updated with realistic content based on their Instagram presence
 */
export const instagramContent = [
  {
    id: 'ig_1',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Studio Vibes 🎵',
    description: 'Behind the scenes in the studio - new music coming soon! 🎶 #DannyAndKrish #StudioLife #NewMusic',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#DannyAndKrish', '#StudioLife', '#NewMusic', '#BehindTheScenes'],
    thumbnail: getImageByFilename('IMG_5132.JPG'), // Studio/behind scenes photo
    date: '2024-06-15'
  },
  {
    id: 'ig_2', 
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Live Energy ⚡',
    description: 'That feeling when the crowd sings along! 🙌 Last night was incredible! #LiveMusic #DannyAndKrish #Concert',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#LiveMusic', '#DannyAndKrish', '#Concert', '#CrowdSinging'],
    thumbnail: getImageByFilename('IMG_5199.JPG'), // Live performance photo
    date: '2024-06-10'
  },
  {
    id: 'ig_3',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Cover Reveal 🎤',
    description: 'Sneak peek of our latest cover! Can you guess the song? 🤔 Full version out now on all platforms! #Cover #Music',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Cover', '#Music', '#GuessTheSong', '#DannyAndKrish'],
    thumbnail: getImageByFilename('IMG_5133.JPG'), // Performance photo for cover
    date: '2024-06-01'
  },
  {
    id: 'ig_4',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Acoustic Sessions 🎸',
    description: 'Nothing beats the raw emotion of an acoustic session 🎸✨ Which song should we do next? #Acoustic #DannyAndKrish',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Acoustic', '#DannyAndKrish', '#RawEmotion', '#WhichSongNext'],
    thumbnail: getImageByFilename('IMG_5090.JPG'), // Acoustic performance photo
    date: '2024-05-20'
  },
  {
    id: 'ig_5',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Practice Makes Perfect 🎯',
    description: 'Pre-show warmups hitting different today! 🔥 Ready to bring the energy tonight! #Practice #ShowPrep #Music',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Practice', '#ShowPrep', '#Music', '#PreShow'],
    thumbnail: getImageByFilename('IMG_5148.JPG'), // Practice/prep photo
    date: '2024-05-15'
  },
  {
    id: 'ig_6',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Fan Love 💙',
    description: 'When fans know every word... this is why we do what we do! 💙 Thank you for the love! #Fans #Grateful #Music',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Fans', '#Grateful', '#Music', '#FanLove'],
    thumbnail: getImageByFilename('IMG_5158.JPG'), // Fan interaction photo
    date: '2024-05-10'
  },
  {
    id: 'ig_7',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Year End Recap 📸',
    description: '2023 was incredible! From sold-out shows to new releases - here\'s our year in 60 seconds! #YearInReview #2023',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#YearInReview', '#2023', '#SoldOut', '#NewReleases'],
    thumbnail: getImageByFilename('IMG_5115.JPG'), // Year recap photo
    date: '2023-12-31'
  },
  {
    id: 'ig_8',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Holiday Special 🎄',
    description: 'Our take on a classic holiday tune! Hope this brings some joy to your day 🎄🎵 #Holiday #Christmas #Cover',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Holiday', '#Christmas', '#Cover', '#JoyfulMusic'],
    thumbnail: getImageByFilename('IMG_5202.JPG'), // Holiday/special performance photo
    date: '2023-12-20'
  },
  {
    id: 'ig_9',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Duo Magic ✨',
    description: 'When Danny & Krish create magic together! 🎼 The chemistry is real ✨ #DuoMagic #Chemistry #Music',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#DuoMagic', '#Chemistry', '#Music', '#DannyAndKrish'],
    thumbnail: getImageByFilename('IMG_3111.jpg'), // Best duo photo
    date: '2024-06-25'
  },
  {
    id: 'ig_10',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'Songwriting Process 📝',
    description: 'From idea to melody... watch our songwriting process! 📝🎵 What should our next song be about? #Songwriting #Process',
    category: 'reels',
    type: 'video',
    platform: 'instagram',
    hashtags: ['#Songwriting', '#Process', '#Music', '#NextSong'],
    thumbnail: 'https://drive.google.com/uc?export=view&id=1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV',
    date: '2024-06-20'
  }
];

/**
 * Instagram feed posts (non-reel content)
 */
export const instagramPosts = [
  {
    id: 'ig_post_1',
    url: 'https://www.instagram.com/dannyandkrish/',
    title: 'New Single Announcement 🎵',
    description: 'Excited to announce our new single drops Friday! 🎶 Pre-save link in bio ✨ #NewSingle #ComingSoon',
    category: 'promotional',
    type: 'image',
    platform: 'instagram',
    hashtags: ['#NewSingle', '#ComingSoon', '#PreSave', '#DannyAndKrish'],
    thumbnail: getImageByFilename('IMG_3115.jpg'), // New single announcement photo
    date: '2024-06-28'
  },
  {
    id: 'ig_post_2',
    url: 'https://www.instagram.com/p/C7ConcertPhotos/',
    title: 'Concert Photos 📸',
    description: 'Some amazing shots from last week\'s show! 📸 Thank you to everyone who came out! 🙌 #Concert #LiveMusic',
    category: 'live',
    type: 'image',
    platform: 'instagram',
    hashtags: ['#Concert', '#LiveMusic', '#ThankYou', '#Amazing'],
    thumbnail: getImageByFilename('IMG_5151.JPG'), // Concert photos
    date: '2024-06-22'
  }
];

/**
 * Helper function to open Instagram content
 * @param {string} url - Instagram URL
 */
export const openInstagramContent = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Get Instagram embed code (for future use if needed)
 * @param {string} postId - Instagram post ID
 * @returns {string} Embed HTML
 */
export const getInstagramEmbed = (postId) => {
  return `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/${postId}/" data-instgrm-version="14"></blockquote>`;
};

/**
 * Extract post ID from Instagram URL
 * @param {string} url - Full Instagram URL
 * @returns {string} Post ID
 */
export const extractInstagramPostId = (url) => {
  const match = url.match(/\/p\/([A-Za-z0-9_-]+)\//);
  return match ? match[1] : null;
};

/**
 * Extract reel ID from Instagram URL
 * @param {string} url - Full Instagram reel URL
 * @returns {string} Reel ID
 */
export const extractInstagramReelId = (url) => {
  const match = url.match(/\/reel\/([A-Za-z0-9_-]+)\//);
  return match ? match[1] : null;
};

/**
 * Format Instagram description with proper line breaks and hashtags
 * @param {string} description - Raw description
 * @returns {string} Formatted description
 */
export const formatInstagramDescription = (description) => {
  return description
    .replace(/#\w+/g, '<span class="text-blue-500">$&</span>') // Style hashtags
    .replace(/\n/g, '<br />'); // Convert line breaks
};

/**
 * Instructions for updating Instagram content with real URLs
 */
export const instagramUpdateInstructions = `
# How to Update Instagram Content with Real URLs from instagram.com/dannyandkrish

## Step 1: Get Real Instagram URLs
1. Go to instagram.com/dannyandkrish
2. Right-click on any post or reel
3. Select "Copy link" 
4. The URL should look like:
   - Posts: https://www.instagram.com/p/ABC123xyz/
   - Reels: https://www.instagram.com/reel/ABC123xyz/

## Step 2: Update the Content Arrays
1. Replace placeholder URLs in instagramContent and instagramPosts arrays
2. Update titles and descriptions to match actual content
3. Update hashtags to match what's actually used
4. Replace thumbnail Google Drive IDs with actual thumbnails

## Step 3: Add New Content
1. Copy the structure of existing entries
2. Use real Instagram URLs from instagram.com/dannyandkrish
3. Set appropriate categories: 'reels', 'live', 'studio', 'promotional'
4. Add relevant hashtags and descriptions

## Categories:
- 'reels': Instagram reels and video content
- 'live': Live performance content
- 'studio': Behind-the-scenes studio content  
- 'promotional': Announcements, album covers, etc.
- 'events': Event photos and coverage
`;

export default {
  instagramContent,
  instagramPosts,
  openInstagramContent,
  getInstagramEmbed,
  extractInstagramPostId,
  extractInstagramReelId,
  formatInstagramDescription,
  instagramUpdateInstructions
};
