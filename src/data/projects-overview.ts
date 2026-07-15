export interface ProjectOverview {
    writing: Writing[];
    sideProjects: SideProject[];
}

export interface Writing {
    name: string;
    url: string;
}

export interface SideProject {
    name: string;
    url: string;
}

export const projectOverviewData: ProjectOverview = {
    writing: [
        {
            name: "RSA: The Public-Key Method and Digital Signatures",
            url: "https://premiopedrodematos.miguelrocha.dev/",
        },
        {
            name: "Averages Can Be Deceiving Sometimes",
            url: "https://drive.google.com/file/d/1Dglx0Fzd3_v6XuTJsvpbhuClPib4MhAv/view",
        },
        {
            name: "Did You Know a Car's License Plate is a 'DISGUISED NUMBER'?",
            url: "https://drive.google.com/file/d/1VLxXF7iSLOKT0eIWQDjCRsJR0oynMId4/view",
        },
        {
            name: "Clean Code in TypeScript: Variables",
            url: "https://www.tabnews.com.br/miguelrocha/clean-code-no-typescript-variaveis",
        },
    ],
    sideProjects: [
        {
            name: "University",
            url: "https://github.com/mmroch4/university",
        },
        {
            name: "GitHub Portugal",
            url: "https://www.githubportugal.com/",
        },
        {
            name: "Shh",
            url: "https://premiopedrodematos.miguelrocha.dev/",
        },
    ],
};
