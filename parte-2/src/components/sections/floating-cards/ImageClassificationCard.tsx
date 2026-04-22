import { FloatingCard } from "@/components/ui/FloatingCard";
import { cn } from "@/lib/cn";

type ImageClassificationCardProps = {
  className?: string;
};

export function ImageClassificationCard({
  className,
}: ImageClassificationCardProps) {
  return (
    <FloatingCard
      animation="float-b"
      className={cn("w-[142px] p-3", className)}
    >
      <div className="mb-2 overflow-hidden rounded-lg border border-white/6">
        <svg
          viewBox="0 0 100 75"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="block w-full"
        >
          <defs>
            <linearGradient id="sky-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f2744" />
              <stop offset="100%" stopColor="#1a3a5c" />
            </linearGradient>
          </defs>

          {/* Sky + stars */}
          <rect width="100" height="75" fill="url(#sky-gradient)" />
          <circle cx="15" cy="8" r="0.8" fill="#fff" opacity="0.6" />
          <circle cx="40" cy="5" r="0.6" fill="#fff" opacity="0.5" />
          <circle cx="70" cy="10" r="0.7" fill="#fff" opacity="0.7" />

          {/* Distant mountains */}
          <polygon
            points="0,55 20,28 40,48 60,22 80,40 100,30 100,75 0,75"
            fill="#0d1f36"
            opacity="0.9"
          />

          {/* Front mountains */}
          <polygon
            points="0,75 0,52 25,35 50,52 75,32 100,46 100,75"
            fill="#1e4976"
          />

          {/* Snow caps */}
          <polygon
            points="25,35 21,42 29,42"
            fill="rgba(200,230,255,0.5)"
          />
          <polygon
            points="75,32 71,40 79,40"
            fill="rgba(200,230,255,0.5)"
          />

          {/* Detection bounding box */}
          <rect
            x="28"
            y="20"
            width="44"
            height="38"
            rx="2"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.2"
            strokeDasharray="3,2"
          />

          {/* Label tag */}
          <rect
            x="28"
            y="14"
            width="34"
            height="9"
            rx="2"
            fill="#06b6d4"
          />
          <text
            x="30"
            y="21"
            fontFamily="monospace"
            fontSize="5.5"
            fill="#000"
            fontWeight="bold"
          >
            landscape
          </text>

          {/* Confidence score */}
          <rect
            x="64"
            y="50"
            width="20"
            height="7"
            rx="2"
            fill="rgba(0,0,0,0.6)"
          />
          <text
            x="66"
            y="55.5"
            fontFamily="monospace"
            fontSize="4.5"
            fill="#34d399"
          >
            98.2%
          </text>
        </svg>
      </div>

      <p className="text-center text-[11px] font-semibold text-ink-primary">
        Image Classification
      </p>
    </FloatingCard>
  );
}