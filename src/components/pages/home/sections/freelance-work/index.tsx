import { freelanceWorkData } from "@/data/freelance-work";
import { FreelanceWorkCarousel } from "./freelance-work-carousel";
import { CollapsibleSection } from "@/components/blocks/collapsible-section";

export function FreelanceWork() {
    const firstCarouselData = freelanceWorkData.slice(0, 4);
    const secondCarouselData = freelanceWorkData.slice(4);

    return (
        <CollapsibleSection id="freelance" title="Freelance & Client Work">
            <FreelanceWorkCarousel data={firstCarouselData} />

            <FreelanceWorkCarousel
                data={secondCarouselData}
                delay={4000}
                dimensions="basis-full md:basis-1/2"
            />
        </CollapsibleSection>
    );
}
