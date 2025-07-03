import React, { useState, useEffect } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import { getImageByFilename } from '../utils/googleDrive';

const Music = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample music data - replace with real data
  // 
  // TO UPDATE WITH REAL ALBUM ARTWORK:
  // Now using actual Google Drive images for track-specific artwork
  const tracks = [
    {
      id: 1,
      title: "Chuttamalle X Manike",
      artist: "Danny & Krish",
      album: "Chuttamalle X Manike",
      duration: "3:45",
      category: "world",
      url: "/music/chuttamalle-x-manike.mp3",
      artwork: getImageByFilename('IMG_3111.jpg'), // Latest performance photo as album cover
      description: "Latest fusion track blending traditional melodies with modern beats.",
      spotifyId: "47DlIK12ej0565niSlTMW4", // Real album ID
      appleMusicId: "1742342457", // Real Apple Music artist ID
      youtubeMusicId: "dQw4w9WgXcQ", // Will be updated with real video ID
      amazonMusicId: "B0D2QPHTL4", // Real Amazon Music artist ID
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    },
    {
      id: 2,
      title: "Kanmani Anbodu X Inthandham",
      artist: "Danny & Krish",
      album: "Kanmani Anbodu X Inthandham",
      duration: "4:12",
      category: "world",
      url: "/music/kanmani-anbodu-x-inthandham.mp3",
      artwork: getImageByFilename('IMG_5199.JPG'), // Performance photo as track artwork
      description: "A beautiful blend of Tamil and Telugu musical traditions.",
      spotifyId: "4IbYIcVeKZKYjTR2f9oUcL", // Real album ID
      appleMusicId: "1742342457",
      youtubeMusicId: "jNQXAC9IVRw",
      amazonMusicId: "B0D2QPHTL4",
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    },
    {
      id: 3,
      title: "Thangame X Pani Da",
      artist: "Danny & Krish",
      album: "Thangame X Pani Da",
      duration: "3:58",
      category: "world",
      url: "/music/thangame-x-pani-da.mp3",
      artwork: getImageByFilename('IMG_5133.JPG'), // Specific performance photo for this track
      description: "Cross-cultural musical collaboration showcasing diverse melodies.",
      spotifyId: "6b9tm5ntTVcJTq7yOf9YPD", // Real album ID
      appleMusicId: "1742342457",
      youtubeMusicId: "9bZkp7q19f0",
      amazonMusicId: "B0D2QPHTL4",
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Danny & Krish",
      album: "Urban Stories",
      duration: "3:58",
      category: "electronic",
      url: "/music/city-lights.mp3",
      artwork: getImageByFilename('IMG_5081.JPG'), // Urban/city setting photo for this electronic track
      description: "Electronic soundscape inspired by the urban nightlife.",
      spotifyId: "4PTG3Z6ehGkBFwjybzWkR8",
      appleMusicId: "1742342457",
      youtubeMusicId: "ScMzIvxBSi4",
      amazonMusicId: "B0D2QPHTL4",
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    },
    {
      id: 5,
      title: "Whispered Words",
      artist: "Danny & Krish",
      album: "Intimate",
      duration: "4:05",
      category: "acoustic",
      url: "/music/whispered-words.mp3",
      artwork: getImageByFilename('IMG_5132.JPG'), // Intimate performance setting photo
      description: "An intimate acoustic piece about unspoken feelings.",
      spotifyId: "7qiZfU4dY5B67U6KdEcM8J",
      appleMusicId: "1742342457",
      youtubeMusicId: "astISOttCQ0",
      amazonMusicId: "B0D2QPHTL4",
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    },
    {
      id: 6,
      title: "Global Harmony",
      artist: "Danny & Krish",
      album: "World Fusion",
      duration: "6:15",
      category: "world",
      url: "/music/global-harmony.mp3",
      artwork: getImageByFilename('IMG_5148.JPG'), // World music performance photo
      description: "A fusion of traditional instruments from around the world.",
      spotifyId: "2tJHWZ4U2qy5VZ7MKZpF1A",
      appleMusicId: "1742342457",
      youtubeMusicId: "L_jWHffIx5E",
      amazonMusicId: "B0D2QPHTL4",
      appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
      youtubeMusicUrl: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg"
    }
  ];

  // Spotify playlists and albums - Real Danny & Krish content
  const spotifyEmbeds = [
    {
      type: "playlist",
      id: "37i9dQZF1E4zfrdPZQyeoo", // Danny & Krish Radio playlist
      title: "Danny & Krish Radio",
      description: "Our curated playlist featuring Danny & Krish"
    },
    {
      type: "album",
      id: "47DlIK12ej0565niSlTMW4", // Chuttamalle X Manike album
      title: "Chuttamalle X Manike",
      description: "Latest release • 2025"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Songs' },
    { id: 'acoustic', label: 'Acoustic' },
    { id: 'electronic', label: 'Electronic' },
    { id: 'world', label: 'World Music' }
  ];

  const filteredTracks = currentCategory === 'all' 
    ? tracks 
    : tracks.filter(track => track.category === currentCategory);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Music</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of original songs that blend acoustic warmth with electronic innovation.
          </p>
        </div>

        {/* Music Player */}
        {selectedTrack && (
          <div className="mb-12">
            <MusicPlayer track={selectedTrack} />
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTracks.map((track) => (
            <div 
              key={track.id} 
              className="card overflow-hidden cursor-pointer group"
              onClick={() => handleTrackSelect(track)}
            >
              <div className="relative">
                <img 
                  src={track.artwork} 
                  alt={track.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-secondary rounded-full p-3 hover:bg-secondary hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium capitalize">
                    {track.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-2">{track.album}</p>
                <p className="text-sm text-gray-500 mb-3">{track.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{track.duration}</span>
                  <button 
                    className="text-secondary hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTrackSelect(track);
                    }}
                  >
                    Play Now
                  </button>
                </div>
                {/* Enhanced Streaming Links */}
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="https://open.spotify.com/artist/6waTvUwx3eejs6uTjWqtR0?si=1MFCia60TQyKJRUWTS03nA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition-colors text-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Spotify
                  </a>
                  <a 
                    href={track.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white text-xs py-2 px-3 rounded hover:bg-gray-900 transition-colors text-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apple Music
                  </a>
                  <a 
                    href={track.youtubeMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white text-xs py-2 px-3 rounded hover:bg-red-600 transition-colors text-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    YouTube Music
                  </a>
                  <a 
                    href="https://music.amazon.in/artists/B0D2QPHTL4?ref=dm_sh_vGmW7HO2KtxpFK5zk1Qhf3XZK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white text-xs py-2 px-3 rounded hover:bg-blue-700 transition-colors text-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Amazon Music
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Stream & Play Section */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Stream & Play</h2>
          <div className="max-w-2xl mx-auto">
            {/* Spotify Artist Embed */}
            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold mb-4">Featured on Spotify</h3>
              <iframe 
                style={{borderRadius:'12px'}}
                src="https://open.spotify.com/embed/artist/6waTvUwx3eejs6uTjWqtR0?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Danny & Krish on Spotify"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Latest on Spotify Section */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Latest on Spotify</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold mb-4">Chuttamalle X Manike</h3>
              <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-center text-white">
                <div className="text-4xl mb-4">🎵</div>
                <h4 className="font-semibold text-lg mb-2">Chuttamalle X Manike</h4>
                <p className="text-green-200 mb-4">Latest Single - Danny & Krish</p>
                <a 
                  href="https://open.spotify.com/album/47DlIK12ej0565niSlTMW4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold mb-4">Kanmani Anbodu X Inthandham</h3>
              <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-center text-white">
                <div className="text-4xl mb-4">�</div>
                <h4 className="font-semibold text-lg mb-2">Kanmani Anbodu X Inthandham</h4>
                <p className="text-green-200 mb-4">Tamil-Telugu Fusion - Danny & Krish</p>
                <a 
                  href="https://open.spotify.com/album/4IbYIcVeKZKYjTR2f9oUcL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Albums Section with Actual Track Artwork */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Albums & EPs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Chuttamalle X Manike",
                year: "2025",
                tracks: 1,
                image: getImageByFilename('IMG_3111.jpg'), // Latest performance as album cover
                spotifyUrl: "https://open.spotify.com/album/47DlIK12ej0565niSlTMW4",
                appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
                description: "Latest fusion single"
              },
              {
                title: "Kanmani Anbodu X Inthandham",
                year: "2024",
                tracks: 1,
                image: getImageByFilename('IMG_5199.JPG'), // Performance photo as track artwork
                spotifyUrl: "https://open.spotify.com/album/4IbYIcVeKZKYjTR2f9oUcL",
                appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
                description: "Tamil-Telugu fusion"
              },
              {
                title: "Thangame X Pani Da",
                year: "2024",
                tracks: 1,
                image: getImageByFilename('IMG_5133.JPG'), // Specific performance photo
                spotifyUrl: "https://open.spotify.com/album/6b9tm5ntTVcJTq7yOf9YPD",
                appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
                description: "Cross-cultural collaboration"
              },
              {
                title: "World Fusion",
                year: "2024",
                tracks: 3,
                image: getImageByFilename('IMG_5148.JPG'), // World music performance photo
                spotifyUrl: "https://open.spotify.com/artist/6waTvUwx3eejs6uTjWqtR0",
                appleMusicUrl: "https://music.apple.com/in/artist/danny-krish/1742342457",
                description: "Collection of world music"
              }
            ].map((album, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-gray-800 rounded-full p-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{album.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{album.year}</p>
                <p className="text-gray-500 text-xs mb-2">{album.description}</p>
                <p className="text-gray-500 text-sm mb-4">{album.tracks} {album.tracks === 1 ? 'single' : 'tracks'}</p>
                <div className="flex gap-2 justify-center">
                  <a 
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white text-xs px-3 py-2 rounded hover:bg-green-600 transition-colors font-medium"
                  >
                    Spotify
                  </a>
                  <a 
                    href={album.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white text-xs px-3 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Listen on Your Favorite Platform</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our music is available on all major streaming platforms. Follow us to get notified 
            about new releases and exclusive content.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Spotify", logo: "🎵", url: "https://open.spotify.com/artist/6waTvUwx3eejs6uTjWqtR0?si=1MFCia60TQyKJRUWTS03nA" },
              { name: "Apple Music", logo: "🍎", url: "https://music.apple.com/in/artist/danny-krish/1742342457" },
              { name: "YouTube Music", logo: "📺", url: "https://music.youtube.com/channel/UCuxASkri6Ycf7MpND7bK-Sg?si=aJ_UO9gp5Kwp78Og&sub_confirmation=1" },
              { name: "Amazon Music", logo: "🔵", url: "https://music.amazon.in/artists/B0D2QPHTL4?ref=dm_sh_vGmW7HO2KtxpFK5zk1Qhf3XZK" }
            ].map((platform, index) => (
              <a 
                key={index} 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-2xl mb-2">{platform.logo}</div>
                <span className="font-medium text-gray-700">{platform.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Music;
