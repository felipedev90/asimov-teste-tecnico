import { cn } from "@/lib/cn";

type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "float-a" | "float-b" | "float-c" | "float-d";
};

const animationClasses = {
  "float-a": "motion-safe:animate-float-a",
  "float-b": "motion-safe:animate-float-b",
  "float-c": "motion-safe:animate-float-c",
  "float-d": "motion-safe:animate-float-d",
} as const;

export function FloatingCard({
  children,
  className,
  animation,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "absolute",
        "rounded-xl border border-white/[0.07]",
        "bg-bg-card/90 backdrop-blur-xl",
        "shadow-xl shadow-black/40",
        "p-3.5",
        animation && animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
}