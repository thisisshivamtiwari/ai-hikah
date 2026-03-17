import { motion } from "framer-motion"

interface SectionItem {
  title: string
  description: string
}

interface PageSectionGridProps {
  heading: string
  subheading: string
  items: SectionItem[]
}

export const PageSectionGrid = ({ heading, subheading, items }: PageSectionGridProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-10">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{heading}</h2>
        <p className="mt-2 text-sm text-brand-700 sm:text-base">{subheading}</p>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-xl border border-brand-200 bg-white/80 p-5 shadow-sm transition-colors hover:bg-white"
          >
            <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-700">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
