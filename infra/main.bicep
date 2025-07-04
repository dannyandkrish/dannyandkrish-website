// Main infrastructure for Danny & Krish website deployment
// This Bicep template creates an Azure Static Web App with GitHub integration

targetScope = 'resourceGroup'

// =================================================================================================
// PARAMETERS
// =================================================================================================

@description('The name of the environment (e.g., dev, staging, prod)')
param environmentName string

@description('The Azure region/location for resources')
param location string = resourceGroup().location

@description('The GitHub repository URL (e.g., https://github.com/dannyandkrish/dannyandkrish-website)')
param repositoryUrl string = 'https://github.com/dannyandkrish/dannyandkrish-website'

@description('The GitHub repository branch to deploy from')
param branch string = 'main'

@description('GitHub personal access token for repository access')
@secure()
param repositoryToken string = ''

@description('Google Drive folder ID for media content')
param googleDriveFolderId string = '1--sD0BmDFnLyKoQLLuq9E-tCW-EmKksV'

@description('Instagram profile handle')
param instagramProfile string = 'dannyandkrish'

@description('YouTube channel handle')
param youtubeChannel string = '@dannyandkrish'

// =================================================================================================
// VARIABLES
// =================================================================================================

// Create a resource token from environment name, subscription ID, and resource group ID for unique naming
var resourceToken = toLower(uniqueString(subscription().id, resourceGroup().id, environmentName))

// Resource naming with consistent pattern
var staticWebAppName = 'swa-${resourceToken}'
var logAnalyticsWorkspaceName = 'log-${resourceToken}'
var applicationInsightsName = 'appi-${resourceToken}'

// Common tags for all resources
var tags = {
  Environment: environmentName
  Project: 'dannyandkrish-website'
  ManagedBy: 'azd'
  'azd-env-name': environmentName
}

// =================================================================================================
// MONITORING & LOGGING
// =================================================================================================

// Log Analytics Workspace for monitoring and diagnostics
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: logAnalyticsWorkspaceName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      searchVersion: 1
      legacy: 0
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// Application Insights for application monitoring
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// =================================================================================================
// STATIC WEB APP
// =================================================================================================

// Azure Static Web App for hosting the React application
resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: staticWebAppName
  location: location
  tags: union(tags, {
    'azd-service-name': 'dannyandkrish-website'
  })
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    // GitHub repository configuration
    repositoryUrl: repositoryUrl
    branch: branch
    repositoryToken: repositoryToken
    
    // Build configuration for React app
    buildProperties: {
      appLocation: '/'
      apiLocation: 'api'
      outputLocation: 'build'
      appBuildCommand: 'npm run build'
      skipGithubActionWorkflowGeneration: false
    }
    
    // Security and networking
    publicNetworkAccess: 'Enabled'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    
    // Enterprise features (available in Standard tier)
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

// =================================================================================================
// OUTPUTS
// =================================================================================================

@description('The URL of the deployed Static Web App')
output AZURE_STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'

@description('The name of the Static Web App')
output AZURE_STATIC_WEB_APP_NAME string = staticWebApp.name

@description('The resource ID of the Static Web App')
output AZURE_STATIC_WEB_APP_ID string = staticWebApp.id

@description('The Application Insights Instrumentation Key')
output APPINSIGHTS_INSTRUMENTATIONKEY string = applicationInsights.properties.InstrumentationKey

@description('The Application Insights Connection String')
output APPLICATIONINSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString

@description('The Log Analytics Workspace ID')
output LOG_ANALYTICS_WORKSPACE_ID string = logAnalyticsWorkspace.id

@description('The resource group ID')
output RESOURCE_GROUP_ID string = resourceGroup().id

@description('The Azure location where resources are deployed')
output AZURE_LOCATION string = location

@description('The Azure tenant ID')
output AZURE_TENANT_ID string = tenant().tenantId

@description('The main web URI (same as Static Web App URL)')
output WEB_URI string = 'https://${staticWebApp.properties.defaultHostname}'
