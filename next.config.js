/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/template",
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // assetPrefix: "https://robz-template.vercel.app",
  assetPrefix: process.env.ASSET_PREFIX || "https://robz-template.vercel.app",
};

module.exports = nextConfig;
