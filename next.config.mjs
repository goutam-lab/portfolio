/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/work/:slug',
        destination: '/work/:slug.html',
      },
    ];
  },
};

export default nextConfig;
