import { Badge } from "@/components/ui/badge";
import { servicesData } from "@/data/services";

export function AboutMe() {
    return (
        <section id="about" className="scroll-mt-20">
            <div className="container">
                <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] dark:bg-[url('/images/about-me/about-me-bg-dark.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-sm tracking-[2px] text-foreground uppercase font-medium">
                                About Me
                            </h2>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-foreground">
                                Hey there. I&rsquo;m Miguel — Full-Stack Software Engineer based in
                                Portugal, currently crafting{" "}
                                <span className="bg-[var(--blue-4)]">
                                    high-performance web applications, scalable digital products,
                                    and algorithmic solutions.
                                </span>
                            </p>
                            <h5 className="text-secondary font-normal">
                                Software Engineer @TreeTree2, and main developer of Prisma and
                                Folhas.
                            </h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-foreground uppercase font-medium">SERVICES</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesData.map((value, index) => {
                                    return (
                                        <Badge
                                            variant={"outline"}
                                            key={index}
                                            className="py-1.5 px-3 rounded-lg h-full"
                                        >
                                            <p className="text-xs sm:text-sm font-medium text-foreground">
                                                {value}
                                            </p>
                                        </Badge>
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
