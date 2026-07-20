import { FreelanceWorkCarousel } from "./freelance-work-carousel";
import { CollapsibleSection } from "@/components/blocks/collapsible-section";
import type { Chrome, FreelanceWork as FreelanceWorkItem } from "@/content/types";

export function FreelanceWork({
    title,
    data,
    chrome,
}: {
    title: string;
    data: FreelanceWorkItem[];
    chrome: Chrome;
}) {
    const firstCarouselData = data.slice(0, 4);
    const secondCarouselData = data.slice(4);

    return (
        <CollapsibleSection id="freelance" title={title}>
            <FreelanceWorkCarousel data={firstCarouselData} chrome={chrome} />

            <FreelanceWorkCarousel
                data={secondCarouselData}
                chrome={chrome}
                delay={4000}
                dimensions="basis-full md:basis-1/2"
            />
        </CollapsibleSection>
    );
}
