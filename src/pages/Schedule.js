import React, { useEffect } from 'react';
import { getImageByFilename } from '../utils/googleDrive';

const Schedule = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show schedule data with creatives - chronological order (past to future)
  const showSchedule = [
    // Past Shows (2024)
    {
      id: 1,
      title: "Acoustic Evening at Cafe Mocha",
      date: "2024-02-15",
      time: "7:00 PM",
      venue: "Cafe Mocha, Koramangala",
      city: "Bangalore",
      status: "completed",
      type: "acoustic",
      description: "Intimate acoustic performance featuring covers and original compositions",
      creativeImage: "IMG_5199.JPG", // Using available Google Drive image as creative
      ticketUrl: null,
      venueUrl: "https://maps.google.com"
    },
    {
      id: 2,
      title: "Spring Music Festival 2024",
      date: "2024-03-22",
      time: "6:30 PM",
      venue: "Phoenix MarketCity Amphitheater",
      city: "Bangalore",
      status: "completed",
      type: "festival",
      description: "Main stage performance at the city's biggest spring music festival",
      creativeImage: "IMG_5133.JPG",
      ticketUrl: null,
      venueUrl: "https://maps.google.com"
    },
    {
      id: 3,
      title: "Monsoon Melodies Live",
      date: "2024-06-10",
      time: "8:00 PM",
      venue: "The Music Club",
      city: "Bangalore",
      status: "completed",
      type: "live",
      description: "Special monsoon-themed show featuring regional and contemporary music",
      creativeImage: "IMG_5081.JPG",
      ticketUrl: null,
      venueUrl: "https://maps.google.com"
    },
    {
      id: 4,
      title: "College Fest Performance",
      date: "2024-07-05",
      time: "7:30 PM",
      venue: "IISc Auditorium",
      city: "Bangalore",
      status: "completed",
      type: "college",
      description: "High-energy performance for college students featuring popular covers",
      creativeImage: "IMG_5090.JPG",
      ticketUrl: null,
      venueUrl: "https://maps.google.com"
    },

    // Upcoming Shows (2025)
    {
      id: 5,
      title: "New Year Concert 2025",
      date: "2025-01-15",
      time: "8:00 PM",
      venue: "Palace Grounds",
      city: "Bangalore",
      status: "upcoming",
      type: "concert",
      description: "Grand concert to kick off the new year with special guests and surprises",
      creativeImage: "IMG_5132.JPG",
      ticketUrl: "https://bookmyshow.com",
      venueUrl: "https://maps.google.com"
    },
    {
      id: 6,
      title: "Valentine's Special Evening",
      date: "2025-02-14",
      time: "7:00 PM",
      venue: "The Leela Palace",
      city: "Bangalore",
      status: "upcoming",
      type: "special",
      description: "Romantic evening with love songs and couple dedications",
      creativeImage: "IMG_5148.JPG",
      ticketUrl: "https://bookmyshow.com",
      venueUrl: "https://maps.google.com"
    },
    {
      id: 7,
      title: "Summer Tour - Delhi",
      date: "2025-04-20",
      time: "8:30 PM",
      venue: "Siri Fort Auditorium",
      city: "Delhi",
      status: "upcoming",
      type: "tour",
      description: "Part of our nationwide summer tour - bringing our music to the capital",
      creativeImage: "IMG_5158.JPG",
      ticketUrl: "https://bookmyshow.com",
      venueUrl: "https://maps.google.com"
    },
    {
      id: 8,
      title: "Summer Tour - Mumbai",
      date: "2025-05-15",
      time: "8:00 PM",
      venue: "NCPA Theatre",
      city: "Mumbai",
      status: "upcoming",
      type: "tour",
      description: "Mumbai leg of our summer tour in the city of dreams",
      creativeImage: "IMG_5136.JPG",
      ticketUrl: "https://bookmyshow.com",
      venueUrl: "https://maps.google.com"
    },
    {
      id: 9,
      title: "Music Festival Headliner",
      date: "2025-07-30",
      time: "9:00 PM",
      venue: "Jayamahal Palace Grounds",
      city: "Bangalore",
      status: "upcoming",
      type: "festival",
      description: "Headlining the biggest music festival of the year",
      creativeImage: "IMG_5091.JPG",
      ticketUrl: "https://bookmyshow.com",
      venueUrl: "https://maps.google.com"
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-gray-100 text-gray-600';
      case 'upcoming':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'acoustic':
        return 'bg-yellow-100 text-yellow-700';
      case 'festival':
        return 'bg-purple-100 text-purple-700';
      case 'live':
        return 'bg-red-100 text-red-700';
      case 'college':
        return 'bg-blue-100 text-blue-700';
      case 'concert':
        return 'bg-indigo-100 text-indigo-700';
      case 'special':
        return 'bg-pink-100 text-pink-700';
      case 'tour':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Separate past and upcoming shows
  const pastShows = showSchedule.filter(show => show.status === 'completed');
  const upcomingShows = showSchedule.filter(show => show.status === 'upcoming');

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Show Schedule</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our past performances and upcoming shows. From intimate acoustic sessions 
            to grand festival stages, we bring our music to venues across the country.
          </p>
        </div>

        {/* Upcoming Shows */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-4">Upcoming Shows</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss out! Book your tickets now for our upcoming performances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map((show) => (
              <div key={show.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Show Creative Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={getImageByFilename(show.creativeImage)} 
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay with show info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(show.status)}`}>
                        {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeStyle(show.type)}`}>
                        {show.type.charAt(0).toUpperCase() + show.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Show Details */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {show.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatDate(show.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{show.venue}, {show.city}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {show.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {show.ticketUrl && (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-dark transition-colors"
                      >
                        Book Tickets
                      </a>
                    )}
                    <a
                      href={show.venueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors"
                    >
                      Venue
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Shows */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-4">Past Performances</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive the memories from our previous shows and performances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastShows.map((show) => (
              <div key={show.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Show Creative Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={getImageByFilename(show.creativeImage)} 
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusStyle(show.status)}`}>
                      Completed
                    </span>
                  </div>
                </div>

                {/* Show Details */}
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {show.title}
                  </h3>
                  
                  <div className="space-y-1 text-xs text-gray-600 mb-3">
                    <div>{formatDate(show.date)}</div>
                    <div>{show.venue}, {show.city}</div>
                  </div>

                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeStyle(show.type)}`}>
                    {show.type.charAt(0).toUpperCase() + show.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup for Show Updates */}
        <section className="mt-16 bg-gradient-to-r from-primary to-gray-800 rounded-lg p-8 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Never miss a show! Subscribe to our newsletter to get the latest updates on upcoming performances, 
            ticket releases, and exclusive behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
