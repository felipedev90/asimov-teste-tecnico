import { cn } from "@/lib/cn";

type ShimmerVariant = "white" | "orange";

type ShimmerTextProps = {
  variant?: ShimmerVariant;
  className?: string;
  children: React.ReactNode;
};

const variantGradient: Record<ShimmerVariant, string> = {
  white:
    "bg-[linear-gradient(105deg,#ffffff_30%,#e0f7ff_44%,#ffffff_50%,#ffffff_100%)]",
  orange:
    "bg-[linear-gradient(105deg,#f97316_30%,#ffd580_44%,#f97316_50%,#f97316_100%)]",
};

export function ShimmerText({
  variant = "white",
  className,
  children,
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "inline bg-size-[250%_100%] bg-clip-text text-transparent",
        "motion-safe:animate-shimmer-text",
        variantGradient[variant],
        className
      )}
    >
      {children}
    </span>
  );
}