<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

> Conventions and operating guidelines for AI agents (Cursor, Claude Code, Windsurf, Copilot, Antigravity, etc.) contributing to this project.
>
> **Read this file before proposing any change.**

---

## 1. Project Overview

This is a marketing **landing page** (hero section challenge) for Asimov Academy, a Brazilian Python + AI online education platform.

- **Primary KPI**: conversion rate on the primary CTA ("Quero começar agora").
- **Secondary KPI**: engagement with the "Ver o que vou aprender" anchor.
- **Audience**: career changers in Brazil, mostly mobile, high intent but low technical vocabulary.
- **Tone**: confident, direct, Brazilian Portuguese. No English copy unless it's code/brand.

Every change must serve conversion, performance, or accessibility. Features that don't serve those are out of scope.

---

## 2. Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.x / 16.x |
| UI | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x (CSS-first config) |
| Icons | lucide-react | latest |
| Class merging | clsx + tailwind-merge | latest |
| Fonts | next/font/google | built-in |
| Testing | Vitest + @testing-library/react | latest |
| Runtime | Node.js | 20+ |
| Deploy | Vercel | — |

**Never add a dependency without justification.** If an agent proposes a new package, it must state: (a) what problem it solves, (b) why a built-in or existing dep can't solve it, (c) the bundle-size impact.

---

## 3. Project Structure

```
parte-2/
├── public/                  # static assets (images, svgs, fonts-if-local)
├── src/
│   ├── app/                 # Next.js App Router (routes, layouts, metadata)
│   │   ├── layout.tsx       # root layout, fonts, global metadata
│   │   ├── page.tsx         # landing page composition
│   │   └── globals.css      # design tokens, keyframes, base styles
│   ├── components/
│   │   ├── ui/              # reusable primitives (Button, Badge, ShimmerText)
│   │   ├── layout/          # cross-section structural (Nav, Footer)
│   │   └── sections/        # page sections (Hero, Features, FAQ)
│   ├── data/                # typed static content (copy, nav items, bullets)
│   ├── lib/                 # pure utilities (cn, formatters)
│   └── types/               # shared TypeScript types
├── AGENTS.md                # this file
├── README.md                # human-facing docs
└── tsconfig.json            # alias "@/*" → "src/*"
```

### Placement rules

- A component used by **one** section goes inside that section's folder.
- A component used by **2+** sections goes to `ui/` or `layout/`.
- Copy, nav items, feature lists → `data/` as typed `const` exports.
- Anything JSX belongs in `components/`. Never in `lib/`.
- Shared types used in 2+ files → `types/`. Otherwise colocated with the component.

---

## 4. Coding Conventions

### File naming

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`, `ShimmerText.tsx`).
- Utilities, data, types: `kebab-case.ts` (e.g., `cn.ts`, `hero-copy.ts`).
- One component per file. Filename matches the default export.

### Imports

Order, separated by blank lines:

1. React / Next.js
2. External packages (alphabetical)
3. Internal aliases (`@/components`, `@/lib`, etc.)
4. Relative imports
5. Types (always `import type`)
6. Styles (rare — prefer Tailwind)

```ts
import { useState } from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

