import React, { useEffect } from 'react';
import { getImageCollection, getImageByFilename } from '../utils/googleDrive';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get Google Drive images for the About page
  const aboutImages = getImageCollection('about');
  const candidImages = getImageCollection('candid');
  
  // Helper function to get an image or fallback
  const getImageSafe = (index, collection, fallback) => {
    return collection && collection[index] ? collection[index].url : fallback;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">About Danny & Krish</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Two souls, one sound. Danny and Krish create music that transcends boundaries, 
            blending heartfelt lyrics with captivating melodies that speak to the human experience.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Danny and Krish's musical journey began with a shared passion for authentic storytelling 
                through song. What started as casual jam sessions between friends has evolved into a 
                powerful musical partnership that creates deeply emotional and relatable music.
              </p>
              <p>
                Their sound is a unique blend of contemporary folk, indie pop, and acoustic elements, 
                characterized by intricate harmonies, thoughtful lyrics, and a chemistry that's 
                unmistakable both in the studio and on stage.
              </p>
              <p>
                With each song, Danny & Krish invite listeners into their world—one filled with 
                honest reflections on love, life, growth, and the connections that bind us all together.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={getImageSafe(0, aboutImages, "https://picsum.photos/600/750?random=101")} 
                alt="Danny & Krish performing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Individual Profiles */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Meet the Artists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Danny Profile */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={getImageSafe(1, aboutImages, "https://picsum.photos/400/400?random=102")} 
                  alt="Danny"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Danny</h3>
              <p className="text-gray-600 leading-relaxed">
                Danny brings a soulful voice and intuitive songwriting to the duo. With a background 
                in classical training and a heart for contemporary storytelling, Danny's vocals 
                and guitar work form the emotional core of their sound. His ability to craft 
                melodies that linger long after the song ends is what makes their music unforgettable.
              </p>
            </div>

            {/* Krish Profile */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={getImageSafe(2, aboutImages, "https://picsum.photos/400/400?random=103")} 
                  alt="Krish"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Krish</h3>
              <p className="text-gray-600 leading-relaxed">
                Krish adds depth and complexity to their arrangements with his multi-instrumental 
                talents and keen ear for harmony. From keyboards to percussion, and backing vocals 
                that perfectly complement Danny's lead, Krish's musical versatility and creative 
                production ideas help shape the duo's distinctive sound.
              </p>
            </div>
          </div>
        </div>

        {/* Musical Journey Timeline */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Musical Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">2023 - The Beginning</h4>
                  <p className="text-gray-600">
                    Danny and Krish met through mutual friends and discovered their incredible 
                    musical chemistry during their first jam session together.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">2024 - First Performances</h4>
                  <p className="text-gray-600">
                    The duo began performing at local venues, quickly gaining a following for 
                    their authentic sound and engaging live performances.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">2024 - Studio Work</h4>
                  <p className="text-gray-600">
                    Currently working on their debut EP, focusing on songs that showcase 
                    their range and the depth of their musical partnership.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Present - Growing Audience</h4>
                  <p className="text-gray-600">
                    Building a community of listeners who connect deeply with their music, 
                    with an active presence on social media and streaming platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Style & Influences */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Musical Style & Influences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Acoustic Folk</h3>
                <p className="text-gray-600 text-sm">
                  Drawing from traditional folk storytelling with contemporary acoustic arrangements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Indie Pop</h3>
                <p className="text-gray-600 text-sm">
                  Modern production techniques with catchy melodies and thoughtful arrangements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Harmonic Vocals</h3>
                <p className="text-gray-600 text-sm">
                  Rich vocal harmonies that create depth and emotional resonance in every song
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-secondary to-purple-600 rounded-lg p-12 text-white">
          <h2 className="font-display text-3xl font-bold mb-4">Join Our Musical Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Follow us on social media and streaming platforms to be the first to hear new releases 
            and see behind-the-scenes content from our musical journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/connect"
              className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Follow Us
            </a>
            <a
              href="/music"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-all"
            >
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
