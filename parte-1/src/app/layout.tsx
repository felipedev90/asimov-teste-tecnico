import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positivus — Navigating the digital landscape for success",
  description:
    "Positivus is a digital marketing agency that helps businesses grow online through SEO, PPC, social media marketing, and content creation.",
  keywords: [
    "digital marketing",
    "SEO",
    "PPC",
    "social media marketing",
    "content creation",
  ],
  authors: [{ name: "Felipe Silva" }],
  openGraph: {
    title: "Positivus — Digital Marketing Agency",
    description:
      "Helping businesses grow online through SEO, PPC, social media marketing, and content creation.",
    type: "website",
    locale: "en_US",
    siteName: "Positivus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Positivus — Digital Marketing Agency",
    description:
      "Helping businesses grow online through SEO, PPC, social media marketing, and content creation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}