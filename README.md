# Angular 5 / ASP.NET Core Web API 2.1 / Azure AD / ADAL

Angular 5 app for sign in and sign out with Azure AD and call protected WebAPI

![angular net core azure ad](https://user-images.githubusercontent.com/17882425/50479338-3558ed00-09bd-11e9-93ac-9b3092cf5b21.png)

## Getting Started

### Requirements
Make sure you have installed all of the following prerequisites on your development machine:

1. Install [Node.js](https://nodejs.org/en/) and the npm package manager
2. Install [.NET Core 2.1](https://www.microsoft.com/net/download)
3. Install the Angular CLI

    ```bash
    npm install -g @angular/cli
    ```
    
4. Install the Concurrently package

    ```bash
    npm install -g concurrently
    ```

### Installation
1. Clone this repository

    ```bash
    git clone https://github.com/pimenta-arthur/angular-asp.net-core-aad.git
    cd angular-asp.net-core-aad
    ```

1. Install the npm packages

    ```bash
    npm install
    ```
    
## Setup

### Server
Update `appsettings.json` and set 
```
"AzureAd": {
  "Instance": "https://login.microsoftonline.com/",
  "Domain": "YOUR DOMAIN",
  "TenantId": "YOUR TENANT ID",
  "ClientId": "YOUR CLIENT ID",
  "ClientSecret": "YOUR CLIENT SECRET"
}
```
or alternatively set it in `user-secrets` [(Secret Manager) for the project](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets#secret-manage) 

### Client
Update `environment.ts` and set
```
adalConfig: {
  tenantId: 'YOUR TENANT ID',
  clientId: 'YOUR CLIENT ID'
}
```

### Azure Portal
Sign into portal.azure.com with an account that's an administrator on your tenant.
Navigate to Azure Active Directory in the left side bar > App registrations > Your app > All settings > Reply URLS.
Type the domain name where you're hosting your app (http://localhost:4200) and click Save.

## Running the app

1. Build and launch the angular app

    ``` bash
    npm start
    ```

2. Open the browser to http://localhost:4200
