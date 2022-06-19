/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,

  images: {
    domains: ['search.pstatic.net'],
  },
};

const withSass = require('@zeit/next-sass');
module.exports = withSass;
module.exports = nextConfig;
