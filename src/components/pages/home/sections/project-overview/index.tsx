import { TileArrowIcon } from "@/components/icons";
import Link from "next/link";
import type { Dictionary, ProjectOverview as ProjectOverviewData } from "@/content/types";

export function ProjectOverview({
    labels,
    data,
}: {
    labels: Dictionary["projectsSection"];
    data: ProjectOverviewData;
}) {
    return (
        <section id="projects" className="scroll-mt-20">
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <h2 className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-foreground uppercase font-medium">
                                {labels.sideProjects}
                            </h2>
                            <div className="flex flex-col gap-2.5">
                                {data.sideProjects.map((value, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={value.url}
                                            target="_blank"
                                            className="group flex items-center gap-2"
                                        >
                                            <h4>{value.name}</h4>
                                            <TileArrowIcon className="w-6 h-6 text-foreground group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <h2 className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-foreground uppercase font-medium">
                                {labels.writing}
                            </h2>
                            <div className="flex flex-col gap-2.5">
                                {data.writing.map((value, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={value.url}
                                            target="_blank"
                                            className="group flex items-center gap-2"
                                        >
                                            <h4>{value.name}</h4>
                                            <TileArrowIcon className="w-6 h-6 flex-none text-foreground group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
