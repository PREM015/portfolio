import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  
  // Enable image optimization
  images: {
    domains: ['rajprem.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },

  // Generate sitemap automatically
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },

  // Redirect trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;