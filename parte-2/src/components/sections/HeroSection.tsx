import { HeroBackground } from "@/components/sections/HeroBackground";
import { HeroContent } from "@/components/sections/HeroContent";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { cn } from "@/lib/cn";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "px-4 py-10 md:px-8 md:py-16 lg:px-20 lg:py-24",
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

        <HeroVisual />
      </div>
    </section>
  );
}