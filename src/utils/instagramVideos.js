/**
 * Instagram Video Embedding Utilities
 * Supports multiple methods for embedding Instagram videos with playback
 */

// Centralized Instagram reel URLs for consistency
export const INSTAGRAM_REEL_URLS = {
  REEL_1: 'https://www.instagram.com/reel/C7YfLcfu7w-/',
  REEL_2: 'https://www.instagram.com/reel/C1gYuu8LTI2/',
  REEL_3: 'https://www.instagram.com/reel/C1V8JHkB7hv/',
  REEL_4: 'https://www.instagram.com/reel/DAoGxuFNXve/',
  REEL_5: 'https://www.instagram.com/reel/DEh5pzjyvXM/'
};

// Centralized Spotlight Session URLs - separate from Instagram URLs
export const SPOTLIGHT_FEED_URLS = {
  SESSION_1: 'https://www.instagram.com/reel/DEq9-6sTZ4E/', // TODO: Replace with actual spotlight URL
  SESSION_3: 'https://www.instagram.com/reel/DEqFQHEzwGd/', // TODO: Replace with actual spotlight URL
  SESSION_2: 'https://www.instagram.com/reel/DKJbxR1KqZ_/', // TODO: Replace with actual spotlight URL
  SESSION_4: 'https://www.instagram.com/reel/C5FayVyhdJq/',  // TODO: Replace with actual spotlight URL
  SESSION_6: 'https://www.instagram.com/reel/DCoaP5ouzZr/',  // TODO: Replace with actual spotlight URL
  SESSION_5: 'https://www.instagram.com/reel/DKeBq29T47J/' // TODO: Replace with actual spotlight URL
};

// Generate Instagram embed HTML for a reel URL with iOS Safari compatibility
export const generateInstagramEmbed = (reelUrl) => {
  const embedUrl = `${reelUrl}?utm_source=ig_embed&amp;utm_campaign=loading`;
  return `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${embedUrl}" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px auto; max-width:480px; min-width:320px; padding:0; width:100%; height:600px;" allow="autoplay; fullscreen; picture-in-picture; encrypted-media"><div style="padding:16px;"> <a href="${embedUrl}" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="${embedUrl}" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Danny &amp; Krish (@dannyandkrish)</a></p></div></blockquote>
  `;
};

// Instagram oEmbed API for public posts
export const getInstagramEmbed = async (postUrl) => {
  try {
    const oembedUrl = `https://graph.instagram.com/oembed?url=${encodeURIComponent(postUrl)}&access_token=YOUR_ACCESS_TOKEN`;
    const response = await fetch(oembedUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Instagram embed:', error);
    return null;
  }
};

// Instagram Basic Display API integration
export const instagramConfig = {
  clientId: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_INSTAGRAM_REDIRECT_URI,
  scope: 'user_profile,user_media'
};

// Get Instagram media with Basic Display API
export const getInstagramMedia = async (accessToken) => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    return [];
  }
};

// Real Instagram Reels from Danny & Krish
export const instagramVideos = [
  {
    id: 'ig_reel_1',
    title: 'Latest Music Video 🎵',
    description: 'Check out our latest music video! Full of energy and amazing vibes 🎶✨',
    instagramUrl: INSTAGRAM_REEL_URLS.REEL_1,
    embedHtml: generateInstagramEmbed(INSTAGRAM_REEL_URLS.REEL_1),
    category: 'music',
    hashtags: ['#DannyAndKrish', '#MusicVideo', '#NewMusic', '#Vibes'],
    tags: ['English', 'Music Video', 'Live'],
    date: '2024-06-25',
    featured: true
  },
  {
    id: 'ig_reel_2',
    title: 'Performance Vibes ⚡',
    description: 'Live performance energy! Feel the music and the crowd connection 🎤🔥',
    instagramUrl: INSTAGRAM_REEL_URLS.REEL_2,
    embedHtml: generateInstagramEmbed(INSTAGRAM_REEL_URLS.REEL_2),
    category: 'live',
    hashtags: ['#DannyAndKrish', '#LivePerformance', '#Energy', '#Music'],
    tags: ['English', 'Live', 'Concert'],
    date: '2024-06-20'
  },  {
    id: 'ig_reel_3',
    title: 'Behind the Music 🎼',
    description: 'Take a peek behind the scenes of our creative process! Music magic in the making ✨',
    instagramUrl: INSTAGRAM_REEL_URLS.REEL_3,
    embedHtml: generateInstagramEmbed(INSTAGRAM_REEL_URLS.REEL_3),
    category: 'studio',
    hashtags: ['#DannyAndKrish', '#BehindTheScenes', '#Studio', '#CreativeProcess'],
    tags: ['English', 'Behind the Scenes', 'Studio'],
    date: '2024-06-18'
  },
  {
    id: 'ig_reel_4',
    title: 'Acoustic Magic 🎸',
    description: 'Stripped down acoustic session that hits different! Raw emotion and pure talent 🎵',
    instagramUrl: INSTAGRAM_REEL_URLS.REEL_4,
    embedHtml: generateInstagramEmbed(INSTAGRAM_REEL_URLS.REEL_4),
    category: 'acoustic',
    hashtags: ['#DannyAndKrish', '#Acoustic', '#RawEmotion', '#Unplugged'],
    tags: ['English', 'Acoustic', 'Unplugged'],
    date: '2024-06-15'
  },
  {
    id: 'ig_reel_5',
    title: 'Latest Release 🎶',
    description: 'Our newest song is here! This one is special - pour your heart into every note 💖',
    instagramUrl: INSTAGRAM_REEL_URLS.REEL_5,
    embedHtml: generateInstagramEmbed(INSTAGRAM_REEL_URLS.REEL_5),
    category: 'music',
    hashtags: ['#DannyAndKrish', '#NewRelease', '#HeartAndSoul', '#NewSong'],
    tags: ['English', 'Music Video', 'New Release'],
    date: '2024-06-30'
  }
];

