<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Asimov Academy - Parte 2

## Stack
- Next.js 16, App Router, Turbopack
- TypeScript strict
- Tailwind CSS v4 (tokens via `@theme` em `globals.css`)
- Motion (Framer Motion) para animações
- Vitest + Testing Library
- Playwright E2E
- GitHub Actions CI

## Fontes
- **Inter Tight** → sans-serif principal (headlines, body, UI)
- **JetBrains Mono** → código, eyebrow, labels técnicos
- **Voltaire** → APENAS o logo "asimov" no header

## Paleta
- Accent primário: `#00D4BE` (ciano) → CTAs, links, interações
- Accent secundário: `#E8672A` (laranja) → destaque no headline (Python, IA), eyebrow, motif de código
- Background: `#0A0B0D` (não preto puro)

## Design
- Brutalist layout: headline gigante full-width → split subhead/bullets/CTAs left + terminal right
- Background: código Python drifting em opacity ~4%
- Glow radial ciano sutil atrás do headline
- Sem blob azul, sem contador de aniversário

## Componentes
- `components/layout/` → Header, MobileMenu
- `components/sections/` → Hero
- `components/ui/` → Button, Eyebrow, Terminal, CodeBlock, OutputPanel, FadeIn, FloatingWhatsApp
- `hooks/` → useTypewriter
- `data/` → navigation.ts, heroContent.ts, codeSnippet.ts