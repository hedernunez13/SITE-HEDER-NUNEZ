import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

type Variant = "cream" | "outline-cream" | "ink" | "outline-ink" | "gold"

interface EditorialButtonProps {
  children: ReactNode
  variant?: Variant
  to?: string
  href?: string
  external?: boolean
  className?: string
}

const variantClasses: Record<Variant, string> = {
  cream: "border border-cream bg-cream text-ink hover:bg-transparent hover:text-cream",
  "outline-cream": "border border-cream/60 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  ink: "border border-ink bg-ink text-cream hover:bg-transparent hover:text-ink",
  "outline-ink": "border border-ink/50 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  gold: "border border-gold text-gold hover:bg-gold hover:text-ink",
}

export function EditorialButton({
  children,
  variant = "ink",
  to,
  href,
  external,
  className,
}: EditorialButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs tracking-[0.15em] uppercase transition-colors duration-300 sm:text-sm",
    variantClasses[variant],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return <span className={classes}>{children}</span>
}
