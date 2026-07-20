import { SiteFrame } from "@/components/blocks/site-frame";
import { HomePage } from "@/components/pages/home";

export default function Page() {
    return (
        <SiteFrame locale="pt">
            <HomePage locale="pt" />
        </SiteFrame>
    );
}
