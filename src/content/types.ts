/**
 * Shape of a full content dictionary.
 *
 * Every user-visible string on the site lives behind this type — both the UI
 * chrome (nav labels, button text) and the résumé content that used to sit in
 * `src/data/*`. `en.ts` and `pt.ts` each supply one complete `Dictionary`, so
 * TypeScript fails the build if a translation is missing a field.
 *
 * Locale-invariant values (image paths, outbound URLs, logo dimensions) are
 * NOT repeated here — both dictionaries import them from `./assets`.
 */

/** Section ids used as anchor targets and in the sticky section nav. */
export const sectionIds = [
    "about",
    "featured-work",
    "experience",
    "education",
    "awards",
    "freelance",
    "volunteering",
] as const;

export type SectionId = (typeof sectionIds)[number];

export interface Experience {
    icon: string;
    width: number;
    height: number;
    role: string;
    company: string;
    location: string;
    startYear: string;
    /** Omitted while the role is ongoing; `current` drives the status dot. */
    endYear?: string;
    current: boolean;
    bulletPoints: string[];
}

export interface Education {
    date: string;
    title: string;
    subtitle: string;
}

export interface AwardsAndCompetitions {
    date: string;
    title: string;
    subtitle: string;
    badge?: string;
    bulletPoints: string[];
}

export interface Volunteering {
    date: string;
    title: string;
    subtitle: string;
    bulletPoints: string[];
}

export interface FeaturedWork {
    title: string;
    description: string;
    roles: string[];
    image: string;
    href: string;
}

export interface FreelanceWork {
    title: string;
    roles: string[];
    image: string;
    href: string;
}

export interface LinkItem {
    name: string;
    url: string;
}

export interface ProjectOverview {
    writing: LinkItem[];
    sideProjects: LinkItem[];
}

/** Page-level SEO strings. */
export interface Meta {
    title: string;
    description: string;
    /** Alt text for the generated Open Graph image. */
    ogAlt: string;
    keywords: string[];
}

/** Strings for the persistent frame: header, nav, toggles, footer. */
export interface Chrome {
    skipToContent: string;
    announcement: string;
    sectionNavLabel: string;
    themeToggleLabel: string;
    /** Describes the *target* language, e.g. "Ver em português". */
    langToggleLabel: string;
    /** `{name}` is replaced with the network name. */
    socialProfileLabel: string;
    /** `{name}` is replaced with the company name. */
    companyLogoAlt: string;
    /** `{title}` is replaced with the project title. */
    projectPreviewAlt: string;
    carouselPrevious: string;
    carouselNext: string;
    presentLabel: string;
}

export interface Hero {
    name: string;
    role: string;
    location: string;
    cta: string;
    profileAlt: string;
    bannerAlt: string;
}

export interface About {
    /** Sentence lead-in, rendered before the highlighted clause. */
    introLead: string;
    /** Highlighted clause (gets the blue marker background). */
    introHighlight: string;
    subline: string;
    servicesLabel: string;
}

export interface Dictionary {
    meta: Meta;
    chrome: Chrome;
    hero: Hero;
    about: About;
    /** Heading text for each anchored section, keyed by its id. */
    sectionTitles: Record<SectionId, string>;
    projectsSection: {
        sideProjects: string;
        writing: string;
    };
    services: string[];
    featuredWork: FeaturedWork[];
    experience: Experience[];
    education: Education[];
    awards: AwardsAndCompetitions[];
    freelanceWork: FreelanceWork[];
    volunteering: Volunteering[];
    projectOverview: ProjectOverview;
}
