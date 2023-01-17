/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.genius.com',
  //       port: '3000',
  //       pathname: '/images.genius.com/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['images.genius.com', 'assets.genius.com'],
}
}

module.exports = nextConfig;
