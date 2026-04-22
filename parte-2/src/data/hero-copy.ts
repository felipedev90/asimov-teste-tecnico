import { Play, Code2, Users, Award } from "lucide-react";

import type { HeroCopy } from "@/types/hero";

export const heroCopy: HeroCopy = {
  eyebrow: "Novo curso disponível",

  headline: [
    { type: "plain", text: "Aprenda " },
    { type: "highlight", text: "Python" },
    { type: "plain", text: " do zero e construa projetos reais com " },
    { type: "highlight", text: "IA" },
  ],

  subheadline:
    "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação",

  bullets: [
    { icon: Play, text: "+40 horas de conteúdo direto ao ponto" },
    { icon: Code2, text: "Projetos com Python + IA desde o módulo 1" },
    { icon: Users, text: "Suporte da comunidade com +20.000 alunos" },
    { icon: Award, text: "Certificado reconhecido pelo mercado" },
  ],

  ctas: [
    { label: "Quero começar agora", href: "#inscricao", variant: "primary" },
    { label: "Ver o que vou aprender", href: "#curriculo", variant: "secondary" },
  ],
} as const;