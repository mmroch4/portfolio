import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Renders the shared Open Graph / Twitter card for a locale.
 *
 * The role line is the only translated string on the card — the name, location
 * and GitHub handle read the same in both languages. Each locale's route
 * segment has a thin `opengraph-image.tsx` that calls this.
 */
export function renderOgImage(locale: Locale) {
    const dict = getDictionary(locale);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    background: "#111113",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Brand accent bar (matches the hero gradient). */}
                <div
                    style={{
                        display: "flex",
                        width: "180px",
                        height: "12px",
                        borderRadius: "9999px",
                        background:
                            "linear-gradient(96.09deg, #5eb1ef 12.17%, #0090ff 90.71%)",
                    }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", fontSize: "84px", fontWeight: 700 }}>
                        {siteConfig.name}
                    </div>
                    <div style={{ display: "flex", fontSize: "44px", color: "#70b8ff" }}>
                        {dict.hero.role}
                    </div>
                    <div style={{ display: "flex", fontSize: "30px", color: "#b0b4ba" }}>
                        {dict.hero.location}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "26px",
                        color: "#b0b4ba",
                    }}
                >
                    <div style={{ display: "flex" }}>
                        {siteConfig.url.replace(/^https?:\/\//, "")}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        {/* GitHub mark */}
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="#b0b4ba">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <div style={{ display: "flex" }}>
                            {siteConfig.social.github.replace(
                                /^https?:\/\/github\.com\//,
                                "",
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}
