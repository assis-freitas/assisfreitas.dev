import {
  siDocker,
  siGithubactions,
  siInertia,
  siLaravel,
  siOpenjdk,
  siPhp,
  siPostgresql,
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
  role: 'Dev full-stack',
  tagline: 'Construo aplicações web de ponta a ponta com Laravel, Vue e Spring Boot, e hoje foco em produtos que usam IA de verdade.',
  description:
    'Portfólio de Assis de Freitas, dev full-stack: Laravel, Vue, Spring Boot e produtos com IA.',
  locale: 'pt_BR',
};

export const links = {
  github: 'https://github.com/assis-freitas',
  email: 'freitas.assis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/francisco-freitas/',
};

// Resumo curto que aparece em destaque na seção "sobre".
export const summary =
  'Programo há mais de dez anos e gosto de pegar uma ideia e transformá-la em produto rodando: modelo os dados, escrevo a API, construo a interface e cuido do deploy.';

export const about = [
  'No back-end trabalho com PHP/Laravel e Java/Spring Boot; no front, com Vue 3 e TypeScript. Prefiro soluções simples, bem testadas e fáceis de manter a arquiteturas que só impressionam no diagrama.',
  'Hoje meu foco é construir produtos que colocam LLMs para resolver problemas do dia a dia, como um assistente pessoal que cuida de agenda e e-mail e uma plataforma de aprendizado multi-tenant.',
];

// Linha do tempo montada a partir do histórico do GitHub. Ajuste com cargos/empresas reais.
export const timeline = [
  { year: '2015', text: 'Primeiros projetos públicos: apps web em PHP e um serviço em Java.' },
  { year: '2021', text: 'Controle financeiro com Vue, Spring Boot e app mobile em Ionic.' },
  { year: '2023', text: 'APIs em Laravel e front em Angular com formulários reativos.' },
  { year: '2026', text: 'Produtos com IA: Spring AI, Laravel 13 e assistentes com LLM.' },
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
  emoji: string;
  description: string;
  tags: string[];
  status: 'privado' | 'aberto';
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: 'Chico AI',
    emoji: '🤖',
    description:
      'Assistente pessoal com dashboard e interface conversacional: integra Google Calendar e Gmail, cria lembretes e manda um digest diário de notícias.',
    tags: ['Vue 3', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'Redis'],
    status: 'privado',
  },
  {
    name: 'IA Learn',
    emoji: '📚',
    description:
      'Plataforma de aprendizado multi-tenant, com controle de permissões por papel e armazenamento de arquivos em S3/MinIO.',
    tags: ['Laravel 13', 'Inertia', 'Vue 3', 'PostgreSQL'],
    status: 'privado',
  },
  {
    name: 'TokenConverter',
    emoji: '🪙',
    description:
      'Calculadora de conversão de tokens com contas de pagamento, comprovantes e cotação atualizada diariamente por job agendado.',
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'Docker'],
    status: 'privado',
  },
];
