"use client"

import { motion } from "framer-motion"

interface VisualMosaicProps {
  heading: string
  images: string[]
}

export const VisualMosaic = ({ heading, images }: VisualMosaicProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-brand-200 bg-white/85 p-6 shadow-sm sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-brand-900 sm:text-3xl">{heading}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {images.slice(0, 10).map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-xl border border-brand-200 bg-white"
              style={{ rotate: `${index % 3 === 0 ? -1 : index % 3 === 1 ? 1 : 0}deg` }}
            >
              <img
                src={image}
                alt={`Mosaic visual ${index + 1}`}
                className="h-28 w-full object-cover sm:h-36"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
