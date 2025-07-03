# Custom Domain Setup - dannyandkrish.com

## Overview
This guide will help you connect your GoDaddy domain `dannyandkrish.com` to your Azure Static Web App.

## Prerequisites
- ✅ Azure Static Web App deployed
- ✅ GoDaddy domain `dannyandkrish.com` owned
- ✅ Access to Azure Portal
- ✅ Access to GoDaddy Domain Manager

## Step-by-Step Process

### Step 1: Get Your Azure Static Web App URL
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Static Web App resource
3. Note down the default URL (should look like: `https://YOUR-APP-NAME.azurestaticapps.net`)

### Step 2: Add Custom Domain in Azure
1. In Azure Portal, go to your Static Web App
2. Click on "Custom domains" in the left sidebar
3. Click "+ Add" to add a new custom domain
4. Enter your domain: `dannyandkrish.com`
5. Choose domain type: "Other" (for GoDaddy)
6. Azure will provide you with DNS validation details

### Step 3: Configure DNS in GoDaddy

#### For Root Domain (dannyandkrish.com):
1. Log into your GoDaddy account
2. Go to "My Products" → "DNS" for your domain
3. Add the following DNS records:

**Option A: Using CNAME (Recommended)**
```
Type: CNAME
Name: www
Value: YOUR-APP-NAME.azurestaticapps.net
TTL: 1 Hour
```

**Option B: Using A Records**
```
Type: A
Name: @
Value: [IP address provided by Azure]
TTL: 1 Hour
```

#### For www subdomain (www.dannyandkrish.com):
```
Type: CNAME
Name: www
Value: YOUR-APP-NAME.azurestaticapps.net
TTL: 1 Hour
```

#### DNS Validation Record:
Azure will provide a TXT record for validation:
```
Type: TXT
Name: _dnsauth
Value: [validation string provided by Azure]
TTL: 1 Hour
```

### Step 4: Verify DNS Configuration
1. Wait for DNS propagation (5-60 minutes)
2. In Azure Portal, click "Validate" on your custom domain
3. Azure will verify the DNS records and activate the custom domain

### Step 5: Configure HTTPS (Automatic)
Azure Static Web Apps automatically provides SSL certificates for custom domains once verified.

## DNS Records Summary

| Type | Name | Value | Purpose |
|------|------|--------|---------|
| CNAME | www | YOUR-APP-NAME.azurestaticapps.net | Routes www traffic |
| A or ALIAS | @ | [Azure IP or CNAME] | Routes root domain traffic |
| TXT | _dnsauth | [Azure validation string] | Domain verification |

## Important Notes

### DNS Propagation
- DNS changes can take 5-60 minutes to propagate
- Use tools like [DNS Checker](https://dnschecker.org) to verify propagation
- Clear your browser cache after changes

### SSL Certificate
- Azure automatically provides and manages SSL certificates
- HTTPS will be available within 24 hours of domain verification
- No additional configuration needed

### Redirect Configuration
To redirect `dannyandkrish.com` to `www.dannyandkrish.com` (or vice versa):
1. Configure both domains in Azure
2. Set up URL forwarding in GoDaddy if needed

## Troubleshooting

### Common Issues:
1. **DNS not propagating**: Wait longer, check TTL settings
2. **Validation failing**: Verify TXT record is correctly entered
3. **Site not loading**: Check CNAME/A record values
4. **SSL issues**: Wait 24 hours for certificate provisioning

### Verification Commands:
```bash
# Check DNS resolution
nslookup dannyandkrish.com
nslookup www.dannyandkrish.com

# Check TXT record
nslookup -type=TXT _dnsauth.dannyandkrish.com
```

## Alternative: Using Azure DNS

If you want more control, you can use Azure DNS:
1. Create an Azure DNS zone for `dannyandkrish.com`
2. Update nameservers in GoDaddy to point to Azure DNS
3. Manage all DNS records in Azure

## Final Steps

1. Test your domain: `https://dannyandkrish.com`
2. Test www version: `https://www.dannyandkrish.com`
3. Verify SSL certificate is working
4. Update any hard-coded URLs in your application
5. Update social media and marketing materials with new domain

## Monitoring

After setup:
- Monitor domain in Azure Portal
- Check SSL certificate expiration (auto-renewed)
- Monitor DNS health
- Test domain periodically

## Cost Considerations

- Custom domains on Azure Static Web Apps: **FREE**
- Azure DNS (if used): ~$0.50/month per zone
- GoDaddy domain: Your existing cost
- SSL certificates: **FREE** (auto-managed by Azure)

---

**Next Steps:**
1. Deploy this configuration
2. Test the custom domain setup
3. Update application URLs if needed
4. Announce the new domain!
