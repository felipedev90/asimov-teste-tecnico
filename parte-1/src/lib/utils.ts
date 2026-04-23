import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility para combinar classes Tailwind de forma segura.
 * Resolve conflitos (ex: `px-4` + `px-8` → só `px-8`).
 * Uso: cn("base", condition && "conditional", { "active": isActive })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
