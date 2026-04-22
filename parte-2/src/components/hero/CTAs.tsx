interface CTAsProps {
  primaryLabel?: string
  secondaryLabel?: string
}

export function CTAs({
  primaryLabel = 'Quero começar agora',
  secondaryLabel = 'Ver o que vou aprender',
}: CTAsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <button className="font-sans text-sm font-semibold text-black bg-accent-teal rounded-full px-6 py-3 tracking-[-0.01em] hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(0,212,190,0.38)] transition-all duration-150 whitespace-nowrap">
        {primaryLabel}
      </button>
      <button className="font-sans text-sm text-fg-muted border border-border-strong rounded-full px-[22px] py-3 tracking-[-0.01em] hover:bg-white/5 hover:border-fg-subtle hover:text-fg transition-all duration-150 whitespace-nowrap">
        {secondaryLabel}
      </button>
    </div>
  )
}