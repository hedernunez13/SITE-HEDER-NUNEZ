import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface HeroSectionProps {
  image: string
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  variant?: "full" | "page"
}

export function HeroSection({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  variant = "full",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex w-full items-end overflow-hidden bg-ink",
        variant === "full" ? "min-h-[100svh]" : "min-h-[60svh]"
      )}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

      <div className="container-editorial relative z-10 pb-16 pt-40 sm:pb-24 sm:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="mb-4 block text-xs tracking-[0.35em] text-gold uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance font-serif text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-cream/75 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10 flex flex-wrap items-center gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
