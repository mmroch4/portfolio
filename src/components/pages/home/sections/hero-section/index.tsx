import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialMediaData } from "@/data/social-media";
import { MapIcon, SparkIcon, socialIconMap } from "@/components/icons";
import { format } from "@/content";
import type { Chrome, Hero } from "@/content/types";
import { siteConfig } from "@/config/site";

export function HeroSection({ hero, chrome }: { hero: Hero; chrome: Chrome }) {
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image
                            src={"/images/hero-sec/banner.png"}
                            alt={hero.bannerAlt}
                            width={1080}
                            height={267}
                            priority
                            sizes="(max-width: 1134px) 100vw, 1134px"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="border-x border-border">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image
                                    src={"/images/hero-sec/profile.png"}
                                    alt={hero.profileAlt}
                                    width={145}
                                    height={145}
                                    priority
                                    className="border-4 border-background rounded-full"
                                />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1 className="font-medium">{hero.name}</h1>
                                <p className="text-[var(--blue-11)] font-normal">
                                    {hero.role}
                                </p>
                                <div className="flex items-center gap-2">
                                    <MapIcon className="w-5 h-5 text-foreground" />
                                    <p className="text-foreground">{hero.location}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialMediaData.map((value, index) => {
                                        const Icon = socialIconMap[value.icon];
                                        return (
                                            <Link
                                                href={value.href}
                                                key={index}
                                                target="_blank"
                                                aria-label={format(
                                                    chrome.socialProfileLabel,
                                                    { name: value.icon },
                                                )}
                                                className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                                            >
                                                <Icon className="w-5 h-5 text-foreground" />
                                            </Link>
                                        );
                                    })}
                                </div>

                                <Button className="h-auto rounded-full p-0">
                                    <Link
                                        target="_blank"
                                        href={siteConfig.social.discord}
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_var(--blue-8)_12.17%,_var(--blue-10)_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_var(--blue-8)_12.17%,_var(--blue-10)_90.71%)] py-2.5 px-5 rounded-full">
                                            <SparkIcon className="w-3.5 h-3.5 text-primary-foreground" />
                                            <span className="text-sm sm:text-base font-semibold text-primary-foreground">
                                                {hero.cta}
                                            </span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
