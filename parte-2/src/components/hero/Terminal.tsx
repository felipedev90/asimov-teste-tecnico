'use client'

import { useState, useEffect } from 'react'
import { CODE_LINES } from '@/data/terminal'
import { TerminalCode } from './TerminalCode'
import { TerminalOutput } from './TerminalOutput'

const DOTS = ['#FF5F57', '#FFBD2E', '#28C840'] as const

interface TerminalProps {
  startDelay?: number
  lineDelay?:  number
}

export function Terminal({ startDelay = 800, lineDelay = 80 }: TerminalProps) {
  const [linesShown, setLinesShown] = useState<number>(0)
  const [barsActive, setBarsActive] = useState<boolean>(false)

  useEffect(() => {
    const outer = setTimeout(() => {
      let count = 0
      const iv = setInterval(() => {
        count++
        setLinesShown(count)
        if (count >= CODE_LINES.length) {
          clearInterval(iv)
          setBarsActive(true)
        }
      }, lineDelay)
      return () => clearInterval(iv)
    }, startDelay)

    return () => clearTimeout(outer)
  }, [startDelay, lineDelay])

  return (
    <div className="bg-[#0D0F14] border border-border-strong rounded-[10px] overflow-hidden shadow-[0_28px_72px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="h-9 bg-bg-elevated border-b border-border-strong flex items-center px-3.5 gap-1.5">
        {DOTS.map((color) => (
          <div key={color} className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        ))}
        <span className="font-mono text-[11px] text-fg-subtle ml-2">asimov.py</span>
        <span className="font-mono text-[10px] text-fg-subtle ml-auto">Python 3.11</span>
      </div>
      <TerminalCode linesShown={linesShown} />
      <TerminalOutput active={barsActive} />
    </div>
  )
}