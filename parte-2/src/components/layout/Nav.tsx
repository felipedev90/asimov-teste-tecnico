'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = ['Cursos', 'Trilhas', 'Projetos', 'Para empresas']

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12  backdrop-blur-md bg-bg/80">

        <span className="font-logo text-2xl md:text-3xl lg:text-4xl uppercase  text-fg tracking-wide mr-auto">
          asimov
        </span>

        <div className="hidden md:flex items-center gap-8 mr-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-[14px] text-fg-muted hover:text-fg transition-colors duration-150 tracking-[-0.01em]"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="#"
            className="text-[14px] text-fg-muted hover:text-fg transition-colors duration-150"
          >
            Entrar
          </Link>
          <Link
            href="#"
            className="text-[13px] font-semibold text-black bg-accent-teal rounded-full px-[18px] py-[8px] hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(0,212,190,0.38)] transition-all duration-150"
          >
            Matricule-se
          </Link>
        </div>

        <button
          className="md:hidden text-fg-muted ml-auto flex flex-col justify-center items-center w-6 h-6 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span
            className="block w-5 h-px bg-current transition-all duration-300 ease-in-out origin-center"
            style={{
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300 ease-in-out"
            style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300 ease-in-out origin-center"
            style={{
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ease-in-out"
        style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link}
            href="#"
            className="text-2xl text-fg tracking-tight transition-all duration-300 ease-in-out"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
              transitionDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms',
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </Link>
        ))}
        <Link
          href="#"
          className="text-lg font-semibold text-black bg-accent-teal rounded-full px-8 py-3 transition-all duration-300 ease-in-out"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
            transitionDelay: menuOpen ? `${NAV_LINKS.length * 60 + 80}ms` : '0ms',
          }}
          onClick={() => setMenuOpen(false)}
        >
          Matricule-se
        </Link>
      </div>
    </>
  )
}