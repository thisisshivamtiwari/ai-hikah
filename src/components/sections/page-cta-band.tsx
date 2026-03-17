import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface PageCtaBandProps {
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export const PageCtaBand = ({ title, description, primaryCta, secondaryCta }: PageCtaBandProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-brand-200 bg-white p-6 shadow-brand sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-700 sm:text-base">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg">{primaryCta}</Button>
          <Button variant="outline" size="lg">
            {secondaryCta}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
