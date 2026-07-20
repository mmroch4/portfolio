import Link from "next/link";
import { localeShort, otherLocale, type Locale } from "@/lib/i18n/config";
import { routes } from "@/lib/i18n/routes";

/**
 * Switches to the same page in the other language.
 *
 * A `<Link>` rather than a button: the locale lives in the URL, so switching is
 * a navigation. That keeps this a Server Component, makes the target crawlable
 * (search engines follow it to discover the translation), and lets the choice
 * be bookmarked and shared.
 */
export function LanguageToggle({
    locale,
    label,
}: {
    locale: Locale;
    label: string;
}) {
    const target = otherLocale[locale];

    return (
        <Link
            href={routes[target].home}
            hrefLang={target}
            aria-label={label}
            title={label}
            className="text-xs font-bold flex items-center justify-center w-12 h-12 rounded-b-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
            {localeShort[target]}
        </Link>
    );
}
