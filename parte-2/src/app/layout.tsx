import type { Metadata } from 'next'
import { Geist, JetBrains_Mono, Voltaire } from 'next/font/google'
import './globals.css'



const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist', 
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const voltaire = Voltaire({
  subsets: ['latin'],
  weight: '400',              
  variable: '--font-voltaire',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Aprenda Python com IA | Asimov Academy',
  description: 'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.',
  openGraph: {
    title: 'Aprenda Python com IA | Asimov Academy',
    description: 'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${jetbrainsMono.variable} ${voltaire.variable}`}>
      <body>{children}</body>
    </html>
  )
}