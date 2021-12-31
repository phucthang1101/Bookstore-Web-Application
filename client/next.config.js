/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'HOUSE MAINTENANCE | D.C Finisher',
    API_DEVELOPMENT: 'https://ecommercestoreapi.azurewebsites.net/api',
    API_PRODUCTION: 'https://ecommercestoreapi.azurewebsites.net/api',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://dcfinisher.ca',
    FB_APP_ID: '1129925287385137',
  },
  Images: {
    domains: ['furns-react.netlify.app'],
  },
  //distDir: '../API/wwwroot',
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}
