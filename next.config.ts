import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gipsonsteel.com",
        pathname: "/sites/GipsonSteel/cache/file/**",
      },
    ],
  },
};

export default nextConfig;
