import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Heart, MessageCircle, Share, Instagram } from 'lucide-react';
import { processInstagramEmbeds } from '../utils/instagramVideos';

const InstagramVideoPlayer = ({ video, showControls = true, autoplay = false, showEmbedByDefault = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showEmbed, setShowEmbed] = useState(showEmbedByDefault && video.embedHtml);
  const videoRef = useRef(null);

  useEffect(() => {
    if (showEmbed) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        processInstagramEmbeds();
      }, 100);
    }
  }, [showEmbed]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleShare = async () => {
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
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(video.instagramUrl);
    }
  };

  // Instagram embed view
  if (showEmbed && video.embedHtml) {
    return (
      <div className="instagram-embed-container bg-gray-900 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{video.title}</h3>
          <button
            onClick={() => setShowEmbed(false)}
            className="text-white hover:text-gray-300 px-3 py-1 bg-gray-700 rounded"
          >
            ← Back to Video
          </button>
        </div>
        <div 
          className="instagram-embed"
          dangerouslySetInnerHTML={{ __html: video.embedHtml }}
        />
      </div>
    );
  }

  return (
    <div className="instagram-video-player bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Video Container */}
      <div className="relative aspect-video bg-black">
        {video.videoUrl ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={video.thumbnailUrl}
            muted={isMuted}
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center cursor-pointer hover:from-purple-700 hover:to-blue-700 transition-all"
            onClick={() => setShowEmbed(true)}
          >
            <div className="text-center text-white">
              <Instagram size={48} className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Instagram Video</p>
              <p className="text-sm opacity-80">Click to view Instagram embed</p>
            </div>
          </div>
        )}

        {/* Play/Pause Overlay */}
        {showControls && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
            <button
              onClick={handlePlayPause}
              className="bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              {isPlaying ? (
                <Pause size={32} className="text-white" />
              ) : (
                <Play size={32} className="text-white ml-1" />
              )}
            </button>
          </div>
        )}

        {/* Video Controls */}
        {showControls && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleMuteToggle}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <span className="text-white text-sm">{video.duration}</span>
            </div>
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {video.category}
          </span>
        </div>

        {/* Views Count */}
        {video.views && (
          <div className="absolute top-4 right-4">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {video.views} views
            </span>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
              <span className="text-sm">{video.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors">
              <MessageCircle size={20} />
              <span className="text-sm">Comment</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors"
            >
              <Share size={20} />
              <span className="text-sm">Share</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {video.embedHtml && (
              <button
                onClick={() => setShowEmbed(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram size={16} />
                <span className="text-sm">View on Instagram</span>
              </button>
            )}
            <a
              href={video.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {video.hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="text-blue-400 text-sm hover:text-blue-300 cursor-pointer"
            >
              {hashtag}
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="text-gray-500 text-sm mt-3">
          {new Date(video.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default InstagramVideoPlayer;
