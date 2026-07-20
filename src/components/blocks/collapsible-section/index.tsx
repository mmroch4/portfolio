"use client";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CollapsibleSectionProps {
    children: React.ReactNode;
    title: string;
    initialOpen?: boolean;
    /** Anchor target. When the URL hash matches, the section opens itself. */
    id?: string;
}

export function CollapsibleSection({ children, title, initialOpen = false, id }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
    const sectionRef = useRef<HTMLElement>(null);

    // Open (and scroll to) this section whenever it becomes the hash target —
    // both on initial load (deep links) and on in-page nav clicks.
    useEffect(() => {
        if (!id) return;

        function openIfTargeted() {
            if (window.location.hash !== `#${id}`) return;
            setIsOpen(true);
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        openIfTargeted();
        window.addEventListener("hashchange", openIfTargeted);
        return () => window.removeEventListener("hashchange", openIfTargeted);
    }, [id]);

    return (
        <section ref={sectionRef} id={id} className="container scroll-mt-20">
            <div className="border-x border-border">
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        {/* Heading wraps the trigger (WAI-ARIA accordion pattern):
                            the button is keyboard-operable and exposes aria-expanded,
                            while the section stays in the heading outline. */}
                        <h2 className="w-full text-center">
                            <CollapsibleTrigger className="group flex w-full flex-col xs:flex-row gap-5 items-center justify-between cursor-pointer text-left text-sm tracking-[2px] text-foreground uppercase font-medium">
                                {title}
                                <ChevronDown
                                    aria-hidden="true"
                                    className={cn("shrink-0 transition-transform", {
                                        "rotate-180": isOpen,
                                    })}
                                />
                            </CollapsibleTrigger>
                        </h2>
                    </div>

                    <CollapsibleContent>
                        <div className="border-t border-border">{children}</div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </section>
    );
}
