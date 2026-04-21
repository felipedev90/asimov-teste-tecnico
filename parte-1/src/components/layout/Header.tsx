"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Desktop */}
      <div className="hidden h-[68px] items-center justify-between md:flex">
        <Link href="/" aria-label="Positivus — voltar para a página inicial">
          <Image
            src="/images/logo.svg"
            alt="Positivus"
            width={220}
            height={56}
            priority
          />
        </Link>

        <nav className="flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body text-dark transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="h-[68px] px-[35px]">
            Request a quote
          </Button>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <Link href="/" aria-label="Positivus — voltar para a página inicial">
          <Image
            src="/images/logo.svg"
            alt="Positivus"
            width={160}
            height={40}
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="flex flex-col justify-center gap-[5px] p-2"
        >
          <span
            className="block h-[2px] w-[24px] bg-dark transition-all duration-300"
            style={isOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
          />
          <span
            className="block h-[2px] w-[24px] bg-dark transition-all duration-300"
            style={isOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block h-[2px] w-[24px] bg-dark transition-all duration-300"
            style={isOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
          />
        </button>
      </div>

      {/* Mobile menu aberto */}
      {isOpen && (
        <nav className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-dark md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-[20px] top-[40px] flex flex-col justify-center gap-[5px] p-2"
            aria-label="Fechar menu"
          >
            <span
              className="block h-[2px] w-[24px] bg-white transition-all duration-300"
              style={{ transform: "translateY(7px) rotate(45deg)" }}
            />
            <span
              className="block h-[2px] w-[24px] bg-white transition-all duration-300"
              style={{ opacity: 0 }}
            />
            <span
              className="block h-[2px] w-[24px] bg-white transition-all duration-300"
              style={{ transform: "translateY(-7px) rotate(-45deg)" }}
            />
          </button>

          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-h3 font-medium text-white transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button variant="accent" className="mt-4" onClick={() => setIsOpen(false)}>
            Request a quote
          </Button>
        </nav>
      )}
    </header>
  );
}