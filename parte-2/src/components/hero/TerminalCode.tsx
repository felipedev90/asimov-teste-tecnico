import { CODE_LINES } from '@/data/terminal'

interface TerminalCodeProps {
  linesShown: number
}

export function TerminalCode({ linesShown }: TerminalCodeProps) {
  return (
    <div className="py-3 min-h-[220px]">
      {CODE_LINES.slice(0, linesShown).map((line, i) => (
        <div key={i} className="flex min-h-5 px-4">
          <span className="font-mono text-[10px] text-border-strong min-w-[24px] mr-4 text-right pt-px shrink-0 select-none">
            {i + 1}
          </span>
          <span className="font-mono text-[12px] leading-5">
            {line.length === 0
              ? '\u00A0'
              : line.map(([color, text], j) => (
                  <span
                    key={j}
                    style={{
                      color,
                      fontStyle: color === '#6E7681' ? 'italic' : 'normal',
                    }}
                  >
                    {text}
                  </span>
                ))}
            {i === linesShown - 1 && linesShown < CODE_LINES.length && (
              <span
                className="inline-block w-[6px] h-[13px] bg-accent-teal ml-0.5 align-middle"
                style={{ animation: 'cursorBlink 900ms step-end infinite' }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  )
}