import { siteConfig } from "@/config/site";
import { getDictionary } from "@/content";
import { htmlLang, type Locale } from "@/lib/i18n/config";
import { pageUrl } from "@/lib/seo";

/**
 * Emits a schema.org @graph as JSON-LD.
 *
 * This is the primary AI-SEO surface: answer engines (Google, ChatGPT,
 * Perplexity, Claude) parse structured data to attribute facts about a person
 * and their work. The graph is derived from the active locale's dictionary, so
 * it never drifts out of sync with what the page renders — and each language
 * gets its own `inLanguage`, descriptions and job title.
 *
 * The Person `@id` is deliberately locale-independent: both pages describe the
 * same person, so search engines should reconcile them into one entity rather
 * than two.
 */
export function StructuredData({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale);
    const personId = `${siteConfig.url}/#person`;
    const url = pageUrl(locale, "home");

    // Derive the organizations Miguel studied at from the education data.
    const alumniOf = Array.from(
        new Set(dict.education.map((item) => item.subtitle.split("—")[0].trim())),
    ).map((name) => ({ "@type": "Organization", name }));

    // Featured projects become CreativeWork nodes authored by the Person.
    const projects = dict.featuredWork.map((work, index) => ({
        "@type": "CreativeWork",
        "@id": `${siteConfig.url}/#project-${index}`,
        name: work.title,
        inLanguage: htmlLang[locale],
        creator: { "@id": personId },
        ...(work.href ? { url: work.href } : {}),
    }));

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": personId,
                name: siteConfig.name,
                url: siteConfig.url,
                jobTitle: dict.hero.role,
                description: dict.meta.description,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Porto",
                    addressCountry: "PT",
                },
                worksFor: {
                    "@type": "Organization",
                    name: "TreeTree2",
                },
                alumniOf,
                knowsAbout: [...dict.services],
                sameAs: [
                    siteConfig.social.github,
                    siteConfig.social.linkedin,
                    siteConfig.social.discord,
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${url}#website`,
                url,
                name: `${siteConfig.name} — Portfolio`,
                description: dict.meta.description,
                inLanguage: htmlLang[locale],
                publisher: { "@id": personId },
            },
            ...projects,
        ],
    };

    // Escape "<" so a stray "</script>" in any data string can't break out of
    // the tag. Content here is author-controlled (src/content/*), so this is
    // defense-in-depth, not sanitization of untrusted input.
    const json = JSON.stringify(graph).replace(/</g, "\\u003c");

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
        />
    );
}
