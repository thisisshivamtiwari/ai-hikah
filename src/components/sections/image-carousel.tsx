"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface CarouselSlide {
  image: string
  title: string
  subtitle: string
  tag: string
}

interface ImageCarouselProps {
  heading?: string
  slides: CarouselSlide[]
  autoplay?: boolean
}

export const ImageCarousel = ({ heading, slides, autoplay = true }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length)
  const goNext = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    if (!autoplay) return
    const t = setInterval(goNext, 4000)
    return () => clearInterval(t)
  })

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      {heading && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-2xl font-bold text-brand-900 sm:text-3xl"
        >
          {heading}
        </motion.h2>
      )}

      <div className="relative overflow-hidden rounded-3xl" style={{ height: 440 }}>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-2 inline-block rounded-full bg-brand-700/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
              >
                {slides[current].tag}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-black text-white sm:text-3xl"
              >
                {slides[current].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-1 max-w-md text-sm text-white/80"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          ←
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          →
        </button>

        <div className="absolute bottom-4 right-6 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
