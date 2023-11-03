const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            }
        ],
    }
}

module.exports = nextConfig
