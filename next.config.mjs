/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        // can be wildcard for now, change to pocketbase when deployed it
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
