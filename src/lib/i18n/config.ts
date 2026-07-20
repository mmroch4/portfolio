/**
 * Locale configuration.
 *
 * English is the default language and is served from the URL root with no
 * prefix, so every existing miguelrocha.dev link keeps working. Portuguese
 * (European, pt-PT) is served under the `/pt` prefix.
 */
export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** The `lang` attribute written onto `<html>` for each locale. */
export const htmlLang: Record<Locale, string> = {
    en: "en",
    pt: "pt-PT",
};

/** Open Graph locale codes (underscored region form). */
export const ogLocale: Record<Locale, string> = {
    en: "en_US",
    pt: "pt_PT",
};

/** Short uppercase code shown in the language toggle. */
export const localeShort: Record<Locale, string> = {
    en: "EN",
    pt: "PT",
};

/** The opposite locale — used by the language toggle. */
export const otherLocale: Record<Locale, Locale> = {
    en: "pt",
    pt: "en",
};
