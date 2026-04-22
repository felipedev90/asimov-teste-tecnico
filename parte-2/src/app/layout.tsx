import type { Metadata } from "next";
import { Geist, Geist_Mono, Voltaire } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const voltaire = Voltaire({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-voltaire",
});

export const metadata: Metadata = {
  title: "Asimov Academy — Aprenda Python do zero com IA",
  description:
    "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas, projetos com IA desde o módulo 1, certificado reconhecido.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${voltaire.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}