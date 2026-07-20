import { Divider } from "@/components/blocks/divider";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/config";
import { AboutMe } from "./sections/about-me";
import { Education } from "./sections/education";
import { Experience } from "./sections/experience";
import { FeaturedWork } from "./sections/featured-work";
import { HeroSection } from "./sections/hero-section";
import { ProjectOverview } from "./sections/project-overview";
import { Volunteering } from "./sections/volunteering";
import { AwardsAndCompetitions } from "./sections/awards-competitions";
import { FreelanceWork } from "./sections/freelance-work";

/**
 * The whole portfolio is one page, so the dictionary is resolved once here and
 * handed to each section. Sections take the slices they need as plain props,
 * which keeps the client-side carousels serializable.
 */
export function HomePage({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale);

    return (
        <main id="main" tabIndex={-1} className="scroll-mt-4 focus:outline-none">
            <HeroSection hero={dict.hero} chrome={dict.chrome} />

            <Divider />

            <AboutMe
                title={dict.sectionTitles.about}
                about={dict.about}
                services={dict.services}
            />

            <Divider />

            <FeaturedWork
                title={dict.sectionTitles["featured-work"]}
                data={dict.featuredWork}
                chrome={dict.chrome}
            />

            <Divider />

            <Experience
                title={dict.sectionTitles.experience}
                data={dict.experience}
                chrome={dict.chrome}
            />

            <Divider />

            <Education title={dict.sectionTitles.education} data={dict.education} />

            <Divider />

            <AwardsAndCompetitions
                title={dict.sectionTitles.awards}
                data={dict.awards}
            />

            <Divider />

            <FreelanceWork
                title={dict.sectionTitles.freelance}
                data={dict.freelanceWork}
                chrome={dict.chrome}
            />

            <Divider />

            <Volunteering
                title={dict.sectionTitles.volunteering}
                data={dict.volunteering}
            />

            <Divider />

            <ProjectOverview
                labels={dict.projectsSection}
                data={dict.projectOverview}
            />

            <Divider />
        </main>
    );
}
