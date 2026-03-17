"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MarqueeItem {
  label: string
  icon: ReactNode
}

interface MarqueeLogosProps {
  heading?: string
  items: MarqueeItem[]
}

export const MarqueeLogos = ({ heading, items }: MarqueeLogosProps) => {
  const doubled = [...items, ...items]

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl overflow-hidden px-0">
      {heading && (
        <h2 className="mb-6 px-4 text-center text-sm font-semibold uppercase tracking-widest text-brand-500 sm:px-6 lg:px-10">
          {heading}
        </h2>
      )}

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f9f4ee] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f9f4ee] to-transparent" />

        <motion.div
          animate={{ x: [0, -50 * items.length] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-4"
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-2.5 shadow-sm"
            >
              <span className="flex h-4 w-4 items-center justify-center text-brand-700">{item.icon}</span>
              <span className="whitespace-nowrap text-sm font-semibold text-brand-800">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
