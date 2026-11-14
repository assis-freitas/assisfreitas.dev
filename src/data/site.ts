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
  // TODO: coloque a URL do seu LinkedIn. Enquanto estiver vazia, o link não aparece.
  linkedin: '',
};

export const about = [
  'Sou dev full-stack. No back-end trabalho com PHP/Laravel e Java/Spring Boot; no front, com Vue 3 e TypeScript. Gosto de cuidar do produto inteiro: modelagem de dados, API, interface, testes e deploy.',
  'Nos últimos tempos tenho construído produtos que colocam LLMs para trabalhar em problemas reais, como um assistente pessoal que cuida de agenda e e-mail e uma plataforma de aprendizado.',
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
