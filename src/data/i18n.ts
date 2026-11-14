import type { ProjectId, StackGroupId } from './site';

export const langs = ['pt', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];

export const langMeta: Record<Lang, { path: string; htmlLang: string; ogLocale: string; label: string; name: string }> = {
  pt: { path: '/', htmlLang: 'pt-BR', ogLocale: 'pt_BR', label: 'PT', name: 'Português' },
  en: { path: '/en/', htmlLang: 'en', ogLocale: 'en_US', label: 'EN', name: 'English' },
  es: { path: '/es/', htmlLang: 'es', ogLocale: 'es_ES', label: 'ES', name: 'Español' },
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; stack: string; projects: string; contact: string };
  ui: { home: string; sections: string; toggleTheme: string; language: string; terminalLabel: string };
  hero: {
    hello: string;
    /** O trecho entre *asteriscos* sai em itálico, na cor de acento. */
    headline: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
    terminal: { role: string; focus: string };
  };
  about: {
    label: string;
    summary: string;
    paragraphs: string[];
    timelineTitle: string;
    timelineLabel: string;
    timeline: { period: string; role: string; company: string }[];
    educationTitle: string;
    education: { period: string; course: string; school: string }[];
  };
  stack: { label: string; title: string; groups: Record<StackGroupId, string> };
  projects: {
    label: string;
    title: string;
    private: string;
    open: string;
    demo: string;
    code: string;
    soon: string;
    items: Record<ProjectId, string>;
  };
  contact: { label: string; title: string; lead: string };
  footer: { made: string; disclaimer: string };
};

const companies = {
  b3: 'B3',
  midway: 'Midway',
  tec: 'Tec’ Events',
  gft: 'Grupo GFT',
  auto: 'Auto Geral',
  jcomp: 'J. Computação',
};

