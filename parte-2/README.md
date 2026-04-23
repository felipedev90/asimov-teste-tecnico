# Asimov Academy - Hero Landing Page

Entrega do desafio técnico para a vaga de Designer/Frontend Dev (com IA como acelerador) da Asimov Academy. 
Seção hero de nível de produção para landing de curso de Python + IA, construída do zero sem referência em Figma.

**Demo online:** [asimov-hero-felipe-augusto.vercel.app](https://asimov-hero-felipe-augusto.vercel.app/)

---

## Briefing do desafio

> *"Crie uma seção de hero para uma landing page de curso. Não tem Figma, você decide a composição visual. Use IA como acelerador."*
>
> Briefing completo: hero com copy fornecida (em português), identidade visual referenciada de asimov.academy, referências estéticas de linear.app, frame.io, isomeet.com e antimetal.com.

---

## Lighthouse (mobile, produção)

| Métrica         | Nota |
|-----------------|------|
| Performance     | 97   |
| Accessibility   | 100  |
| Best Practices  | 100  |
| SEO             | 100  |

---

## Stack

| Camada      | Escolha                                           |
|-------------|---------------------------------------------------|
| Framework   | Next.js 16 (App Router, Turbopack)                |
| UI          | React 19                                          |
| Linguagem   | TypeScript 5 (strict)                             |
| Estilização | Tailwind CSS 4 (CSS-first via `@theme`)           |
| Ícones      | lucide-react                                      |
| Fontes      | Geist Sans + Geist Mono + Voltaire (display)      |
| Testes      | Vitest + @testing-library/react (100% em primitivos) |
| CI          | GitHub Actions (lint + test + coverage + build)   |
| Deploy      | Vercel                                            |

---

## Entregas

- ✅ Hero com headline animada (efeito shimmer), terminal decorativo com syntax highlighting e 4 cards flutuantes (análise de sentimento, classificação de imagem, visualização de dados, chatbot) - ilustrando a temática de IA do curso
- ✅ Design responsivo mobile-first com decisões deliberadas (cards flutuantes apenas em desktop por bateria e performance, terminal simplificado em mobile)
- ✅ 100% Server Components - sem custo de hidratação, render estático completo em build time
- ✅ `prefers-reduced-motion` respeitado globalmente (WCAG 2.3.3)
- ✅ Open Graph image gerada dinamicamente via `opengraph-image.tsx` com Edge Runtime + Satori
- ✅ Dados estruturados Schema.org JSON-LD (`Course` + `EducationalOrganization`) - validados no Rich Results Test do Google
- ✅ `sitemap.xml` + `robots.txt` gerados programaticamente via convenções do App Router
- ✅ Botão flutuante de WhatsApp com suporte a safe-areas do iOS, ícone oficial e linking universal via `wa.me`
- ✅ Testes unitários nos primitivos de UI e utilitários (32 testes, 100% de cobertura no escopo definido)
- ✅ Pipelines duais de CI (parte-1 e parte-2) com paths filter e cancelamento por concorrência

---

## Estrutura do projeto

```bash
parte-2/
├── public/
│   └── background_hero.webp              # background de plexus ambiente
├── src/
│   ├── app/
│   │   ├── layout.tsx               # fontes, metadata, injeção de JSON-LD
│   │   ├── page.tsx                 # composição do hero
│   │   ├── globals.css              # design tokens + keyframes
│   │   ├── opengraph-image.tsx      # OG image dinâmica (Edge Runtime + Satori)
│   │   ├── sitemap.ts               # sitemap programático
│   │   └── robots.ts                # robots.txt programático
│   ├── components/
│   │   ├── ui/                      # primitivos reutilizáveis (Button, Badge, ShimmerText, ...)
│   │   ├── layout/                  # Nav, WhatsAppFloat
│   │   ├── sections/                # HeroSection, HeroContent, HeroVisual, HeroBackground
│   │   └── seo/                     # StructuredData (JSON-LD)
│   ├── data/                        # conteúdo estático tipado (copy, nav, código do terminal)
│   ├── lib/                         # utilitários (cn, site-config)
│   └── types/                       # tipos compartilhados
├── AGENTS.md                        # contrato de colaboração com IA
├── vitest.config.ts                 # configuração de testes + coverage
└── package.json

```

---

## Como rodar localmente

Pré-requisitos: **Node.js 20+**, npm 10+.

```bash
git clone https://github.com/<seu-usuario>/asimov-teste-tecnico.git
cd asimov-teste-tecnico/parte-2
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### Scripts disponíveis

```bash
npm run dev              # servidor de dev com Turbopack
npm run build            # build de produção (geração estática)
npm run start            # roda o build de produção localmente
npm run lint             # ESLint (config next/core-web-vitals)
npm run test             # Vitest em watch mode
npm run test:run         # Vitest em execução única (para CI)
npm run test:coverage    # Vitest com coverage v8 + thresholds
```

---

## Decisões arquiteturais

### 1. Server Components em todo lugar (zero `"use client"`)
O hero não tem estado interativo. Todo componente é Server Component, o que significa que a página inteira é pré-renderizada como HTML estático no build. Resultado: TTFB próximo de zero e Performance 97 em mobile sem precisar de truques de otimização em runtime.

### 2. Design tokens via `@theme` do Tailwind v4
Todas as cores, fontes e animações são declaradas como CSS custom properties em `globals.css` dentro do bloco `@theme`. Os componentes referenciam os tokens semanticamente (`bg-bg-primary`, não `bg-slate-950`). Isso fez a troca da fonte Inter → Geist virar uma mudança de duas linhas em vez de refactor no projeto inteiro.

### 3. Dados separados dos componentes
Toda copy, itens do nav, bullets e código do terminal vivem em `src/data/` como `const` tipados. Os componentes fazem `.map()` sobre eles. Primeiro passo para integrar um CMS no futuro sem reescrever a UI.

### 4. OG image dinâmica via Edge Runtime + Satori
O `opengraph-image.tsx` usa a convenção embutida do Next.js para gerar um PNG de 1200×630 a partir de JSX via Satori, em build time. Sem export do Figma, sem manutenção manual - quando a headline muda, a imagem de OG se regenera no próximo deploy.

### 5. Coverage escopada por alavancagem
O threshold de coverage é 70% apenas em `components/ui/` e `lib/` - áreas com alta reutilização no projeto. Composições e ilustrações decorativas são excluídas explicitamente. Testar o componente Terminal testaria seus dados estáticos, não sua lógica. A decisão de excluir está documentada no `vitest.config.ts`.

### 6. Pipelines duais de CI com paths filter
`ci-parte-1.yml` e `ci-parte-2.yml` rodam apenas quando as respectivas pastas mudam. Grupos de concorrência cancelam execuções em andamento em pushes subsequentes, economizando minutos do Actions. A decisão de separar em vez de unificar em matrix foi deliberada: parte-1 usa Playwright E2E, parte-2 usa Vitest unit - estratégias fundamentalmente diferentes justificam pipelines separados.

---

## Colaboração com IA

Este projeto foi construído com orquestração ativa de IA, tratando IA como ferramenta de produção - não curiosidade. A abordagem está documentada no [`AGENTS.md`](./AGENTS.md) na raiz do projeto.

Ferramentas usadas durante o desenvolvimento:
- **Claude** (Anthropic) - pareamento arquitetural, code review, prompts de decisão
- **Antigravity com Claude / Gemini Pro** - delegação para edições repetitivas (geração de testes, ajustes responsivos)
- **Claude Design** - exploração inicial de referência visual

Práticas estabelecidas no `AGENTS.md`:
- Prompts escopados explicitamente (`READ ONLY`, `out-of-scope: do NOT touch`)
- Agentes obrigados a ler o arquivo antes de propor mudanças e sinalizar divergências
- Refinamento iterativo com revisão humana em cada checkpoint
- Todo código gerado por IA é revisado antes de ser aceito

---

## Aprendizados

**O `@theme` do Tailwind v4 tem edge cases surpreendentes com keyframes.** Cedo no projeto, as animações pareciam não funcionar. A causa raiz não era o framework - era o `prefers-reduced-motion` ativo no sistema operacional. O debug via aba Computed do DevTools (não no código) resolveu e serviu como prova empírica de que a implementação de acessibilidade estava respeitando as preferências do usuário corretamente.

**Satori é estrito com CSS.** Gerar a OG image exigiu reescrever o layout inline do `<span>` como flex-wrap explícito de chunks de palavras - sem suporte a CSS inline, sem gradient text. A restrição forçou markup mais claro.

**Diferentes agentes de IA têm diferentes padrões de confiabilidade.** Claude tende a respeitar os limites de escopo de forma mais estrita; Gemini é mais "prestativo" e edita fora do escopo sem pedir permissão. A solução foi instrução explícita no cabeçalho dos prompts (`CRITICAL: This is a read-only task`) - prompting defensivo virou uma habilidade por si só.

**Separação de responsabilidades paga juros compostos.** Os 5 minutos investidos criando design tokens semânticos no Sprint 2 retornaram no Sprint 3 ao trocar fontes, no Sprint 6 ao gerar OG images e no Sprint 9 ao substituir a URL placeholder - sempre mudanças de uma linha em vez de search-and-replace no projeto inteiro.

---

## Licença

Construído como entregável de desafio técnico. Código livremente reutilizável para fins de aprendizado e referência de portfolio.