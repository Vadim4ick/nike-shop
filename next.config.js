const withNextIntl = require("next-intl/plugin")(
  "src/shared/i18n/config/i18n.ts"
);

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  env: {
    STRAPI_URL: "http://127.0.0.1:1337",
  },
});

// images: {
// remotePatterns: [
//   {
//     protocol: "http",
//     hostname: "**",
//   },
// ],
// },
