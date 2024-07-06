/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/template",
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
