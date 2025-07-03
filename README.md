# Danny & Krish - Official Band Website

[![Website](https://img.shields.io/badge/website-dannyandkrish.com-blue)](https://dannyandkrish.com)
[![GitHub](https://img.shields.io/badge/GitHub-dannyandkrish-181717?logo=github)](https://github.com/dannyandkrish/dannyandkrish-website)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078D4?logo=microsoft-azure)](https://azure.microsoft.com/en-us/services/app-service/static/)

A modern, responsive band website built with React and deployed on Azure Static Web Apps, featuring real Instagram content integration, Google Drive media management, and multilingual performance content.

**Repository:** [github.com/dannyandkrish/dannyandkrish-website](https://github.com/dannyandkrish/dannyandkrish-website)

## 🎵 Features

- **Responsive Design**: Beautiful, mobile-first design using Tailwind CSS
- **Instagram Integration**: Real-time Instagram reels and posts from @dannyandkrish
- **Interactive Gallery**: Photos and videos with lightbox viewer and category filtering
- **Music Player**: Custom-built audio player for streaming tracks
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Fast Performance**: Optimized for speed and SEO
- **Azure Integration**: Deployed on Azure Static Web Apps for global availability

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Fix npm path issues (Windows): `.\fix-npm-path.ps1`
4. Start development server: `npm start` or `.\start-dev-server.ps1`
5. Open http://localhost:3000 in your browser

### Updating Gallery Images

**🎯 Google Drive Integration Now Ready!**

The website now includes Google Drive integration for real band photos. See [GOOGLE_DRIVE_GUIDE.md](./GOOGLE_DRIVE_GUIDE.md) for complete instructions.

#### Quick Start with Your Google Drive Images:
1. Your folder is already connected: https://drive.google.com/drive/folders/1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV
2. Get file IDs for your images (right-click → Get link → extract ID from URL)
3. Update `src/utils/googleDrive.js` with real file IDs
4. Real images will automatically replace placeholders across the site!

#### Currently Available Images:
- **Hero/Promotional**: IMG_3111.jpg, IMG_3115.jpg, IMG_3131.jpg (Dec 2024)
- **Live Performance**: IMG_5199.JPG, IMG_5133.JPG, IMG_5081.JPG, etc. (June 2024)  
- **Behind-the-Scenes**: IMG_5136.JPG, photo-output.JPEG, and more

#### Alternative Method: Manual Image Replacement
If you prefer not to use Google Drive, you can still manually replace images:
```javascript
// In Gallery.js, replace placeholder URLs:
src: "https://picsum.photos/800/600?random=1"
// With your image URLs:
src: "https://your-image-hosting.com/your-image.jpg"
```

## 🏗️ Tech Stack

- **Frontend**: React 18, React Router
- **Styling**: Tailwind CSS, Custom CSS
- **Content**: Google Drive integration for media, Instagram API ready
- **Build Tool**: Create React App
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
dannyandkrish.com/
├── public/                # Static assets
│   ├── index.html
│   ├── manifest.json
│   └── staticwebapp.config.json
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── MusicPlayer.js
│   ├── pages/             # Page-level components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Music.js
│   │   ├── Gallery.js     # Instagram & media gallery
│   │   ├── Videos.js
│   │   ├── Connect.js
│   │   └── Contact.js
│   ├── styles/            # CSS styles
│   │   ├── App.css
│   │   └── index.css
│   ├── utils/             # Utility functions
│   │   ├── instagram.js   # Instagram content management
│   │   ├── forms.js
│   │   └── googleDriveInstructions.js
│   ├── App.js
│   └── index.js
├── api/                   # Azure Functions API
│   ├── host.json
│   ├── local.settings.json
│   ├── package.json
│   └── src/functions/
│       └── contact.js
├── azure-static-web-apps.yml  # Azure deployment pipeline
├── swa-cli.config.json
├── tailwind.config.js
├── postcss.config.js
├── fix-npm-path.ps1       # PowerShell script to fix npm PATH
├── start-dev-server.ps1   # Enhanced dev server starter
└── package.json
```

## 📁 Project Structure

```
dannyandkrish.com/
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.js         # Navigation component
│   │   ├── Footer.js         # Footer component
│   │   └── MusicPlayer.js    # Audio player component
│   ├── pages/                # Page-level components
│   │   ├── Home.js           # Landing page
│   │   ├── About.js          # Band information
│   │   ├── Music.js          # Music library
│   │   └── Contact.js        # Contact form
│   ├── styles/               # CSS files
│   │   ├── index.css         # Global styles
│   │   └── App.css           # Component styles
│   ├── utils/                # Utility functions
│   │   ├── instagram.js      # Instagram API integration
│   │   └── forms.js          # Form handling utilities
│   ├── App.js                # Main application component
│   └── index.js              # Application entry point
├── azure-static-web-apps.yml  # Azure deployment configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Project dependencies
```

## 🎨 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- **Primary**: #1a1a1a (Dark)
- **Secondary**: #ff6b35 (Orange)
- **Accent**: #ffd23f (Yellow)

### Fonts
- **Display**: Montserrat (headings)
- **Body**: Open Sans (body text)

### Adding Music
To add new tracks to the music library:
1. Add audio files to the `public/music/` directory
2. Update the `tracks` array in `src/pages/Music.js`
3. Include artwork in `public/images/artwork/`

### Instagram Content Management

The website pulls Instagram content from @dannyandkrish. To update:

1. **Adding New Instagram Reels/Posts**:
   - Edit `src/utils/instagram.js`
   - Add new entries to the `instagramContent` array
   - Use format: `https://www.instagram.com/dannyandkrish/` for profile link
   - For specific reels: `https://www.instagram.com/reel/REEL_ID/`

2. **Gallery Integration**:
   - Instagram content appears in the Gallery page
   - Videos automatically open Instagram in a new tab when clicked
   - Use appropriate hashtags and emojis for authentic feel

3. **Auto-Update Setup** (Optional):
   - Consider Instagram Basic Display API for automated content fetching
   - Requires Facebook Developer account and app approval

## 🌐 Deployment

### Azure Static Web Apps

The website is configured for deployment on Azure Static Web Apps with automatic CI/CD through GitHub Actions.

1. **Fork this repository** to your GitHub account

2. **Create an Azure Static Web App**:
   - Go to Azure Portal
   - Create a new Static Web App resource
   - Connect it to your GitHub repository
   - Set build configuration:
     - App location: `/`
     - Build location: `build`
     - Output location: `build`

3. **Automatic Deployment**:
   - GitHub Actions will automatically deploy on push to main branch
   - Configuration is in `.github/workflows/azure-static-web-apps-*.yml`

### Manual Build

To build the project manually:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_instagram_token
REACT_APP_CONTACT_EMAIL=hello@dannyandkrish.com
REACT_APP_ANALYTICS_ID=your_analytics_id
```

### Instagram Integration

To enable Instagram feed:
1. Get an Instagram Basic Display API access token
2. Add it to your environment variables
3. Update the Instagram API calls in `src/utils/instagram.js`

## 📱 PWA Features

The website includes Progressive Web App features:
- Responsive design for mobile devices
- Offline functionality (service worker ready)
- App-like experience when installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email hello@dannyandkrish.com or create an issue in this repository.

## 🎵 About Danny & Krish

Danny and Krish are a musical duo creating authentic music that bridges cultures and generations. Their sound blends acoustic warmth with electronic innovation, resulting in a unique musical experience that resonates with audiences worldwide.

---

Made with ❤️ by Danny & Krish

## 🛠️ Development Troubleshooting

### npm PATH Issues on Windows

If you encounter "npm is not recognized as an internal or external command":

**Quick Fix:**
```powershell
# Run the automated fix script
.\fix-npm-path.ps1

# Or use the enhanced development server
.\start-dev-server.ps1
```

**Manual Fix:**
```powershell
# Refresh PATH in current session
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
npm start
```

**Permanent Fix:**
1. Add `C:\Program Files\nodejs` to your Windows PATH environment variable
2. Restart VS Code or your terminal
3. Run `npm start` normally

### Common Development Issues

- **Port 3000 already in use**: The dev server will automatically use port 3001
- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Styling issues**: Check if Tailwind CSS is compiling correctly

## 📸 Instagram Content Management

### Setting Up Real Instagram Content

The website includes Instagram integration for displaying real content from @dannyandkrish:

1. **Update Instagram URLs**: Edit `src/utils/instagram.js`
   ```javascript
   // Replace placeholder URLs with real Instagram post/reel URLs
   url: 'https://www.instagram.com/p/REAL_POST_ID/',
   ```

2. **Get Real Instagram URLs**:
   - Go to instagram.com/dannyandkrish
   - Right-click on any post or reel → "Copy link"
   - Replace placeholder URLs in the content arrays

3. **Update Content**:
   - Edit titles and descriptions to match actual content
   - Update hashtags to match what's actually used
   - Replace Google Drive thumbnail IDs with actual thumbnails

4. **Content Categories**:
   - `reels`: Instagram reels and video content
   - `live`: Live performance content
   - `studio`: Behind-the-scenes studio content
   - `promotional`: Announcements, album covers, etc.
   - `events`: Event photos and coverage

### Google Drive Image Integration

The gallery uses Google Drive for hosting images:

1. **Upload images to Google Drive**
2. **Make them publicly viewable**
3. **Copy the file ID from the sharing URL**
4. **Update the image URLs**: `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`

See `src/utils/googleDriveInstructions.js` for detailed steps.
