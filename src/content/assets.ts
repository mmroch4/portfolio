/**
 * Locale-invariant content: image paths, logo dimensions and outbound URLs.
 *
 * Both `en.ts` and `pt.ts` import from here rather than repeating these
 * literals, so a renamed screenshot or a changed project URL can never end up
 * correct in one language and stale in the other.
 */

/** Company logos rendered in the Experience section. */
export const logos = {
    uporto: {
        icon: "/images/icon/uporto-icon.svg",
        width: 130,
        height: 28,
    },
    treetree2: {
        icon: "/images/icon/treetree2-icon.svg",
        width: 158,
        height: 20,
    },
} as const;

/** Screenshots and links for the Featured Work carousel. */
export const featuredWorkAssets = {
    prisma: {
        image: "/images/feature-work/prisma.png",
        href: "",
    },
    folhas: {
        image: "/images/feature-work/folhas.png",
        href: "",
    },
    inline: {
        image: "/images/feature-work/inline.png",
        href: "",
    },
} as const;

/** Screenshots and links for the Freelance & Client Work carousels. */
export const freelanceWorkAssets = {
    africaminha: {
        image: "/images/freelance-work/africaminha.png",
        href: "https://africaminha.com",
    },
    jaspet: {
        image: "/images/freelance-work/jaspet.png",
        href: "https://jaspetstore.com",
    },
    clinicaonyx: {
        image: "/images/freelance-work/clinicaonyx.png",
        href: "https://clinicaonyx.com",
    },
    ccm: {
        image: "/images/freelance-work/ccm.png",
        href: "https://montemuro.org",
    },
    sevenconsulting: {
        image: "/images/freelance-work/sevenconsulting.png",
        href: "https://www.sevenconsultingtraining.com.br",
    },
    gabirocha: {
        image: "/images/freelance-work/gabirocha.png",
        href: "https://www.gabirochafotografia.com",
    },
} as const;

/** Published writing. */
export const writingUrls = {
    rsa: "https://premiopedrodematos.miguelrocha.dev/",
    averages:
        "https://drive.google.com/file/d/1Dglx0Fzd3_v6XuTJsvpbhuClPib4MhAv/view",
    licensePlate:
        "https://drive.google.com/file/d/1VLxXF7iSLOKT0eIWQDjCRsJR0oynMId4/view",
    cleanCode:
        "https://www.tabnews.com.br/miguelrocha/clean-code-no-typescript-variaveis",
} as const;

/** Side projects. */
export const sideProjectUrls = {
    university: "https://github.com/mmroch4/university",
    githubPortugal: "https://www.githubportugal.com/",
    shh: "https://premiopedrodematos.miguelrocha.dev/",
} as const;
