import { volunteeringData } from "@/data/volunteering";
import { cn } from "@/lib/utils";
import { CollapsibleBulletPoints } from "@/components/blocks/collapsible-bullet-points";
import { CollapsibleSection } from "@/components/blocks/collapsible-section";

export function Volunteering() {
    return (
        <CollapsibleSection id="volunteering" title="Volunteering">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
                <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />

                <div className="relative">
                    {volunteeringData.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative flex flex-col sm:flex-row sm:items-start gap-4",
                                {
                                    "mb-8 sm:mb-16": index !== volunteeringData.length - 1,
                                },
                            )}
                        >
                            <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                                <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                                    {item.date}
                                </p>

                                {/* Bullet Point */}
                                <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-border rounded-full bg-background">
                                    <div className="w-3 h-3 bg-primary rounded-full" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                                <h5 className="font-semibold">{item.title}</h5>
                                <p className="text-foreground">{item.subtitle}</p>

                                <CollapsibleBulletPoints
                                    bulletPoints={item.bulletPoints}
                                    maxSize={200}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CollapsibleSection>
    );
}
