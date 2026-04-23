# Positivus - Landing Page

Entrega da Parte 1 do desafio técnico da Asimov Academy. Reprodução fiel das 4 primeiras seções da landing [Positivus (Figma Community)](https://www.figma.com/design/QGCJc8PeG7Gk0rPpx8028f/Positivus-Landing-Page-Design--Community-): Hero, Services, Let's make things happen e Case Studies.

**Demo online:** [asimov-teste-tecnico-felipe-augusto.vercel.app](https://asimov-teste-tecnico-felipe-augusto.vercel.app/)

---

## Briefing do desafio

> *Reproduzir com fidelidade absoluta as 4 primeiras seções da landing page Positivus do Figma. Espaçamentos, tipografia, cores e responsividade devem ser indistinguíveis do design original.*

A prioridade aqui é **fidelidade visual pixel-perfect** - o oposto da Parte 2, onde a composição visual é livre.

---

## Stack

| Camada       | Escolha                                             |
|--------------|-----------------------------------------------------|
| Framework    | Next.js 16 (App Router, Turbopack)                  |
| UI           | React 19                                            |
| Linguagem    | TypeScript 5 (strict)                               |
| Estilização  | Tailwind CSS 4 (CSS-first via `@theme`)             |
| Fonte        | Space Grotesk (via `next/font/google`)              |
| Animação     | motion/react (FadeIn ao scroll)                     |
| Testes       | Playwright E2E (header, hero, services, CTA, mobile)|
| CI           | GitHub Actions (lint + build + E2E)                 |
| Deploy       | Vercel                                              |

---

## Entregas

- ✅ 4 seções reproduzidas fielmente do Figma: Hero, Services (6 cards), CTA, Case Studies
- ✅ Header com navigation desktop e menu hamburger mobile animado
- ✅ Totalmente responsivo com estratégia mobile-first e breakpoint `md:`
- ✅ Design tokens semânticos via `@theme` do Tailwind v4 - zero hex hardcoded nos componentes
- ✅ Tipografia escalonada por breakpoint via tokens (`text-h1` / `text-h1-mobile`)
- ✅ Testes E2E com Playwright cobrindo Header, Hero, Clients, Services, CTA, Case Studies e menu hamburger mobile
- ✅ Metadata SEO expandido (Open Graph, Twitter Cards, canonical, robots directives)
- ✅ Open Graph image dinâmica via `opengraph-image.tsx` com Edge Runtime + Satori
- ✅ Dados estruturados Schema.org JSON-LD (`Organization` + `ProfessionalService`)
- ✅ `sitemap.xml` + `robots.txt` programáticos
- ✅ Animação suave de entrada (FadeIn) em cada seção via motion/react
- ✅ Acessibilidade com semântica HTML5, `aria-label` em ícones e elementos interativos, `alt` descritivo

---

## Estrutura do projeto

```bash
parte-1/
├── public/
│   └── images/              # SVGs: logos, ilustrações, ícones
│       ├── clients/
│       └── services/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # fonte, metadata, JSON-LD
│   │   ├── page.tsx             # composição das 4 seções
│   │   ├── globals.css          # design tokens + reset
│   │   ├── opengraph-image.tsx  # OG image dinâmica (Edge Runtime)
│   │   ├── sitemap.ts           # sitemap programático
│   │   └── robots.ts            # robots.txt programático
│   ├── components/
│   │   ├── layout/              # Header (com hamburger mobile)
│   │   ├── sections/            # Hero, Clients, Services, ServiceCard, CTA, CaseStudies
│   │   ├── seo/                 # StructuredData (JSON-LD)
│   │   └── ui/                  # Button, SectionLabel, FadeIn
│   ├── data/                    # conteúdo tipado (nav, clients, services, case studies)
│   └── lib/                     # site-config, utils (cn)
├── tests/
│   └── landing.spec.ts          # Playwright E2E suite
├── AGENTS.md                    # contrato de colaboração com IA
├── playwright.config.ts
└── package.json

```
---

## Como rodar localmente

Pré-requisitos: **Node.js 20+**, npm 10+.

```bash
git clone https://github.com/<seu-usuario>/asimov-teste-tecnico.git
cd asimov-teste-tecnico/parte-1
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### Scripts disponíveis

```bash
npm run dev              # servidor de dev com Turbopack
npm run build            # build de produção
npm run start            # roda o build de produção
npm run lint             # ESLint (next/core-web-vitals)
npx playwright test      # roda os testes E2E
npx playwright test --ui # roda os testes em modo visual
```

---

## Decisões arquiteturais

### 1. Design tokens como fonte única de verdade
Todas as cores e tipografia são declaradas em `@theme` do Tailwind v4 em `globals.css`. Componentes usam `bg-primary`, `text-dark`, `text-h1-mobile md:text-h1` — nunca valores hex ou px hardcoded. Isso foi regra explícita documentada em `AGENTS.md`.

### 2. Tipografia responsiva via tokens duplos
Em vez de `text-[43px] md:text-[60px]` espalhado nos componentes, criei tokens dedicados: `--text-h1-mobile: 2.6875rem` e `--text-h1: 3.75rem`. Cada componente usa o par `text-h1-mobile md:text-h1`. Mudança global de tipografia é uma linha em `globals.css`.

### 3. Data-driven rendering com tipos
Toda copy repetitiva (6 services, 6 clients, 5 nav links, 3 case studies) vive em `src/data/` como `const` tipados. Componentes fazem `.map()` sobre eles. Facilita manutenção e prepara pra integração futura com CMS.

### 4. Variants tipados com `Record<Variant, Style>`
`ServiceCard` e `Button` usam `Record<Variant, string>` pra mapear variantes → estilos. TypeScript garante exaustividade: se adicionar uma variant ao union type, o compilador obriga a mapear o estilo. Impossível esquecer.

### 5. Menu hamburger mobile controlado por estado React
Header é o único Client Component do projeto (`"use client"`). Toggle do menu controlado por `useState`, com feedback visual via rotação das três barras do ícone. Cover via overlay full-screen escuro. Fechamento automático ao clicar em qualquer link.

### 6. FadeIn isolado em Client Component
A animação de entrada por scroll (motion/react) é encapsulada em `<FadeIn>`. Componentes internos (Hero, Clients, etc.) continuam sendo Server Components - só o wrapper é client. Trade-off consciente: mais JavaScript que CSS puro, mas API mais ergonômica pro desafio.

### 7. Testes E2E com Playwright em vez de unit tests
Como o projeto é fundamentalmente visual e a fidelidade ao Figma é o critério principal, optei por testes de comportamento end-to-end (elemento tal renderiza, botão tal aparece, hamburger abre/fecha) em vez de testes unitários. Mais defensável pro escopo.

---

## Colaboração com IA

O projeto foi construído com orquestração ativa de IA, documentada em [`AGENTS.md`](./AGENTS.md) na raiz do projeto. Princípios:

- Regras estritas contra padrões que "funcionam mas geram dívida técnica" (proibido `bg-[#hex]`, `text-[42px]`, `<img>` local, `any`).
- Obrigação de usar os tokens semânticos do `@theme` em vez de cores/tamanhos nativos do Tailwind.
- Testes E2E como critério objetivo de "está funcionando".

Ferramentas: Claude, Antigravity, Claude Design.

---

## Licença

Construído como entregável de desafio técnico. Código livremente reutilizável para aprendizado e referência.