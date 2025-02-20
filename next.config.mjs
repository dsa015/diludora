/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lingam-delights.fly.dev",
      },
    ],
  },
};

export default nextConfig;
