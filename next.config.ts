import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  basePath: '/whod-you-rather', // replace with your GitHub repository name
  trailingSlash: true,     // Ensure trailing slashes for GitHub Pages to work correctly

};

export default nextConfig;
