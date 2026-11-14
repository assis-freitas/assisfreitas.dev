# assisfreitas.dev

Meu portfólio pessoal, feito com [Astro](https://astro.build). Site estático servido por nginx num container.

## Rodar localmente

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # gera dist/
```

O site tem três idiomas: português (`/`), inglês (`/en/`) e espanhol (`/es/`).

- **Textos** de cada idioma: [`src/data/i18n.ts`](src/data/i18n.ts).
- **Links, stack e projetos** (o que não muda entre idiomas): [`src/data/site.ts`](src/data/site.ts).

Para adicionar um projeto aberto, inclua-o em `projects` com `open: true` e `repo`/`demo`,
e escreva a descrição dele em `projects.items` nos três idiomas.

## Deploy no Easypanel

1. **+ Service → App**, com o repositório do GitHub como **Source**.
2. **Build**: tipo _Dockerfile_, caminho `Dockerfile`.
3. **Domains**: `assisfreitas.dev` (e `www.assisfreitas.dev`, se quiser) apontando para a **porta 80** do container. O Easypanel cuida do HTTPS.
4. No registrador do domínio, crie um registro **A** de `assisfreitas.dev` (e de `www`) para o IP do VPS.

Domínios `.dev` só funcionam com HTTPS, então o site só abre depois que o Easypanel emitir o certificado.
