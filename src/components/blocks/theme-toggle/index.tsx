"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Fixed dark/light theme toggle.
 *
 * The icon is driven purely by the `.dark` class on <html> via CSS
 * (`hidden dark:block`), so it stays correct before hydration and never
 * mismatches. Clicking flips the class and persists the choice to
 * localStorage; the no-flash script in the layout restores it on load.
 */
export function ThemeToggle() {
    function toggle() {
        const root = document.documentElement;
        const isDark = root.classList.toggle("dark");
        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch {
            // Ignore storage failures (e.g. privacy mode); theme still toggles.
        }
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            className="fixed top-14 right-4 sm:right-6 z-40 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
            <Sun aria-hidden="true" className="hidden dark:block w-5 h-5" />
            <Moon aria-hidden="true" className="block dark:hidden w-5 h-5" />
        </button>
    );
}
