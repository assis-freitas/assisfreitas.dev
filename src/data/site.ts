/*
  Dados que não dependem de idioma: links, stack e a base de cada projeto.
  Os textos traduzidos ficam em ./i18n.ts.
*/
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
  location: 'Porto Feliz, SP',
};

export const links = {
  github: 'https://github.com/assis-freitas',
  email: 'freitas.assis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/francisco-freitas/',
};

export type StackItem = { name: string; icon: SimpleIcon };
export type StackGroupId = 'backend' | 'frontend' | 'infra';

export const stack: { id: StackGroupId; items: StackItem[] }[] = [
  {
    id: 'backend',
    items: [
      { name: 'PHP', icon: siPhp },
      { name: 'Laravel', icon: siLaravel },
      { name: 'Java', icon: siOpenjdk },
      { name: 'Spring Boot', icon: siSpringboot },
    ],
  },
  {
    id: 'frontend',
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
    id: 'infra',
    items: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'Redis', icon: siRedis },
      { name: 'Docker', icon: siDocker },
      { name: 'GitHub Actions', icon: siGithubactions },
    ],
  },
];

export type ProjectId = 'chico' | 'ialearn' | 'token';

export type Project = {
  id: ProjectId;
  name: string;
  icon: IconName;
  tags: string[];
  /** true = repositório público (vai para o topo, com selo de destaque). */
  open: boolean;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  { id: 'chico', name: 'Chico AI', icon: 'bot', tags: ['Vue 3', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'Redis'], open: false },
  { id: 'ialearn', name: 'IA Learn', icon: 'book', tags: ['Laravel 13', 'Inertia', 'Vue 3', 'PostgreSQL'], open: false },
  { id: 'token', name: 'TokenConverter', icon: 'coins', tags: ['Laravel', 'Vue 3', 'TypeScript', 'Docker'], open: false },
];
