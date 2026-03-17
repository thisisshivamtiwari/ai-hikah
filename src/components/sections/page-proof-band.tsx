import { motion } from "framer-motion"

interface ProofItem {
  metric: string
  label: string
}

interface PageProofBandProps {
  title: string
  items: ProofItem[]
}

export const PageProofBand = ({ title, items }: PageProofBandProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-6 sm:p-8"
      >
        <h2 className="text-xl font-semibold text-brand-900 sm:text-2xl">{title}</h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-lg border border-brand-200 bg-white/90 p-4"
            >
              <p className="text-2xl font-bold text-brand-900">{item.metric}</p>
              <p className="mt-1 text-sm text-brand-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
