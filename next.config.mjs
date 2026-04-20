/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co"
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
