import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono, Voltaire } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const voltaire = Voltaire({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-voltaire',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aprenda Python do zero | Asimov Academy',
  description: 'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${interTight.variable}
          ${jetbrainsMono.variable}
          ${voltaire.variable}
          font-sans bg-bg text-fg antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}