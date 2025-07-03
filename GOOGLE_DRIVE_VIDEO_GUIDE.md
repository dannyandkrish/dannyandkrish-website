# Google Drive Video Integration Guide

## Overview
The Videos page now supports embedding videos directly from Google Drive alongside YouTube videos and Instagram reels. This creates a comprehensive video experience with three content sources:

1. **🎬 Google Drive Videos** - Live performances and original content
2. **📺 YouTube Videos** - Official music videos and produced content  
3. **📱 Instagram Reels** - Short clips and behind-the-scenes content

## New Features Added

### 1. Enhanced Google Drive Utility (`googleDrive.js`)
- **`realVideos`** object - Maps video filenames to Google Drive file IDs
- **`getGoogleDriveVideoUrl()`** - Generates embeddable video URLs
- **`getVideoByFilename()`** - Get video URL by filename
- **`videoCollections`** - Organized video groups (performances, musicVideos, multiLanguage)
- **`getVideoCollection()`** - Get collections of videos

### 2. Updated Videos Page (`Videos.js`)
- **Multi-language performances** - Hindi, English, Telugu, Tamil
- **Live Performances section** - Dedicated section for Google Drive videos
- **Language badges** - Visual indicators for video languages
- **Unified video grid** - Combines YouTube and Google Drive videos
- **Smart filtering** - Filter by source and category

## Video Layout Structure

```
Videos Page Layout:
├── Featured Video (Google Drive)
├── Category Filters
├── Live Performances Section (Google Drive only)
├── Instagram Reels & Shorts
├── All Videos Grid (YouTube + Google Drive)
└── YouTube Channel CTA
```

## Current Video Files Available

Based on your Google Drive folder, these videos are ready to be integrated:

1. **`alehouse-video.mp4`** (115 MB) - Main performance video
2. **`hindi-performance.mp4`** - Hindi language content
3. **`english-performance.mp4`** - English language content
4. **`telugu-performance.mp4`** - Telugu language content
5. **`tamil-performance.mp4`** - Tamil language content

## How to Update with Real Video IDs

### Step 1: Get File IDs from Google Drive
For each video file in your Google Drive folder:
1. Right-click on the video file
2. Select "Get link" or "Share"
3. Ensure it's set to "Anyone with the link can view"
4. Copy the shareable link
5. Extract the file ID from the URL

**Example URL:** `https://drive.google.com/file/d/1ABC123def456GHI789jkl/view?usp=sharing`
**File ID:** `1ABC123def456GHI789jkl`

### Step 2: Update `googleDrive.js`
Replace the placeholder IDs in the `realVideos` object:

```javascript
export const realVideos = {
  'alehouse-video.mp4': '1ABC123def456GHI789jkl', // Replace with real ID
  'hindi-performance.mp4': '1DEF456ghi789ABC123jkl', // Replace with real ID
  // ... etc
};
```

### Step 3: Verify Video Accessibility
Make sure each video has the correct sharing permissions:
- **Visibility:** "Anyone with the link"
- **Permission:** "Viewer" (minimum required)
- **Link sharing:** Enabled

## Video Embedding Format

Google Drive videos are embedded using the preview format:
```
https://drive.google.com/file/d/{FILE_ID}/preview
```

This format:
- ✅ Works in iframe embeds
- ✅ Supports fullscreen playback
- ✅ Maintains Google's native video player
- ✅ Handles various video formats (MP4, MOV, etc.)
- ✅ Responsive and mobile-friendly

## Features by Section

### 🎬 Featured Video Section
- Prominently displays the main performance video
- Shows video metadata (title, description, date, duration, language)
- Uses the Alehouse video as the featured content

### 🎭 Live Performances Section
- Grid layout of all Google Drive performance videos
- Language badges for each video (Hindi, English, Telugu, Tamil)
- Duration indicators
- Hover effects and smooth animations

### 📱 Instagram Reels Section
- Thumbnail previews using Google Drive images
- Links to actual Instagram content
- Instagram branding and styling
- "View on Instagram" calls-to-action

### 🎯 All Videos Grid
- Combined YouTube and Google Drive videos
- Smart filtering by category
- Source indicators (YouTube vs Drive)
- Unified styling across all video types

## Benefits of This Implementation

1. **🏠 Content Ownership** - Host your own videos without YouTube restrictions
2. **🌐 Multi-platform** - Combine YouTube, Instagram, and Google Drive content
3. **🎨 Consistent Design** - Unified styling across all video sources
4. **📱 Mobile Responsive** - Works perfectly on all devices
5. **⚡ Fast Loading** - Google Drive's CDN ensures quick loading
6. **🔧 Easy Management** - Simple file ID updates to add/remove videos

## Next Steps

1. **Get the real file IDs** from your Google Drive videos
2. **Update `googleDrive.js`** with the actual file IDs
3. **Test the video playback** to ensure everything works
4. **Add more videos** as you create new content

The page will automatically display all videos once the file IDs are updated!

## Troubleshooting

**If videos don't load:**
- Check sharing permissions on Google Drive
- Verify file IDs are correct
- Ensure files are not corrupted
- Check network connectivity

**If videos are slow:**
- Google Drive has bandwidth limits for free accounts
- Consider YouTube upload for high-traffic videos
- Compress videos if they're very large

This implementation gives you maximum flexibility to showcase your content across multiple platforms while maintaining a professional, cohesive video experience! 🎵
