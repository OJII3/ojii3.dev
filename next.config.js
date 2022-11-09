const imageOptimizer = require('next/dist/server/image-optimizer')
const securityHeaders = require('./security-headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        securityHeaders
      }
    ]
  }
}

module.exports = nextConfig