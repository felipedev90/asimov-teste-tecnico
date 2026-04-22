import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { heroCopy } from "@/data/hero-copy";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary p-12">
      <section className="mx-auto max-w-2xl space-y-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
          UI Primitives Preview
        </h2>

        {/* Badge */}
        <div>
          <Badge>{heroCopy.eyebrow}</Badge>

        </div>

        {/* ShimmerText */}
        <div className="text-4xl font-extrabold leading-tight">
          {heroCopy.headline.map((segment, i) => (
            <ShimmerText
              key={i}
              variant={segment.type === "highlight" ? "orange" : "white"}
            >
              {segment.text}
            </ShimmerText>
          ))}
        </div>

        {/* FeatureItems */}
        <ul className="space-y-3">
          {heroCopy.bullets.map((bullet) => (
            <FeatureItem key={bullet.text} icon={bullet.icon}>
              {bullet.text}
            </FeatureItem>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {heroCopy.ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}