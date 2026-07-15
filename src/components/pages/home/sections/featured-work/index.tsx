import { CollapsibleSection } from "@/components/blocks/collapsible-section";
import { FeaturedWorkCarousel } from "./featured-work-carousel";

export function FeaturedWork() {
    return (
        <CollapsibleSection id="featured-work" title="Featured Work" initialOpen>
            <FeaturedWorkCarousel />
        </CollapsibleSection>
    );
}
