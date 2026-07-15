import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { educationData } from "@/data/education";
import { featuredWorkData } from "@/data/featured-work";

/**
 * Emits a schema.org @graph as JSON-LD.
 *
 * This is the primary AI-SEO surface: answer engines (Google, ChatGPT,
 * Perplexity, Claude) parse structured data to attribute facts about a person
 * and their work. The graph is derived from `src/data/*` so it never drifts
 * out of sync with what the page renders.
 */
export function StructuredData() {
    const personId = `${siteConfig.url}/#person`;

    // Derive the organizations Miguel studied at from the education data.
    const alumniOf = Array.from(
        new Set(
            educationData.map((item) => item.subtitle.split("—")[0].trim()),
        ),
    ).map((name) => ({ "@type": "Organization", name }));

    // Featured projects become CreativeWork nodes authored by the Person.
    const projects = featuredWorkData.map((work, index) => ({
        "@type": "CreativeWork",
        "@id": `${siteConfig.url}/#project-${index}`,
        name: work.title,
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
                jobTitle: siteConfig.role,
                description: siteConfig.description,
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
                knowsAbout: [...servicesData],
                sameAs: [
                    siteConfig.social.github,
                    siteConfig.social.linkedin,
                    siteConfig.social.discord,
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                url: siteConfig.url,
                name: `${siteConfig.name} — Portfolio`,
                description: siteConfig.description,
                inLanguage: "en",
                publisher: { "@id": personId },
            },
            ...projects,
        ],
    };

    // Escape "<" so a stray "</script>" in any data string can't break out of
    // the tag. Content here is author-controlled (src/data/*), so this is
    // defense-in-depth, not sanitization of untrusted input.
    const json = JSON.stringify(graph).replace(/</g, "\\u003c");

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
        />
    );
}
