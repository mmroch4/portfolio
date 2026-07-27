import type { Dictionary } from "./types";
import {
    featuredWorkAssets,
    freelanceWorkAssets,
    logos,
    sideProjectUrls,
    writingUrls,
} from "./assets";

/**
 * Portuguese (pt-PT) mirror of `en.ts`, served under `/pt`.
 *
 * Proper nouns are left untranslated: competition names (ICPC SWERC, MIUP),
 * institutions, programme names (AfterSchool, Alpha) and technologies. Bullet
 * points use the nominal register standard in Portuguese CVs, mirroring the
 * participle style of the English source.
 */
export const pt: Dictionary = {
    meta: {
        title: "Miguel Rocha — Engenheiro de Software",
        description:
            "Miguel Rocha — Engenheiro de Software Full-Stack no Porto, Portugal. " +
            "A construir aplicações web de alto desempenho, produtos digitais escaláveis e soluções algorítmicas.",
        ogAlt: "Miguel Rocha — Engenheiro de Software",
        keywords: [
            "Miguel Rocha",
            "Engenheiro de Software",
            "Programador Full-Stack",
            "Programador Web",
            "Porto",
            "Portugal",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Portefólio",
        ],
    },

    chrome: {
        skipToContent: "Saltar para o conteúdo",
        announcement:
            "A preparar-me para o SWERC 2026 — Acompanha o meu progresso no GitHub",
        sectionNavLabel: "Navegação por secções",
        themeToggleLabel: "Alternar modo escuro",
        langToggleLabel: "View in English",
        socialProfileLabel: "Perfil de {name}",
        companyLogoAlt: "Logótipo de {name}",
        projectPreviewAlt: "Pré-visualização de {title}",
        carouselPrevious: "Slide anterior",
        carouselNext: "Slide seguinte",
        presentLabel: "Presente",
    },

    hero: {
        name: "Miguel Rocha",
        role: "Engenheiro de Software",
        location: "Porto, Portugal",
        cta: "Entrar em contacto",
        profileAlt: "Miguel Rocha",
        bannerAlt: "",
    },

    about: {
        introLead:
            "Olá. Sou o Miguel — Engenheiro de Software Full-Stack em Portugal, atualmente a criar ",
        introHighlight:
            "aplicações web de alto desempenho, produtos digitais escaláveis e soluções algorítmicas.",
        subline:
            "Engenheiro de Software @TreeTree2 e principal programador do Prisma e do Folhas.",
        servicesLabel: "SERVIÇOS",
    },

    sectionTitles: {
        about: "Sobre Mim",
        "featured-work": "Trabalho em Destaque",
        experience: "Experiência",
        education: "Formação",
        awards: "Prémios & Competições",
        freelance: "Freelance & Trabalho para Clientes",
        volunteering: "Voluntariado",
    },

    projectsSection: {
        sideProjects: "Projetos Pessoais",
        writing: "Artigos",
    },

    services: [
        "Desenvolvimento Full-Stack",
        "Engenharia de Software",
        "Algoritmos & Lógica",
        "Aplicações Web",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "GraphQL",
        "APIs RESTful",
        "Bases de Dados Relacionais",
        "UI Responsiva",
    ],

    featuredWork: [
        {
            ...featuredWorkAssets.prisma,
            title: "Plataforma de Aprendizagem e Competições Orientada a Manifestos",
            description: "",
            roles: ["Engenheiro de Software Front-End", "Engenheiro de UI/UX"],
        },
        {
            ...featuredWorkAssets.folhas,
            title: "Plataforma de Descoberta de Educação STEM com IA",
            description: "",
            roles: ["Engenheiro de Software Full-Stack", "Engenheiro de Automação"],
        },
        {
            ...featuredWorkAssets.inline,
            title: "Sistema de Gestão de Filas IoT em Tempo Real",
            description: "",
            roles: ["Engenheiro de Software Full-Stack", "Engenheiro de Sistemas & IoT"],
        },
    ],

    experience: [
        {
            ...logos.uporto,
            role: "Desenvolvedor de Sistemas de Informação e Assistente de Comunicação",
            company: "Universidade do Porto",
            location: "Porto, Portugal",
            startYear: "2025",
            current: true,
            bulletPoints: [
                "Atualização e manutenção de conteúdos institucionais no portal da Unidade (CMS)",
                "Apoio na gestão de páginas oficiais, copywriting e agendamento de publicações para promover projetos de voluntariado e eventos",
                "Organização e coordenação de informação para divulgação junto da comunidade académica",
                "Desenvolvimento e implementação de um portal interno de gestão de voluntariado para otimizar o registo de dados e a coordenação de projetos",
                "Conceção e manutenção de aplicações web à medida, melhorando o desempenho do sistema e a experiência do utilizador",
                "Prestação de suporte informático completo e administração de sistemas, garantindo a disponibilidade contínua das plataformas digitais da unidade",
                "Criação de ferramentas digitais à medida para automatizar fluxos de trabalho internos e articular o desenvolvimento com a estratégia de comunicação",
            ],
        },
        {
            ...logos.treetree2,
            role: "Engenheiro de Software",
            company: "TreeTree2",
            location: "Remoto · Voluntariado",
            startYear: "2025",
            current: true,
            bulletPoints: [
                "Arquitetura e construção de todo o portal front-end do Prisma, com arquitetura multi-tenant, SSO entre domínios e um sistema de temas acessível",
                "Desenvolvimento de um motor interativo de formulários e avaliação, com ciclos de vida de tentativas personalizados, gravação automática em tempo real e aleatorização anti-fraude por tentativa",
                "Implementação de um mapa avançado de navegação em grafo DAG, recorrendo ao algoritmo de layout de Sugiyama para visualizar percursos de aprendizagem dinâmicos",
                "Desenvolvimento de suporte completo para WAI-ARIA e leitores de ecrã, com gestão programática de foco e padrões de design acessíveis para garantir conformidade rigorosa",
                "Conceção de restrição de conteúdos no servidor e validação ao nível das rotas, impondo pré-requisitos, filtragem de audiência e hidratação otimista do progresso",
                "Conceção e desenvolvimento de uma plataforma full-stack de descoberta (Folhas) para centralizar oportunidades STEM e academias de verão em Portugal",
                "Construção de um bot de web scraping com IA para procurar continuamente iniciativas académicas, com um fluxo de validação human-in-the-loop",
                "Engenharia da arquitetura ponta a ponta do Folhas, abrangendo modelos de base de dados escaláveis, APIs de backend robustas e o dashboard de frontend",
            ],
        },
    ],

    education: [
        {
            date: "Set 2025 - Presente",
            title: "Licenciatura em Ciência de Computadores",
            subtitle: "Universidade do Porto — Porto, Portugal",
        },
        {
            date: "Fev 2025 - Jun 2025",
            title: "Algoritmos e Estruturas de Dados",
            subtitle: "TreeTree2 — Lisboa, Portugal",
        },
        {
            date: "Jun 2023 - Jun 2024",
            title: "Engenharia de Software",
            subtitle: "Rocketseat — Remoto",
        },
    ],

    awards: [
        {
            date: "Nov 2025",
            title: "ICPC SWERC 2025",
            subtitle: "Lisboa, Portugal",
            badge: "85.º Lugar",
            bulletPoints: [
                "Representação da Universidade do Porto a nível internacional no Southwestern Europe Regional Contest (ICPC SWERC).",
                "Participação na equipa «oneL», em conjunto com Filipe Zheng e Rayner Sulyak.",
                "85.º lugar num ambiente de elevada competitividade, resolvendo problemas complexos de algoritmia e estruturas de dados sob pressão.",
            ],
        },
        {
            date: "Out 2025",
            title: "MIUP 2025",
            subtitle: "Aveiro, Portugal",
            badge: "Medalha de Bronze (4.º Lugar)",
            bulletPoints: [
                "Conquista da Medalha de Bronze na Maratona Inter-Universitária de Programação (MIUP 2025), na Universidade de Aveiro.",
                "Classificação no top 5 nacional após 5 horas de trabalho de equipa intensivo e resolução de problemas algorítmicos.",
                "Colaboração eficaz sob pressão com os colegas de equipa Rayner Sulyak e Filipe Zheng.",
            ],
        },
        {
            date: "Jul 2025",
            title: "Prémio Pedro Matos 2025",
            subtitle: "Leiria, Portugal",
            badge: "1.º Lugar / Vencedor",
            bulletPoints: [
                "1.º lugar na iniciativa nacional de ciência e tecnologia organizada pelo Instituto Politécnico de Leiria.",
                "Autoria do artigo de investigação «RSA – O modelo de chaves públicas e assinaturas digitais», analisando a eficiência criptográfica e os fundamentos matemáticos.",
                "Entrega de um projeto completo, incluindo um artigo académico, um poster informativo e um site interativo com um jogo online que simula a cifra RSA.",
            ],
        },
        {
            date: "Mai 2025",
            title: "Olimpíadas Nacionais de Informática (ONI 2025)",
            subtitle: "Remoto",
            badge: "3.º Lugar (Apuramento)",
            bulletPoints: [
                "3.º lugar a nível nacional na fase de apuramento, altamente competitiva, das Olimpíadas Nacionais de Informática.",
                "Demonstração de lógica avançada, resolução de problemas e otimização algorítmica frente aos melhores jovens talentos tecnológicos do país.",
                "Publicação de um repositório open-source no GitHub com implementações próprias e exercícios de treino resolvidos durante a preparação.",
            ],
        },
        {
            date: "Mai 2025",
            title: "Ciências RALLY PRO 2025",
            subtitle: "Lisboa, Portugal",
            badge: "1.º Lugar / Vencedor",
            bulletPoints: [
                "1.º lugar no concurso de programação RALLY PRO, organizado pela Faculdade de Ciências da Universidade de Lisboa (FCUL).",
                "Representação da Escola Secundária Domingos Sequeira (ESDS), garantindo uma vitória de âmbito nacional em desenvolvimento de software competitivo.",
            ],
        },
    ],

    freelanceWork: [
        {
            ...freelanceWorkAssets.africaminha,
            title: "Infraestrutura de E-Commerce da África Minha",
            roles: ["Engenheiro de Software Full-Stack", "Engenheiro de UI/UX"],
        },
        {
            ...freelanceWorkAssets.jaspet,
            title: "Plataforma Omnicanal da Jaspet Store",
            roles: ["Engenheiro de Software Full-Stack", "Engenheiro de UI/UX"],
        },
        {
            ...freelanceWorkAssets.clinicaonyx,
            title: "Manutenção Web da Clínica Onyx",
            roles: ["Engenheiro de Suporte e Manutenção Web"],
        },
        {
            ...freelanceWorkAssets.ccm,
            title: "Website do Centro Cultural Montemuro",
            roles: ["Engenheiro de Software Full-Stack", "Engenheiro de UI/UX"],
        },
        {
            ...freelanceWorkAssets.sevenconsulting,
            title: "Portal de Formação da Seven Consulting",
            roles: ["Engenheiro de Software Full-Stack", "Programador Web"],
        },
        {
            ...freelanceWorkAssets.gabirocha,
            title: "Website de Portefólio da Gabi Rocha Fotografia",
            roles: ["Engenheiro de Software Frontend", "Engenheiro de UI/UX"],
        },
    ],

    volunteering: [
        {
            date: "Mai 2026",
            title: "Guia de Equipas Internacionais e Voluntário de Operações",
            subtitle: "ANPC, EGOI 2026 — Cesenatico, Itália",
            bulletPoints: [
                "Coordenação de logística, comunicação e orientação de delegações internacionais (Eslovénia, Macedónia do Norte e Moldávia) ao longo da competição",
                "Apoio na montagem da infraestrutura da sala principal de competição e gestão da coordenação do evento no local",
                "Monitorização do ambiente de competição e acompanhamento dos concorrentes para garantir o cumprimento das regras e dos horários do torneio",
            ],
        },
        {
            date: "Mar 2026",
            title: "Revisor Técnico",
            subtitle:
                "TreeTree2, Olimpíadas Nacionais de Inteligência Artificial (ONIA) — Remoto",
            bulletPoints: [
                "Auditoria dos desafios nacionais de inteligência artificial para identificar e corrigir gralhas, erros técnicos e inconsistências lógicas",
                "Feedback estratégico e sugestões acionáveis para elevar a qualidade global e o valor pedagógico da competição",
                "Garantia de que a mecânica e a progressão de dificuldade dos desafios estavam ajustadas às faixas etárias-alvo",
            ],
        },
        {
            date: "Fev 2026 - Mar 2026",
            title: "Formador de Informática e Python",
            subtitle: "TreeTree2, Programa AfterSchool — Remoto",
            bulletPoints: [
                "Regresso ao programa para dinamizar aulas remotas de programação em Python para turmas dedicadas, com metodologia de sala de aula invertida",
                "Orientação dos alunos em princípios de pensamento computacional, algoritmos fundamentais e boas práticas de desenvolvimento de software em Python",
                "Dinamização de sessões interativas de resolução de problemas e revisão de código para desenvolver talento STEM de elevado potencial",
            ],
        },
        {
            date: "Nov 2025 - Mar 2026",
            title: "Formador STEM",
            subtitle: "TreeTree2, Programa Alpha — Lisboa, Portugal",
            bulletPoints: [
                "Lecionação de disciplinas STEM avançadas, incluindo Matemática, Física e Química, a grupos de cerca de 10 alunos do ensino secundário",
                "Dinamização de sessões remotas de aprendizagem interativa, concebidas para acelerar a literacia científica em alunos mais novos de elevada aptidão",
                "Representação de um programa extracurricular de engenharia altamente competitivo, apoiado por parceiros institucionais de referência",
            ],
        },
        {
            date: "Jul 2025",
            title: "Formador de Informática",
            subtitle:
                "TreeTree2, Academia de Verão Primeiros Bits — Lisboa, Portugal",
            bulletPoints: [
                "Formação de alunos do 1.º ciclo em conceitos fundamentais de informática, ligando a lógica básica às tecnologias modernas",
                "Conceção e lecionação de aulas sobre pensamento computacional e introdução à inteligência artificial para turmas mais jovens",
                "Criação de um ambiente de aprendizagem interativo e envolvente para democratizar o acesso precoce a educação tecnológica de alto nível",
            ],
        },
        {
            date: "Jun 2025 - Ago 2025",
            title: "Formador de Informática e Python",
            subtitle: "TreeTree2, Programa AfterSchool — Remoto",
            bulletPoints: [
                "Dinamização de aulas remotas de programação em Python para turmas dedicadas, com metodologia de sala de aula invertida.",
                "Orientação dos alunos em princípios de pensamento computacional, algoritmos fundamentais e boas práticas de desenvolvimento de software em Python.",
                "Dinamização de sessões interativas de resolução de problemas e revisão de código para desenvolver talento STEM de elevado potencial.",
            ],
        },
        {
            date: "Mar 2025 - Abr 2025",
            title: "Formador de Literacia Digital e Embaixador de Marca",
            subtitle: "E-REDES / DGE — Academia Digital para Pais — Leiria, Portugal",
            bulletPoints: [
                "Regresso como embaixador oficial da E-REDES na 5.ª edição, dinamizando workshops focados em Competências Digitais avançadas e conceitos introdutórios de Inteligência Artificial",
                "Capacitação de pais para navegarem o panorama tecnológico atual, desmistificando ferramentas de IA e fluxos digitais práticos para apoiarem o percurso académico dos filhos",
                "Mentoria de novos alunos voluntários que entraram no programa, assegurando continuidade pedagógica e coerência na lecionação dos módulos atualizados",
            ],
        },
        {
            date: "Jan 2025 - Mai 2025",
            title: "Fundador e Organizador Principal",
            subtitle: "Oh My Code 2025 — Leiria, Portugal",
            bulletPoints: [
                "Fundação e organização de um desafio de programação competitiva para jovens, promovendo o pensamento algorítmico e a preparação para o setor digital",
                "Gestão da logística do evento para equipas de até 3 participantes, coordenando desafios concebidos para estimular o pensamento crítico e o raciocínio lógico",
                "Auditoria e revisão manual do código-fonte dos participantes durante o torneio, avaliando a eficiência algorítmica e garantindo a integridade da competição",
            ],
        },
        {
            date: "Out 2024 - Nov 2024",
            title: "Coorganizador e Programador Full-Stack",
            subtitle:
                "Escola Secundária Domingos Sequeira, Web Summit Lisboa 2024 — Leiria, Portugal",
            bulletPoints: [
                "Coorganização de uma visita de estudo institucional ao Web Summit Lisboa para 100 alunos e professores, com papel determinante na logística e na gestão de participantes",
                "Arquitetura e implementação de uma aplicação web à medida para agilizar a inscrição, a comunicação e a coordenação em tempo real de todos os participantes",
                "Colaboração próxima com o professor responsável e com os alunos organizadores para assegurar uma operação sem falhas durante a maior conferência de tecnologia da Europa",
            ],
        },
        {
            date: "Abr 2024",
            title: "Formador de Literacia Digital e Embaixador de Marca",
            subtitle: "E-REDES / DGE — Academia Digital para Pais — Leiria, Portugal",
            bulletPoints: [
                "Embaixador oficial da marca E-REDES na 4.ª edição, lançando workshops de tecnologia de base pensados para pais",
                "Conceção e dinamização de aulas interativas centradas em Segurança Online e Cidadania Digital, reduzindo a ansiedade tecnológica dos formandos adultos",
                "Criação de um ambiente de aprendizagem acessível, focado em práticas seguras de utilização da internet, privacidade de dados e comunicação digital segura entre pais e escola",
            ],
        },
    ],

    projectOverview: {
        writing: [
            {
                name: "RSA: O Modelo de Chaves Públicas e Assinaturas Digitais",
                url: writingUrls.rsa,
            },
            {
                name: "As Médias Podem Ser Enganadoras",
                url: writingUrls.averages,
            },
            {
                name: "Sabias que a Matrícula de um Carro é um «NÚMERO DISFARÇADO»?",
                url: writingUrls.licensePlate,
            },
            {
                name: "Clean Code em TypeScript: Variáveis",
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
