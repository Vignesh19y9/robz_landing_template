/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/template",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
