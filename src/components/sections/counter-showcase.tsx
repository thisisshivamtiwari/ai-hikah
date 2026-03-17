"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, type ReactNode } from "react"

interface CounterItem {
  label: string
  value: number
  suffix: string
  description: string
  icon: ReactNode
}

interface CounterShowcaseProps {
  heading: string
  subheading?: string
  items: CounterItem[]
  dark?: boolean
}

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" })
    return controls.stop
  }, [inView, value, count])

  return (
    <motion.span ref={ref} className="font-black tabular-nums">
      {rounded}
    </motion.span>
  )
}

export const CounterShowcase = ({ heading, subheading, items, dark = false }: CounterShowcaseProps) => {
  const sectionClass = dark ? "mt-10 bg-brand-900" : "mt-10 bg-brand-50"
  const headingColor = dark ? "text-white" : "text-brand-900"
  const subColor = dark ? "text-brand-200" : "text-brand-600"
  const cardBg = dark ? "bg-white/10 border-white/10" : "bg-white border-brand-100"
  const labelColor = dark ? "text-white/70" : "text-brand-500"
  const valueColor = dark ? "text-white" : "text-brand-900"
  const descColor = dark ? "text-white/60" : "text-brand-600"
  const iconColor = dark ? "text-brand-300" : "text-brand-700"

  return (
    <section className={`w-full py-14 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <h2 className={`text-2xl font-bold sm:text-3xl ${headingColor}`}>{heading}</h2>
          {subheading && <p className={`mt-2 ${subColor}`}>{subheading}</p>}
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`rounded-2xl border p-6 ${cardBg}`}
            >
              <div className={`mb-2 flex h-8 w-8 items-center justify-center ${iconColor}`}>{item.icon}</div>
              <div className={`text-4xl font-black sm:text-5xl ${valueColor}`}>
                <AnimatedNumber value={item.value} suffix={item.suffix} />
              </div>
              <div className={`mt-1 text-sm font-semibold ${labelColor}`}>{item.label}</div>
              <div className={`mt-1 text-xs ${descColor}`}>{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
