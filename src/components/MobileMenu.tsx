import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks, siteConfig, whatsappLink } from "@/data/navigation"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  transparentTrigger?: boolean
}

const MOSAIC_PHOTOS = [
  "/photos/shows/shows-01.jpg",
  "/photos/retratos/retratos-01.jpg",
  "/photos/institucional/institucional-01.jpg",
  "/photos/autoral/autoral-01.jpg",
  "/photos/eventos/eventos-03.jpg",
  "/photos/esporte/esporte-01.jpg",
  "/photos/shows/shows-04.jpg",
  "/photos/retratos/retratos-08.jpg",
  "/photos/autoral/autoral-05.jpg",
  "/photos/esporte/esporte-04.jpg",
  "/photos/institucional/institucional-05.jpg",
  "/photos/shows/shows-11.jpg",
]

const MOSAIC_TILES = 21

export function MobileMenu({ transparentTrigger }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        className={cn(
          "inline-flex size-9 items-center justify-center transition-colors md:hidden",
          transparentTrigger ? "text-cream" : "text-ink"
        )}
      >
        <Menu className="size-6" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="border-none bg-ink p-0 text-cream data-[side=right]:w-full data-[side=right]:max-w-none data-[side=right]:sm:max-w-none"
      >
        <div className="relative flex h-full flex-col overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 auto-rows-[120px] sm:auto-rows-[140px]">
            {Array.from({ length: MOSAIC_TILES }).map((_, index) => (
              <img
                key={index}
                src={MOSAIC_PHOTOS[index % MOSAIC_PHOTOS.length]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-ink/88" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="container-editorial flex items-start justify-between py-6">
              <div className="flex flex-col gap-1.5">
                <span className="font-serif text-lg tracking-wide">Heder Nunez</span>
                <span className="max-w-[220px] text-xs leading-snug text-cream/60">
                  Fotógrafo em Salvador há 10 anos. Fotografia com emoção, nitidez e alma.
                </span>
              </div>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-9 shrink-0 items-center justify-center"
              >
                <X className="size-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="container-editorial flex flex-1 flex-col items-start justify-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-serif text-4xl leading-tight text-cream/70 transition-colors hover:text-cream",
                      isActive && "text-cream"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="container-editorial flex flex-col gap-3 border-t border-cream/15 py-8 text-sm text-cream/60">
              <a
                href={whatsappLink("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                WhatsApp — {siteConfig.whatsappDisplay}
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-cream">
                Instagram
              </a>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
