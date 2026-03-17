"use client"

import { motion } from "framer-motion"

interface MetricItem {
  label: string
  value: string
  bar: number
}

interface AnimatedMetricsRailProps {
  heading: string
  metrics: MetricItem[]
}

export const AnimatedMetricsRail = ({ heading, metrics }: AnimatedMetricsRailProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-6 sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{heading}</h2>
        <div className="mt-5 space-y-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-lg border border-brand-200 bg-white p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-brand-800">{metric.label}</p>
                <p className="text-sm font-semibold text-brand-900">{metric.value}</p>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.bar}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.06 }}
                  className="h-full rounded-full bg-brand-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
