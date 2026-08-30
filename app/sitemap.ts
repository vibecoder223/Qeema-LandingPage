import type { MetadataRoute } from "next";
import { locales, SITE } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE}/${l}`]),
      ),
    },
  }));
}
