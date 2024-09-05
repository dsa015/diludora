/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // can be wildcard for now, change to pocketbase when deployed it
        hostname: "https://lingam-delights.fly.dev",
      },
    ],
  },
};

export default nextConfig;
