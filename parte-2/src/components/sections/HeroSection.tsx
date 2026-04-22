import { HeroBackground } from "@/components/sections/HeroBackground";
import { HeroContent } from "@/components/sections/HeroContent";
import { cn } from "@/lib/cn";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "px-4 py-16 md:px-8 md:py-20 lg:px-20 lg:py-24",
        "min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)]"
      )}
    >
      <HeroBackground />

      <div
        className={cn(
          "relative z-10",
          "grid grid-cols-1 items-center gap-12",
          "lg:grid-cols-2 lg:gap-16",
          "mx-auto max-w-[1280px]"
        )}
      >
        <HeroContent />

        <div
          aria-hidden="true"
          className={cn(
            "hidden lg:block",
            "h-[660px] rounded-2xl",
            "border border-white/5 bg-bg-card/30",
            "flex items-center justify-center mt-20"
          )}
        >
          <span className="text-xs uppercase tracking-widest text-ink-subtle">
            HeroVisual — Sprint 4.2
          </span>
        </div>
      </div>
    </section>
  );
}