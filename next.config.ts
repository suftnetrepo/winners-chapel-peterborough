import type { NextConfig } from 'next';

const isLowMemoryRender = process.env.RENDER === 'true';

const nextConfig: NextConfig = {
  experimental: isLowMemoryRender
    ? {
        cpus: 2,
        webpackMemoryOptimizations: true,
        serverSourceMaps: false,
        preloadEntriesOnStart: false
      }
    : {},
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' }
    ]
  }
};

export default nextConfig;
