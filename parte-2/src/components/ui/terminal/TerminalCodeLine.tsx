import { cn } from "@/lib/cn";

import type { CodeLine, CodeTokenType } from "@/types/hero";

const tokenColors: Record<CodeTokenType, string> = {
  keyword: "text-purple-400",
  identifier: "text-ink-primary",
  function: "text-sky-400",
  number: "text-accent-orange-light",
  comment: "text-ink-code-comment italic",
  plain: "text-ink-secondary",
};

type TerminalCodeLineProps = {
  line: CodeLine;
};

export function TerminalCodeLine({ line }: TerminalCodeLineProps) {
  return (
    <div className="flex">
      <span className="mr-3 w-6 shrink-0 select-none text-right text-ink-code-comment">
        {line.number}
      </span>
      <span className="flex-1">
        {line.tokens.map((token, i) => (
          <span key={i} className={cn(tokenColors[token.type])}>
            {token.text}
          </span>
        ))}
      </span>
    </div>
  );
}