import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[7px] bg-primary px-[7px]",
        "text-[36px] font-medium text-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
