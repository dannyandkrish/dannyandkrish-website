import React, { useEffect, useState } from 'react';
import { getImageByFilename, getVideoCollection, getVideoByFilename, getVideoMetadata, getVideoContainerStyles } from '../utils/googleDrive';
import { instagramContent } from '../utils/instagram';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper functions
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
  // Order: Google Drive (mixed orientations), Instagram (portrait), YouTube (landscape) at bottom
  const allVideos = [
    // Google Drive videos first (mixed portrait/landscape orientations)
    ...driveVideos.map(video => ({
      ...video,
      source: 'drive',
      embedUrl: getVideoByFilename(video.filename)
    })),
    
    // Instagram reels next (portrait orientation)
    ...instagramContent.slice(0, 4).map(post => ({
      ...post,
      category: 'instagram-reels',
      source: 'instagram',
      embedUrl: null, // Instagram doesn't allow embedding
      isPortrait: true // Explicitly mark as portrait for layout consistency
    })),
    
    // YouTube videos at the bottom (landscape orientation)
    ...youtubeVideos.map(video => ({
      ...video,
      source: 'youtube',
      embedUrl: getYouTubeEmbedUrl(video.youtubeId)
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
          
          {(() => {
            const driveVideos = filteredVideos.filter(video => 
              video.source === 'drive'
            );
            const instagramVideos = filteredVideos.filter(video => 
              video.source === 'instagram'
            );
            const landscapeVideos = filteredVideos.filter(video => 
              video.source === 'youtube'
            );
            
            return (
              <>
                {/* Google Drive Videos - Masonry/Pinterest Layout */}
                {driveVideos.length > 0 && (
                  <div className="mb-12">
                    {driveVideos.length > 0 && instagramVideos.length > 0 && (
                      <div className="text-center mb-8">
                        <h3 className="font-display text-2xl font-bold mb-2">Performance Videos</h3>
                        <p className="text-gray-600">Our live performances and original content</p>
                      </div>
                    )}
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                      {driveVideos.map((video) => {
                        // Determine video container styles based on metadata
                        let containerClass, aspectRatioStyle, isPortrait = false;
                        
                        const styles = getVideoContainerStyles(video.filename);
                        if (styles.isPortrait) {
                          containerClass = "relative w-full bg-gray-100 rounded-lg overflow-hidden";
                          aspectRatioStyle = { paddingBottom: '125%' };
                        } else {
                          containerClass = styles.containerClass;
                          aspectRatioStyle = styles.aspectRatioStyle;
                        }
                        isPortrait = styles.isPortrait;
                        
                        return (
                          <div key={`${video.source}-${video.id}`} className="break-inside-avoid mb-4">
                            <div className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                              <div className={containerClass} style={aspectRatioStyle}>
                                <iframe
                                  src={video.embedUrl}
                                  title={video.title}
                                  className="absolute inset-0 w-full h-full border-0"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                  {video.duration}
                                </div>
                                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                                  {video.language}
                                </div>
                                {isPortrait && (
                                  <div className="absolute bottom-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zM7 19V6h10v13H7z"/>
                                    </svg>
                                    Portrait
                                  </div>
                                )}
                              </div>
                              <div className="p-3">
                                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                                  {video.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-500">
                                    {formatDate(video.date)}
                                  </span>
                                  <span className={`text-white px-2 py-1 rounded-full text-xs ${
                                    categoryInfo[video.category]?.color || 'bg-gray-500'
                                  }`}>
                                    {video.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Instagram Videos - Very Compact Layout */}
                {instagramVideos.length > 0 && (
                  <div className="mb-12">
                    <div className="text-center mb-8">
                      <h3 className="font-display text-2xl font-bold mb-2">Instagram Reels</h3>
                      <p className="text-gray-600">Follow us on Instagram for behind-the-scenes content</p>
                    </div>
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                      {instagramVideos.map((video) => {
                        return (
                          <div key={`${video.source}-${video.id}`} className="break-inside-avoid mb-4">
                            <div className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                              <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
                                <img 
                                  src={getImageByFilename('IMG_5199.JPG')} 
                                  alt={video.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute top-2 right-2">
                                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                    Instagram
                                  </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="absolute bottom-3 left-3 right-3">
                                    <h3 className="text-white font-semibold text-sm mb-1 truncate">
                                      {video.title}
                                    </h3>
                                    <p className="text-gray-200 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                      {video.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="p-2">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-semibold text-gray-900 text-xs truncate flex-1 mr-2">
                                    {video.title}
                                  </h3>
                                  <a 
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-600 hover:text-pink-700 text-xs font-medium whitespace-nowrap"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* YouTube Videos - Traditional Grid Layout */}
                {landscapeVideos.length > 0 && (
                  <div>
                    {(driveVideos.length > 0 || instagramVideos.length > 0) && (
                      <div className="text-center mb-8">
                        <h3 className="font-display text-2xl font-bold mb-2">YouTube Videos</h3>
                        <p className="text-gray-600">Our official music videos and content on YouTube</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {landscapeVideos.map((video) => {
                        return (
                          <div key={`${video.source}-${video.id}`} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                src={video.embedUrl}
                                title={video.title}
                                className="absolute inset-0 w-full h-full border-0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                {video.duration}
                              </div>
                              <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                                YouTube
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                {video.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {video.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                  {formatDate(video.date)}
                                </span>
                                <span className={`text-white px-2 py-1 rounded-full text-xs ${
                                  categoryInfo[video.category]?.color || 'bg-gray-500'
                                }`}>
                                  {video.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            );
          })()}

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

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="font-display text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel and follow us on Instagram for the latest videos, live streams, and behind-the-scenes content.
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
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
