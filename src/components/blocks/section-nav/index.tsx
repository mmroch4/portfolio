"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionNavItem {
    id: string;
    label: string;
}

/**
 * Sticky, horizontally-scrollable in-page anchor nav.
 *
 * Clicking a link updates the hash → native scroll to the section, and (for
 * collapsible sections) the matching CollapsibleSection opens itself off the
 * same hashchange. The active pill is tracked with an IntersectionObserver,
 * and on small screens the nav auto-scrolls to keep that pill in view.
 *
 * Items are passed in rather than imported so the labels can be localized —
 * the section ids stay identical across locales, only the text changes.
 */
export function SectionNav({
    items,
    ariaLabel,
}: {
    items: SectionNavItem[];
    ariaLabel: string;
}) {
    const [active, setActive] = useState<string | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

    useEffect(() => {
        const els = items
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const inView = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (inView[0]) setActive(inView[0].target.id);
            },
            // Trigger when a section's top crosses the upper third of the viewport.
            { rootMargin: "-20% 0px -70% 0px" },
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [items]);

    // Keep the active pill within the horizontal scroll strip. When a section
    // becomes active but its link is scrolled out of view (small screens), nudge
    // the nav horizontally just enough to reveal it — page scroll untouched.
    useEffect(() => {
        if (!active) return;
        const container = listRef.current;
        const link = linkRefs.current.get(active);
        if (!container || !link) return;

        const pad = 16;
        const cRect = container.getBoundingClientRect();
        const lRect = link.getBoundingClientRect();

        if (lRect.left < cRect.left + pad) {
            container.scrollBy({ left: lRect.left - cRect.left - pad, behavior: "smooth" });
        } else if (lRect.right > cRect.right - pad) {
            container.scrollBy({ left: lRect.right - cRect.right + pad, behavior: "smooth" });
        }
    }, [active]);

    return (
        <nav
            aria-label={ariaLabel}
            className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm"
        >
            <div className="container">
                <ul
                    ref={listRef}
                    className="flex gap-1 overflow-x-auto py-2 items-center [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                ref={(el) => {
                                    if (el) linkRefs.current.set(id, el);
                                    else linkRefs.current.delete(id);
                                }}
                                href={`#${id}`}
                                aria-current={active === id ? "true" : undefined}
                                className={cn(
                                    "inline-block whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-secondary transition-colors hover:bg-primary/5 hover:text-foreground",
                                    active === id && "bg-primary/10 text-foreground",
                                )}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
