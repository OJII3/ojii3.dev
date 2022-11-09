const securityHeaders = require('./security/security-headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

nextConfig.headers = async () => {
  return [
    {
      source: '/(.*)',
      headers: securityHeaders
    }
  ]
}

module.exports = nextConfig
