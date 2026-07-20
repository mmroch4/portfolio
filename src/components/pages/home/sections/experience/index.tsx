import { cn } from "@/lib/utils";
import Image from "next/image";
import { CollapsibleBulletPoints } from "@/components/blocks/collapsible-bullet-points";
import { CollapsibleSection } from "@/components/blocks/collapsible-section";
import { format } from "@/content";
import type { Chrome, Experience as ExperienceItem } from "@/content/types";

export function Experience({
    title,
    data,
    chrome,
}: {
    title: string;
    data: ExperienceItem[];
    chrome: Chrome;
}) {
    return (
        <CollapsibleSection id="experience" title={title} initialOpen>
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                {data.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                        >
                            <Image
                                src={value.icon}
                                alt={format(chrome.companyLogoAlt, {
                                    name: value.company,
                                })}
                                width={value.width}
                                height={value.height}
                            />
                            <div className="flex flex-wrap gap-5 items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <h5 className="font-semibold">{value.role}</h5>
                                    <p className="text-foreground">{value.company}</p>
                                </div>
                                <div className="flex items-center gap-2.5 border border-border rounded-lg py-1.5 px-3">
                                    {/* Filled dot = ongoing role. Driven by the
                                        `current` flag rather than by comparing the
                                        end year to a literal, which only worked
                                        while that literal was English. */}
                                    <div
                                        className={cn("w-4 h-2 rounded-sm", {
                                            "bg-primary": value.current,
                                            "bg-primary/10": !value.current,
                                        })}
                                    />
                                    <p className="text-sm xs:text-base text-foreground">
                                        {value.startYear} –{" "}
                                        {value.current
                                            ? chrome.presentLabel
                                            : value.endYear}{" "}
                                        · {value.location}
                                    </p>
                                </div>
                            </div>

                            <CollapsibleBulletPoints bulletPoints={value.bulletPoints} />
                        </div>
                    );
                })}
            </div>
        </CollapsibleSection>
    );
}
