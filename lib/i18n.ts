export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** The locale the language toggle switches to, and the label it wears. */
export const other: Record<Locale, { locale: Locale; label: string }> = {
  en: { locale: "ar", label: "عربي" },
  ar: { locale: "en", label: "EN" },
};

export const SITE = "https://qeema.qa";
