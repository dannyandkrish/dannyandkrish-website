# Instagram Video Embedding Setup Guide

## Overview
This guide explains how to set up Instagram video embedding in your Danny & Krish website with actual playback functionality.

## Methods Available

### 1. Instagram oEmbed API (Recommended for Public Posts)
- **Pros**: Official Instagram embedding, works with public posts
- **Cons**: Requires Instagram to be loaded, may have rate limits
- **Best for**: Public Instagram posts you want to embed

### 2. Instagram Basic Display API
- **Pros**: Access to your own Instagram media, more control
- **Cons**: Requires app approval, tokens expire
- **Best for**: Your own Instagram content

### 3. Manual Video Hosting
- **Pros**: Full control, best performance, no API limits
- **Cons**: Need to download/host videos yourself
- **Best for**: Important videos you want to guarantee work

## Setup Instructions

### Option 1: Instagram oEmbed (Simplest)

1. **Get Instagram Post URLs**
   - Go to your Instagram post
   - Copy the post URL (e.g., `https://www.instagram.com/p/ABC123/`)

2. **Update the Video Data**
   ```javascript
   // In src/utils/instagramVideos.js
   export const instagramVideos = [
     {
       id: 'ig_video_1',
       title: 'Studio Vibes 🎵',
       description: 'Behind the scenes in the studio...',
       instagramUrl: 'https://www.instagram.com/p/YOUR_ACTUAL_POST_ID/',
       // Add the actual embed HTML from Instagram
       embedHtml: `<blockquote class="instagram-media">...</blockquote>`,
       thumbnailUrl: 'https://scontent.cdninstagram.com/YOUR_THUMBNAIL.jpg',
       category: 'studio',
       hashtags: ['#StudioLife', '#BehindTheScenes'],
       date: '2024-06-15',
       duration: '0:45',
       views: '12.3K',
       likes: '450'
     }
   ];
   ```

3. **Get Embed Code**
   - Go to your Instagram post
   - Click the "..." menu
   - Select "Embed"
   - Copy the embed code and paste it into `embedHtml`

### Option 2: Instagram Basic Display API

1. **Create Facebook App**
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app
   - Add Instagram Basic Display product

2. **Configure App**
   - Set up redirect URIs
   - Add test users
   - Generate access tokens

3. **Add Environment Variables**
   ```bash
   # In .env file
   REACT_APP_INSTAGRAM_CLIENT_ID=your_client_id
   REACT_APP_INSTAGRAM_CLIENT_SECRET=your_client_secret
   REACT_APP_INSTAGRAM_REDIRECT_URI=your_redirect_uri
   ```

4. **Use the API**
   ```javascript
   // The instagramVideos.js file already includes API integration
   import { getInstagramMedia } from '../utils/instagramVideos';
   
   // Use in your component
   const [instagramMedia, setInstagramMedia] = useState([]);
   
   useEffect(() => {
     const fetchMedia = async () => {
       const media = await getInstagramMedia(accessToken);
       setInstagramMedia(media);
     };
     fetchMedia();
   }, []);
   ```

### Option 3: Manual Video Hosting (Best Performance)

1. **Download Instagram Videos**
   - Use tools like [DownloadGram](https://downloadgram.com/)
   - Save videos to `public/videos/` folder

2. **Update Video Data**
   ```javascript
   export const instagramVideos = [
     {
       id: 'ig_video_1',
       title: 'Studio Vibes 🎵',
       description: 'Behind the scenes in the studio...',
       instagramUrl: 'https://www.instagram.com/p/YOUR_POST_ID/',
       videoUrl: '/videos/studio-vibes.mp4', // Local video file
       thumbnailUrl: '/images/studio-vibes-thumb.jpg',
       category: 'studio',
       duration: '0:45',
       views: '12.3K',
       likes: '450'
     }
   ];
   ```

3. **Optimize Videos**
   - Use tools like [HandBrake](https://handbrake.fr/) to compress
   - Recommended settings:
     - Format: MP4
     - Video Codec: H.264
     - Quality: RF 23-28
     - Audio: AAC

## Implementation Steps

### 1. Install the Components
The following files have been created:
- `src/utils/instagramVideos.js` - Video data and API utilities
- `src/components/InstagramVideoPlayer.js` - Video player component
- `src/components/InstagramVideoGallery.js` - Gallery component
- `src/pages/VideosWithEmbedding.js` - Complete videos page

### 2. Add to Your App Router
```javascript
// In your App.js or routing file
import VideosWithEmbedding from './pages/VideosWithEmbedding';

// Add to your routes
<Route path="/videos-new" element={<VideosWithEmbedding />} />
```

### 3. Update Navigation
```javascript
// In your Navbar.js
<Link to="/videos-new">Videos</Link>
```

### 4. Add Required Dependencies
```bash
npm install lucide-react
```

## Testing the Implementation

1. **Start your development server**
   ```bash
   npm start
   ```

2. **Navigate to the videos page**
   - Go to `/videos-new` in your browser

3. **Test functionality**
   - Click on video cards to open modal
   - Test play/pause controls
   - Test category filtering
   - Test social sharing

## Getting Real Instagram Content

### Method 1: Manual Collection
1. Go to your Instagram profile
2. Find the posts you want to embed
3. Copy the post URLs
4. Get thumbnail images by viewing page source
5. Update the `instagramVideos` array

### Method 2: Using Instagram API
1. Set up Instagram Basic Display API (see Option 2 above)
2. Use the provided API functions to fetch your media
3. The app will automatically populate with your real content

## Features Included

### Video Player Features
- ✅ Play/pause controls
- ✅ Volume control
- ✅ Fullscreen support
- ✅ Video thumbnail
- ✅ Duration display
- ✅ Category badges
- ✅ View counts
- ✅ Like/share functionality

### Gallery Features
- ✅ Category filtering
- ✅ Grid and list view modes
- ✅ Modal video playback
- ✅ Social sharing
- ✅ Responsive design
- ✅ Hashtag display

### Integration Features
- ✅ Instagram embed support
- ✅ Direct video playback
- ✅ YouTube integration ready
- ✅ Mobile-responsive
- ✅ SEO-friendly

## Performance Optimization

1. **Lazy Loading**
   - Videos load only when needed
   - Thumbnails load first

2. **Caching**
   - Instagram API responses are cached
   - Videos preload metadata only

3. **Compression**
   - Use compressed video formats
   - Optimize thumbnail sizes

## Next Steps

1. **Replace placeholder data** with your real Instagram content
2. **Set up Instagram API** if you want automatic syncing
3. **Add more video sources** (YouTube, Vimeo, etc.)
4. **Customize styling** to match your brand
5. **Add analytics** to track video engagement

## Need Help?

- Check the browser console for any errors
- Verify all file paths are correct
- Make sure all dependencies are installed
- Test with a simple video file first

The components are designed to be flexible and can work with any combination of the three methods above!
