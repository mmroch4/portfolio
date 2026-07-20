import { Header } from "@/components/blocks/header";
import { SectionNav } from "@/components/blocks/section-nav";
import { Footer } from "@/components/blocks/footer";
import { FloatingConfig } from "@/components/blocks/floating-config";
import { StructuredData } from "@/components/blocks/structured-data";
import { getDictionary } from "@/content";
import { sectionIds } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";

/**
 * Wraps a page's `<main>` with the persistent chrome: structured data, skip
 * link, header, sticky section nav, floating theme/language controls and
 * footer. Everything localized flows from the single `locale` prop, so a page
 * only has to declare which language it is.
 */
export function SiteFrame({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) {
    const dict = getDictionary(locale);

    const navItems = sectionIds.map((id) => ({
        id,
        label: dict.sectionTitles[id],
    }));

    return (
        <>
            <StructuredData locale={locale} />
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
            >
                {dict.chrome.skipToContent}
            </a>
            <Header announcement={dict.chrome.announcement} />
            <SectionNav items={navItems} ariaLabel={dict.chrome.sectionNavLabel} />
            <FloatingConfig locale={locale} chrome={dict.chrome} />
            {children}
            <Footer socialProfileLabel={dict.chrome.socialProfileLabel} />
        </>
    );
}
