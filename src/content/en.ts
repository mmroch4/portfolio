import type { Dictionary } from "./types";
import {
    featuredWorkAssets,
    freelanceWorkAssets,
    logos,
    sideProjectUrls,
    writingUrls,
} from "./assets";

/** English (en) — the default locale, served from the URL root. */
export const en: Dictionary = {
    meta: {
        title: "Miguel Rocha — Software Engineer",
        description:
            "Miguel Rocha — Full-Stack Software Engineer based in Porto, Portugal. " +
            "Building high-performance web applications, scalable digital products, and algorithmic solutions.",
        ogAlt: "Miguel Rocha — Software Engineer",
        keywords: [
            "Miguel Rocha",
            "Software Engineer",
            "Full-Stack Developer",
            "Web Developer",
            "Porto",
            "Portugal",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Portfolio",
        ],
    },

    chrome: {
        skipToContent: "Skip to content",
        announcement: "Getting ready for SWERC 2026 — Follow my progress on GitHub",
        sectionNavLabel: "Section navigation",
        themeToggleLabel: "Toggle dark mode",
        langToggleLabel: "Ver em português",
        socialProfileLabel: "{name} profile",
        companyLogoAlt: "{name} logo",
        projectPreviewAlt: "{title} preview",
        carouselPrevious: "Previous slide",
        carouselNext: "Next slide",
        presentLabel: "Present",
    },

    hero: {
        name: "Miguel Rocha",
        role: "Software Engineer",
        location: "Porto, Portugal",
        cta: "Get in touch",
        profileAlt: "Miguel Rocha",
        bannerAlt: "",
    },

    about: {
        introLead:
            "Hey there. I’m Miguel — Full-Stack Software Engineer based in Portugal, currently crafting ",
        introHighlight:
            "high-performance web applications, scalable digital products, and algorithmic solutions.",
        subline:
            "Software Engineer @TreeTree2, and main developer of Prisma and Folhas.",
        servicesLabel: "SERVICES",
    },

    sectionTitles: {
        about: "About Me",
        "featured-work": "Featured Work",
        experience: "Experience",
        education: "Education",
        awards: "Awards & Competitions",
        freelance: "Freelance & Client Work",
        volunteering: "Volunteering",
    },

    projectsSection: {
        sideProjects: "Side Projects",
        writing: "Writing",
    },

    services: [
        "Full-Stack Development",
        "Software Engineering",
        "Algorithms & Logic",
        "Web Applications",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "GraphQL",
        "RESTful APIs",
        "Relational Databases",
        "Responsive UI",
    ],

    featuredWork: [
        {
            ...featuredWorkAssets.prisma,
            title: "Manifest-Driven Learning & Contest Platform",
            description: "",
            roles: ["Front-End Software Engineer", "UI/UX Engineer"],
        },
        {
            ...featuredWorkAssets.folhas,
            title: "AI-Powered STEM Education Discovery Platform",
            description: "",
            roles: ["Full-Stack Software Engineer", "Automation Engineer"],
        },
        {
            ...featuredWorkAssets.inline,
            title: "Real-Time IoT Queue Management System",
            description: "",
            roles: ["Full-Stack Software Engineer", "Systems & IoT Engineer"],
        },
    ],

    experience: [
        {
            ...logos.uporto,
            role: "Information Systems Developer and Communications Assistant",
            company: "University of Porto",
            location: "Porto, Portugal",
            startYear: "2025",
            current: true,
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
            ...logos.treetree2,
            role: "Software Engineer",
            company: "TreeTree2",
            location: "Remote · Volunteer",
            startYear: "2025",
            current: true,
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
    ],

    education: [
        {
            date: "Sep 2025 - Present",
            title: "Bachelor in Computer Science",
            subtitle: "University of Porto — Porto, Portugal",
        },
        {
            date: "Feb 2025 - Jun 2025",
            title: "Algorithms and Data Structures",
            subtitle: "TreeTree2 — Lisbon, Portugal",
        },
        {
            date: "Jun 2023 - Present",
            title: "Software Engineering",
            subtitle: "Rocketseat — Remote",
        },
    ],

    awards: [
        {
            date: "Nov 2025",
            title: "ICPC SWERC 2025",
            subtitle: "Lisbon, Portugal",
            badge: "85th Place",
            bulletPoints: [
                "Represented the University of Porto internationally in the Southwestern Europe Regional Contest (ICPC SWERC).",
                "Competed as part of team 'oneL' alongside Filipe Zheng and Rayner Sulyak.",
                "Secured 85th place in a high-performance environment, solving complex algorithmic and data structure problems under pressure.",
            ],
        },
        {
            date: "Oct 2025",
            title: "MIUP 2025",
            subtitle: "Aveiro, Portugal",
            badge: "Bronze Medal (4th Place)",
            bulletPoints: [
                "Won the Bronze Medal at the Maratona Inter-Universitária de Programação (MIUP 2025) hosted at the University of Aveiro.",
                "Achieved a top-5 national placement after 5 hours of intensive teamwork and algorithmic problem-solving.",
                "Collaborated effectively under pressure with teammates Rayner Sulyak and Filipe Zheng.",
            ],
        },
        {
            date: "Jul 2025",
            title: "Prémio Pedro Matos 2025",
            subtitle: "Leiria, Portugal",
            badge: "1st Place / Winner",
            bulletPoints: [
                "Won 1st place in the national science and technology initiative organized by the Instituto Politécnico de Leiria.",
                "Authored the research paper 'RSA – O modelo de chaves públicas e assinaturas digitais', analyzing cryptographic efficiency and mathematical foundations.",
                "Developed a comprehensive project delivery including an academic article, an informative poster, and an interactive website featuring a custom online game that simulates RSA encryption.",
            ],
        },
        {
            date: "May 2025",
            title: "Olimpíadas Nacionais de Informática (ONI 2025)",
            subtitle: "Remote",
            badge: "3rd Place (Qualifiers)",
            bulletPoints: [
                "Achieved 3rd place nationwide during the highly competitive qualification round of the National Informatics Olympiad.",
                "Demonstrated advanced logic, problem-solving, and algorithmic optimization skills against the top youth tech talent in the country.",
                "Published an open-source GitHub repository detailing custom implementations and training exercises solved during preparation.",
            ],
        },
        {
            date: "May 2025",
            title: "Ciências RALLY PRO 2025",
            subtitle: "Lisbon, Portugal",
            badge: "1st Place / Winner",
            bulletPoints: [
                "Conquered the 1st place prize at the RALLY PRO Programming Contest hosted by the Faculty of Sciences of the University of Lisbon (FCUL).",
                "Represented Escola Secundária Domingos Sequeira (ESDS) to secure a national-level victory in competitive software development.",
            ],
        },
    ],

    freelanceWork: [
        {
            ...freelanceWorkAssets.africaminha,
            title: "África Minha E-Commerce Infrastructure",
            roles: ["Full-Stack Software Engineer", "UI/UX Engineer"],
        },
        {
            ...freelanceWorkAssets.jaspet,
            title: "Jaspet Store Omnichannel Platform",
            roles: ["Full-Stack Software Engineer", "UI/UX Engineer"],
        },
        {
            ...freelanceWorkAssets.clinicaonyx,
            title: "Clínica Onyx Web Maintenance",
            roles: ["Web Support & Maintenance Engineer"],
        },
        {
            ...freelanceWorkAssets.ccm,
            title: "Centro Cultural Montemuro Website",
            roles: ["Full-Stack Software Engineer", "UI/UX Engineer"],
        },
        {
            ...freelanceWorkAssets.sevenconsulting,
            title: "Seven Consulting Training Portal",
            roles: ["Full-Stack Software Engineer", "Web Developer"],
        },
        {
            ...freelanceWorkAssets.gabirocha,
            title: "Gabi Rocha Fotografia Showcase",
            roles: ["Frontend Software Engineer", "UI/UX Engineer"],
        },
    ],

    volunteering: [
        {
            date: "May 2026",
            title: "International Team Guide and Contest Operations Volunteer",
            subtitle: "ANPC, EGOI 2026 — Cesenatico, Italy",
            bulletPoints: [
                "Coordinated logistics, communication, and event navigation for international delegations (Slovenia, North Macedonia, and Moldova) throughout the competition",
                "Assisted in setting up the primary contest hall infrastructure and managed on-site event coordination",
                "Monitored the active competition environment and guided contestants to ensure tournament rules and schedules were followed",
            ],
        },
        {
            date: "Mar 2026",
            title: "Technical Reviewer",
            subtitle: "TreeTree2, Portuguese's National AI Olympiad (ONIA) — Remote",
            bulletPoints: [
                "Audited national artificial intelligence challenges to identify and correct typos, technical mistakes, and logical inconsistencies",
                "Provided strategic feedback and actionable suggestions to elevate the overall quality and pedagogical value of the competition",
                "Ensured challenge mechanics and difficulty scaling were precisely tailored to specific target student age groups",
            ],
        },
        {
            date: "Feb 2026 - Mar 2026",
            title: "Computer Science and Python Instructor",
            subtitle: "TreeTree2, AfterSchool Program — Remote",
            bulletPoints: [
                "Returned to facilitate remote Python programming classes for dedicated student cohorts using an advanced flipped-classroom methodology",
                "Guided students through computational thinking principles, core algorithms, and fundamental software development practices in Python",
                "Conducted interactive problem-solving and code-review sessions to nurture high-potential STEM talent",
            ],
        },
        {
            date: "Nov 2025 - Mar 2026",
            title: "STEM Instructor",
            subtitle: "TreeTree2, Alpha Program — Lisbon, Portugal",
            bulletPoints: [
                "Taught advanced STEM subjects, including Mathematics, Physics, and Chemistry, to groups of approximately 10 secondary school students",
                "Delivered interactive remote learning sessions designed to accelerate scientific literacy in high-aptitude younger students",
                "Represented a highly competitive extracurricular engineering program backed by leading institutional partners",
            ],
        },
        {
            date: "Jul 2025",
            title: "Computer Science Instructor",
            subtitle: "TreeTree2, Primeiros Bits Summer Academy — Lisbon, Portugal",
            bulletPoints: [
                "Instructed elementary students in foundational computer science concepts, bridging basic logic with modern technology frameworks",
                "Designed and delivered lessons covering computational thinking and introductory artificial intelligence concepts for young cohorts",
                "Fostered an engaging, interactive learning environment to democratize early access to high-level tech education",
            ],
        },
        {
            date: "Jun 2025 - Aug 2025",
            title: "Computer Science and Python Instructor",
            subtitle: "TreeTree2, AfterSchool Program — Remote",
            bulletPoints: [
                "Facilitated remote Python programming classes for dedicated student cohorts using an advanced flipped-classroom methodology.",
                "Guided students through computational thinking principles, core algorithms, and fundamental software development practices in Python.",
                "Conducted interactive problem-solving and code-review sessions to nurture high-potential STEM talent.",
            ],
        },
        {
            date: "Mar 2025 - Apr 2025",
            title: "Digital Literacy Instructor and Brand Ambassador",
            subtitle: "E-REDES / DGE — Academia Digital para Pais — Leiria, Portugal",
            bulletPoints: [
                "Returned as an official E-REDES ambassador for the 5th edition, driving educational workshops focused on advanced Digital Competencies and introductory Artificial Intelligence concepts",
                "Empowered parents to navigate modern tech landscapes, demystifying AI tools and practical digital workflows to support their children’s academic progress",
                "Mentored new student volunteers entering the program, ensuring pedagogical continuity and cohesive delivery of the updated course modules",
            ],
        },
        {
            date: "Jan 2025 - May 2025",
            title: "Founder and Lead Organizer",
            subtitle: "Oh My Code 2025 — Leiria, Portugal",
            bulletPoints: [
                "Founded and organized a youth competitive programming challenge aimed at fostering algorithmic thinking and preparing students for the digital sector",
                "Managed event logistics for teams of up to 3 participants, coordinating problem-solving challenges designed to enhance critical thinking and logical reasoning",
                "Personally audited and manually reviewed participant source code during the live tournament to evaluate algorithmic efficiency and ensure competition integrity",
            ],
        },
        {
            date: "Oct 2024 - Nov 2024",
            title: "Co-Organizer and Full-Stack Developer",
            subtitle:
                "Escola Secundária Domingos Sequeira, Web Summit Lisbon 2024 — Leiria, Portugal",
            bulletPoints: [
                "Co-organized an institutional field trip to Web Summit Lisbon for 100 students and faculty members, playing a major role in logistics and attendee management",
                "Architected and deployed a custom web application to streamline the registration, communication, and real-time coordination of all event participants",
                "Collaborated closely with the lead faculty member and student organizers to ensure seamless operations during Europe's largest technology conference",
            ],
        },
        {
            date: "Apr 2024",
            title: "Digital Literacy Instructor and Brand Ambassador",
            subtitle: "E-REDES / DGE — Academia Digital para Pais — Leiria, Portugal",
            bulletPoints: [
                "Served as an official E-REDES brand ambassador for the 4th edition, pioneering foundational technology workshops tailored for parents",
                "Designed and conducted interactive lessons centered on Online Security and Digital Citizenship, reducing technical anxiety among adult learners",
                "Fostered a highly accessible learning environment focused on safe internet practices, data privacy, and secure parent-school digital communication",
            ],
        },
    ],

    projectOverview: {
        writing: [
            {
                name: "RSA: The Public-Key Method and Digital Signatures",
                url: writingUrls.rsa,
            },
            {
                name: "Averages Can Be Deceiving Sometimes",
                url: writingUrls.averages,
            },
            {
                name: "Did You Know a Car's License Plate is a 'DISGUISED NUMBER'?",
                url: writingUrls.licensePlate,
            },
            {
                name: "Clean Code in TypeScript: Variables",
                url: writingUrls.cleanCode,
            },
        ],
        sideProjects: [
            { name: "University", url: sideProjectUrls.university },
            { name: "GitHub Portugal", url: sideProjectUrls.githubPortugal },
            { name: "Shh", url: sideProjectUrls.shh },
        ],
    },
};
