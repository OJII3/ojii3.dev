const securityHeaders = require('./security/security-headers')
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  exportPathMap(defaultMap, ctx) {
    ctx.outDir = 'docs'
  }
}

nextConfig.headers = async () => {
  return [
    {
      source: '/(.*)',
      headers: securityHeaders
    }
  ]
}

module.exports = withVanillaExtract(nextConfig)
