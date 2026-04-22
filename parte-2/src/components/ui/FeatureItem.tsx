import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function FeatureItem({ icon, children, className }: FeatureItemProps) {
  return (
    <li className={cn("flex items-center gap-3.5", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          "size-8 rounded-lg",
          "bg-brand-cyan/10 border border-brand-cyan/20"
        )}
      >
        <Icon icon={icon} className="size-4 text-brand-cyan-light" />
      </span>
      <span className="text-sm font-medium text-ink-secondary md:text-[15px]">
        {children}
      </span>
    </li>
  );
}