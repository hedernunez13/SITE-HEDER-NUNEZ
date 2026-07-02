import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom"

import { ImageLightbox } from "@/components/ImageLightbox"
import type { PortfolioCategoryId } from "@/data/portfolio"
import {
  getFeaturedByCategory,
  portfolioCategories,
  portfolioImages,
  unsplashUrl,
} from "@/data/portfolio"
import { cn } from "@/lib/utils"

interface PortfolioGridProps {
  mode: "showcase" | "full"
}

export function PortfolioGrid({ mode }: PortfolioGridProps) {
  if (mode === "showcase") return <ShowcaseGrid />
  return <FullGrid />
}

function ShowcaseGrid() {
  const featured = getFeaturedByCategory()

  return (
    <div className="grid grid-cols-1 gap-px bg-warmgray/20 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioCategories.map((category, index) => {
        const image = featured[category.id]
        return (
          <motion.a
            key={category.id}
            href={`/portfolio?categoria=${category.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
            className="group relative flex aspect-[4/5] items-end overflow-hidden bg-ink"
          >
            {image && (
              <img
                src={unsplashUrl(image.photoId, 900, 75)}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <div className="relative z-10 flex w-full flex-col gap-3 p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-cream">{category.label}</h3>
              <p className="max-w-xs text-sm text-cream/70">{category.description}</p>
              <span className="mt-2 inline-flex w-fit items-center gap-2 text-xs tracking-[0.2em] text-gold uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Ver galeria
              </span>
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}

function FullGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = (searchParams.get("categoria") as PortfolioCategoryId | null) ?? "todos"
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === "todos") return portfolioImages
    return portfolioImages.filter((image) => image.category === activeCategory)
  }, [activeCategory])

  const setCategory = (id: PortfolioCategoryId | "todos") => {
    if (id === "todos") {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: id })
    }
  }

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-x-6 gap-y-3">
        <FilterButton active={activeCategory === "todos"} onClick={() => setCategory("todos")}>
          Todos
        </FilterButton>
        {portfolioCategories.map((category) => (
          <FilterButton
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setCategory(category.id)}
          >
            {category.shortLabel}
          </FilterButton>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <motion.button
            type="button"
            key={image.id}
            onClick={() => setLightboxIndex(index)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 6) * 0.05 }}
            className="group relative mb-4 block w-full overflow-hidden bg-ink/5"
          >
            <img
              src={unsplashUrl(image.photoId, 800, 75)}
              alt={image.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
          </motion.button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-ink/50">
          Nenhuma imagem nessa categoria ainda.
        </p>
      )}

      <ImageLightbox images={filtered} activeIndex={lightboxIndex} onOpenChange={setLightboxIndex} />
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-b pb-1 text-xs tracking-[0.2em] uppercase transition-colors",
        active ? "border-ink text-ink" : "border-transparent text-ink/40 hover:text-ink/70"
      )}
    >
      {children}
    </button>
  )
}
