/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  // Remove assetPrefix for custom domain root deployment
};

export default nextConfig;
