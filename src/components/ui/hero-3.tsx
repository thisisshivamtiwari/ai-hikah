"use client"

import React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedMarqueeHeroProps {
  tagline: string
  title: React.ReactNode
  description: string
  ctaText: string
  images: string[]
  className?: string
}

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 rounded-full bg-brand-700 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
)

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as const

  const duplicatedImages = [...images, ...images]

  return (
    <section
      className={cn(
        "relative flex min-h-[78vh] w-full flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-brand-50 via-white to-brand-100 px-4 pt-8 text-center sm:min-h-[82vh] sm:pt-10",
        className,
      )}
    >
      <div className="z-10 flex max-w-4xl flex-col items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl font-bold tracking-tighter text-brand-900 md:text-7xl"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-brand-700"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div className="relative mt-10 h-[220px] w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] sm:mt-12 sm:h-[280px]">
        <motion.div
          className="flex w-max gap-4 pl-4 sm:pl-6"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 flex-shrink-0 md:h-64"
              style={{
                rotate: `${index % 2 === 0 ? -1 : 2}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="h-full w-full rounded-2xl border border-brand-200 object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
