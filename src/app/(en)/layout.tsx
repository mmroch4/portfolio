import "@/app/globals.css";
import { fonts } from "@/config/fonts";
import { htmlLang } from "@/lib/i18n/config";
import { buildRootMetadata } from "@/lib/seo";
import { ThemeScript } from "@/components/blocks/theme-script";

/**
 * Root layout for the English (default) site, served from the URL root.
 *
 * This is one of two root layouts — see `app/(pt)/layout.tsx` — which is what
 * lets each locale set its own `<html lang>` while keeping English prefix-free.
 * Route groups don't affect the URL, so `(en)/page.tsx` is `/`.
 */
export const metadata = buildRootMetadata("en");

export default function EnglishRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={htmlLang.en} suppressHydrationWarning className="scroll-smooth">
            <head>
                <ThemeScript />
            </head>
            <body className={`${fonts.inter.className} pt-10 sm:pt-11`}>
                {children}
            </body>
        </html>
    );
}
