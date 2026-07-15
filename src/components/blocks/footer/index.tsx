import { socialMediaData } from "@/data/social-media";
import { socialIconMap } from "@/components/icons";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="-translate-y-px bg-background border-t border-border">
            <div className="container">
                <div className="border-x border-border">
                    <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <div className="flex justify-center items-center gap-8">
                            {socialMediaData.map((value, index) => {
                                const Icon = socialIconMap[value.icon];
                                return (
                                    <Link
                                        href={value.href}
                                        key={index}
                                        target="_blank"
                                        aria-label={`${value.icon} profile`}
                                    >
                                        <Icon className="w-5 h-5 text-foreground" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
