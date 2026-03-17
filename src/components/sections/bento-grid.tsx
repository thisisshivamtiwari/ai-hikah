"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoItem {
  title: string
  description: string
  image?: string
  icon?: ReactNode
  span?: "wide" | "tall" | "normal"
  accent?: string
}

interface BentoGridProps {
  heading: string
  subheading?: string
  items: BentoItem[]
}

export const BentoGrid = ({ heading, subheading, items }: BentoGridProps) => {
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

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => {
          const colSpan = item.span === "wide" ? "sm:col-span-2" : ""
          const rowSpan = item.span === "tall" ? "row-span-2" : ""

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm ${colSpan} ${rowSpan}`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: item.image
                    ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                    : item.accent || "linear-gradient(135deg, #f9f4ee 0%, #fff 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-4">
                {item.icon && (
                  <div className={`mb-1 flex h-6 w-6 items-center justify-center ${item.image ? "text-white" : "text-brand-700"}`}>
                    {item.icon}
                  </div>
                )}
                <h3 className={`text-sm font-bold sm:text-base ${item.image ? "text-white" : "text-brand-900"}`}>
                  {item.title}
                </h3>
                <p className={`mt-0.5 text-xs ${item.image ? "text-white/75" : "text-brand-600"}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
