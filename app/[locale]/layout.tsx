import type { Metadata } from "next";
import { Manrope, Rubik } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SmoothAnchor } from "@/components/motion/SmoothAnchor";
import { dirOf, isLocale, locales, SITE, type Locale } from "@/lib/i18n";
import { getMessages } from "@/messages";
import "../globals.css";

/**
 * next/font self-hosts both families and inlines the @font-face, which
 * removes the two Google Fonts round-trips the source file paid for.
 * display: swap keeps the copy readable while they load.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--f-manrope",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--f-rubik",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);

  return {
    metadataBase: new URL(SITE),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `/${locale}`,
      siteName: "Qeema",
      locale: locale === "ar" ? "ar_QA" : "en_QA",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={dirOf(locale as Locale)}
      className={`${manrope.variable} ${rubik.variable}`}
    >
      <body>
        {children}
        <SmoothAnchor />
      </body>
    </html>
  );
}
