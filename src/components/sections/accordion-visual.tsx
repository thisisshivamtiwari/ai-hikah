"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, type ReactNode } from "react"

interface AccordionItem {
  question: string
  answer: string
  icon: ReactNode
}

interface AccordionVisualProps {
  heading: string
  subheading?: string
  items: AccordionItem[]
  image?: string
}

export const AccordionVisual = ({ heading, subheading, items, image }: AccordionVisualProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-brand-600">{item.icon}</span>
                <span className="flex-1 text-sm font-semibold text-brand-900">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-brand-400 font-bold text-lg leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-brand-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden overflow-hidden rounded-2xl lg:block"
            style={{ height: 420 }}
          >
            <img src={image} alt={heading} className="h-full w-full object-cover" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
