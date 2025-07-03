import React, { useEffect, useState } from 'react';
import { getImageByFilename, getVideoCollection, getVideoByFilename, getVideoMetadata, getVideoContainerStyles } from '../utils/googleDrive';
import { instagramContent } from '../utils/instagram';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Google Drive videos data - enhanced with metadata from googleDrive.js
  const driveVideos = [
    {
      id: 'gd1',
      title: "Alehouse - Live Performance",
      filename: 'alehouse-video.mp4',
      category: "live-performances",
      date: "2024-06-20",
      description: "Live performance of Alehouse showcasing our energy and stage presence.",
      ...getVideoMetadata('alehouse-video.mp4')
    },
    {
      id: 'gd2',
      title: "Hindi Performance Showcase",
      filename: 'hindi-performance.mp4',
      category: "live-performances",
      date: "2024-06-15",
      description: "Beautiful Hindi performance demonstrating our versatility in multiple languages.",
      ...getVideoMetadata('hindi-performance.mp4')
    },
    {
      id: 'gd3',
      title: "English Acoustic Session",
      filename: 'english-performance.mp4',
      category: "live-performances",
      date: "2024-06-10",
      description: "Intimate acoustic performance in English, showcasing our musical chemistry.",
      ...getVideoMetadata('english-performance.mp4')
    },
    {
      id: 'gd4',
      title: "Telugu Musical Journey",
      filename: 'telugu-performance.mp4',
      category: "live-performances",
      date: "2024-06-05",
      description: "Soulful Telugu performance bringing traditional and modern elements together.",
      ...getVideoMetadata('telugu-performance.mp4')
    },
    {
      id: 'gd5',
      title: "Tamil Classics Performance",
      filename: 'tamil-performance.mp4',
      category: "live-performances",
      date: "2024-06-01",
      description: "Classic Tamil songs performed with our unique style and interpretation.",
      ...getVideoMetadata('tamil-performance.mp4')
    }
  ].filter(video => {
    // Only include videos that have actual file IDs (not placeholders)
    const videoUrl = getVideoByFilename(video.filename);
    return videoUrl !== null;
  }).map(video => {
    // Enhance with metadata from googleDrive.js
    const metadata = getVideoMetadata(video.filename);
    return {
      ...video,
      ...metadata
    };
  });

  // Sample YouTube video data organized by categories - replace with real YouTube video IDs
  const youtubeVideos = [
    // Music Videos
    {
      id: 'yt1',
      title: "Midnight Dreams - Official Music Video",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "music-videos",
      description: "Our latest single featuring atmospheric visuals and intimate performance shots.",
      date: "2024-06-15",
      duration: "3:45"
    },
    {
      id: 'yt2',
      title: "City Lights - Official Video",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "music-videos",
      description: "Urban-inspired music video shot across the city's most iconic locations.",
      date: "2024-04-20",
      duration: "4:12"
    },
    {
      id: 'yt3',
      title: "Journey Home - Lyric Video",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "music-videos",
      description: "Animated lyric video for our emotional ballad Journey Home.",
      date: "2024-03-15",
      duration: "3:58"
    },
    
    // Originals
    {
      id: 'yt4',
      title: "Whispered Words - Original Composition",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "originals",
      description: "Our latest original composition blending traditional and modern elements.",
      date: "2024-06-25",
      duration: "5:23"
    },
    {
      id: 'yt5',
      title: "Monsoon Melodies - Original Song",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "originals",
      description: "An original piece inspired by the beauty of monsoon season.",
      date: "2024-05-30",
      duration: "4:45"
    },
    
    // Event Announcements
    {
      id: 'yt6',
      title: "Summer Tour 2024 Announcement",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
      category: "event-announcements",
      description: "Exciting announcement about our upcoming summer tour dates and venues.",
      date: "2024-06-30",
      duration: "2:15"
    }
  ];

  // Combine all videos into a single array for filtering
  const allVideos = [
    // Google Drive videos
    ...driveVideos.map(video => ({
      ...video,
      source: 'drive',
      embedUrl: getVideoByFilename(video.filename)
    })),
    
    // YouTube videos
    ...youtubeVideos.map(video => ({
      ...video,
      source: 'youtube',
      embedUrl: getYouTubeEmbedUrl(video.youtubeId)
    })),
    
    // Instagram reels
    ...instagramContent.slice(0, 4).map(post => ({
      ...post,
      category: 'instagram-reels',
      source: 'instagram',
      embedUrl: null // Instagram doesn't allow embedding
    }))
  ];

  // Video categories for filtering
  const videoCategories = [
    { id: 'all', label: 'All Videos' },
    { id: 'live-performances', label: 'Live Performances' },
    { id: 'music-videos', label: 'Music Videos' },
    { id: 'originals', label: 'Originals' },
    { id: 'event-announcements', label: 'Event Announcements' },
    { id: 'instagram-reels', label: 'Instagram Reels' }
  ];

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === 'all' 
    ? allVideos 
    : allVideos.filter(video => video.category === selectedCategory);

  // Category info for display
  const categoryInfo = {
    "live-performances": {
      title: "Live Performances",
      description: "Experience our energy on stage with live performances in multiple languages",
      color: "bg-red-500"
    },
    "music-videos": {
      title: "Music Videos",
      description: "Official music videos showcasing our creative visual storytelling",
      color: "bg-purple-500"
    },
    "originals": {
      title: "Originals",
      description: "Our original compositions and unique musical creations",
      color: "bg-blue-500"
    },
    "event-announcements": {
      title: "Event Announcements",
      description: "Stay updated with our upcoming shows and special events",
      color: "bg-green-500"
    },
    "instagram-reels": {
      title: "Instagram Reels",
      description: "Short clips and behind-the-scenes moments from our Instagram",
      color: "bg-pink-500"
    }
  };

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Videos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our music videos, live performances, and behind-the-scenes content. 
            Filter by category to find exactly what you're looking for.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {videoCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Video Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
            {selectedCategory !== 'all' && (
              <span className="ml-2">
                in <span className="font-semibold">{videoCategories.find(cat => cat.id === selectedCategory)?.label}</span>
              </span>
            )}
          </p>
        </div>

        {/* Filtered Videos Grid */}
        <section className="mb-16">
          {selectedCategory !== 'all' && categoryInfo[selectedCategory] && (
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">{categoryInfo[selectedCategory].title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{categoryInfo[selectedCategory].description}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              // Determine video container styles based on source
              let containerClass, aspectRatioStyle, isPortrait = false;
              
              if (video.source === 'drive') {
                const styles = getVideoContainerStyles(video.filename);
                containerClass = styles.containerClass;
                aspectRatioStyle = styles.aspectRatioStyle;
                isPortrait = styles.isPortrait;
              } else if (video.source === 'instagram') {
                // Instagram reels are typically portrait
                containerClass = "relative w-full max-w-sm mx-auto bg-gray-100 rounded-lg overflow-hidden";
                aspectRatioStyle = { paddingBottom: '177.78%' }; // 9:16 aspect ratio
                isPortrait = true;
              } else {
                // YouTube videos are typically landscape
                containerClass = "relative w-full bg-gray-100 rounded-lg overflow-hidden";
                aspectRatioStyle = { paddingBottom: '56.25%' }; // 16:9 aspect ratio
                isPortrait = false;
              }
              
              return (
                <div key={`${video.source}-${video.id}`} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className={containerClass} style={aspectRatioStyle}>
                    {video.source === 'instagram' ? (
                      // Instagram content - show thumbnail with link
                      <>
                        <img 
                          src={getImageByFilename('IMG_5199.JPG')} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Instagram overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white rounded-full p-3">
                              <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Platform badge */}
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Instagram
                        </div>
                        {/* Video indicator */}
                        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Reel
                        </div>
                      </>
                    ) : (
                      // YouTube or Google Drive video embed
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="absolute inset-0 w-full h-full border-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                    
                    {/* Video overlay badges */}
                    {video.source !== 'instagram' && (
                      <>
                        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                        <div className={`absolute top-3 left-3 text-white px-2 py-1 rounded text-xs font-medium ${
                          video.source === 'youtube' ? 'bg-red-600' : 
                          video.source === 'drive' ? 'bg-blue-600' : 'bg-gray-600'
                        }`}>
                          {video.source === 'youtube' ? 'YouTube' : 
                           video.source === 'drive' ? video.language : 'Video'}
                        </div>
                        {isPortrait && (
                          <div className="absolute bottom-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zM7 19V6h10v13H7z"/>
                            </svg>
                            Portrait
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{formatDate(video.date)}</span>
                      <div className="flex gap-2">
                        {video.source === 'instagram' ? (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full hover:shadow-lg transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View on Instagram
                          </a>
                        ) : (
                          <span className={`text-white px-2 py-1 rounded-full ${
                            categoryInfo[video.category]?.color || 'bg-gray-500'
                          }`}>
                            {video.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
              <p className="text-gray-500">Try selecting a different category to see videos.</p>
            </div>
          )}
        </section>

        {/* Subscribe CTA */}
        <section className="bg-gradient-to-r from-primary to-gray-800 rounded-lg p-8 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't miss our latest videos! Subscribe to our YouTube channel and follow us on Instagram 
            for new music videos, live performances, and exclusive behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@dannyandkrish"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
            <a
              href="https://instagram.com/dannyandkrish"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;
