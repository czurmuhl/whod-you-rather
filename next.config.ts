import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production"
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  basePath: isProd ? '/whod-you-rather' : "", // replace with your GitHub repository name
  assetPrefix: isProd ? '/whod-you-rather' : "", // Same as your basePath
  trailingSlash: true,     // Ensure trailing slashes for GitHub Pages to work correctly
  output: 'export',
  images: {
    unoptimized: true,
  }

};

export default nextConfig;
