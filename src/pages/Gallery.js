import React, { useState, useEffect } from 'react';
import { getImageCollection } from '../utils/googleDrive';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery data using real Google Drive images and Instagram content from @dannyandkrish
  // Performance images from Google Drive + Instagram reels
  const performanceImages = getImageCollection('performance').map((img, index) => ({
    id: index + 1,
    src: img.url,
    thumbnail: img.url,
    title: `Live Performance ${index + 1}`,
    category: "live",
    description: "Danny & Krish bringing energy and passion to the stage during a live performance.",
    date: "2024-06-20",
    type: "image",
    filename: img.filename
  }));

  const heroImages = getImageCollection('hero').map((img, index) => ({
    id: index + 50,
    src: img.url,
    thumbnail: img.url,
    title: `Band Photo ${index + 1}`,
    category: "promotional",
    description: "Professional photos of Danny & Krish showcasing their musical partnership.",
    date: "2024-12-22",
    type: "image",
    filename: img.filename
  }));

  const candidImages = getImageCollection('candid').map((img, index) => ({
    id: index + 100,
    src: img.url,
    thumbnail: img.url,
    title: `Behind the Scenes ${index + 1}`,
    category: "studio",
    description: "Candid moments and behind-the-scenes glimpses of Danny & Krish's musical journey.",
    date: "2024-06-20",
    type: "image",
    filename: img.filename
  }));

  // Instagram reels and videos - using Google Drive images as thumbnails
  const instagramContent = [
    {
      id: 200,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: candidImages[0]?.src || "https://picsum.photos/400/300?random=9",
      title: "Studio Vibes 🎵",
      category: "reels",
      description: "Behind the scenes in the studio - new music coming soon! 🎶 #DannyAndKrish #StudioLife #NewMusic",
      date: "2024-06-15",
      type: "video",
      platform: "instagram"
    },
    {
      id: 201,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: performanceImages[0]?.src || "https://picsum.photos/400/300?random=10",
      title: "Live Energy ⚡",
      category: "reels",
      description: "That feeling when the crowd sings along! 🙌 Last night was incredible! #LiveMusic #DannyAndKrish #Concert",
      date: "2024-06-10",
      type: "video",
      platform: "instagram"
    },
    {
      id: 202,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: performanceImages[1]?.src || "https://picsum.photos/400/300?random=12",
      title: "Cover Reveal 🎤",
      category: "reels",
      description: "Sneak peek of our latest cover! Can you guess the song? 🤔 Full version out now on all platforms! #Cover #Music",
      date: "2024-06-01",
      type: "video",
      platform: "instagram"
    },
    {
      id: 203,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: candidImages[1]?.src || "https://picsum.photos/400/300?random=13",
      title: "Acoustic Sessions 🎸",
      category: "reels",
      description: "Nothing beats the raw emotion of an acoustic session 🎸✨ Which song should we do next? #Acoustic #DannyAndKrish",
      date: "2024-05-20",
      type: "video",
      platform: "instagram"
    },
    {
      id: 204,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: performanceImages[2]?.src || "https://picsum.photos/400/300?random=14",
      title: "Practice Makes Perfect 🎯",
      category: "reels",
      description: "Pre-show warmups hitting different today! 🔥 Ready to bring the energy tonight! #Practice #ShowPrep #Music",
      date: "2024-05-15",
      type: "video",
      platform: "instagram"
    },
    {
      id: 205,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: candidImages[2]?.src || "https://picsum.photos/400/300?random=15",
      title: "Fan Love 💙",
      category: "reels",
      description: "When fans know every word... this is why we do what we do! 💙 Thank you for the love! #Fans #Grateful #Music",
      date: "2024-05-10",
      type: "video",
      platform: "instagram"
    },
    {
      id: 206,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: heroImages[0]?.src || "https://picsum.photos/400/300?random=17",
      title: "Year End Recap 📸",
      category: "reels",
      description: "2023 was incredible! From sold-out shows to new releases - here's our year in 60 seconds! #YearInReview #2023",
      date: "2023-12-31",
      type: "video",
      platform: "instagram"
    },
    {
      id: 207,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: candidImages[3]?.src || "https://picsum.photos/400/300?random=18",
      title: "Original Song Preview 🎼",
      category: "reels",
      description: "First listen to our new original song! What do you think? Full release coming soon! 🎼✨ #Original #NewMusic #Preview",
      date: "2023-11-15",
      type: "video",
      platform: "instagram"
    },
    {
      id: 208,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: heroImages[1]?.src || "https://picsum.photos/400/300?random=19",
      title: "Duo Magic ✨",
      category: "reels",
      description: "When Danny & Krish create magic together! 🎼 The chemistry is real ✨ #DuoMagic #Chemistry #Music",
      date: "2024-06-25",
      type: "video",
      platform: "instagram"
    },
    {
      id: 209,
      src: "https://www.instagram.com/dannyandkrish/",
      thumbnail: candidImages[4]?.src || "https://picsum.photos/400/300?random=20",
      title: "Songwriting Process 📝",
      category: "reels",
      description: "From idea to melody... watch our songwriting process! 📝🎵 What should our next song be about? #Songwriting #Process",
      date: "2024-06-20",
      type: "video",
      platform: "instagram"
    }
  ];

  // Combine all images
  const images = [
    ...heroImages,
    ...performanceImages,
    ...candidImages,
    ...instagramContent
  ];

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'live', label: 'Live Performances' },
    { id: 'studio', label: 'Studio Sessions' },
    { id: 'promotional', label: 'Promotional' },
    { id: 'reels', label: 'Instagram Reels' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const openLightbox = (image) => {
    // For Instagram videos/reels, open in new tab
    if (image.type === 'video' && image.platform === 'instagram') {
      window.open(image.src, '_blank');
      return;
    }
    // For regular images, open in lightbox
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!lightboxImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    const newImage = filteredImages[newIndex];
    // Don't navigate to Instagram videos in lightbox
    if (newImage.type === 'video' && newImage.platform === 'instagram') {
      navigateLightbox(direction); // Skip to next/previous
      return;
    }
    
    setLightboxImage(newImage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through photos and videos. From live performances to behind-the-scenes moments, 
            discover the story of Danny & Krish through our lens.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
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

        {/* Image Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Gallery Grid - Masonry style for mixed orientations */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid mb-6"
              onClick={() => openLightbox(image)}
            >
              <div className="relative">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  style={{ minHeight: '200px', maxHeight: '400px' }}
                />
                
                {/* Video Indicator */}
                {image.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Platform Badge */}
                {image.platform && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Instagram
                    </span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1 truncate">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-xs mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  {image.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {new Date(image.date).toLocaleDateString()}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    image.type === 'video' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {image.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No media found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && lightboxImage.type === 'image' && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              {/* Image */}
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-screen object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded">
                <h3 className="font-semibold text-lg mb-2">{lightboxImage.title}</h3>
                <p className="text-gray-200 text-sm mb-2">{lightboxImage.description}</p>
                <p className="text-gray-300 text-xs">
                  {new Date(lightboxImage.date).toLocaleDateString()}
                  {lightboxImage.filename && ` • ${lightboxImage.filename}`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
