/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tokens.app.pulsex.com",
        port: "",
        pathname: "/images/**",

      }
    ],
  },
};

export default nextConfig;
