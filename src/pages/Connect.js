import React, { useState, useEffect } from 'react';
import { instagramPosts, openInstagramContent } from '../utils/instagram';

const Connect = () => {
  const [displayPosts, setDisplayPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const loadInstagramPosts = () => {
      try {
        // Use the static Instagram posts from our utility
        setDisplayPosts(instagramPosts);
      } catch (error) {
        console.error('Failed to load Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInstagramPosts();
  }, []);

  const socialPlatforms = [
    {
      name: 'Linktree',
      handle: 'All Our Links',
      url: 'https://linktr.ee/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.511 5.853L17.537 1.827c.436-.436 1.146-.436 1.581 0s.436 1.146 0 1.582L14.64 7.887c-.3.3-.787.3-1.087 0-.3-.3-.3-.787 0-1.087L15.64 4.713c.436-.436.436-1.146 0-1.582-.436-.436-1.146-.436-1.582 0L9.582 7.607c-.3.3-.787.3-1.087 0-.3-.3-.3-.787 0-1.087l4.475-4.475c.436-.436 1.146-.436 1.582 0zM12 10.853L8.457 7.31c-.436-.436-1.146-.436-1.582 0s-.436 1.146 0 1.582L10.393 12.4c.3.3.787.3 1.087 0 .3-.3.3-.787 0-1.087L9.393 9.226c-.436-.436-.436-1.146 0-1.582.436-.436 1.146-.436 1.582 0L14.51 11.18c.3.3.787.3 1.087 0 .3-.3.3-.787 0-1.087L11.072 5.568c-.436-.436-1.146-.436-1.582 0z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-green-400 to-blue-500',
      followers: 'All Links',
      description: 'One place for all our music, videos, and social links'
    },
    {
      name: 'Instagram',
      handle: '@dannyandkrish',
      url: 'https://www.instagram.com/dannyandkrish?igsh=MTBiZTF3bnB3aXN3ZA%3D%3D&utm_source=qr',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      followers: 'Follow',
      description: 'Behind-the-scenes moments, studio life, and daily adventures'
    },
    {
      name: 'TikTok',
      handle: '@dannyandkrish',
      url: 'https://tiktok.com/@dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.254-1.58-1.514-2.338h3.094v16c0 .842-.219 1.636-.602 2.331-.383.695-.937 1.243-1.602 1.602-.695.383-1.489.602-2.331.602s-1.636-.219-2.331-.602c-.695-.359-1.243-.907-1.602-1.602-.359-.695-.602-1.489-.602-2.331 0-.842.243-1.636.602-2.331.359-.695.907-1.243 1.602-1.602.695-.359 1.489-.602 2.331-.602.195 0 .39.024.578.048V9.609c-.188-.024-.383-.024-.578-.024-1.676 0-3.175.676-4.266 1.767s-1.767 2.59-1.767 4.266c0 1.676.676 3.175 1.767 4.266s2.59 1.767 4.266 1.767c1.676 0 3.175-.676 4.266-1.767s1.767-2.59 1.767-4.266V7.516c1.137.773 2.495 1.219 3.977 1.219V5.641c-.789 0-1.514-.195-2.155-.554z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-black to-red-500',
      followers: '18.7K',
      description: 'Quick music clips, duets, and fun musical challenges'
    },
    {
      name: 'YouTube',
      handle: 'Danny & Krish',
      url: 'https://youtube.com/@dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      followers: '12.4K',
      description: 'Music videos, live performances, and exclusive content'
    },
    {
      name: 'Spotify',
      handle: 'Danny & Krish',
      url: 'https://open.spotify.com/artist/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-green-400 to-green-500',
      followers: 'Stream',
      description: 'Stream our latest releases and curated playlists'
    },
    {
      name: 'Apple Music',
      handle: 'Danny & Krish',
      url: 'https://music.apple.com/artist/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.12 10.87c-.24-.3-.57-.47-.93-.47h-4.62c-.36 0-.69.17-.93.47-.24.3-.36.69-.36 1.08v6.93c0 1.26-.51 2.46-1.41 3.36-.9.9-2.1 1.41-3.36 1.41s-2.46-.51-3.36-1.41c-.9-.9-1.41-2.1-1.41-3.36V5.85c0-.96.39-1.89 1.08-2.58.69-.69 1.62-1.08 2.58-1.08h7.14c.96 0 1.89.39 2.58 1.08.69.69 1.08 1.62 1.08 2.58v4.95c0 .39-.17.72-.47.96zM12 4.8c-1.32 0-2.4 1.08-2.4 2.4s1.08 2.4 2.4 2.4 2.4-1.08 2.4-2.4S13.32 4.8 12 4.8z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-gray-900 to-gray-700',
      followers: 'Listen',
      description: 'High-quality streaming on Apple Music'
    },
    {
      name: 'YouTube Music',
      handle: 'Danny & Krish',
      url: 'https://music.youtube.com/channel/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 16.176c-.24.24-.576.36-.912.36-.336 0-.672-.12-.912-.36L12 12.432l-3.744 3.744c-.24.24-.576.36-.912.36-.336 0-.672-.12-.912-.36-.48-.48-.48-1.296 0-1.776L9.168 12 6.432 9.264c-.48-.48-.48-1.296 0-1.776.48-.48 1.296-.48 1.776 0L12 10.224l3.744-3.744c.48-.48 1.296-.48 1.776 0 .48.48.48 1.296 0 1.776L14.832 12l2.736 2.736c.48.48.48 1.296 0 1.776z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      followers: 'Watch',
      description: 'Music videos, live performances, and exclusive content'
    },
    {
      name: 'Twitter',
      handle: '@dannyandkrish',
      url: 'https://twitter.com/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-blue-400 to-blue-500',
      followers: '5.2K',
      description: 'Real-time updates, tour announcements, and fan interactions'
    },
    {
      name: 'Amazon Music',
      handle: 'Danny & Krish',
      url: 'https://music.amazon.com/artists/dannyandkrish',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.996 21.826c-2.049 1.522-5.003 2.339-7.553 2.339-3.575 0-6.789-1.32-9.215-3.515-.191-.173-.02-.408.209-.275 2.631 1.533 5.888 2.456 9.25 2.456 2.267 0 4.76-.471 7.05-1.444.345-.147.635.226.259.439zm.847-.96c-.262-.336-1.736-.159-2.396-.08-.2.024-.231-.15-.05-.275 1.174-.825 3.102-.587 3.327-.311.226.276-.059 2.19-1.151 3.103-.167.14-.326.065-.252-.12.248-.619.804-2.001.522-2.317zM17.688 7.89c-.295-.377-1.949-.178-2.691-.089-.225.027-.26-.169-.057-.31 1.318-.925 3.481-.658 3.733-.348.252.31-.066 2.458-1.293 3.48-.187.156-.365.073-.283-.134.278-.694.9-2.246.591-2.599z"/>
        </svg>
      ),
      color: 'bg-gradient-to-r from-orange-400 to-orange-500',
      followers: 'Play',
      description: 'Available on Amazon Music and Amazon Music Unlimited'
    }
  ];

  const formatInstagramDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey across all social platforms. Get the latest updates, behind-the-scenes content, 
            and connect with our community of music lovers.
          </p>
        </div>

        {/* Social Media Grid */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Follow Us Everywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`${platform.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {platform.icon}
                        <div>
                          <h3 className="font-bold text-lg">{platform.name}</h3>
                          <p className="text-sm opacity-90">{platform.handle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{platform.followers}</div>
                        <div className="text-xs opacity-90">followers</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <div className="flex items-center text-sm text-secondary font-medium group-hover:text-primary transition-colors">
                      Follow Us
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-4">Latest from Instagram</h2>
            <p className="text-gray-600">See what we've been up to lately</p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg aspect-square"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.slice(0, 6).map((post, index) => (
                <a
                  key={post.id || index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    openInstagramContent(post.url);
                  }}
                >
                  <div className="relative aspect-square">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title || 'Instagram post'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                      {post.description ? post.description.slice(0, 100) + '...' : post.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/dannyandkrish/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
              View All Posts
            </a>
          </div>
        </section>

        {/* Newsletter & Community */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new releases, tour dates, and exclusive content. 
            Join thousands of fans in our growing community.
          </p>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          </div>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary px-6 py-3 rounded-r-lg hover:bg-opacity-80 transition-colors font-semibold">
              Join
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Connect;
