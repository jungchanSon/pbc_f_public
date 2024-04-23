const process = require("next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss");

const DESTINATION = process.env.NEXT_PUBLIC_DESTINATION
const SOURCE = process.env.NEXT_PUBLIC_SOURCE

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: SOURCE,
        destination: DESTINATION
      },
    ];
  },
};

module.exports = nextConfig;