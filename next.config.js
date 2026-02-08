/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Allow unoptimized images for local development
  },
}

module.exports = nextConfig
