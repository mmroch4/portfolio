import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // General crawlers.
            {
                userAgent: "*",
                allow: "/",
            },
            // Explicitly welcome AI answer-engine crawlers (AI-SEO goal).
            {
                userAgent: [
                    "GPTBot",
                    "OAI-SearchBot",
                    "ChatGPT-User",
                    "ClaudeBot",
                    "Claude-Web",
                    "PerplexityBot",
                    "Google-Extended",
                    "Applebot-Extended",
                ],
                allow: "/",
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
