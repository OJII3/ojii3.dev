const imageOptimizer = require('next/dist/server/image-optimizer')
const headers  = require('./headers.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig