import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { navItems } from "@/data/nav";

export function Nav() {
  return (
    <nav
      aria-label="Navegação principal"
      className={cn(
        "relative z-20",
        "flex items-center justify-between",
        "h-16 md:h-[72px]",
        "px-4 md:px-8 lg:px-20",
        "border-b border-white/[0.07]"
      )}
    >
      {/* Wordmark */}
      <Link href="/" className="flex items-center gap-3" aria-label="Asimov Academy — Início">
        <span
          aria-hidden="true"
          className={cn(
            "flex size-9 items-center justify-center rounded-lg",
            "bg-linear-to-br from-brand-cyan-light to-brand-sky",
            "text-sm font-black text-bg-primary"
          )}
        >
          A
        </span>
        <span className="font-display leading-tight">
          <span className="block text-sm font-bold text-ink-primary">Asimov</span>
          <span className="block text-xs font-normal text-ink-muted">Academy</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-1",
                "text-sm font-medium text-ink-muted",
                "transition-colors hover:text-ink-primary",
                "focus-visible:outline-none focus-visible:text-ink-primary"
              )}
            >
              {item.label}
              {item.hasDropdown && <Icon icon={ChevronDown} className="size-3" />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login */}
      <Link
        href="#login"
        className={cn(
          "text-sm font-medium text-ink-muted",
          "transition-colors hover:text-ink-primary",
          "focus-visible:outline-none focus-visible:text-ink-primary"
        )}
      >
        Login
      </Link>
    </nav>
  );
}