"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: ReactNode
}

interface ScrollTimelineProps {
  heading: string
  subheading?: string
  events: TimelineEvent[]
}

export const ScrollTimeline = ({ heading, subheading, events }: ScrollTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.2"] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{heading}</h2>
        {subheading && <p className="mt-2 text-brand-600">{subheading}</p>}
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-brand-100 sm:left-1/2 sm:-translate-x-0.5" />
        <motion.div
          className="absolute left-6 top-0 w-0.5 origin-top bg-gradient-to-b from-brand-700 to-brand-400 sm:left-1/2 sm:-translate-x-0.5"
          style={{ height: lineHeight }}
        />

        <div className="space-y-12">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex items-start gap-6 sm:items-center ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div className="flex-1 pl-14 sm:pl-0">
                  <div className={`rounded-2xl border border-brand-100 bg-white p-5 shadow-sm ${isLeft ? "sm:mr-8" : "sm:ml-8"}`}>
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center text-brand-700">{event.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-500">{event.year}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-brand-900">{event.title}</h3>
                    <p className="mt-1 text-sm text-brand-600">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-6 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-700 bg-white sm:static sm:translate-x-0 sm:flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-brand-700" />
                </div>

                <div className="hidden flex-1 sm:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
