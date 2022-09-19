/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  images: {
    unoptimized: true,
  },
};

module.export = nextConfig;
