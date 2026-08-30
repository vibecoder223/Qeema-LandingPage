import type { Locale } from "@/lib/i18n";
import en, { type Messages } from "./en";
import ar from "./ar";

const decks: Record<Locale, Messages> = { en, ar };

export function getMessages(locale: Locale): Messages {
  return decks[locale];
}

export type { Messages };
