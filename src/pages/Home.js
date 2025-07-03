import React from 'react';
import { Link } from 'react-router-dom';
import { getImageCollection, getImageByFilename, getVideoByFilename } from '../utils/googleDrive';

// Home page with hero background image (Google Drive ID: 1sT36eZNSa7h9gpd2_a6sc2131wmNpKVr)
// To revert to blue gradient background, change USE_IMAGE_BACKGROUND to false

const Home = () => {
  // Get Google Drive images for different sections
  const heroImages = getImageCollection('hero');
  const performanceImages = getImageCollection('performance');
  const candidImages = getImageCollection('candid');
  
  // Hero background configuration - toggle between image and gradient
  // ***** TOGGLE THIS TO SWITCH BACKGROUND *****
  const USE_IMAGE_BACKGROUND = true; // Set to false to revert to blue gradient
  // *******************************************
  
  const heroBackgroundImage = getImageByFilename('hero-background.jpg', 'w1920'); // Original hero background
  
  // Helper function to get a random Google Drive image or fallback
  const getRandomImage = (collection, fallback) => {
    if (collection && collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * collection.length);
      return collection[randomIndex].url;
    }
    return fallback;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Image Background */}
      <section 
        className={`hero-section relative overflow-hidden min-h-screen flex items-center ${
          USE_IMAGE_BACKGROUND && heroBackgroundImage 
            ? 'bg-cover bg-center bg-no-repeat' 
            : 'bg-gradient-to-br from-primary via-purple-900 to-secondary'
        }`}
        style={USE_IMAGE_BACKGROUND && heroBackgroundImage ? {
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : {}}
      >
        <div className={`absolute inset-0 ${
          USE_IMAGE_BACKGROUND ? 'bg-black opacity-60' : 'bg-black opacity-30'
        }`}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Danny & Krish
          </h1>
          <p className="text-xl md:text-3xl mb-4 max-w-4xl mx-auto font-light">
            Two voices, one passion
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200">
            Creating music that bridges hearts and cultures across the globe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/music" className="btn-primary text-lg px-8 py-4 bg-secondary hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
              🎵 Listen Now
            </Link>
            <Link to="/videos" className="btn-primary text-lg px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              ▶️ Watch Videos
            </Link>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
              📞 Book Us
            </Link>
          </div>

          {/* Social proof stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-secondary">50 Million</div>
              <div className="text-sm text-gray-300">Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">30K</div>
              <div className="text-sm text-gray-300">Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">10+</div>
              <div className="text-sm text-gray-300">Countries Reached</div>
            </div>
          </div>

          {/* Follow Us Social Icons */}
          <div className="flex justify-center items-center gap-6 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-3">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/dannyandkrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@dannyandkrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="relative block w-full h-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21 0 0,0,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Featured Music Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Latest Releases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our newest tracks that blend traditional melodies with contemporary sounds.
            </p>
          </div>
          
          {/* Featured Track Spotlight */}
          <div className="card mb-16 overflow-hidden bg-gradient-to-r from-gray-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={getImageByFilename('IMG_5199.JPG')} 
                  alt="Chuttamalle X Manike"
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">New Release</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-4">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">🎵 New Release</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Chuttamalle X Manike</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Latest fusion track blending traditional melodies with modern beats, 
                  showcasing our unique cross-cultural musical collaboration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/music" className="btn-primary">
                    🎧 Listen Now
                  </Link>
                  <a 
                    href="https://open.spotify.com/artist/6waTvUwx3eejs6uTjWqtR0?si=1MFCia60TQyKJRUWTS03nA" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-green-500 hover:bg-green-600"
                  >
                    🎵 Spotify
                  </a>
                  <a 
                    href="https://music.apple.com/in/artist/danny-krish/1742342457" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-gray-800 hover:bg-gray-900"
                  >
                    🍎 Apple Music
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Chuttamalle X Manike",
                duration: "3:45",
                category: "World Fusion",
                image: getImageByFilename('IMG_3111.jpg'),
                description: "Latest fusion track blending traditional melodies with modern beats.",
                spotifyId: "47DlIK12ej0565niSlTMW4"
              },
              {
                title: "Kanmani Anbodu X Inthandham",
                duration: "4:12",
                category: "World Fusion",
                image: getImageByFilename('IMG_5199.JPG'),
                description: "A beautiful blend of Tamil and Telugu musical traditions.",
                spotifyId: "4IbYIcVeKZKYjTR2f9oUcL"
              },
              {
                title: "Thangame X Pani Da",
                duration: "3:58",
                category: "World Fusion",
                image: getImageByFilename('IMG_5133.JPG'),
                description: "Cross-cultural musical collaboration showcasing diverse melodies.",
                spotifyId: "6b9tm5ntTVcJTq7yOf9YPD"
              }
            ].map((track, index) => (
              <div key={index} className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary/90 text-white px-2 py-1 rounded text-xs font-medium">
                      {track.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <a 
                      href={`https://open.spotify.com/album/${track.spotifyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-secondary rounded-full p-3 hover:bg-secondary hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{track.title}</h3>
                  <p className="text-gray-600 mb-2">{track.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{track.duration}</span>
                    <a 
                      href={`https://open.spotify.com/album/${track.spotifyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary font-medium text-sm"
                    >
                      Play Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/music" className="btn-primary text-lg px-8 py-4">
              🎵 Explore All Music
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Latest Video</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our latest music video and behind-the-scenes content
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card overflow-hidden">
              <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '125%' }}>
                <iframe
                  src={getVideoByFilename('alehouse-video.mp4')}
                  title="Alehouse - Live Performance"
                  className="absolute inset-0 w-full h-full border-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  3:45
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Live Performance
                </div>
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zM7 19V6h10v13H7z"/>
                  </svg>
                  Portrait
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-bold mb-2">Alehouse - Live Performance</h3>
                <p className="text-gray-600 text-sm">Live performance showcasing our energy and stage presence</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">June 20, 2024</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Live Performances</span>
                </div>
              </div>
            </div>
          </div>
            
          <div className="text-center mt-8">
            <Link to="/videos" className="btn-primary text-lg px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black">
              📺 Watch More Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Photo & Video Tiles Section - Inspired by Niraval */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Visual Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capture the essence of our music through stunning visuals and behind-the-scenes moments
            </p>
          </div>

          {/* Main Grid - Mixed Photos and Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Large Featured Image */}
            <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary to-secondary h-80 lg:h-full">
                <img 
                  src={getImageByFilename('IMG_5202.JPG')} 
                  alt="Danny & Krish Live Performance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="bg-secondary/80 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Featured</span>
                  <h3 className="font-display text-2xl font-bold mb-2">Live Performance</h3>
                  <p className="text-gray-200">Danny & Krish bringing energy and passion to the stage</p>
                </div>
                <div className="absolute top-6 right-6">
                  <button className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Studio Session Video */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-black h-40">
                <img 
                  src={getImageByFilename('IMG_5158.JPG')} 
                  alt="Studio Recording Session"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-secondary/80 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">Video</span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">Studio Sessions</p>
                </div>
              </div>
            </div>

            {/* Band Portrait */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-40">
                <img 
                  src={getImageByFilename('IMG_3115.jpg')} 
                  alt="Danny & Krish Portrait"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">Photo</span>
                </div>
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Official Portrait</p>
                </div>
              </div>
            </div>

            {/* Music Video Behind Scenes */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-orange-400 to-pink-500 h-40">
                <img 
                  src={getImageByFilename('IMG_5151.JPG')} 
                  alt="Music Video Set"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">BTS</span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">Video Shoot</p>
                </div>
              </div>
            </div>

            {/* Acoustic Performance */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-40">
                <img 
                  src={getImageByFilename('IMG_5160.JPG')} 
                  alt="Acoustic Performance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">Live</span>
                </div>
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Acoustic Set</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Grid - More Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {[
              { src: getImageByFilename('IMG_5081.JPG'), title: "Performance Setup", type: "photo" },
              { src: getImageByFilename('IMG_5088.JPG'), title: "Live Energy", type: "photo" },
              { src: getImageByFilename('IMG_5090.JPG'), title: "Stage Presence", type: "photo" },
              { src: getImageByFilename('IMG_5115.JPG'), title: "Concert Moments", type: "photo" },
              { src: getImageByFilename('IMG_5132.JPG'), title: "Musical Chemistry", type: "photo" },
              { src: getImageByFilename('IMG_5148.JPG'), title: "Performance Highlights", type: "photo" }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-24 md:h-32">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                    {item.type === 'video' && (
                      <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 rounded-full p-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery" className="btn-primary text-lg px-8 py-4 bg-secondary hover:bg-opacity-90">
                📸 View Full Gallery
              </Link>
              <Link to="/videos" className="btn-primary text-lg px-8 py-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                🎬 Watch All Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Our Musical Journey</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Danny and Krish came together through a shared love of music that transcends boundaries. 
                Our collaboration brings together diverse musical backgrounds to create something truly unique.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From acoustic ballads to electronic fusion, we explore every corner of the musical spectrum, 
                always staying true to our authentic sound.
              </p>
              <Link to="/about" className="btn-primary text-lg px-8 py-4">
                👥 Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img 
                src={getRandomImage(heroImages, "https://picsum.photos/600/500?random=517")} 
                alt="Danny and Krish performing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-2xl">5+</p>
                <p className="text-sm">Years Together</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <p className="font-bold text-xl text-secondary">25+</p>
                <p className="text-xs text-gray-600">Original Songs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8">
            Get the latest updates on new releases, tour dates, and exclusive content.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary px-6 py-3 rounded-r-lg hover:bg-opacity-80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
