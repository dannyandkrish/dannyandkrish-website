#!/bin/bash
# Commands to run after creating GitHub repository

# Add GitHub remote (replace 'dannyandkrish' with your actual GitHub username if different)
git remote add origin https://github.com/dannyandkrish/dannyandkrish-website.git

# Push your code to GitHub
git push -u origin main

echo "✅ Repository successfully pushed to GitHub!"
echo "🌐 Your repository: https://github.com/dannyandkrish/dannyandkrish-website"
echo "📝 Next step: Set up Azure Static Web Apps deployment"
