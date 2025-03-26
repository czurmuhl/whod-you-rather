import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  basePath: process.env.NODE_ENV === 'production' ? '/whod-you-rather' : "", // replace with your GitHub repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/whod-you-rather/' : "", // Same as your basePath
  trailingSlash: true,     // Ensure trailing slashes for GitHub Pages to work correctly
  output: 'export',
  images: {
    unoptimized: true,
  }

};

export default nextConfig;
