# Custom Domain Setup Script for Danny & Krish Website
# This script automates the Azure Static Web App custom domain configuration

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Danny & Krish - Custom Domain Setup   " -ForegroundColor Cyan  
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Variables
$resourceGroup = "rg-dannyandkrish-prod"
$appName = "swa-frsw223keuo5zk"
$rootDomain = "dannyandkrish.com"
$wwwDomain = "www.dannyandkrish.com"
$currentUrl = "ambitious-water-0f19277703.2.azurestaticapps.net"

Write-Host "Configuration:" -ForegroundColor Yellow
Write-Host "  Resource Group: $resourceGroup" -ForegroundColor Gray
Write-Host "  App Name: $appName" -ForegroundColor Gray
Write-Host "  Current URL: https://$currentUrl" -ForegroundColor Gray
Write-Host "  Target Domain: $rootDomain" -ForegroundColor Gray
Write-Host ""

# Check if Azure CLI is logged in
Write-Host "Checking Azure CLI authentication..." -ForegroundColor Yellow
try {
    $account = az account show 2>$null | ConvertFrom-Json
    if ($account) {
        Write-Host "✓ Logged in as: $($account.user.name)" -ForegroundColor Green
    } else {
        Write-Host "✗ Not logged in to Azure CLI" -ForegroundColor Red
        Write-Host "Please run: az login" -ForegroundColor White
        exit 1
    }
}
catch {
    Write-Host "✗ Azure CLI not found or not working" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Add custom domains
Write-Host "Step 1: Adding custom domains to Azure Static Web App..." -ForegroundColor Cyan
Write-Host ""

Write-Host "Adding root domain ($rootDomain)..." -ForegroundColor Yellow
try {
    az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $rootDomain --output none
    Write-Host "✓ Root domain added successfully" -ForegroundColor Green
}
catch {
    Write-Host "✗ Failed to add root domain" -ForegroundColor Red
    Write-Host "This might be normal if domain is already added" -ForegroundColor Gray
}

Write-Host "Adding www subdomain ($wwwDomain)..." -ForegroundColor Yellow
try {
    az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $wwwDomain --output none
    Write-Host "✓ WWW subdomain added successfully" -ForegroundColor Green
}
catch {
    Write-Host "✗ Failed to add www subdomain" -ForegroundColor Red
    Write-Host "This might be normal if domain is already added" -ForegroundColor Gray
}

Write-Host ""

# Get validation information
Write-Host "Step 2: Getting DNS validation information..." -ForegroundColor Cyan
Write-Host ""

Write-Host "DNS Records to add in GoDaddy:" -ForegroundColor White
Write-Host "===============================" -ForegroundColor White
Write-Host ""

# Get validation tokens
Write-Host "1. TXT Record for domain validation:" -ForegroundColor Yellow
try {
    $rootValidation = az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $rootDomain --query "validationToken" -o tsv 2>$null
    if ($rootValidation) {
        Write-Host "   Type: TXT" -ForegroundColor White
        Write-Host "   Name: _dnsauth" -ForegroundColor White
        Write-Host "   Value: $rootValidation" -ForegroundColor Green
        Write-Host "   TTL: 1 Hour" -ForegroundColor White
    } else {
        Write-Host "   ⚠ Could not get validation token for root domain" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "   ⚠ Error getting validation token" -ForegroundColor Yellow
}

Write-Host ""

Write-Host "2. CNAME Record for www subdomain:" -ForegroundColor Yellow
Write-Host "   Type: CNAME" -ForegroundColor White
Write-Host "   Name: www" -ForegroundColor White
Write-Host "   Value: $currentUrl" -ForegroundColor Green
Write-Host "   TTL: 1 Hour" -ForegroundColor White

Write-Host ""

Write-Host "3. A Record for root domain:" -ForegroundColor Yellow
Write-Host "   Type: A" -ForegroundColor White
Write-Host "   Name: @ (root)" -ForegroundColor White
Write-Host "   Value: [Get from Azure Portal - Static Web Apps don't provide IP]" -ForegroundColor Yellow
Write-Host "   Alternative: Use ALIAS record pointing to $currentUrl" -ForegroundColor Gray
Write-Host "   TTL: 1 Hour" -ForegroundColor White

Write-Host ""
Write-Host "===============================" -ForegroundColor White

# Instructions
Write-Host ""
Write-Host "Step 3: Next Steps" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Log into GoDaddy Domain Manager:" -ForegroundColor White
Write-Host "   → https://dcc.godaddy.com/manage/dns" -ForegroundColor Blue
Write-Host ""
Write-Host "2. Find 'dannyandkrish.com' and click 'DNS'" -ForegroundColor White
Write-Host ""
Write-Host "3. Add the DNS records shown above" -ForegroundColor White
Write-Host ""
Write-Host "4. Wait 5-30 minutes for DNS propagation" -ForegroundColor White
Write-Host ""
Write-Host "5. Validate the domain in Azure Portal:" -ForegroundColor White
Write-Host "   → https://portal.azure.com" -ForegroundColor Blue
Write-Host "   → Resource Groups → rg-dannyandkrish-prod → swa-frsw223keuo5zk" -ForegroundColor Gray
Write-Host "   → Custom domains → Click 'Validate' next to your domain" -ForegroundColor Gray
Write-Host ""
Write-Host "6. Test your domain:" -ForegroundColor White
Write-Host "   → https://dannyandkrish.com" -ForegroundColor Blue
Write-Host "   → https://www.dannyandkrish.com" -ForegroundColor Blue

Write-Host ""
Write-Host "Validation Commands (run after DNS setup):" -ForegroundColor Yellow
Write-Host "nslookup dannyandkrish.com" -ForegroundColor Gray
Write-Host "nslookup www.dannyandkrish.com" -ForegroundColor Gray
Write-Host "nslookup -type=TXT _dnsauth.dannyandkrish.com" -ForegroundColor Gray

Write-Host ""
Write-Host "Expected Timeline:" -ForegroundColor Yellow
Write-Host "  DNS propagation: 5-60 minutes" -ForegroundColor Gray
Write-Host "  SSL certificate: Up to 24 hours" -ForegroundColor Gray
Write-Host "  Full functionality: Within 24 hours" -ForegroundColor Gray

Write-Host ""
Write-Host "🎉 Custom domain setup initiated!" -ForegroundColor Green
Write-Host "Complete the DNS configuration in GoDaddy to finish the setup." -ForegroundColor White
Write-Host ""
