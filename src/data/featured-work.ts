export interface FeaturedWork {
    title: string;
    description: string;
    roles: string[];
    image: string;
    href: string;
}

export const featuredWorkData: FeaturedWork[] = [
    {
        title: "Manifest-Driven Learning & Contest Platform",
        description: "",
        roles: ["Front-End Software Engineer", "UI/UX Engineer"],
        image: "/images/feature-work/prisma.png",
        href: "",
    },
    {
        title: "AI-Powered STEM Education Discovery Platform",
        description: "",
        roles: ["Full-Stack Software Engineer", "Automation Engineer"],
        image: "/images/feature-work/folhas.png",
        href: "",
    },
    {
        title: "Real-Time IoT Queue Management System",
        description: "",
        roles: ["Full-Stack Software Engineer", "Systems & IoT Engineer"],
        image: "/images/feature-work/inline.png",
        href: "",
    },
];
