import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/blocks/header";
import { SectionNav } from "@/components/blocks/section-nav";
import { Footer } from "@/components/blocks/footer";
import { fonts } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/blocks/structured-data";
import { ThemeToggle } from "@/components/blocks/theme-toggle";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} — ${siteConfig.role}`,
        template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: `${siteConfig.name} — Portfolio`,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    keywords: [
        "Miguel Rocha",
        "Software Engineer",
        "Full-Stack Developer",
        "Web Developer",
        "Porto",
        "Portugal",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Portfolio",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "profile",
        url: siteConfig.url,
        siteName: `${siteConfig.name} — Portfolio`,
        title: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
        locale: "en_US",
        firstName: "Miguel",
        lastName: "Rocha",
        username: "mmroch4",
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head>
                {/* No-flash theme init: runs before paint so the correct theme
                    is applied without a flash of the wrong colors. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
                    }}
                />
            </head>
            <body className={`${fonts.inter.className} pt-10 sm:pt-11`}>
                <StructuredData />
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
                >
                    Skip to content
                </a>
                <Header />
                <SectionNav />
                <ThemeToggle />
                {children}
                <Footer />
            </body>
        </html>
    );
}
