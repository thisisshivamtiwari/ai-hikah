"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
}

interface PageProcessStripProps {
  heading: string
  steps: ProcessStep[]
}

export const PageProcessStrip = ({ heading, steps }: PageProcessStripProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-brand-200 bg-white/85 p-6 shadow-sm sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{heading}</h2>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {steps.map((step, index) => {
            const isActive = activeStepIndex === index
            return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-xl border p-4 transition-colors ${
                isActive
                  ? "border-brand-400 bg-white shadow-sm"
                  : "border-brand-200 bg-brand-50/60 hover:bg-brand-100/70"
              }`}
              onClick={() => setActiveStepIndex(index)}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-brand-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">
                {isActive ? step.description : `${step.description.slice(0, 88)}...`}
              </p>
            </motion.article>
            )
          })}
        </div>
        <motion.div
          key={steps[activeStepIndex]?.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 rounded-lg border border-brand-200 bg-brand-50 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            Active focus
          </p>
          <p className="mt-2 text-sm text-brand-800">{steps[activeStepIndex]?.description}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
