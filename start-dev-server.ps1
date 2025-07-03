# Danny & Krish Website Development Server Starter
# This script handles npm PATH issues and starts the React development server

Write-Host "Danny & Krish Website - Development Server" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Ensure we're in the correct directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

Write-Host "Working directory: $scriptDir" -ForegroundColor Gray

# Refresh PATH from system and user environment variables
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
Write-Host "PATH refreshed" -ForegroundColor Green

# Check if package.json exists
if (-not (Test-Path "package.json")) {
    Write-Host "package.json not found. Are you in the correct directory?" -ForegroundColor Red
    exit 1
}

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "node_modules not found. Installing dependencies..." -ForegroundColor Yellow
    try {
        & npm install
        Write-Host "Dependencies installed" -ForegroundColor Green
    } catch {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Dependencies already installed" -ForegroundColor Green
}

# Check if anything is running on port 3000
$port3000Process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000Process) {
    Write-Host "Port 3000 is already in use" -ForegroundColor Yellow
    Write-Host "The development server will automatically use a different port" -ForegroundColor Gray
}

# Start the development server
Write-Host "`nStarting React development server..." -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host "======================================`n" -ForegroundColor Cyan

try {
    & npm start
} catch {
    Write-Host "`nFailed to start development server" -ForegroundColor Red
    Write-Host "Trying alternative method..." -ForegroundColor Yellow
    
    # Try using full path to npm
    $npmPath = "C:\Program Files\nodejs\npm.cmd"
    if (Test-Path $npmPath) {
        & $npmPath start
    } else {
        Write-Host "Could not find npm. Please check your Node.js installation." -ForegroundColor Red
    }
}
