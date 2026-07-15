export interface SocialMedia {
    href: string;
    // Key into `socialIconMap` in @/components/icons and the link's accessible label.
    icon: string;
}

export const GITHUB_LINK = "https://github.com/mmroch4";

export const socialMediaData: SocialMedia[] = [
    {
        href: GITHUB_LINK,
        icon: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/miguelmartinsrocha/",
        icon: "LinkedIn",
    },
    {
        href: "https://discord.com/users/526071679936626602",
        icon: "Discord",
    },
];
