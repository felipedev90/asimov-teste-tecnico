<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Projeto: Parte 1 — Reprodução do Figma Positivus

Este é o projeto da Parte 1 do teste técnico da Asimov Academy. O objetivo é reproduzir com fidelidade absoluta as 4 primeiras seções de uma landing page do Figma: Hero, Services, Let's make things happen (CTA), e Case Studies.

**Figma de referência:** https://www.figma.com/design/QGCJc8PeG7Gk0rPpx8028f/Positivus-Landing-Page-Design--Community-

A fidelidade ao design é prioridade máxima. Espaçamentos, tipografia, cores e responsividade devem ser indistinguíveis do Figma.

## Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Linguagem:** TypeScript (strict mode)
- **Estilização:** Tailwind CSS v4 (com `@theme` no `globals.css`)
- **Fonte:** Space Grotesk (via `next/font/google`)
- **Gerenciador de pacotes:** npm

## Design Tokens

Todos os tokens estão definidos em `src/app/globals.css` via `@theme`. **Use sempre as classes Tailwind, nunca valores hex ou px hardcoded.**

### Cores
- `bg-primary` / `text-primary` → `#B9FF66` (verde accent)
- `bg-dark` / `text-dark` → `#191A23` (texto principal, fundos escuros)
- `bg-grey` / `text-grey` → `#F3F3F3` (cards neutros, fundos claros)
- `bg-black` / `text-black` → `#000000` (texto em contextos específicos)
- `bg-white` / `text-white` → `#FFFFFF`

### Tipografia
- **Desktop:** `text-h1` (60px), `text-h2` (40px), `text-h3` (30px), `text-h4` (20px), `text-body` (18px)
- **Mobile:** `text-h1-mobile` (43px), `text-h2-mobile` (36px), `text-h3-mobile` (26px), `text-h4-mobile` (18px), `text-body-mobile` (16px)

**Padrão responsivo:** sempre usar mobile-first com `md:` breakpoint. Exemplo: `text-h1-mobile md:text-h1`.

## Estrutura de Pastas

src/
├── app/
│   ├── globals.css          # Tokens e reset
│   ├── layout.tsx           # Layout raiz com fonte
│   └── page.tsx             # Página principal (monta as 4 seções)
├── components/
├── sections/                # Seções da landing (Hero, Services, CTA, CaseStudies)
└── ui/                      # Componentes reutilizáveis (Button, Card, etc.)+

## Convenções de Código

- **Componentes:** PascalCase (`Hero.tsx`, `ServiceCard.tsx`).
- **Default export** para componentes de seção e página.
- **Named export** para componentes utilitários reutilizáveis.
- **TypeScript:** sempre tipar props com `interface` (não `type`) exceto para unions e primitives.
- **Imagens/SVGs:** exportar do Figma e salvar em `public/images/` ou `public/icons/`.
- **Acessibilidade:** usar tags semânticas (`<section>`, `<nav>`, `<article>`). Todo `<img>` precisa de `alt`. Links externos com `rel="noopener noreferrer"`.

## O que NÃO fazer

- ❌ **Não usar valores hex hardcoded** (`bg-[#B9FF66]`). Use sempre `bg-primary`.
- ❌ **Não usar tamanhos de fonte arbitrários** (`text-[42px]`). Use os tokens `text-h1`, `text-h2`, etc.
- ❌ **Não usar classes de cor padrão do Tailwind** (`bg-green-400`, `text-gray-900`). Use os tokens do projeto.
- ❌ **Não criar styled-components, CSS-in-JS ou CSS Modules**. Só Tailwind.
- ❌ **Não usar bibliotecas de componentes** (shadcn, MUI, Chakra). Tudo é feito do zero.
- ❌ **Não usar `any` em TypeScript**. Tipos explícitos sempre.
- ❌ **Não usar `<img>` para imagens locais**. Use `next/image`.