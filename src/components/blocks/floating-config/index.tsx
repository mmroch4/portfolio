import { ThemeToggle } from "../theme-toggle";
import { LanguageToggle } from "../language-toggle";
import type { Chrome } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";

export function FloatingConfig({
    locale,
    chrome,
}: {
    locale: Locale;
    chrome: Chrome;
}) {
    return (
        <div className="fixed top-14 right-4 sm:right-6 z-40 h-auto flex flex-col items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <ThemeToggle label={chrome.themeToggleLabel} />

            <LanguageToggle locale={locale} label={chrome.langToggleLabel} />
        </div>
    );
}
