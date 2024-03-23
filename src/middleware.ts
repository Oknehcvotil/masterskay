import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ua", "ru"],

  // Used when no locale matches
  defaultLocale: "ua",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ua|ru)/:path*"],
};
