import createMiddleware from "next-intl/middleware";
import { languages } from "./shared/i18n/types";

export default createMiddleware({
  locales: languages,

  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ru)/:path*"],
};
