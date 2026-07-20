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
export function ThemeToggle({ label }: { label: string }) {
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
            aria-label={label}
            title={label}
            className="flex items-center justify-center w-12 h-12 rounded-t-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
            <Sun aria-hidden="true" className="hidden dark:block w-5 h-5" />
            <Moon aria-hidden="true" className="block dark:hidden w-5 h-5" />
        </button>
    );
}
