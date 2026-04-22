import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { cn } from "@/lib/cn";
import { heroCopy } from "@/data/hero-copy";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  const { eyebrow, headline, subheadline, bullets, ctas } = heroCopy;

  return (
    <div className="relative z-10 flex flex-col">
      {/* Eyebrow */}
      <Badge className="mb-6 md:mb-7">{eyebrow}</Badge>

      {/* Headline */}
      <h1
        className={cn(
          "mb-5 font-extrabold tracking-tight",
          "text-4xl leading-[1.15]",
          "md:text-5xl md:leading-[1.1]",
          "xl:text-[3.75rem]"
        )}
      >
        {headline.map((segment, i) => (
          <ShimmerText
            key={i}
            variant={segment.type === "highlight" ? "orange" : "white"}
          >
            {segment.text}
          </ShimmerText>
        ))}
      </h1>

      {/* Subheadline */}
      <p
        className={cn(
          "mb-8 md:mb-9",
          "max-w-[460px]",
          "text-base md:text-lg",
          "leading-relaxed text-ink-muted"
        )}
      >
        {subheadline}
      </p>

      {/* Bullets */}
      <ul className="mb-10 md:mb-11 flex flex-col gap-3.5">
        {bullets.map((bullet) => (
          <FeatureItem key={bullet.text} icon={bullet.icon}>
            {bullet.text}
          </FeatureItem>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        {ctas.map((cta, i) => (
          <Button
            key={cta.label}
            href={cta.href}
            variant={cta.variant}
            icon={i === 0 ? ArrowRight : undefined}
          >
            {cta.label}
          </Button>
        ))}
      </div>
    </div>
  );
}