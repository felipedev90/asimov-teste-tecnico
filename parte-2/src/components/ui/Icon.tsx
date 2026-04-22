import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  "aria-label"?: string;
  decorative?: boolean;
};

export function Icon({
  icon: IconComponent,
  className,
  "aria-label": ariaLabel,
  decorative = true,
}: IconProps) {
  return (
    <IconComponent
      className={cn("shrink-0", className)}
      aria-hidden={decorative ? true : undefined}
      aria-label={!decorative ? ariaLabel : undefined}
      focusable={false}
    />
  );
}