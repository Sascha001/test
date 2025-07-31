import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
