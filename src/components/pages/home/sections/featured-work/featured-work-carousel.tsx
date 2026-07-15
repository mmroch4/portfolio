"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FeaturedWork, featuredWorkData } from "@/data/featured-work";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function FeaturedWorkCard({ featuredWork }: { featuredWork: FeaturedWork }) {
    return (
        <Link href={featuredWork.href} target="_blank">
            <div
                className={cn(
                    "group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 md:border-l md:border-border",
                )}
            >
                <div className="overflow-hidden">
                    <Image
                        src={featuredWork.image}
                        alt={`${featuredWork.title} preview`}
                        width={490}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                </div>

                <div className="flex flex-col gap-1 sm:gap-2 px-2">
                    <h4>{featuredWork.title}</h4>
                    <div className="flex">
                        <p>{featuredWork.roles.join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function FeaturedWorkCarousel() {
    const reducedMotion = useReducedMotion();

    return (
        <div className="border-t border-border">
            <Carousel
                opts={{
                    loop: true,
                    align: "start",
                }}
                plugins={
                    reducedMotion
                        ? []
                        : [
                              Autoplay({
                                  delay: 5000,
                                  stopOnInteraction: true,
                                  stopOnMouseEnter: true,
                                  stopOnFocusIn: true,
                              }),
                          ]
                }
            >
                <CarouselContent>
                    {featuredWorkData.map((value, index) => {
                        return (
                            <CarouselItem key={index} className="basis-full md:basis-1/2">
                                <FeaturedWorkCard featuredWork={value} />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>

                <div className="flex items-center justify-center gap-4 border-t border-border p-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
}
