/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this property to enable static export
  output: "export",

  // Adjust the base path and asset prefix for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