// Spotlight Sessions - Similar to Instagram reels but separate for special content
// TODO: Replace these URLs with actual spotlight session URLs
export const spotlightSessionVideos = [
  {
    id: 'spotlight_1',
    title: 'Spotlight Acoustic Session 🎵',
    description: 'Exclusive spotlight session featuring our latest acoustic arrangements ✨',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_1,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_1),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#Acoustic', '#Exclusive'],
    tags: ['English', 'Spotlight', 'Acoustic', 'Exclusive'],
    date: '2024-07-01',
    featured: true
  },
  {
    id: 'spotlight_2',
    title: 'Harmony Spotlight ⚡',
    description: 'Intimate performance showcasing our vocal harmony and musical chemistry 🎤',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_2,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_2),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#Harmony', '#Intimate'],
    tags: ['English', 'Spotlight', 'Live', 'Harmony'],
    date: '2024-06-28'
  },
  {
    id: 'spotlight_3',
    title: 'Creative Process Spotlight 🎼',
    description: 'Behind-the-scenes of our creative process in this special spotlight session 🎶',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_3,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_3),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#Creative', '#Process'],
    tags: ['English', 'Spotlight', 'Behind the Scenes', 'Creative'],
    date: '2024-06-25'
  },
  {
    id: 'spotlight_4',
    title: 'Storytelling Spotlight 🎸',
    description: 'Stripped-down acoustic spotlight session with raw emotion and storytelling 🎵',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_4,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_4),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#Storytelling', '#Raw'],
    tags: ['English', 'Spotlight', 'Acoustic', 'Storytelling'],
    date: '2024-06-22'
  },
  {
    id: 'spotlight_5',
    title: 'Original Compositions Spotlight 🎶',
    description: 'Latest spotlight session featuring our newest compositions and arrangements 💖',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_5,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_5),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#NewMusic', '#Original'],
    tags: ['English', 'Spotlight', 'Original', 'New Music'],
    date: '2024-07-05'
  },
  {
    id: 'spotlight_6',
    title: 'Latest Spotlight Session �',
    description: 'Our newest spotlight session with fresh arrangements and exclusive content �',
    instagramUrl: SPOTLIGHT_FEED_URLS.SESSION_6,
    embedHtml: generateInstagramEmbed(SPOTLIGHT_FEED_URLS.SESSION_6),
    category: 'spotlight',
    hashtags: ['#DannyAndKrish', '#SpotlightSessions', '#NewMusic', '#Exclusive'],
    tags: ['English', 'Spotlight', 'Exclusive', 'Latest'],
    date: '2024-07-07'
  }
];

// Manual video embedding for self-hosted content
export const selfHostedVideos = [
  {
    id: 'video_1',
    title: 'Studio Session - New Song Preview',
    description: 'Exclusive preview of our upcoming single!',
    videoUrl: '/videos/studio-session-preview.mp4',
    thumbnailUrl: '/images/studio-session-thumb.jpg',
    category: 'exclusive',
    duration: '1:30',
    date: '2024-06-30'
  }
];

// Utility functions for video embedding
export const createVideoPlayer = (videoData) => {
  return {
    ...videoData,
    playerConfig: {
      controls: true,
      autoplay: false,
      muted: true,
      loop: false,
      preload: 'metadata'
    }
  };
};

export const getVideosByCategory = (category) => {
  return instagramVideos.filter(video => video.category === category);
};

export const getVideoById = (id) => {
  return instagramVideos.find(video => video.id === id);
};

// Instagram embed script loader
export const loadInstagramEmbedScript = () => {
  return new Promise((resolve) => {
    if (window.instgrm) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      resolve();
    };
    document.head.appendChild(script);
  });
};

// Process Instagram embeds after loading
export const processInstagramEmbeds = async () => {
  try {
    await loadInstagramEmbedScript();
    
    // Give the script time to load and initialize
    await new Promise(resolve => setTimeout(resolve, 200));
    
    if (window.instgrm && window.instgrm.Embeds) {
      // Clear existing rendered embeds to avoid conflicts
      const existingEmbeds = document.querySelectorAll('.instagram-media-rendered');
      existingEmbeds.forEach(embed => {
        embed.classList.remove('instagram-media-rendered');
      });
      
      // Process new embeds
      window.instgrm.Embeds.process();
      
      // Log for debugging
      console.log('Instagram embeds processed successfully');
    } else {
      console.warn('Instagram embed script not loaded or instgrm object not available');
    }
  } catch (error) {
    console.error('Error processing Instagram embeds:', error);
  }
};
