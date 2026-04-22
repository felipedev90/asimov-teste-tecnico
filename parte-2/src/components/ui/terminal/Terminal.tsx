import { TerminalCodeLine } from "@/components/ui/terminal/TerminalCodeLine";
import { cn } from "@/lib/cn";
import { terminalCode } from "@/data/terminal-code";

export function Terminal() {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.07]",
        "bg-bg-card/90 backdrop-blur-xl",
        "shadow-2xl shadow-black/40",
        "overflow-hidden"
      )}
    >
      {/* macOS-style titlebar */}
      <div
        className={cn(
          "flex items-center gap-1.5",
          "border-b border-white/[0.07] bg-white/2",
          "px-4 py-3"
        )}
      >
        <span
          aria-hidden="true"
          className="size-3 rounded-full bg-[#ff5f57]"
        />
        <span
          aria-hidden="true"
          className="size-3 rounded-full bg-[#febc2e]"
        />
        <span
          aria-hidden="true"
          className="size-3 rounded-full bg-[#28c840]"
        />
        <span
          className={cn(
            "ml-2 rounded px-2 py-0.5",
            "bg-brand-cyan/10 text-brand-cyan-light",
            "font-mono text-[11px] font-medium"
          )}
        >
          main.py
        </span>
      </div>

      {/* Code area */}
      <div
        aria-hidden="true"
        className="p-4 font-mono text-[12px] leading-[1.9]"
      >
        {terminalCode.map((line) => (
          <TerminalCodeLine key={line.number} line={line} />
        ))}
      </div>
    </div>
  );
}