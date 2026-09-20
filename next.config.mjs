import redirects from "./config/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