import type { HeroCopy } from "@/types/hero";
```

### TypeScript

- `strict: true` is non-negotiable.
- Prefer `type` over `interface` unless declaration merging is needed.
- No `any`. If you truly can't type something, use `unknown` and narrow it.
- Props types live adjacent to the component: `type HeroProps = { ... }`.
- Exported types come from `@/types/*`.

### Tailwind class order

Use the official `prettier-plugin-tailwindcss` convention (sorted automatically). When writing manually, group as: **layout → box model → typography → visual → state**.

```tsx
<div className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-ink-primary bg-bg-card border border-white/10 rounded-xl hover:bg-bg-card-hover transition-colors">
```

### Formatting

- 2 spaces indentation, double quotes in TS/TSX, single quotes in CSS/HTML attributes.
- Semicolons required.
- Trailing commas in multi-line objects/arrays.
- Max line length: soft 100, hard 120.

---

## 5. Component Patterns

### Server vs Client components

- **Default to Server Components** (no `"use client"`).
- Add `"use client"` **only when** the component needs: hooks, browser APIs, event handlers, or third-party client libs.
- Hero landing page is **100% Server Components** unless explicitly required.

### Props

- Always accept `className?: string` on leaf components that render a visible element; merge with `cn()`.
- Forward `...rest` props to the root element only when it extends a native HTML element (use `ComponentProps<'button'>`, etc.).
- Default values via destructuring: `({ variant = "primary" }) => ...`.

### Variants

Use discriminated unions or a `variant` prop backed by a lookup object. **Do not** inline conditional classNames when the variant has 3+ options.

```ts
const buttonStyles = {
  primary: "bg-brand-cyan text-bg-primary",
  secondary: "border border-brand-cyan/40 text-brand-cyan",
} as const;
```

### Data-driven rendering

Static lists (nav items, bullets, features) come from `@/data/*` as typed `const`. Components `.map()` over them. **Do not hardcode content inside components.**

```ts
// @/data/hero-copy.ts
export const heroBullets = [
  { icon: "play", text: "+40 horas de conteúdo direto ao ponto" },
  // ...
] as const satisfies readonly HeroBullet[];
```

---

## 6. Design System

### Colors (semantic tokens in `globals.css`)

Never use raw hex in components. Use tokens:

| Purpose | Token |
|---|---|
| Page background | `bg-bg-primary` |
| Card / surface | `bg-bg-card` |
| Card hover | `bg-bg-card-hover` |
| Brand primary | `text-brand-cyan` / `bg-brand-cyan` |
| Accent highlight | `text-accent-orange` |
| Success state | `text-success` |
| Primary text | `text-ink-primary` |
| Secondary text | `text-ink-secondary` |
| Muted text | `text-ink-muted` |

If a needed color doesn't exist as a token, **add a new token** — don't inline the hex.

### Typography

- **Sans (body)**: Inter — `font-sans` (default)
- **Mono (code)**: JetBrains Mono — `font-mono`
- **Display (brand wordmark)**: Voltaire — `font-display`

Display font is restricted to the "Asimov Academy" wordmark in the nav. Don't use it elsewhere without design approval.

### Spacing & sizing

Use Tailwind's spacing scale. Arbitrary values (`p-[13px]`) allowed only for pixel-perfect matches against the reference mock — comment the source when used.

### Motion

- All animations must respect `prefers-reduced-motion` (already handled globally in `globals.css`).
- Keyframes live in `globals.css`, referenced by Tailwind arbitrary values or component classes. No `<style>` tags in components.
- Transitions default to `200ms ease-out`. Floats default to `4-6s ease-in-out infinite`.

---

## 7. Accessibility — WCAG 2.1 AA (non-negotiable)

- **Semantic HTML first.** `<nav>`, `<main>`, `<section>`, `<h1>`–`<h6>` in order, `<button>` for actions, `<a>` for navigation.
- One `<h1>` per page. The hero headline is the `<h1>`.
- All interactive elements are keyboard-focusable with visible `:focus-visible` rings.
- Icon-only buttons require `aria-label`. Decorative icons require `aria-hidden="true"`.
- Images require `alt`. Decorative images use `alt=""` (empty, not missing).
- Color contrast: text ≥ 4.5:1, large text ≥ 3:1. Verify new color pairings in DevTools.
- `<html lang="pt-BR">` is set globally. Don't remove it.
- Forms (if added): labels associated via `htmlFor`/`id`, error messages announced via `aria-describedby`.

### Motion sensitivity

The global `@media (prefers-reduced-motion: reduce)` rule suppresses animations. Agents must **not** bypass this with inline `transition: none !important` or similar.

---

## 8. Performance Budget

Lighthouse targets (mobile, slow 4G, mid-tier device):

| Metric | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 1.5s |
| CLS | 0 |
| TBT | < 200ms |

### Non-negotiable practices

- Use `next/image` for raster images. Provide explicit `width` and `height` to prevent CLS.
- Use `next/font` for web fonts (already configured). Never use `<link rel="stylesheet" href="fonts.googleapis.com">`.
- Avoid `backdrop-filter: blur` on elements larger than ~400px — expensive on mobile GPUs.
- Decorative SVGs inline when < 2KB, otherwise as static file.
- Client components must be as small as possible; push `"use client"` to leaves.
- Defer offscreen content with `loading="lazy"` on images below the fold.

---

## 9. SEO Requirements

- `layout.tsx` defines base metadata: `title`, `description`, `openGraph`, `twitter`, `robots`, `alternates.canonical`.
- Each route's `page.tsx` can override via `export const metadata`.
- Landing page must include JSON-LD `Course` schema with `provider`, `name`, `description`, `inLanguage: "pt-BR"`, and `offers` if pricing exists.
- Structured data validates at [validator.schema.org](https://validator.schema.org).
- Only one `<h1>` per page. Logical heading order — no skipping levels.
- Alt text describes the image's **function**, not its appearance.

---

## 10. Testing Strategy

- Framework: **Vitest** (Jest-compatible API, native ESM, fast).
- DOM utilities: **@testing-library/react** + **@testing-library/user-event**.
- Test files colocated: `Button.tsx` ↔ `Button.test.tsx`.
- Minimum coverage: **70% statements, 70% branches** for `components/ui/` and `lib/`. Sections can be lower.

### What to test

- **UI primitives** (`Button`, `Badge`, `ShimmerText`): render variants, merge classNames, forward refs, handle disabled/loading states.
- **Data-driven sections**: render correct number of items for a given data shape.
- **Interactive behavior**: clicks, keyboard navigation, focus management.
- **Accessibility**: query by role/label, not by test-id when possible.

### What not to test

- Framework internals (Next.js routing, Tailwind compilation).
- Visual regression — handled separately if added.
- Third-party library behavior.

---

## 11. Git Workflow

### Branches

`<type>/<short-description-kebab-case>`

| Type | Purpose |
|---|---|
| `feat` | new feature or component |
| `fix` | bug fix |
| `chore` | tooling, config, deps |
| `refactor` | no behavior change |
| `test` | add/fix tests |
| `perf` | performance improvement |
| `docs` | docs only |
| `ci` | pipeline changes |

Examples: `feat/parte-2-hero-section`, `fix/cta-hover-contrast`.

### Commits — Conventional Commits

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

- Subject: imperative mood, ≤ 72 chars, no period.
- Scope is optional but recommended: `feat(hero): add shimmer headline`.
- Body explains **why**, not what (the diff shows what).
- Atomic: one logical change per commit. Easier to revert, easier to review.

### Pull Requests

Every PR must have:

1. **Summary** — one paragraph, problem + solution.
2. **Changes** — bulleted list of notable changes.
3. **How to test** — step-by-step verification.
4. **Screenshots** (if visual) — before/after or mobile/desktop.
5. **Out of scope** — explicit list of what was *not* changed and why.

PRs are merged via **squash merge** to keep `main` linear. Feature branches are deleted after merge.

---

## 12. AI Collaboration Guidelines

This is the most important section for agents. Read it twice.

### Operating mode

1. **Propose before acting.** For any change > 20 lines or touching architecture, describe the plan first and wait for human approval.
2. **Work in branches.** Never commit directly to `main`.
3. **Small, atomic commits.** One logical change per commit, Conventional Commits format.
4. **Explain reasoning.** When proposing code, state the trade-offs considered and why this approach won over alternatives.
5. **Cite the file.** Reference exact file paths and line numbers when discussing existing code.

### Context-gathering before edits

Before modifying a file, the agent should:

- Read the file in full.
- Check `globals.css` for relevant tokens.
- Check `@/data/*` for relevant content.
- Check `@/types/*` for relevant types.
- Check sibling components for established patterns.

**Reuse > rewrite.** If a `<Button>` exists, don't make another one.

### When to ask for clarification

Ask (don't assume) when:

- The change has user-facing copy implications (ask for exact wording).
- There's a visible design decision with multiple reasonable choices.
- A new dependency is being considered.
- An existing file's intent is unclear.

### Output format expectations

When proposing code:

1. State the file path explicitly.
2. Show the diff or full file (prefer diff for small changes).
3. Explain non-obvious lines (regex, complex TypeScript, accessibility attributes).
4. End with: what changed, why, and how to test.

### Prohibited actions

- Disabling lint rules without explanation.
- Adding `any` types.
- Removing `lang="pt-BR"` from `<html>`.
- Bypassing `prefers-reduced-motion` globally.
- Inlining colors that should be tokens.
- Introducing client components where server components suffice.
- Making direct `fetch` calls in components (use proper data-fetching patterns).

---

## Appendix — Quick reference for new agents

**Before your first commit**, verify:

- [ ] Branch name follows `<type>/<description>` pattern.
- [ ] Changed files are what you expect (`git status`).
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Commit message follows Conventional Commits.
- [ ] PR description follows the template in section 11.

**When in doubt**, default to: simpler code, fewer dependencies, more semantic HTML, better accessibility.