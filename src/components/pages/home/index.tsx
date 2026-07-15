import { Divider } from "@/components/blocks/divider";
import { AboutMe } from "./sections/about-me";
import { Education } from "./sections/education";
import { Experience } from "./sections/experience";
import { FeaturedWork } from "./sections/featured-work";
import { HeroSection } from "./sections/hero-section";
import { ProjectOverview } from "./sections/project-overview";
import { Volunteering } from "./sections/volunteering";
import { AwardsAndCompetitions } from "./sections/awards-competitions";
import { FreelanceWork } from "./sections/freelance-work";

export function HomePage() {
    return (
        <main id="main" tabIndex={-1} className="scroll-mt-4 focus:outline-none">
            <HeroSection />

            <Divider />

            <AboutMe />

            <Divider />

            <FeaturedWork />

            <Divider />

            <Experience />

            <Divider />

            <Education />

            <Divider />

            <AwardsAndCompetitions />

            <Divider />

            <FreelanceWork />

            <Divider />

            <Volunteering />

            <Divider />

            <ProjectOverview />

            <Divider />
        </main>
    );
}
