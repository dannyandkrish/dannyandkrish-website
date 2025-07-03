# Google Drive Organization Scheme for dannyandkrish.com

## Overview
This document outlines the recommended folder structure and naming conventions for the band's Google Drive content to ensure easy management and clear references for the website.

## Current Google Drive Structure

### Main Folder: `dannyandkrish-website-content`
**Folder ID:** `1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV`

#### Recommended Subfolder Structure:

```
dannyandkrish-website-content/
├── 01-hero-backgrounds/
│   ├── hero-background.jpg (current: 1sT36eZNSa7h9gpd2_a6sc2131wmNpKVr)
│   ├── hero-background-alt1.jpg
│   └── hero-background-alt2.jpg
│
├── 02-performance-photos/
│   ├── live-shows/
│   │   ├── IMG_5199.JPG (featured image)
│   │   ├── IMG_5133.JPG
│   │   ├── IMG_5081.JPG
│   │   └── [other performance photos]
│   └── studio-sessions/
│       ├── IMG_3111.jpg
│       ├── IMG_3115.jpg
│       └── IMG_3131.jpg
│
├── 03-candid-photos/
│   ├── behind-the-scenes/
│   │   ├── photo-output.JPEG
│   │   └── [other candid shots]
│   └── social-media/
│       ├── instagram-posts/
│       └── profile-pictures/
│
├── 04-music-artwork/
│   ├── album-covers/
│   ├── single-covers/
│   └── playlist-artwork/
│
├── 05-videos/
│   ├── live-performances/
│   │   ├── alehouse-video.mp4 (featured)
│   │   ├── hindi-performance.mp4
│   │   ├── english-performance.mp4
│   │   ├── telugu-performance.mp4
│   │   └── tamil-performance.mp4
│   ├── music-videos/
│   │   └── [official music videos]
│   ├── youtube-shorts/
│   │   └── [portrait format short videos]
│   └── instagram-reels/
│       └── [social media video content]
│
├── 06-promotional-materials/
│   ├── press-photos/
│   ├── event-flyers/
│   └── social-media-graphics/
│
└── 07-website-assets/
    ├── icons/
    ├── logos/
    └── backgrounds/
```

## Naming Conventions

### Images
- **Performance Photos:** `PERF_YYYYMMDD_001.jpg` (e.g., `PERF_20240620_001.jpg`)
- **Candid Photos:** `CANDID_YYYYMMDD_001.jpg`
- **Hero Backgrounds:** `HERO_BG_descriptive-name.jpg` (e.g., `HERO_BG_stage-lights.jpg`)
- **Music Artwork:** `MUSIC_album-name_TYPE.jpg` (e.g., `MUSIC_midnight-dreams_COVER.jpg`)

### Videos
- **Live Performances:** `LIVE_YYYYMMDD_song-name.mp4` (e.g., `LIVE_20240620_alehouse.mp4`)
- **Music Videos:** `MV_song-name_VERSION.mp4` (e.g., `MV_midnight-dreams_OFFICIAL.mp4`)
- **YouTube Shorts:** `SHORT_YYYYMMDD_title.mp4`
- **Instagram Reels:** `REEL_YYYYMMDD_title.mp4`

## Website Integration Map

### Current File Mappings in `googleDrive.js`:

#### Images Used in Website Sections:
- **Home Page Hero:** `hero-background.jpg`
- **Home Page Featured:** `IMG_5199.JPG` (Latest Releases section)
- **Gallery Performance:** All `IMG_5xxx.JPG` files
- **Gallery Candid:** `IMG_31xx.jpg` files + `photo-output.JPEG`
- **About Page:** Mix of performance and candid photos
- **Connect Page:** Instagram thumbnails use `IMG_5199.JPG`

#### Videos Used in Website Sections:
- **Home Page Featured:** `alehouse-video.mp4` (Latest Video section)
- **Videos Page:** All performance videos (Hindi, English, Telugu, Tamil)
- **Instagram Reels:** Thumbnails use `IMG_5199.JPG` as placeholder

## Maintenance Guidelines

### Adding New Content:
1. **Upload to appropriate subfolder** following naming convention
2. **Get shareable link** from Google Drive
3. **Extract file ID** from the sharing URL
4. **Update `googleDrive.js`** with new file ID mapping
5. **Test image/video loading** on development site

### Updating Existing Content:
1. **Replace file in Google Drive** (keep same filename for consistency)
2. **Update file ID** in `googleDrive.js` if needed
3. **Clear browser cache** to see changes

### Quality Guidelines:
- **Images:** Minimum 1920x1080 for hero backgrounds, 800x600 for thumbnails
- **Videos:** Maximum 200MB per file, MP4 format preferred
- **Aspect Ratios:** 
  - Hero backgrounds: 16:9 landscape
  - Instagram content: 9:16 portrait or 1:1 square
  - YouTube videos: 16:9 landscape

## Quick Reference for Developers

### Getting File IDs:
1. Right-click file in Google Drive
2. Select "Get link"
3. Extract ID from URL: `https://drive.google.com/file/d/FILE_ID_HERE/view`
4. Add to `realImages` or `realVideos` object in `googleDrive.js`

### Image URL Format:
```javascript
// Working format for images
https://lh3.googleusercontent.com/d/{fileId}=w1000-h800

// Function in googleDrive.js
getGoogleDriveImageUrl(fileId, size = 'w800')
```

### Video Embed Format:
```javascript
// For direct video embedding
https://drive.google.com/file/d/{fileId}/preview

// Function in googleDrive.js
getVideoByFilename(filename)
```

## Future Enhancements

### Recommended Additions:
1. **Automated file ID extraction** script
2. **Bulk upload workflow** for event photos
3. **Automatic thumbnail generation** for videos
4. **Content approval workflow** before website deployment
5. **Analytics tracking** for most-viewed media

### Website Features to Consider:
1. **Dynamic content loading** based on Google Drive folder structure
2. **Automatic gallery updates** when new photos are added
3. **Content management interface** for non-technical band members
4. **Social media integration** for automatic posting

## Contact Information
For questions about this organization scheme or help with content management, refer to the website documentation or contact the web development team.

---
*Last Updated: December 2024*
*Version: 1.0*
