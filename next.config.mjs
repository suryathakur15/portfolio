/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
