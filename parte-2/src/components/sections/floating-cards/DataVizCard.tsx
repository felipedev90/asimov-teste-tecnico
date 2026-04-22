import { FloatingCard } from "@/components/ui/FloatingCard";
import { cn } from "@/lib/cn";

type DataVizCardProps = {
  className?: string;
};

export function DataVizCard({ className }: DataVizCardProps) {
  return (
    <FloatingCard
      animation="float-c"
      className={cn("w-[192px]", className)}
    >
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        Data Visualização
      </p>

      <svg
        viewBox="0 0 160 52"
        className="h-12 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill under line */}
        <path
          d="M0,42 C20,38 30,28 50,22 C70,16 80,30 100,18 C120,6 140,12 160,8 L160,52 L0,52 Z"
          fill="url(#chart-fill)"
        />

        {/* Line */}
        <path
          d="M0,42 C20,38 30,28 50,22 C70,16 80,30 100,18 C120,6 140,12 160,8"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Data points */}
        <circle cx="50" cy="22" r="2.5" fill="#06b6d4" />
        <circle cx="100" cy="18" r="2.5" fill="#06b6d4" />
        <circle cx="160" cy="8" r="2.5" fill="#22d3ee" />
      </svg>
    </FloatingCard>
  );
}