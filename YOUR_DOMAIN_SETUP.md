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

### Option 1: Use CNAME for www + Domain Forwarding (Recommended)
- Set up CNAME record for `www` subdomain
- Use GoDaddy's domain forwarding to redirect `dannyandkrish.com` → `www.dannyandkrish.com`

### Option 2: Use A Record (Not Recommended)
- Use A record for apex domain (loses global distribution benefits)
- Get IP from Azure Portal JSON View

### Required DNS Records:
1. **CNAME Record for www**:
   ```
   Type: CNAME
   Name: www
   Value: ambitious-water-0f19277703.2.azurestaticapps.net
   TTL: 1 Hour
   ```

2. **A Record for root domain** (Alternative to ALIAS/ANAME):
   ```
   Type: A
   Name: @
   Value: [Get from Azure Portal JSON View - 'stableInboundIP' property]
   TTL: 1 Hour
   ```
   
   **Note**: A records are not recommended for Static Web Apps as they:
   - Direct traffic to a single regional host (no global distribution benefits)
   - May affect performance for globally distributed traffic
   - Consider using ALIAS, ANAME, or domain forwarding instead

3. **TXT Record for validation**:
   ```
   Type: TXT
   Name: _dnsauth
   Value: [Get this from Azure after adding domain]
   TTL: 1 Hour
   ```

## Step-by-Step Process

### Step 1: Add Domain in Azure (Choose one method)

#### Method A: Using Azure Portal
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Resource Groups → `rg-dannyandkrish-prod`
3. Click on `swa-frsw23keuo5zk`
4. Go to "Custom domains" in the left menu
5. Click "+ Add custom domain"
6. Enter `dannyandkrish.com`
7. Note the validation TXT record provided

**To get the IP address for A record (if needed):**
1. In your Static Web App, click "Overview"
2. In the top-right corner of the "Essentials" section, click "JSON View"
3. Look for the `stableInboundIP` property and copy its value
4. Use this IP in your A record configuration

#### Method B: Using Azure CLI (Faster)
Run the commands provided above in your terminal.

### Step 2: Configure GoDaddy DNS
1. Log into [GoDaddy Domain Manager](https://dcc.godaddy.com/manage/dns)
2. Find `dannyandkrish.com` and click "DNS"
3. Add the DNS records as specified above

### Step 3: Validate Domain
1. Wait 5-30 minutes for DNS propagation
2. In Azure Portal, click "Validate" on your custom domain
3. Or use CLI: `az staticwebapp hostname show` commands above

### Step 4: Test Your Domain
- Visit: https://dannyandkrish.com
- Visit: https://www.dannyandkrish.com
- Check SSL certificate is working

## PowerShell Script for Domain Setup

Save this as `setup-custom-domain.ps1`:

```powershell
# Custom Domain Setup Script for Danny & Krish Website
Write-Host "Setting up custom domain for dannyandkrish.com..." -ForegroundColor Cyan

# Variables
$resourceGroup = "rg-dannyandkrish-prod"
$appName = "swa-frsw23keuo5zk"
$rootDomain = "dannyandkrish.com"
$wwwDomain = "www.dannyandkrish.com"

# Add custom domains
Write-Host "Adding root domain..." -ForegroundColor Yellow
az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $rootDomain

Write-Host "Adding www subdomain..." -ForegroundColor Yellow
az staticwebapp hostname set --name $appName --resource-group $resourceGroup --hostname $wwwDomain

# Get validation information
Write-Host "`nDNS Validation Information:" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

Write-Host "`nFor $rootDomain :" -ForegroundColor White
az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $rootDomain --query "validationToken" -o tsv

Write-Host "`nFor $wwwDomain :" -ForegroundColor White
az staticwebapp hostname show --name $appName --resource-group $resourceGroup --hostname $wwwDomain --query "validationToken" -o tsv

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Add the TXT records shown above to GoDaddy DNS" -ForegroundColor White
Write-Host "2. Add CNAME record: www → ambitious-water-0f19277703.2.azurestaticapps.net" -ForegroundColor White
Write-Host "3. Wait 5-30 minutes for DNS propagation" -ForegroundColor White
Write-Host "4. Test your domain at https://dannyandkrish.com" -ForegroundColor White
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

---

**Ready to proceed?**
1. Run the Azure CLI commands to add the domain
2. Configure DNS in GoDaddy
3. Wait for validation
4. Test your new domain!
