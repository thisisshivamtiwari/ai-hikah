"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SpotlightItem {
  title: string
  description: string
  image: string
  tag: string
}

interface SpotlightGridProps {
  heading: string
  subheading?: string
  items: SpotlightItem[]
}

export const SpotlightGrid = ({ heading, subheading, items }: SpotlightGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{heading}</h2>
        {subheading && <p className="mt-2 max-w-2xl text-brand-600">{subheading}</p>}
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: index % 3 === 1 ? 340 : 260 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.55 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-brand-950"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="mb-1 inline-block rounded-full bg-brand-700/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                {item.tag}
              </span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={hoveredIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-sm text-white/80"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
