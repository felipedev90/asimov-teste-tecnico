import { BULLETS } from '@/data/copy'
import { Dot } from 'lucide-react'

export function BulletList() {
  return (
    <ul className="flex justify-center flex-col gap-3 mb-9">
      {BULLETS.map((bullet) => (
        <li key={bullet} className="flex items-start gap-3">
          <span className="text-accent-teal">
            <Dot />
          </span>
          <span className="font-sans text-sm text-fg-muted leading-[22px] tracking-[-0.01em]">
            {bullet}
          </span>
        </li>
      ))}
    </ul>
  )
}