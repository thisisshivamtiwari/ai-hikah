"use client"

import { motion } from "framer-motion"

interface ComparisonRow {
  feature: string
  withUs: string
  without: string
  highlight?: boolean
}

interface ComparisonTableProps {
  heading: string
  subheading?: string
  rows: ComparisonRow[]
  withLabel?: string
  withoutLabel?: string
}

export const ComparisonTable = ({
  heading,
  subheading,
  rows,
  withLabel = "With Al-Hikmah",
  withoutLabel = "Without Support",
}: ComparisonTableProps) => {
  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{heading}</h2>
        {subheading && <p className="mt-2 text-brand-600">{subheading}</p>}
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm">
        <div className="grid grid-cols-3 bg-brand-900 px-6 py-3 text-sm font-bold text-white">
          <div>Aspect</div>
          <div className="text-center text-brand-300">{withoutLabel}</div>
          <div className="text-center text-brand-100">{withLabel}</div>
        </div>

        {rows.map((row, index) => (
          <motion.div
            key={row.feature}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className={`grid grid-cols-3 border-b border-brand-100 px-6 py-4 text-sm ${
              row.highlight ? "bg-brand-50" : "bg-white"
            } last:border-0`}
          >
            <div className="font-semibold text-brand-800">{row.feature}</div>
            <div className="text-center text-brand-400 line-through">{row.without}</div>
            <div className="text-center font-medium text-brand-700">✓ {row.withUs}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
