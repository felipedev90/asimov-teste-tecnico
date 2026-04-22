import { FloatingCard } from "@/components/ui/FloatingCard";
import { cn } from "@/lib/cn";

type ChatbotCardProps = {
  className?: string;
};

export function ChatbotCard({ className }: ChatbotCardProps) {
  return (
    <FloatingCard
      animation="float-d"
      className={cn("w-[185px]", className)}
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        Chatbot
      </p>

      {/* Bot message */}
      <div
        className={cn(
          "mb-1.5 rounded-lg rounded-bl-sm",
          "bg-brand-cyan/15 px-2.5 py-1.5",
          "text-[11px] leading-snug text-brand-cyan-light"
        )}
      >
        Olá! Como posso ajudar?
      </div>

      {/* User message */}
      <div
        className={cn(
          "mb-2 ml-auto w-fit",
          "rounded-lg rounded-br-sm",
          "bg-white/5 px-2.5 py-1.5",
          "text-[11px] leading-snug text-ink-muted"
        )}
      >
        Treinar modelo
      </div>

      {/* Input */}
      <div
        className={cn(
          "flex items-center gap-1.5",
          "rounded-lg border border-white/[0.07]",
          "px-2.5 py-1.5"
        )}
        aria-hidden="true"
      >
        <span className="flex-1 text-[10px] text-ink-subtle">
          Sua mensagem...
        </span>
        <span className="text-xs text-brand-cyan-light">➤</span>
      </div>
    </FloatingCard>
  );
}