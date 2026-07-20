import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { pageKeys } from "@/lib/i18n/routes";
import { languageAlternates, pageUrl } from "@/lib/seo";

/**
 * Generated straight from the i18n `routes` map, so it can never drift out of
 * sync with the actual pages. Every URL carries hreflang alternates pointing at
 * its counterpart in the other language.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return locales.flatMap((locale) =>
        pageKeys.map((page) => ({
            url: pageUrl(locale, page),
            changeFrequency: "monthly" as const,
            priority: page === "home" ? 1 : 0.8,
            alternates: {
                languages: languageAlternates(page),
            },
        })),
    );
}
