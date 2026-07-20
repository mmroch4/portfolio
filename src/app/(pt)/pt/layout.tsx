import "@/app/globals.css";
import { fonts } from "@/config/fonts";
import { htmlLang } from "@/lib/i18n/config";
import { buildRootMetadata } from "@/lib/seo";
import { ThemeScript } from "@/components/blocks/theme-script";

/**
 * Root layout for the Portuguese site, served under `/pt`.
 * Mirrors `app/(en)/layout.tsx`; only the `lang` attribute and the metadata
 * locale differ.
 */
export const metadata = buildRootMetadata("pt");

export default function PortugueseRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={htmlLang.pt} suppressHydrationWarning className="scroll-smooth">
            <head>
                <ThemeScript />
            </head>
            <body className={`${fonts.inter.className} pt-10 sm:pt-11`}>
                {children}
            </body>
        </html>
    );
}
