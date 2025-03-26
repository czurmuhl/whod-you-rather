import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/whod-you-rather' : "", // replace with your GitHub repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/whod-you-rather/' : "", // Same as your basePath
  trailingSlash: true,     // Ensure trailing slashes for GitHub Pages to work correctly
  images: {
    unoptimized: true,
  }

};

export default nextConfig;
