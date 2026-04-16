"use client"

import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { GraduationCap } from "lucide-react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"
import React, { useState } from "react"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
  visible?: boolean
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 72) {
      setVisible(true)
      return
    }

    setVisible(false)
  })

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-4 z-50 mx-auto w-full px-2 sm:top-5 sm:px-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
              visible,
            })
          : child,
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "0 10px 35px rgba(126, 22, 37, 0.16)" : "none",
        y: visible ? 6 : 0,
        scale: visible ? 0.97 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 40,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-xl border border-brand-200 bg-white/95 px-6 py-3 xl:flex",
        visible && "max-w-6xl border-brand-300 px-4",
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
              visible,
            })
          : child,
      )}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const compactMenuItemNames = new Set([
    "Home",
    "About",
    "Academy",
    "Enrichment",
    "Courses",
    "Consultancy",
  ])
  const displayedItems = visible
    ? items.filter((item) => compactMenuItemNames.has(item.name))
    : items

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden min-w-0 flex-1 flex-row items-center justify-center gap-1 px-2 text-xs font-medium text-brand-700 transition-colors duration-200 2xl:gap-2 xl:flex",
        className,
      )}
    >
      {displayedItems.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative whitespace-nowrap rounded-lg px-3 py-2 text-brand-700 transition-colors duration-200 hover:text-brand-900"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-lg bg-brand-100"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(8px)" : "none",
        boxShadow: visible ? "0 10px 30px rgba(126, 22, 37, 0.14)" : "none",
        y: visible ? 6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 40,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-7xl flex-col items-center justify-between rounded-xl border border-brand-200 bg-white/95 px-3 py-2 xl:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close mobile navigation drawer"
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onKeyDown={(event) => {
              if (event.key !== "Escape") {
                return
              }

              onClose()
            }}
            className={cn(
              "fixed right-0 top-0 z-[80] flex h-dvh w-[20rem] max-w-[88vw] flex-col gap-5 border-l border-brand-200 bg-white px-5 py-6 shadow-brand",
              className,
            )}
            tabIndex={0}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold text-brand-800">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="cursor-pointer rounded-md p-1 text-brand-800 transition-colors hover:bg-brand-100"
              >
                <IconX />
              </button>
            </div>
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  if (isOpen) {
    return (
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClick}
        className="cursor-pointer rounded-md p-1 text-brand-800 transition-colors hover:bg-brand-100"
      >
        <IconX />
      </button>
    )
  }

  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={onClick}
      className="cursor-pointer rounded-md p-1 text-brand-800 transition-colors hover:bg-brand-100"
    >
      <IconMenu2 />
    </button>
  )
}

export const NavbarLogo = () => {
  return (
    <a
      href="/home"
      className="relative z-20 mr-4 flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-brand-800"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
        <GraduationCap className="h-4 w-4" />
      </span>
      <span>AL-HIKMAH</span>
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "dark" | "gradient"
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "inline-block cursor-pointer rounded-lg px-4 py-2 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"

  const variantStyles = {
    primary: "bg-brand-700 text-white hover:bg-brand-800",
    secondary: "bg-brand-100 text-brand-800 hover:bg-brand-200",
    dark: "bg-brand-900 text-white hover:bg-brand-800",
    gradient:
      "bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white hover:from-brand-800 hover:to-brand-800",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
