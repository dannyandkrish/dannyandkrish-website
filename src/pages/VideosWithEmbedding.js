import React, { useState, useEffect } from 'react';
import { Play, Instagram, Youtube, ExternalLink, Filter, Grid, List, Heart } from 'lucide-react';
import InstagramVideoPlayer from '../components/InstagramVideoPlayer';
import InstagramVideoGallery from '../components/InstagramVideoGallery';
import { instagramVideos, processInstagramEmbeds } from '../utils/instagramVideos';

const VideosWithEmbedding = () => {
  const [activeTab, setActiveTab] = useState('instagram');
  const [featuredVideo, setFeaturedVideo] = useState(null);

  useEffect(() => {
    // Set the first Instagram video as featured
    if (instagramVideos.length > 0) {
      setFeaturedVideo(instagramVideos[0]);
    }
    
    // Process Instagram embeds after component mounts
    processInstagramEmbeds();
  }, []);

  // Re-process Instagram embeds when tab changes
  useEffect(() => {
    if (activeTab === 'instagram' || activeTab === 'all') {
      setTimeout(() => {
        processInstagramEmbeds();
      }, 100);
    }
  }, [activeTab]);

  const youtubeVideos = [
    {
      id: 'yt_1',
      title: 'Danny & Krish - Latest Single (Official Music Video)',
      description: 'Our latest single is out now! Watch the official music video.',
      thumbnailUrl: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
      embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      duration: '3:45',
      views: '125K',
      likes: '3.2K',
      date: '2024-06-25',
      category: 'official'
    },
    {
      id: 'yt_2',
      title: 'Behind the Scenes - Recording Session',
      description: 'Take a look behind the scenes of our latest recording session.',
      thumbnailUrl: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2',
      embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
      duration: '8:20',
      views: '87K',
      likes: '2.1K',
      date: '2024-06-20',
      category: 'behind-scenes'
    }
  ];

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-purple-500 to-pink-500' },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
    { id: 'all', name: 'All Videos', icon: Play, color: 'from-blue-500 to-blue-600' }
  ];

  const VideoCard = ({ video, platform }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative aspect-video bg-black">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
        <div className="absolute top-2 left-2">
          <span className={`bg-gradient-to-r ${
            platform === 'instagram' ? 'from-purple-500 to-pink-500' : 'from-red-500 to-red-600'
          } text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
            {platform === 'instagram' ? <Instagram size={12} /> : <Youtube size={12} />}
            <span>{platform}</span>
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white mb-2 text-lg">{video.title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{video.description}</p>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Play size={14} />
              <span>{video.views}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Heart size={14} />
              <span>{video.likes}</span>
            </span>
          </div>
          <a
            href={video.videoUrl || video.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Videos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Watch our latest music videos, behind-the-scenes content, and live performances
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.id}
                    onClick={() => setActiveTab(platform.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                      activeTab === platform.id
                        ? `bg-gradient-to-r ${platform.color} text-white shadow-lg`
                        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      {featuredVideo && activeTab !== 'all' && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <InstagramVideoPlayer video={featuredVideo} showControls={true} />
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {activeTab === 'instagram' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Instagram Videos</h2>
            <InstagramVideoGallery />
          </div>
        )}

        {activeTab === 'youtube' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">YouTube Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeVideos.map((video) => (
                <VideoCard key={video.id} video={video} platform="youtube" />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'all' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">All Videos</h2>
            
            {/* Instagram Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Instagram size={24} className="text-purple-500" />
                <span>Instagram</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramVideos.slice(0, 3).map((video) => (
                  <VideoCard key={video.id} video={video} platform="instagram" />
                ))}
              </div>
            </div>

            {/* YouTube Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Youtube size={24} className="text-red-500" />
                <span>YouTube</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video) => (
                  <VideoCard key={video.id} video={video} platform="youtube" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't miss our latest content!
          </h2>
          <p className="text-gray-300 mb-8">
            Follow us on social media for the latest videos and behind-the-scenes content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/dannyandkrish/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              <Instagram size={20} />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105"
            >
              <Youtube size={20} />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosWithEmbedding;
