'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'motion/react'
import { HEADLINE_WORDS } from '@/data/copy'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const word: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Headline() {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.h1
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="font-sans font-bold leading-[1.02] tracking-[-0.03em] text-fg mb-7
                 text-[clamp(36px,9vw,56px)] md:text-[clamp(52px,7vw,96px)]"
    >
      {HEADLINE_WORDS.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`${w.accent ? 'text-accent-orange' : 'text-fg'} mr-[0.22em]`}
          style={{ display: 'inline' }}
        >
          {w.text}
        </motion.span>
      ))}
    </motion.h1>
  )
}