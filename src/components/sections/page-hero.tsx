import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  images: string[]
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  images,
}: PageHeroProps) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-8 rounded-2xl border border-brand-200/80 bg-white/85 p-6 shadow-brand sm:p-8 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-700 sm:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg">{primaryCta}</Button>
            <Button variant="outline" size="lg">
              {secondaryCta}
            </Button>
          </div>
        </div>
        <div className="relative h-[260px] w-full sm:h-[320px]">
          {images.slice(0, 3).map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              className="absolute rounded-2xl border border-brand-200 bg-white p-2 shadow-lg"
              style={{
                width: index === 0 ? "58%" : "48%",
                top: index === 0 ? "5%" : index === 1 ? "0%" : "48%",
                left: index === 0 ? "20%" : index === 1 ? "0%" : "50%",
                rotate: `${index === 0 ? -2 : index === 1 ? 3 : -1}deg`,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={image}
                alt={`${eyebrow} visual ${index + 1}`}
                className="h-32 w-full rounded-xl object-cover sm:h-40"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
