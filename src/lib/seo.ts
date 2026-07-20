import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/content";
import {
    defaultLocale,
    htmlLang,
    ogLocale,
    otherLocale,
    type Locale,
} from "@/lib/i18n/config";
import { routes, type PageKey } from "@/lib/i18n/routes";

/** Absolute URL for a page in a given locale. */
export function pageUrl(locale: Locale, pageKey: PageKey): string {
    return new URL(routes[locale][pageKey], siteConfig.url).toString();
}

/**
 * hreflang alternates for a page: both locales plus `x-default` (→ English,
 * the default locale). This is what tells search engines that `/` and `/pt`
 * are translations of one another rather than duplicate content.
 */
export function languageAlternates(pageKey: PageKey): Record<string, string> {
    return {
        [htmlLang.en]: pageUrl("en", pageKey),
        [htmlLang.pt]: pageUrl("pt", pageKey),
        "x-default": pageUrl(defaultLocale, pageKey),
    };
}

/**
 * Root-layout metadata for a locale.
 *
 * Each locale has its own root layout (see `app/(en)` and `app/(pt)`), so this
 * runs once per language and carries the canonical URL, hreflang alternates
 * and localized Open Graph/Twitter cards. `metadataBase` is set here so the
 * `opengraph-image` file convention resolves to an absolute URL.
 */
export function buildRootMetadata(locale: Locale): Metadata {
    const dict = getDictionary(locale);
    const url = pageUrl(locale, "home");

    return {
        metadataBase: new URL(siteConfig.url),
        title: {
            default: dict.meta.title,
            template: `%s · ${siteConfig.name}`,
        },
        description: dict.meta.description,
        applicationName: `${siteConfig.name} — Portfolio`,
        authors: [{ name: siteConfig.name, url: siteConfig.url }],
        creator: siteConfig.name,
        keywords: dict.meta.keywords,
        alternates: {
            canonical: url,
            languages: languageAlternates("home"),
        },
        openGraph: {
            type: "profile",
            url,
            siteName: `${siteConfig.name} — Portfolio`,
            title: dict.meta.title,
            description: dict.meta.description,
            locale: ogLocale[locale],
            alternateLocale: ogLocale[otherLocale[locale]],
            firstName: "Miguel",
            lastName: "Rocha",
            username: "mmroch4",
        },
        twitter: {
            card: "summary_large_image",
            title: dict.meta.title,
            description: dict.meta.description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
        category: "technology",
    };
}
