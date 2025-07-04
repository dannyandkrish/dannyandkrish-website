import React, { useState, useEffect } from 'react';
import { Instagram, Play, Heart, MessageCircle, Share, Filter, Grid, List } from 'lucide-react';
import InstagramVideoPlayer from './InstagramVideoPlayer';
import { instagramVideos, getVideosByCategory, processInstagramEmbeds } from '../utils/instagramVideos';

const InstagramVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filteredVideos, setFilteredVideos] = useState(instagramVideos);

  const categories = ['all', 'music', 'live', 'studio', 'acoustic'];

  useEffect(() => {
    if (filterCategory === 'all') {
      setFilteredVideos(instagramVideos);
    } else {
      setFilteredVideos(getVideosByCategory(filterCategory));
    }
    
    // Process Instagram embeds when videos change
    setTimeout(() => {
      processInstagramEmbeds();
    }, 100);
  }, [filterCategory]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleShare = async (video) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: video.instagramUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(video.instagramUrl);
    }
  };

  // Modal view for selected video
  if (selectedVideo) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            ✕
          </button>
          <InstagramVideoPlayer video={selectedVideo} showControls={true} />
        </div>
      </div>
    );
  }

  const VideoCard = ({ video, isCompact = false }) => (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${
        isCompact ? 'flex' : ''
      }`}
      onClick={() => handleVideoClick(video)}
    >
      {/* Thumbnail */}
      <div className={`relative ${isCompact ? 'w-40 h-24' : 'aspect-video'} bg-black`}>
        {video.thumbnailUrl ? (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Instagram size={24} className="text-white" />
          </div>
        )}
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white bg-opacity-20 rounded-full p-2">
            <Play size={16} className="text-white ml-0.5" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {video.duration}
        </div>

        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-medium capitalize">
            {video.category}
          </span>
        </div>
      </div>

      {/* Video info */}
      <div className={`p-4 ${isCompact ? 'flex-1' : ''}`}>
        <h3 className={`font-bold text-white mb-2 ${isCompact ? 'text-sm' : 'text-lg'}`}>
          {video.title}
        </h3>
        <p className={`text-gray-300 mb-3 ${isCompact ? 'text-xs' : 'text-sm'}`}>
          {video.description.length > 100 
            ? `${video.description.substring(0, 100)}...` 
            : video.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Heart size={14} />
              <span>{video.likes}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Play size={14} />
              <span>{video.views}</span>
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleShare(video);
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Share size={14} />
          </button>
        </div>

        {/* Hashtags */}
        {!isCompact && (
          <div className="flex flex-wrap gap-1 mt-2">
            {video.hashtags.slice(0, 3).map((hashtag, index) => (
              <span
                key={index}
                className="text-blue-400 text-xs hover:text-blue-300 cursor-pointer"
              >
                {hashtag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <Instagram size={32} />
            <h1 className="text-3xl font-bold">Danny & Krish on Instagram</h1>
          </div>
          <p className="text-lg opacity-90">
            Watch our latest videos, behind-the-scenes content, and live performances
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Category Filter */}
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filterCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Videos Grid/List */}
        {filteredVideos.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }>
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isCompact={viewMode === 'list'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Instagram size={48} className="mx-auto text-gray-500 mb-4" />
            <p className="text-gray-400 text-lg">No videos found in this category</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 mt-12 p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Follow us on Instagram for more content!
          </h2>
          <p className="text-gray-300 mb-6">
            Get the latest updates, behind-the-scenes content, and live performances
          </p>
          <a
            href="https://www.instagram.com/dannyandkrish/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            <Instagram size={20} />
            <span>@dannyandkrish</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramVideoGallery;
