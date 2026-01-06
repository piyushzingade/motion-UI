import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos", "images.unsplash.com", "cdn.rareblocks.xyz"],
  },
  reactStrictMode: true,
};

export default nextConfig;
