import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 self-start",
        "px-3.5 py-1.5 rounded-full",
        "bg-brand-cyan/10 border border-brand-cyan/25",
        "text-xs font-semibold tracking-wide text-brand-cyan-light",
        className
      )}
    >
      <span
        className="size-1.5 rounded-full bg-brand-cyan-light motion-safe:animate-pulse"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}