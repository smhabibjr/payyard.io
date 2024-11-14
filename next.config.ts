import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i1.ytimg.com',
        port: '', // Leave this empty unless you need a specific port
        pathname: '/vi/**', // Allows any images in the /vi path
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
