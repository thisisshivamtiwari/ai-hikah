"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface Quote {
  text: string
  author: string
  role: string
  avatar?: string
}

interface QuoteBandProps {
  quotes: Quote[]
}

export const QuoteBand = ({ quotes }: QuoteBandProps) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % quotes.length), 5000)
    return () => clearInterval(t)
  }, [quotes.length])

  return (
    <section className="mt-10 w-full bg-gradient-to-r from-brand-900 to-brand-800 py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-5xl text-brand-400 select-none leading-none">"</span>
        <div className="mt-2" style={{ minHeight: 120 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                {quotes[current].text}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {quotes[current].avatar && (
                  <img
                    src={quotes[current].avatar}
                    alt={quotes[current].author}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-brand-400"
                  />
                )}
                <div className="text-left">
                  <div className="text-sm font-bold text-brand-200">{quotes[current].author}</div>
                  <div className="text-xs text-brand-400">{quotes[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-brand-300" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
