import { FloatingCard } from "@/components/ui/FloatingCard";
import { cn } from "@/lib/cn";

type SentimentCardProps = {
  className?: string;
};

export function SentimentCard({ className }: SentimentCardProps) {
  return (
    <FloatingCard
      animation="float-a"
      className={cn("w-[205px]", className)}
    >
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        Sentiment Analysis
      </p>

      <div
        className={cn(
          "mb-2.5 inline-flex items-center gap-1.5",
          "rounded border border-success/25 bg-success/10",
          "px-2.5 py-1"
        )}
      >
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-success-light"
        />
        <span className="text-xs font-semibold text-success-light">
          Positive
        </span>
      </div>

      <p className="mb-1.5 text-[10px] text-ink-subtle">Sentiment results</p>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full w-[78%] rounded-full bg-linear-to-r from-success-light to-brand-cyan-light"
          role="progressbar"
          aria-valuenow={78}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Resultado de análise de sentimento positivo: 78 por cento"
        />
      </div>
    </FloatingCard>
  );
}