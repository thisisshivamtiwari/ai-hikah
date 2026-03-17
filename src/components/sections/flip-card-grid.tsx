"use client"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"

interface FlipCardItem {
  title: string
  icon: ReactNode
  front: string
  back: string
  accent: string
}

interface FlipCardGridProps {
  heading: string
  items: FlipCardItem[]
}

const FlipCard = ({ item }: { item: FlipCardItem }) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <div
      className="group relative h-56 cursor-pointer"
      style={{ perspective: 900 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((p) => !p)}
      aria-label={`Flip card: ${item.title}`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <div
          className="absolute inset-0 flex flex-col items-start justify-end rounded-2xl border border-brand-200 bg-white p-5 shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-2 flex h-8 w-8 items-center justify-center text-brand-700">{item.icon}</div>
          <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
          <p className="mt-1 text-xs text-brand-600">{item.front}</p>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-brand-400">
            Hover for more →
          </p>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-start justify-end rounded-2xl p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: item.accent }}
        >
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/90">{item.back}</p>
        </div>
      </motion.div>
    </div>
  )
}

export const FlipCardGrid = ({ heading, items }: FlipCardGridProps) => {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-2xl font-bold text-brand-900 sm:text-3xl"
      >
        {heading}
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <FlipCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
