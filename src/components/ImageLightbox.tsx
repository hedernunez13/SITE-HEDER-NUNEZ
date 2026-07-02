import { useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { PortfolioImage } from "@/data/portfolio"
import { portfolioCategories } from "@/data/portfolio"

interface ImageLightboxProps {
  images: PortfolioImage[]
  activeIndex: number | null
  onOpenChange: (index: number | null) => void
}

export function ImageLightbox({ images, activeIndex, onOpenChange }: ImageLightboxProps) {
  const isOpen = activeIndex !== null
  const active = activeIndex !== null ? images[activeIndex] : null

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (activeIndex === null) return
      const next = (activeIndex + direction + images.length) % images.length
      onOpenChange(next)
    },
    [activeIndex, images.length, onOpenChange]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(1)
      if (event.key === "ArrowLeft") goTo(-1)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, goTo])

  const categoryLabel = active
    ? portfolioCategories.find((category) => category.id === active.category)?.label
    : undefined

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onOpenChange(null)}>
      <DialogContent
        showCloseButton
        className="flex h-screen w-screen max-w-none flex-col items-center justify-center rounded-none border-none bg-ink/97 p-0 text-cream ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">{active?.alt ?? "Imagem do portfólio"}</DialogTitle>

        {active && (
          <>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={() => goTo(-1)}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-3 text-cream/60 transition-colors hover:text-cream sm:left-8"
            >
              <ChevronLeft className="size-7" strokeWidth={1.25} />
            </button>

            <figure className="flex max-h-[85svh] max-w-[92vw] flex-col items-center gap-4 sm:max-w-[80vw]">
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[75svh] w-auto max-w-full object-contain"
              />
              <figcaption className="text-center text-xs tracking-[0.2em] text-cream/50 uppercase">
                {categoryLabel}
              </figcaption>
            </figure>

            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={() => goTo(1)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-3 text-cream/60 transition-colors hover:text-cream sm:right-8"
            >
              <ChevronRight className="size-7" strokeWidth={1.25} />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
