# Custom Domain Setup for Your Deployment

## Your Azure Static Web App Details
- **App Name**: swa-frsw23keuo5zk
- **Current URL**: https://ambitious-water-0f19277703.2.azurestaticapps.net
- **Resource Group**: rg-dannyandkrish-prod
- **Target Domain**: dannyandkrish.com

## Quick Setup Commands

### 1. Add Custom Domain via Azure CLI
```bash
# Add the root domain
az staticwebapp hostname set \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname dannyandkrish.com

# Add the www subdomain
az staticwebapp hostname set \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname www.dannyandkrish.com
```

### 2. Get DNS Validation Information
```bash
# Get validation details for root domain
az staticwebapp hostname show \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname dannyandkrish.com

# Get validation details for www subdomain  
az staticwebapp hostname show \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname www.dannyandkrish.com
```

## GoDaddy DNS Configuration

**⚠️ Important**: GoDaddy doesn't support ALIAS or ANAME records for apex domains. You have these options:

### Option 1: CNAME + Domain Forwarding (Recommended) ⭐
This approach maintains Azure's global distribution benefits while working with GoDaddy's limitations.

**Pros:**
- ✅ Keeps global CDN distribution benefits
- ✅ Better performance worldwide
- ✅ Automatic failover and load balancing
- ✅ Works with GoDaddy's native features

**Cons:**
- ⚠️ Requires two-step setup (DNS + Forwarding)
- ⚠️ Slight redirect delay for apex domain

### Option 2: A Record (Not Recommended) ⚠️
Direct IP mapping for apex domain.

**Pros:**
- ✅ Simple single DNS record
- ✅ No redirect needed

**Cons:**
- ❌ Loses global distribution benefits
- ❌ Traffic goes to single regional host
- ❌ Potential performance issues for global users
- ❌ No automatic failover

---

## Detailed Setup Instructions

### Option 1: CNAME + Domain Forwarding Setup (Recommended)

