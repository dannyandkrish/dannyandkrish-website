# Google Drive Image Integration Guide

This guide explains how to use real Google Drive images in your Danny & Krish website.

## Current Status

The website is now set up to use images from your Google Drive folder:
- **Folder URL**: https://drive.google.com/drive/folders/1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV
- **Available Images**: 20+ images including IMG_3111.jpg, IMG_3115.jpg, IMG_5199.JPG, etc.
- **Current State**: Using placeholder file IDs (will show fallback images until you add real file IDs)

## How to Replace Placeholder Images with Real Google Drive Images

### Step 1: Make Images Public

1. Go to your Google Drive folder: https://drive.google.com/drive/folders/1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV
2. Make sure each image file is set to "Anyone with the link can view"

### Step 2: Get File IDs for Each Image

For each image you want to use:

1. **Right-click** on the image in Google Drive
2. Select **"Get link"** or **"Share"**
3. Copy the shareable link (looks like): 
   ```
   https://drive.google.com/file/d/1ABC123def456GHI789jkl/view?usp=sharing
   ```
4. **Extract the File ID** from the URL. In the example above, the File ID is: `1ABC123def456GHI789jkl`

### Step 3: Update the Code

Open `src/utils/googleDrive.js` and replace the placeholder file IDs:

```javascript
export const realImages = {
  // Recent photos (Dec 2024)
  'IMG_3111.jpg': '1ABC123def456GHI789jkl', // Replace with real file ID
  'IMG_3115.jpg': '1DEF456ghi789JKL012mno', // Replace with real file ID
  'IMG_3131.jpg': '1GHI789jkl012MNO345pqr', // Replace with real file ID
  // ... continue for all images
};
```

### Step 4: Test the Changes

1. Save the file
2. Refresh your website
3. The real images should now appear instead of placeholders

## Image Categories and Usage

### Hero Images (`hero` collection)
- **Files**: IMG_3111.jpg, IMG_3115.jpg, IMG_3131.jpg
- **Used in**: Home page featured sections, About page main image
- **Best for**: High-quality band photos, promotional images

### Performance Images (`performance` collection)
- **Files**: IMG_5199.JPG, IMG_5133.JPG, IMG_5081.JPG, etc.
- **Used in**: Gallery live performance section, Home page visual journey
- **Best for**: Live performance photos, concert shots

### Candid Images (`candid` collection)
- **Files**: IMG_5136.JPG, IMG_5091.JPG, photo-output.JPEG, etc.
- **Used in**: Gallery studio section, behind-the-scenes content
- **Best for**: Studio sessions, casual band photos, behind-the-scenes moments

### About Images (`about` collection)
- **Files**: IMG_3111.jpg, IMG_5199.JPG, IMG_5133.JPG
- **Used in**: About page individual and band photos
- **Best for**: Professional portraits, band photos

## Quick Reference: Which Files to Prioritize

### Essential Images (Update These First):
1. **IMG_3111.jpg** - Main hero/promotional image
2. **IMG_3115.jpg** - Secondary hero image  
3. **IMG_5199.JPG** - Live performance photo
4. **IMG_5133.JPG** - Band photo for About page

### Secondary Images:
- All other IMG_5xxx.JPG files for gallery and performance sections
- photo-output.JPEG for candid moments

## Example: Complete Update Process

1. **Get File ID for IMG_3111.jpg**:
   - Right-click → Get link
   - Copy: `https://drive.google.com/file/d/1XYZ789abc123DEF456ghi/view?usp=sharing`
   - File ID: `1XYZ789abc123DEF456ghi`

2. **Update in googleDrive.js**:
   ```javascript
   'IMG_3111.jpg': '1XYZ789abc123DEF456ghi', // ✅ Real file ID
   ```

3. **Repeat for all desired images**

4. **Save and test**

## Troubleshooting

### Images Not Loading?
- Check that the Google Drive files are set to "Anyone with the link can view"
- Verify the file ID is correct (no extra characters)
- Make sure the file name in the code matches exactly (case-sensitive)

### Wrong Image Showing?
- Double-check you copied the correct file ID
- Ensure you're updating the right image file name in the code

### Need to Add New Images?
1. Add the new file name and ID to the `realImages` object
2. Add the file name to the appropriate collection (`hero`, `performance`, `candid`, `about`)
3. The image will automatically appear in the relevant sections

## Current Fallback Behavior

Until you update the file IDs, the website will show:
- Placeholder images from picsum.photos
- All functionality works normally
- No broken images or errors
- Easy to test real images one at a time

This setup allows you to gradually replace images without breaking the website!
