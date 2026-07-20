import type { Locale } from "./config";

/**
 * Canonical page identifiers, decoupled from their localized URLs.
 * The portfolio is a single page today, but keeping the indirection means the
 * language toggle, sitemap and hreflang alternates all derive from one map —
 * adding a second page is a one-line change here.
 */
export type PageKey = "home";

/** Localized URL for every page. EN lives at the root, PT under `/pt`. */
export const routes: Record<Locale, Record<PageKey, string>> = {
    en: {
        home: "/",
    },
    pt: {
        home: "/pt",
    },
};

/** Every page key, for iteration (sitemap, alternates). */
export const pageKeys = Object.keys(routes.en) as PageKey[];