#### Step 1A: Set up CNAME Record in GoDaddy
1. Log into [GoDaddy Domain Manager](https://dcc.godaddy.com/manage/dns)
2. Find `dannyandkrish.com` and click "DNS"
3. Add CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: ambitious-water-0f19277703.2.azurestaticapps.net
   TTL: 1 Hour
   ```

#### Step 1B: Set up Domain Forwarding in GoDaddy
1. In GoDaddy, go to "Domain Settings" for `dannyandkrish.com`
2. Find "Forwarding" section
3. Click "Add Forwarding"
4. Configure forwarding:
   ```
   Forward to: https://www.dannyandkrish.com
   Forward type: Permanent (301)
   Settings: Forward only (recommended)
   ```

#### Step 1C: Add Azure Custom Domain
1. In Azure Portal, go to your Static Web App
2. Add custom domain for `www.dannyandkrish.com`
3. Use CNAME validation method
4. Add the TXT record provided by Azure to GoDaddy

### Option 2: A Record Setup (Alternative)

#### Step 2A: Get IP Address from Azure
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to `rg-dannyandkrish-prod` → `swa-frsw23keuo5zk`
3. Click "Overview" → "JSON View" (top-right corner)
4. Find and copy the `stableInboundIP` value

#### Step 2B: Set up A Record in GoDaddy
1. Log into [GoDaddy Domain Manager](https://dcc.godaddy.com/manage/dns)
2. Find `dannyandkrish.com` and click "DNS"
3. Add A record:
   ```
   Type: A
   Name: @ (for root domain)
   Value: [IP from Azure JSON View]
   TTL: 1 Hour
   ```

#### Step 2C: Add Azure Custom Domain
1. In Azure Portal, go to your Static Web App
2. Add custom domain for `dannyandkrish.com`
3. Add the TXT record provided by Azure to GoDaddy

### Required DNS Records Summary:
### Required DNS Records Summary:

#### For Option 1 (CNAME + Forwarding):
1. **CNAME Record for www subdomain**:
   ```
   Type: CNAME
   Name: www
   Value: ambitious-water-0f19277703.2.azurestaticapps.net
   TTL: 1 Hour
   ```

2. **TXT Record for Azure validation**:
   ```
   Type: TXT
   Name: _dnsauth.www
   Value: [Get this from Azure after adding www.dannyandkrish.com]
   TTL: 1 Hour
   ```

3. **Domain Forwarding** (configured in GoDaddy Domain Settings):
   ```
   Forward dannyandkrish.com → https://www.dannyandkrish.com
   Type: Permanent (301)
   ```

#### For Option 2 (A Record):
1. **A Record for root domain**:
   ```
   Type: A
   Name: @
   Value: [Get from Azure Portal JSON View - 'stableInboundIP' property]
   TTL: 1 Hour
   ```

2. **CNAME Record for www subdomain** (optional but recommended):
   ```
   Type: CNAME
   Name: www
   Value: ambitious-water-0f19277703.2.azurestaticapps.net
   TTL: 1 Hour
   ```

3. **TXT Records for Azure validation**:
   ```
   Type: TXT
   Name: _dnsauth
   Value: [Get this from Azure after adding dannyandkrish.com]
   TTL: 1 Hour
   
   Type: TXT
   Name: _dnsauth.www
   Value: [Get this from Azure after adding www.dannyandkrish.com]
   TTL: 1 Hour
   ```

## Step-by-Step Process

### Quick Decision Guide
**Choose your approach:**
- ✅ **Use Option 1** if you want the best performance and can handle domain forwarding setup
- ⚠️ **Use Option 2** only if domain forwarding doesn't work for your use case

---

### Option 1: Complete Setup (CNAME + Forwarding) - Recommended

#### Step 1: Add www Domain in Azure
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Resource Groups → `rg-dannyandkrish-prod`
3. Click on `swa-frsw23keuo5zk`
4. Go to "Custom domains" in the left menu
5. Click "+ Add custom domain"
6. Enter `www.dannyandkrish.com` (note the www prefix)
7. Choose "CNAME" validation method
8. Copy the TXT record value provided

#### Step 2: Configure DNS in GoDaddy
1. Log into [GoDaddy Domain Manager](https://dcc.godaddy.com/manage/dns)
2. Find `dannyandkrish.com` and click "DNS"
3. Add these records:
   - **CNAME Record**: `www` → `ambitious-water-0f19277703.2.azurestaticapps.net`
   - **TXT Record**: `_dnsauth.www` → `[validation code from Azure]`

#### Step 3: Set up Domain Forwarding
1. In GoDaddy, go to your domain's main page
2. Find "Domain Settings" or "Forwarding" section
3. Click "Manage" or "Add Forwarding"
4. Configure:
   - **Forward to**: `https://www.dannyandkrish.com`
   - **Redirect type**: `Permanent (301)`
   - **Settings**: `Forward only`

#### Step 4: Validate in Azure
1. Return to Azure Portal custom domains
2. Click "Validate" on your www domain
3. Wait for validation to complete

---

### Option 2: Complete Setup (A Record) - Alternative

#### Step 1: Get IP Address from Azure
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Resource Groups → `rg-dannyandkrish-prod`
3. Click on `swa-frsw23keuo5zk`
4. Click "Overview" → "JSON View" (top-right in Essentials section)
5. Find `"stableInboundIP"` and copy the IP address

#### Step 2: Add Both Domains in Azure
1. In your Static Web App, go to "Custom domains"
2. Add `dannyandkrish.com` (apex domain)
3. Add `www.dannyandkrish.com` (www subdomain)
4. Copy both TXT validation codes

#### Step 3: Configure DNS in GoDaddy
1. Log into [GoDaddy Domain Manager](https://dcc.godaddy.com/manage/dns)
2. Add these records:
   - **A Record**: `@` → `[IP from Azure JSON]`
   - **CNAME Record**: `www` → `ambitious-water-0f19277703.2.azurestaticapps.net`
   - **TXT Record**: `_dnsauth` → `[validation code for apex domain]`
   - **TXT Record**: `_dnsauth.www` → `[validation code for www domain]`

#### Step 4: Validate in Azure
1. Wait 5-30 minutes for DNS propagation
2. In Azure Portal, validate both domains
3. Check that both apex and www domains work

---

### Legacy Method Reference

#### Method A: Using Azure Portal
#### Method A: Using Azure Portal (General)
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Resource Groups → `rg-dannyandkrish-prod`
3. Click on `swa-frsw23keuo5zk`
4. Go to "Custom domains" in the left menu
5. Click "+ Add custom domain"
6. Enter your domain name
7. Note the validation TXT record provided

#### Method B: Using Azure CLI (General)
```bash
# For Option 1 (www domain only)
az staticwebapp hostname set \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname www.dannyandkrish.com

# For Option 2 (both domains)
az staticwebapp hostname set \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname dannyandkrish.com

az staticwebapp hostname set \
  --name swa-frsw23keuo5zk \
  --resource-group rg-dannyandkrish-prod \
  --hostname www.dannyandkrish.com
```

### Testing Your Setup

#### Test Option 1 (CNAME + Forwarding):
1. Visit `https://www.dannyandkrish.com` - should work directly
2. Visit `https://dannyandkrish.com` - should redirect to www version
3. Check that both show your website content

#### Test Option 2 (A Record):
1. Visit `https://dannyandkrish.com` - should work directly
2. Visit `https://www.dannyandkrish.com` - should work directly
3. Both should show your website content without redirects

## PowerShell Scripts for Domain Setup

### Option 1: CNAME + Forwarding Script
Save this as `setup-custom-domain-option1.ps1`:

```powershell
# Option 1: CNAME + Domain Forwarding Setup for Danny & Krish Website
Write-Host "Setting up custom domain using CNAME + Forwarding method..." -ForegroundColor Cyan

# Variables
$resourceGroup = "rg-dannyandkrish-prod"
$appName = "swa-frsw23keuo5zk"
$wwwDomain = "www.dannyandkrish.com"

Write-Host "Adding www subdomain..." -ForegroundColor Yellow
az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $wwwDomain

Write-Host "`nDNS Validation Information:" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

Write-Host "`nFor $wwwDomain :" -ForegroundColor White
$validationToken = az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $wwwDomain --query "validationToken" -o tsv
Write-Host "TXT Record: _dnsauth.www -> $validationToken" -ForegroundColor Yellow

Write-Host "`nGoDaddy Setup Steps:" -ForegroundColor Cyan
Write-Host "1. Add CNAME record: www -> ambitious-water-0f19277703.2.azurestaticapps.net" -ForegroundColor White
Write-Host "2. Add TXT record: _dnsauth.www -> $validationToken" -ForegroundColor White
Write-Host "3. Set up domain forwarding: dannyandkrish.com -> https://www.dannyandkrish.com" -ForegroundColor White
Write-Host "4. Wait 5-30 minutes for DNS propagation" -ForegroundColor White
Write-Host "5. Test at https://www.dannyandkrish.com and https://dannyandkrish.com" -ForegroundColor White
```

### Option 2: A Record Script
Save this as `setup-custom-domain-option2.ps1`:

```powershell
# Option 2: A Record Setup for Danny & Krish Website
Write-Host "Setting up custom domain using A Record method..." -ForegroundColor Cyan

# Variables
$resourceGroup = "rg-dannyandkrish-prod"
$appName = "swa-frsw23keuo5zk"
$rootDomain = "dannyandkrish.com"
$wwwDomain = "www.dannyandkrish.com"

# Get IP address
Write-Host "Getting Static Web App IP address..." -ForegroundColor Yellow
$staticWebApp = az staticwebapp show --name $appName --resource-group $resourceGroup -o json | ConvertFrom-Json
$ipAddress = $staticWebApp.stableInboundIP

if ($ipAddress) {
    Write-Host "IP Address found: $ipAddress" -ForegroundColor Green
} else {
    Write-Host "Warning: No IP address found. Check Azure Portal JSON View manually." -ForegroundColor Red
}

# Add custom domains
Write-Host "Adding root domain..." -ForegroundColor Yellow
az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $rootDomain

Write-Host "Adding www subdomain..." -ForegroundColor Yellow
az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $wwwDomain

# Get validation information
Write-Host "`nDNS Validation Information:" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

Write-Host "`nFor $rootDomain :" -ForegroundColor White
$rootValidation = az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $rootDomain --query "validationToken" -o tsv
Write-Host "TXT Record: _dnsauth -> $rootValidation" -ForegroundColor Yellow

Write-Host "`nFor $wwwDomain :" -ForegroundColor White
$wwwValidation = az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $wwwDomain --query "validationToken" -o tsv
Write-Host "TXT Record: _dnsauth.www -> $wwwValidation" -ForegroundColor Yellow

Write-Host "`nGoDaddy Setup Steps:" -ForegroundColor Cyan
if ($ipAddress) {
    Write-Host "1. Add A record: @ -> $ipAddress" -ForegroundColor White
} else {
    Write-Host "1. Add A record: @ -> [Get IP from Azure Portal JSON View]" -ForegroundColor White
}
Write-Host "2. Add CNAME record: www -> ambitious-water-0f19277703.2.azurestaticapps.net" -ForegroundColor White
Write-Host "3. Add TXT record: _dnsauth -> $rootValidation" -ForegroundColor White
Write-Host "4. Add TXT record: _dnsauth.www -> $wwwValidation" -ForegroundColor White
Write-Host "5. Wait 5-30 minutes for DNS propagation" -ForegroundColor White
Write-Host "6. Test at https://dannyandkrish.com and https://www.dannyandkrish.com" -ForegroundColor White
```

## Testing Commands

After DNS setup, test with these commands:

```bash
# Test DNS resolution
nslookup dannyandkrish.com
nslookup www.dannyandkrish.com

# Test TXT record
nslookup -type=TXT _dnsauth.dannyandkrish.com

# Test website
curl -I https://dannyandkrish.com
curl -I https://www.dannyandkrish.com
```

## Expected Timeline
- DNS propagation: 5-60 minutes
- SSL certificate: Up to 24 hours
- Full functionality: Within 24 hours

## Troubleshooting

### If domain validation fails:
1. Double-check TXT record value in GoDaddy
2. Wait longer for DNS propagation
3. Clear DNS cache: `ipconfig /flushdns` (Windows)

### If website doesn't load:
1. Verify CNAME record points to: `ambitious-water-0f19277703.2.azurestaticapps.net`
2. Check if DNS has propagated: https://dnschecker.org
3. Try accessing via HTTPS instead of HTTP

## Security Notes
- Azure automatically provisions SSL certificates
- HTTPS redirect is handled automatically
- Security headers are configured in `staticwebapp.config.json`

## Performance Comparison

### Option 1 (CNAME + Forwarding) Performance:
- ✅ **Global CDN**: Content served from nearest Azure edge location
- ✅ **Load Balancing**: Automatic traffic distribution
- ✅ **Failover**: Built-in redundancy
- ⚠️ **Apex Redirect**: One-time 301 redirect adds ~200-500ms delay

### Option 2 (A Record) Performance:
- ❌ **Single Region**: Traffic goes to one Azure region only
- ❌ **No Load Balancing**: Single point of failure
- ❌ **No Global CDN**: Users far from the region experience slower loading
- ✅ **No Redirect**: Direct access to both apex and www

## Final Recommendation

**For most use cases, choose Option 1 (CNAME + Forwarding)** because:
1. Better global performance for international visitors
2. More resilient architecture
3. Future-proof as Azure continues to expand globally
4. The redirect delay is minimal compared to performance gains

**Only choose Option 2 (A Record) if:**
- You absolutely cannot use domain forwarding
- All your users are in the same region as your Azure deployment
- You need both apex and www to work without any redirects

---

**Ready to proceed?**
1. Choose your preferred option (1 or 2)
2. Run the appropriate PowerShell script or follow manual steps
3. Configure DNS in GoDaddy
4. Wait for validation
5. Test your new domain!
