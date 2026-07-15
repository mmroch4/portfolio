export interface AwardsAndCompetitions {
    date: string;
    title: string;
    subtitle: string;
    badge?: string;
    bulletPoints: string[];
}

export const awardsAndCompetitionsData: AwardsAndCompetitions[] = [
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
];
