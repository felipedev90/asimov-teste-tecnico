export interface HeadlineWord {
  text: string
  accent: boolean
}

export const HEADLINE_WORDS: HeadlineWord[] = [
  { text: 'Aprenda',    accent: false },
  { text: 'Python',     accent: true  },
  { text: 'do zero',    accent: false },
  { text: 'e construa', accent: false },
  { text: 'projetos',   accent: false },
  { text: 'reais',      accent: false },
  { text: 'com',        accent: false },
  { text: 'IA',         accent: true  },
]

export const SUBHEAD: string = 'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.'

export const BULLETS: string[] = [
  '+40 horas de conteúdo direto ao ponto',
  'Projetos com Python + IA desde o módulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
]