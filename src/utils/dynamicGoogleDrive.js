// Enhanced Google Drive utility with dynamic folder support
// This creates a more organized way to manage videos by folders

// Define your Google Drive folder structure
export const driveFolders = {
  videos: {
    folderId: '1-3SCmepB8xIDFON-1zJR3IF82WGOSfjD',
    subfolders: {
      performances: {
        name: 'Live Performances',
        description: 'Live stage performances',
        videos: {
          'alehouse-video.mp4': {
            id: 'PLACEHOLDER_VIDEO_ID_1',
            title: 'Alehouse - Live Performance',
            language: 'English',
            duration: '4:32',
            date: '2024-06-20'
          }
        }
      },
      studio: {
        name: 'Studio Sessions',
        description: 'Recording studio content',
        videos: {
          'hindi-performance.mp4': {
            id: 'PLACEHOLDER_VIDEO_ID_2',
            title: 'Hindi Performance Showcase',
            language: 'Hindi',
            duration: '6:45',
            date: '2024-06-15'
          }
        }
      },
      multilingual: {
        name: 'Multilingual Collection',
        description: 'Songs in different languages',
        videos: {
          'english-performance.mp4': {
            id: 'PLACEHOLDER_VIDEO_ID_3',
            title: 'English Acoustic Session',
            language: 'English',
            duration: '5:20',
            date: '2024-06-10'
          },
          'telugu-performance.mp4': {
            id: 'PLACEHOLDER_VIDEO_ID_4',
            title: 'Telugu Musical Journey',
            language: 'Telugu',
            duration: '7:15',
            date: '2024-06-05'
          },
          'tamil-performance.mp4': {
            id: 'PLACEHOLDER_VIDEO_ID_5',
            title: 'Tamil Classics Performance',
            language: 'Tamil',
            duration: '6:30',
            date: '2024-06-01'
          }
        }
      }
    }
  }
};

// Helper function to get all videos from a subfolder
export const getVideosBySubfolder = (subfolderName) => {
  const subfolder = driveFolders.videos.subfolders[subfolderName];
  if (!subfolder) return [];
  
  return Object.entries(subfolder.videos).map(([filename, videoData]) => ({
    filename,
    ...videoData,
    embedUrl: videoData.id && !videoData.id.startsWith('PLACEHOLDER') 
      ? `https://drive.google.com/file/d/${videoData.id}/preview`
      : null,
    category: subfolderName
  })).filter(video => video.embedUrl); // Only return videos with real IDs
};

// Helper function to get all videos across all subfolders
export const getAllVideos = () => {
  const allVideos = [];
  Object.keys(driveFolders.videos.subfolders).forEach(subfolderName => {
    const videos = getVideosBySubfolder(subfolderName);
    allVideos.push(...videos);
  });
  return allVideos;
};

// Helper function to get subfolder metadata
export const getSubfolderInfo = (subfolderName) => {
  const subfolder = driveFolders.videos.subfolders[subfolderName];
  if (!subfolder) return null;
  
  return {
    name: subfolder.name,
    description: subfolder.description,
    videoCount: Object.keys(subfolder.videos).length,
    availableVideos: getVideosBySubfolder(subfolderName).length
  };
};

// Helper function to generate dynamic sections for Videos page
export const getDynamicVideoSections = () => {
  return Object.keys(driveFolders.videos.subfolders).map(subfolderName => {
    const info = getSubfolderInfo(subfolderName);
    const videos = getVideosBySubfolder(subfolderName);
    
    return {
      id: subfolderName,
      name: info.name,
      description: info.description,
      videos: videos,
      hasContent: videos.length > 0
    };
  }).filter(section => section.hasContent); // Only return sections with actual videos
};

// Batch update helper - easier way to update multiple video IDs
export const updateVideoIds = (updates) => {
  Object.entries(updates).forEach(([path, newId]) => {
    const [subfolderName, filename] = path.split('/');
    if (driveFolders.videos.subfolders[subfolderName]?.videos[filename]) {
      driveFolders.videos.subfolders[subfolderName].videos[filename].id = newId;
    }
  });
};

// Usage example:
/*
// Update multiple video IDs at once:
updateVideoIds({
  'performances/alehouse-video.mp4': '1ABC123...',
  'studio/hindi-performance.mp4': '1XYZ789...',
  'multilingual/english-performance.mp4': '1DEF456...'
});
*/
