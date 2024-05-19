const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "cloud.appwrite.io",
        }]
    }
}

module.exports = nextConfig