export const content: Record<Lang, Content> = {
  pt: {
    meta: {
      title: 'Assis de Freitas · Engenheiro de software sênior',
      description:
        'Portfólio de Assis de Freitas, engenheiro de software sênior: Java/Spring Boot, PHP/Laravel, Vue e produtos com IA.',
    },
    nav: { about: 'sobre', stack: 'stack', projects: 'projetos', contact: 'contato' },
    ui: {
      home: 'Assis Freitas, início',
      sections: 'Seções',
      toggleTheme: 'Alternar tema claro/escuro',
      language: 'Idioma',
      terminalLabel: 'Terminal com informações sobre Assis',
    },
    hero: {
      hello: 'Olá, eu sou o Assis —',
      headline: 'Engenheiro de software que *gosta* de levar a ideia até o deploy',
      tagline:
        'Engenheiro de software sênior no mercado financeiro, com mais de 10 anos em Java/Spring Boot, PHP e JavaScript. Nos projetos pessoais, construo produtos com IA.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Falar comigo',
      terminal: { role: 'Engenheiro de software sênior · mercado financeiro', focus: 'produtos com IA (Spring AI, LLMs)' },
    },
    about: {
      label: 'sobre',
      summary:
        'Mais de 10 anos construindo software, de sistemas de missão crítica no mercado financeiro a produtos próprios com IA.',
      paragraphs: [
        'Hoje atuo como engenheiro de software sênior no mercado financeiro. Ao longo da carreira desenvolvi e mantive sistemas de alta complexidade e missão crítica, sempre com foco em soluções escaláveis e eficientes.',
        'Trabalho principalmente com Java (Spring Boot), PHP (Laravel) e JavaScript (Vue, Angular e React). Fui sócio da Tec’ Events, onde aprendi gestão de projetos e liderança. Gosto de arquitetura de sistemas, otimização de performance e pipelines de CI/CD.',
        'Nos meus projetos pessoais, construo produtos que colocam LLMs para resolver problemas do dia a dia, como um assistente pessoal que cuida de agenda e e-mail.',
      ],
      timelineTitle: 'trajetória',
      timelineLabel: 'Trajetória profissional',
      educationTitle: 'formação',
      education: [
        { period: '2019 — 2020', course: 'Pós-graduação em Desenvolvimento de Tecnologias Digitais', school: 'Estácio' },
        { period: '2014 — 2017', course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', school: 'Fatec Itu' },
      ],
      timeline: [
        { period: '2026 — hoje', role: 'Engenheiro de software sênior', company: companies.b3 },
        { period: '2025 — 2026', role: 'Desenvolvedor sênior', company: companies.midway },
        { period: '2020 — 2025', role: 'Desenvolvedor pleno → sênior', company: companies.b3 },
        { period: '2018 — 2021', role: 'Sócio', company: companies.tec },
        { period: '2018 — 2020', role: 'Desenvolvedor júnior → pleno', company: companies.gft },
        { period: '2017', role: 'Programador júnior', company: companies.auto },
        { period: '2015 — 2017', role: 'Desenvolvedor web', company: companies.jcomp },
      ],
    },
    stack: {
      label: 'stack',
      title: 'Ferramentas do dia a dia',
      groups: { backend: 'Back-end', frontend: 'Front-end', infra: 'Dados & infra' },
    },
    projects: {
      label: 'projetos',
      title: 'No que estou trabalhando',
      private: 'privado',
      open: 'aberto',
      demo: 'Ver demo',
      code: 'Código',
      soon: 'Projetos abertos, pequenos e com demo no ar estão a caminho. Enquanto isso, os projetos acima são privados, mas posso mostrar mais numa conversa.',
      items: {
        estante:
          'Biblioteca pessoal: cadastre livros pelo ISBN e acompanhe suas leituras, com notas e anotações. Feita com DDD pragmático e regras de arquitetura garantidas por testes.',
        balcao:
          'Gestão de caixa para pequenos comércios: entradas, saídas e saldo do mês, com estorno em vez de edição. DDD com arquitetura hexagonal e Spring Modulith, com as fronteiras garantidas por testes.',
        chico:
          'Assistente pessoal com dashboard e interface conversacional: integra Google Calendar e Gmail, cria lembretes e manda um digest diário de notícias.',
        ialearn:
          'Plataforma de aprendizado multi-tenant, com controle de permissões por papel e armazenamento de arquivos em S3/MinIO.',
        token:
          'Calculadora de conversão de tokens com contas de pagamento, comprovantes e cotação atualizada diariamente por job agendado.',
      },
    },
    contact: {
      label: 'contato',
      title: 'Bora conversar?',
      lead: 'Gosto de boas conversas sobre Java, Laravel, Vue e IA. Se quiser trocar uma ideia, é só mandar um e-mail.',
    },
    footer: {
      made: 'feito à mão com Astro · hospedado no meu VPS',
      disclaimer: 'Este é um site pessoal. Projetos e opiniões aqui são meus e não representam meus empregadores.',
    },
  },

  en: {
    meta: {
      title: 'Assis de Freitas · Senior Software Engineer',
      description:
        'Portfolio of Assis de Freitas, senior software engineer: Java/Spring Boot, PHP/Laravel, Vue and AI-powered products.',
    },
    nav: { about: 'about', stack: 'stack', projects: 'projects', contact: 'contact' },
    ui: {
      home: 'Assis Freitas, home',
      sections: 'Sections',
      toggleTheme: 'Toggle light/dark theme',
      language: 'Language',
      terminalLabel: 'Terminal showing information about Assis',
    },
    hero: {
      hello: 'Hi, I’m Assis —',
      headline: 'A software engineer who *loves* taking ideas all the way to production',
      tagline:
        'Senior software engineer in the financial market, with 10+ years of Java/Spring Boot, PHP and JavaScript. On my own time, I build AI-powered products.',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      terminal: { role: 'Senior software engineer · financial market', focus: 'AI-powered products (Spring AI, LLMs)' },
    },
    about: {
      label: 'about',
      summary:
        '10+ years building software, from mission-critical systems in the financial market to my own AI-powered products.',
      paragraphs: [
        'I currently work as a senior software engineer in the financial market. Throughout my career I have built and maintained complex, mission-critical systems, always focused on scalable and efficient solutions.',
        'I work mainly with Java (Spring Boot), PHP (Laravel) and JavaScript (Vue, Angular and React). As a former partner at Tec’ Events, I learned project management and leadership. I care about system architecture, performance tuning and CI/CD pipelines.',
        'In my personal projects, I build products that put LLMs to work on everyday problems, like a personal assistant that handles calendar and email.',
      ],
      timelineTitle: 'experience',
      timelineLabel: 'Work experience',
      educationTitle: 'education',
      education: [
        { period: '2019 — 2020', course: 'Postgraduate specialization in Digital Technology Development', school: 'Estácio' },
        { period: '2014 — 2017', course: 'Technologist degree in Systems Analysis and Development', school: 'Fatec Itu' },
      ],
      timeline: [
        { period: '2026 — present', role: 'Senior Software Engineer', company: companies.b3 },
        { period: '2025 — 2026', role: 'Senior Software Developer', company: companies.midway },
        { period: '2020 — 2025', role: 'Mid-level → Senior Developer', company: companies.b3 },
        { period: '2018 — 2021', role: 'Partner', company: companies.tec },
        { period: '2018 — 2020', role: 'Junior → Mid-level Developer', company: companies.gft },
        { period: '2017', role: 'Junior Programmer', company: companies.auto },
        { period: '2015 — 2017', role: 'Web Developer', company: companies.jcomp },
      ],
    },
    stack: {
      label: 'stack',
      title: 'Everyday tools',
      groups: { backend: 'Back-end', frontend: 'Front-end', infra: 'Data & infra' },
    },
    projects: {
      label: 'projects',
      title: 'What I’m working on',
      private: 'private',
      open: 'open',
      demo: 'Live demo',
      code: 'Code',
      soon: 'Small, open-source projects with live demos are on the way. Meanwhile, the projects above are private, but I’m happy to show more in a conversation.',
      items: {
        estante:
          'A personal library: add books by ISBN and track your reading, with ratings and notes. Built with pragmatic DDD and architecture rules enforced by tests.',
        balcao:
          'Cash management for small shops: income, expenses and monthly balance, with reversals instead of edits. DDD with hexagonal architecture and Spring Modulith, boundaries enforced by tests.',
        chico:
          'Personal assistant with a dashboard and chat interface: integrates Google Calendar and Gmail, sets reminders and sends a daily news digest.',
        ialearn:
          'Multi-tenant learning platform with role-based permissions and file storage on S3/MinIO.',
        token:
          'Token conversion calculator with payout accounts, receipts and exchange rates refreshed daily by a scheduled job.',
      },
    },
    contact: {
      label: 'contact',
      title: 'Let’s talk?',
      lead: 'I enjoy good conversations about Java, Laravel, Vue and AI. If you’d like to chat, just drop me an email.',
    },
    footer: {
      made: 'handmade with Astro · hosted on my own VPS',
      disclaimer: 'This is a personal website. Projects and opinions here are my own and do not represent my employers.',
    },
  },

  es: {
    meta: {
      title: 'Assis de Freitas · Ingeniero de software sénior',
      description:
        'Portafolio de Assis de Freitas, ingeniero de software sénior: Java/Spring Boot, PHP/Laravel, Vue y productos con IA.',
    },
    nav: { about: 'sobre mí', stack: 'stack', projects: 'proyectos', contact: 'contacto' },
    ui: {
      home: 'Assis Freitas, inicio',
      sections: 'Secciones',
      toggleTheme: 'Cambiar tema claro/oscuro',
      language: 'Idioma',
      terminalLabel: 'Terminal con información sobre Assis',
    },
    hero: {
      hello: 'Hola, soy Assis —',
      headline: 'Ingeniero de software al que le *gusta* llevar la idea hasta producción',
      tagline:
        'Ingeniero de software sénior en el mercado financiero, con más de 10 años en Java/Spring Boot, PHP y JavaScript. En mis proyectos personales, construyo productos con IA.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
      terminal: { role: 'Ingeniero de software sénior · mercado financiero', focus: 'productos con IA (Spring AI, LLMs)' },
    },
    about: {
      label: 'sobre mí',
      summary:
        'Más de 10 años construyendo software, desde sistemas de misión crítica en el mercado financiero hasta productos propios con IA.',
      paragraphs: [
        'Actualmente trabajo como ingeniero de software sénior en el mercado financiero. A lo largo de mi carrera he desarrollado y mantenido sistemas complejos y de misión crítica, siempre con foco en soluciones escalables y eficientes.',
        'Trabajo principalmente con Java (Spring Boot), PHP (Laravel) y JavaScript (Vue, Angular y React). Fui socio de Tec’ Events, donde aprendí gestión de proyectos y liderazgo. Me interesan la arquitectura de sistemas, la optimización de rendimiento y los pipelines de CI/CD.',
        'En mis proyectos personales, construyo productos que ponen a los LLM a resolver problemas del día a día, como un asistente personal que gestiona agenda y correo.',
      ],
      timelineTitle: 'trayectoria',
      timelineLabel: 'Trayectoria profesional',
      educationTitle: 'formación',
      education: [
        { period: '2019 — 2020', course: 'Posgrado en Desarrollo de Tecnologías Digitales', school: 'Estácio' },
        { period: '2014 — 2017', course: 'Tecnólogo en Análisis y Desarrollo de Sistemas', school: 'Fatec Itu' },
      ],
      timeline: [
        { period: '2026 — actualidad', role: 'Ingeniero de software sénior', company: companies.b3 },
        { period: '2025 — 2026', role: 'Desarrollador sénior', company: companies.midway },
        { period: '2020 — 2025', role: 'Desarrollador semi-sénior → sénior', company: companies.b3 },
        { period: '2018 — 2021', role: 'Socio', company: companies.tec },
        { period: '2018 — 2020', role: 'Desarrollador júnior → semi-sénior', company: companies.gft },
        { period: '2017', role: 'Programador júnior', company: companies.auto },
        { period: '2015 — 2017', role: 'Desarrollador web', company: companies.jcomp },
      ],
    },
    stack: {
      label: 'stack',
      title: 'Herramientas del día a día',
      groups: { backend: 'Back-end', frontend: 'Front-end', infra: 'Datos e infra' },
    },
    projects: {
      label: 'proyectos',
      title: 'En qué estoy trabajando',
      private: 'privado',
      open: 'abierto',
      demo: 'Ver demo',
      code: 'Código',
      soon: 'Proyectos abiertos, pequeños y con demo en vivo están en camino. Mientras tanto, los proyectos de arriba son privados, pero puedo mostrar más en una conversación.',
      items: {
        estante:
          'Biblioteca personal: agrega libros por ISBN y sigue tus lecturas, con calificaciones y notas. Hecha con DDD pragmático y reglas de arquitectura garantizadas por tests.',
        balcao:
          'Gestión de caja para pequeños comercios: ingresos, gastos y saldo del mes, con reversiones en lugar de ediciones. DDD con arquitectura hexagonal y Spring Modulith, con los límites garantizados por tests.',
        chico:
          'Asistente personal con dashboard e interfaz conversacional: integra Google Calendar y Gmail, crea recordatorios y envía un resumen diario de noticias.',
        ialearn:
          'Plataforma de aprendizaje multi-tenant, con permisos por rol y almacenamiento de archivos en S3/MinIO.',
        token:
          'Calculadora de conversión de tokens con cuentas de pago, comprobantes y cotización actualizada a diario por un job programado.',
      },
    },
    contact: {
      label: 'contacto',
      title: '¿Hablamos?',
      lead: 'Me gustan las buenas conversaciones sobre Java, Laravel, Vue e IA. Si quieres charlar, escríbeme un correo.',
    },
    footer: {
      made: 'hecho a mano con Astro · alojado en mi propio VPS',
      disclaimer: 'Este es un sitio personal. Los proyectos y opiniones aquí son míos y no representan a mis empleadores.',
    },
  },
};
