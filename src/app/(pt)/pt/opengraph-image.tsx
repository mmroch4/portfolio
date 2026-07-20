import { getDictionary } from "@/content";
import { renderOgImage } from "@/lib/og";

export const alt = getDictionary("pt").meta.ogAlt;
export { size, contentType } from "@/lib/og";

export default function OpengraphImage() {
    return renderOgImage("pt");
}
