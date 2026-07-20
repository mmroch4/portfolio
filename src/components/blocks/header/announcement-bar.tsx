import { GITHUB_LINK } from "@/data/social-media";
import { TileArrowIcon } from "@/components/icons";
import Link from "next/link";

export function AnnouncementBar({ announcement }: { announcement: string }) {
    return (
        <div>
            <div className="group relative bg-[linear-gradient(96.09deg,_var(--blue-8)_12.17%,_var(--blue-10)_90.71%)] overflow-hidden">
                <div className="container">
                    <Link
                        href={GITHUB_LINK}
                        className="py-2.5 flex items-center justify-center gap-2"
                    >
                        <p className="text-sm sm:text-base text-primary-foreground hover:underline">
                            {announcement}
                        </p>
                        <TileArrowIcon className="w-6 h-6 flex-none text-primary-foreground group-hover:translate-x-1.5 transition-all duration-500 ease-in-out" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
