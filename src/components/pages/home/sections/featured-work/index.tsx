import { CollapsibleSection } from "@/components/blocks/collapsible-section";
import { FeaturedWorkCarousel } from "./featured-work-carousel";
import type { Chrome, FeaturedWork as FeaturedWorkItem } from "@/content/types";

export function FeaturedWork({
    title,
    data,
    chrome,
}: {
    title: string;
    data: FeaturedWorkItem[];
    chrome: Chrome;
}) {
    return (
        <CollapsibleSection id="featured-work" title={title} initialOpen>
            <FeaturedWorkCarousel data={data} chrome={chrome} />
        </CollapsibleSection>
    );
}
