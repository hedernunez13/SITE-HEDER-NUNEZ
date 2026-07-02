import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "ink" | "cream"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 block text-xs tracking-[0.35em] uppercase",
            tone === "ink" ? "text-editorial" : "text-gold"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl",
          tone === "ink" ? "text-ink" : "text-cream"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-balance text-base leading-relaxed sm:text-lg",
            tone === "ink" ? "text-ink/70" : "text-cream/70"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
