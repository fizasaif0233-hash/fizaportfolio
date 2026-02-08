/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/fizaportfolio',
  assetPrefix: '/fizaportfolio/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
