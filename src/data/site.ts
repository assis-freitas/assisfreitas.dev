import type { IconName } from './icons';
import {
  siAngular,
  siDocker,
  siGithubactions,
  siInertia,
  siLaravel,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siReact,
  siRedis,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from 'simple-icons';

export const site = {
  url: 'https://assisfreitas.dev',
  name: 'Assis de Freitas',
  handle: 'assis-freitas',
  role: 'Engenheiro de software sênior',
  location: 'Porto Feliz, SP',
  tagline: 'Engenheiro de software sênior no mercado financeiro, com mais de 10 anos em Java/Spring Boot, PHP e JavaScript. Nos projetos pessoais, construo produtos com IA.',
  description:
    'Portfólio de Assis de Freitas, engenheiro de software sênior: Java/Spring Boot, PHP/Laravel, Vue e produtos com IA.',
  locale: 'pt_BR',
};

export const links = {
  github: 'https://github.com/assis-freitas',
  email: 'freitas.assis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/francisco-freitas/',
};

// Resumo curto que aparece em destaque na seção "sobre".
export const summary =
  'Mais de 10 anos construindo software, de sistemas de missão crítica no mercado financeiro a produtos próprios com IA.';

export const about = [
  'Hoje atuo como engenheiro de software sênior no mercado financeiro. Ao longo da carreira desenvolvi e mantive sistemas de alta complexidade e missão crítica, sempre com foco em soluções escaláveis e eficientes.',
  'Trabalho principalmente com Java (Spring Boot), PHP (Laravel) e JavaScript (Vue, Angular e React). Fui sócio da Tec\u2019 Events, onde aprendi gestão de projetos e liderança. Gosto de arquitetura de sistemas, otimização de performance e pipelines de CI/CD.',
  'Nos meus projetos pessoais, construo produtos que colocam LLMs para resolver problemas do dia a dia, como um assistente pessoal que cuida de agenda e e-mail.',
];

// Trajetória (fonte: LinkedIn).
export const timeline = [
  { period: '2026 — hoje', role: 'Engenheiro de software sênior', company: 'B3' },
  { period: '2025 — 2026', role: 'Desenvolvedor sênior', company: 'Midway' },
  { period: '2020 — 2025', role: 'Desenvolvedor pleno → sênior', company: 'B3' },
  { period: '2018 — 2021', role: 'Sócio', company: 'Tec\u2019 Events' },
  { period: '2018 — 2020', role: 'Desenvolvedor júnior → pleno', company: 'Grupo GFT' },
  { period: '2017', role: 'Programador júnior', company: 'Auto Geral' },
  { period: '2015 — 2017', role: 'Desenvolvedor web', company: 'J. Computação' },
];

export type StackItem = { name: string; icon: SimpleIcon };
export type StackGroup = { title: string; items: StackItem[] };

export const stack: StackGroup[] = [
  {
    title: 'Back-end',
    items: [
      { name: 'PHP', icon: siPhp },
      { name: 'Laravel', icon: siLaravel },
      { name: 'Java', icon: siOpenjdk },
      { name: 'Spring Boot', icon: siSpringboot },
    ],
  },
  {
    title: 'Front-end',
    items: [
      { name: 'Vue 3', icon: siVuedotjs },
      { name: 'Angular', icon: siAngular },
      { name: 'React', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Inertia', icon: siInertia },
      { name: 'Tailwind', icon: siTailwindcss },
    ],
  },
  {
    title: 'Dados & infra',
    items: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'Redis', icon: siRedis },
      { name: 'Docker', icon: siDocker },
      { name: 'GitHub Actions', icon: siGithubactions },
    ],
  },
];

export type Project = {
  name: string;
  icon: IconName;
  description: string;
  tags: string[];
  status: 'privado' | 'aberto';
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: 'Chico AI',
    icon: 'bot',
    description:
      'Assistente pessoal com dashboard e interface conversacional: integra Google Calendar e Gmail, cria lembretes e manda um digest diário de notícias.',
    tags: ['Vue 3', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'Redis'],
    status: 'privado',
  },
  {
    name: 'IA Learn',
    icon: 'book',
    description:
      'Plataforma de aprendizado multi-tenant, com controle de permissões por papel e armazenamento de arquivos em S3/MinIO.',
    tags: ['Laravel 13', 'Inertia', 'Vue 3', 'PostgreSQL'],
    status: 'privado',
  },
  {
    name: 'TokenConverter',
    icon: 'coins',
    description:
      'Calculadora de conversão de tokens com contas de pagamento, comprovantes e cotação atualizada diariamente por job agendado.',
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'Docker'],
    status: 'privado',
  },
];
