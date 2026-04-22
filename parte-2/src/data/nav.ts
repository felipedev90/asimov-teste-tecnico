import type { NavItem } from "@/types/hero";

export const navItems: readonly NavItem[] = [
  { label: "Cursos", href: "#cursos", hasDropdown: true },
  { label: "Planos", href: "#planos" },
  { label: "Sobre Nós", href: "#sobre" },
] as const;