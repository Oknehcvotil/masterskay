import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";

export default createMiddleware({
  defaultLocale: "ua", // Устанавливаем украинский язык как язык по умолчанию
  locales,
  pathnames,
});

export const config = {
  matcher: [
    // Устанавливаем префикс для украинской версии сайта
    `/${localePrefix}`,
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    `/${localePrefix}/:path*`,
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
