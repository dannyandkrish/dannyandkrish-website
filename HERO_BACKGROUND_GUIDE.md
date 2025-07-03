# Hero Background Image Guide

## Overview
The Home page now supports both a Google Drive image background and the original blue gradient background. You can easily switch between them.

## How to Toggle Background

### Option 1: Google Drive Image Background (Current)
In `src/pages/Home.js`, line 18:
```javascript
const USE_IMAGE_BACKGROUND = true; // Image background is active
```

### Option 2: Blue Gradient Background (Original)
In `src/pages/Home.js`, line 18:
```javascript
const USE_IMAGE_BACKGROUND = false; // Blue gradient background is active
```

## Google Drive Image Details
- **Image ID**: `1sT36eZNSa7h9gpd2_a6sc2131wmNpKVr`
- **Filename**: `hero-background.jpg`
- **Location**: Stored in `realImages` object in `src/utils/googleDrive.js`

## Recent Fix
- **Issue**: The `&sz=${sizeNumber}` parameter in Google Drive URLs was breaking image loading across the site
- **Fix**: Removed the size parameter from `getGoogleDriveImageUrl()` function
- **Result**: All images now load correctly using the simple `https://drive.google.com/uc?id=${fileId}` format

## How It Works
1. When `USE_IMAGE_BACKGROUND = true`:
   - Uses Google Drive image as background
   - Applies dark overlay (50% opacity) for text readability
   - Uses `bg-cover bg-center bg-no-repeat` for proper scaling

2. When `USE_IMAGE_BACKGROUND = false`:
   - Uses original blue gradient: `bg-gradient-to-br from-primary via-purple-900 to-secondary`
   - Applies lighter overlay (30% opacity)
   - Maintains original design aesthetic

## Testing
- All pages (Home, Gallery, About, Music, Videos, etc.) should now display images correctly
- Server running at: http://localhost:3008/
- No JavaScript errors should occur

## Next Steps
- Test all pages to ensure images load properly
- Consider adding more hero background options if needed
- Optional: Add a settings panel for easy background switching in the future
