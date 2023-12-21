const withNextIntl = require("next-intl/plugin")(
  "src/shared/i18n/config/i18n.ts"
);

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({});
