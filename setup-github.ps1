# PowerShell script to connect to GitHub
# Run this after creating the GitHub repository

Write-Host "🚀 Connecting to GitHub..." -ForegroundColor Green

# Add GitHub remote
git remote add origin https://github.com/dannyandkrish/dannyandkrish-website.git

# Push your code to GitHub
git push -u origin main

Write-Host "✅ Repository successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Your repository: https://github.com/dannyandkrish/dannyandkrish-website" -ForegroundColor Cyan
Write-Host "📝 Next step: Set up Azure Static Web Apps deployment" -ForegroundColor Yellow

# Open GitHub repository in browser
Start-Process "https://github.com/dannyandkrish/dannyandkrish-website"
