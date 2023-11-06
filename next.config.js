/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com','t4.ftcdn.net'],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig
