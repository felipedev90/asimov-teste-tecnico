# Teste Técnico — Asimov Academy

Candidato: Felipe Augusto da Silva · Vaga: Designer / Frontend Dev

- **Parte 1** — Reprodução fiel do Figma Positivus · [`/parte-1`](./parte-1) · [live](https://asimov-teste-tecnico-felipe-augusto.vercel.app/)
- **Parte 2** — Hero criada do zero para curso Python + IA · [`/parte-2`](./parte-2) · [live](https://asimov-hero-felipe-augusto.vercel.app/)

## Ferramentas de IA utilizadas

Claude como par arquitetural e revisor de código; Antigravity com Claude/Gemini para edições em lote e geração de testes; Claude Design para exploração de referência visual inicial. Colaboração documentada em `AGENTS.md` de cada parte, com escopo explícito por prompt, obrigação de leitura prévia dos arquivos e validação humana em cada checkpoint.

## Onde a IA ajudou mais

Scaffold inicial e geração de boilerplate (Next.js, Tailwind tokens, componentes base); geração da suíte de testes Vitest; refinamento de ajustes responsivos; debug guiado de edge cases (Satori CSS subset); extração de padrões entre os dois projetos.

## O que ajustei manualmente e por quê

Todas as decisões arquiteturais (design tokens semânticos, separação de Server Components, estratégia de coverage escopada, schemas JSON-LD específicos por contexto), calibração visual pixel-a-pixel contra o Figma na Parte 1, microinterações (shimmer, animations floats), e revisão completa de cada output gerado, em nenhum momento aceitei código sem leitura e validação do diff.
