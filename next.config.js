import { imageOptimizer } from 'next/dist/server/image-optimizer'
import { headers } from './headers.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

export default nextConfig

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: headers
      }
    ]
  }
}