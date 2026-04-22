import { OUTPUT_BARS } from '@/data/terminal'

interface TerminalOutputProps {
  active: boolean
}

export function TerminalOutput({ active }: TerminalOutputProps) {
  return (
    <div className="border-t border-border-subtle px-4 py-3 bg-bg-elevated">
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="text-accent-teal text-[10px]">▶</span>
        <span className="font-mono text-[10px] text-fg-subtle">OUTPUT — Previsão de Vendas</span>
      </div>
      {OUTPUT_BARS.map((bar, i) => (
        <div key={bar.label} className={`flex items-center gap-2.5 ${i < 2 ? 'mb-2' : ''}`}>
          <span className="font-mono text-[10px] text-fg-muted min-w-[54px]">{bar.label}</span>
          <div className="flex-1 h-[7px] bg-border-subtle rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00D4BE, #00E5D4)',
                width: active ? `${bar.pct}%` : '0%',
                transition: active
                  ? `width 900ms cubic-bezier(0.16,1,0.3,1) ${i * 180}ms`
                  : 'none',
              }}
            />
          </div>
          <span className="font-mono text-[10px] text-accent-teal min-w-[48px]">{bar.val}</span>
        </div>
      ))}
    </div>
  )
}