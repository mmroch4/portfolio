export interface Experience {
    icon: string;
    width: number;
    height: number;
    role: string;
    company: string;
    location: string;
    startYear: string;
    endYear: string;
    bulletPoints: string[];
}

export const experienceData: Experience[] = [
    {
        icon: "/images/icon/uporto-icon.svg",
        width: 130,
        height: 28,
        role: "Information Systems Developer and Communications Assistant",
        company: "University of Porto",
        location: "Porto, Portugal",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Updating and maintaining institutional content on the Unit's portal (CMS)",
            "Assisting with the management of official pages, copywriting, and scheduling posts to promote volunteer projects and events",
            "Organizing and coordinating information for dissemination across the academic community",
            "Developed and deployed an internal volunteer management portal to optimize data tracking and project coordination",
            "Designed and maintained custom web applications, improving system performance and overall user experience",
            "Provided full IT support and system administration, ensuring continuous availability of the unit’s digital platforms",
            "Built tailored digital tools to automate internal workflows and bridge development with communications strategy",
        ],
    },
    {
        icon: "/images/icon/treetree2-icon.svg",
        width: 158,
        height: 20,
        role: "Software Engineer",
        company: "TreeTree2",
        location: "Remote · Volunteer",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Architected and built the entire front-end portal for Prisma, implementing multi-tenant architecture, cross-domain SSO, and an accessible theme system",
            "Engineered an interactive form and evaluation engine featuring custom attempt lifecycles, real-time autosave, and per-attempt anti-cheat randomization",
            "Implemented an advanced DAG graph navigation map leveraging the Sugiyama layout algorithm to visualize dynamic student learning paths",
            "Developed full WAI-ARIA and screen reader support, utilizing programmatic focus management and accessible design patterns to ensure strict compliance",
            "Designed server-side content gating and route-level validation to enforce strict prerequisite modes, audience filtering, and optimistic progress hydration",
            "Designing and developing a full-stack discovery platform (Folhas) to centralize STEM opportunities and summer academies across Portugal",
            "Building an AI-powered web scraping bot to continuously scan the web for academic initiatives, utilizing a human-in-the-loop validation workflow",
            "Engineering the end-to-end architecture of Folhas, spanning scalable database models, robust backend APIs, and the frontend dashboard",
        ],
    },
];
