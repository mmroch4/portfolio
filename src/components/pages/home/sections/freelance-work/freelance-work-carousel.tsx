"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { FreelanceWork } from "@/data/freelance-work";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function FreelanceWorkCard({ freelanceWork }: { freelanceWork: FreelanceWork }) {
    return (
        <Link href={freelanceWork.href} target="_blank">
            <div
                className={cn(
                    "group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 md:border-l md:border-border",
                )}
            >
                <div className="overflow-hidden">
                    <Image
                        src={freelanceWork.image}
                        alt={`${freelanceWork.title} preview`}
                        width={490}
                        height={300}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                </div>

                <div className="flex flex-col gap-1 sm:gap-2 px-2">
                    <h4>{freelanceWork.title}</h4>

                    <div className="flex">
                        <p>{freelanceWork.roles.join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function FreelanceWorkCarousel({ data, delay = 5000, dimensions = "basis-full sm:basis-1/2 md:basis-1/3" }: { data: FreelanceWork[]; delay?: number; dimensions?: string }) {
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
                                  delay,
                                  stopOnInteraction: true,
                                  stopOnMouseEnter: true,
                                  stopOnFocusIn: true,
                              }),
                          ]
                }
            >
                <CarouselContent>
                    {data.map((value, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                className={dimensions}
                            >
                                <FreelanceWorkCard freelanceWork={value} />
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
