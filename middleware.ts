import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * Sends bare paths to a locale. Arabic is served when the browser asks for
 * it first, otherwise English.
 *
 * Deliberately naive: two locales, no region variants, no cookie. A visitor
 * who wants the other language uses the toggle, which is a real link, and
 * lands on a URL they can bookmark and share.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const accept = request.headers.get("accept-language") ?? "";
  const wantsArabic = accept
    .split(",")
    .some((part) => part.trim().toLowerCase().startsWith("ar"));

  const locale = wantsArabic ? "ar" : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.[\\w]+$).*)"],
};
