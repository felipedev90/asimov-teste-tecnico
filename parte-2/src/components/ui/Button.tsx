import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-brand-cyan text-bg-primary",
    "shadow-[0_0_24px_rgba(6,182,212,0.35)]",
    "hover:shadow-[0_4px_32px_rgba(6,182,212,0.55)]",
    "hover:brightness-110",
  ),
  secondary: cn(
    "border border-brand-cyan/40 text-brand-cyan-light bg-transparent",
    "hover:bg-brand-cyan/10 hover:border-brand-cyan/60",
  ),
  ghost: cn(
    "border border-white/10 text-ink-secondary bg-transparent",
    "hover:bg-white/5 hover:border-white/20 hover:text-ink-primary",
  ),
};

export function Button({
  href,
  variant = "primary",
  icon,
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-6 py-3.5 rounded-xl",
        "text-sm font-bold",
        "transition-all duration-200",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
        variantStyles[variant],
        className,
      )}
    >
      {children}
      {icon && <Icon icon={icon} className="size-4" />}
    </Link>
  );
}
