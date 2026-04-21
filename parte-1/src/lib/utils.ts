import { clsx, type ClassValue } from "clsx";

/**
 * Utility para combinar classes Tailwind de forma segura.
 * Uso: cn("base", condition && "conditional", { "active": isActive })
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}