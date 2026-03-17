"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface PillarItem {
  title: string
  summary: string
  points: string[]
}

interface InteractivePillarsProps {
  heading: string
  description: string
  items: PillarItem[]
}

export const InteractivePillars = ({ heading, description, items }: InteractivePillarsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-brand-200 bg-white/85 p-6 shadow-sm sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{heading}</h2>
        <p className="mt-2 text-sm text-brand-700 sm:text-base">{description}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full cursor-pointer rounded-xl border px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "border-brand-400 bg-brand-50"
                      : "border-brand-200 bg-white hover:bg-brand-50/60"
                  }`}
                >
                  <p className="text-sm font-semibold text-brand-900">{item.title}</p>
                  <p className="mt-1 text-xs text-brand-700">{item.summary}</p>
                </button>
              )
            })}
          </div>

          <motion.article
            key={activeItem.title}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-brand-200 bg-brand-50/70 p-5"
          >
            <h3 className="text-xl font-semibold text-brand-900">{activeItem.title}</h3>
            <p className="mt-2 text-sm text-brand-700">{activeItem.summary}</p>
            <ul className="mt-4 space-y-2">
              {activeItem.points.map((point) => (
                <li key={point} className="rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm text-brand-800">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}
