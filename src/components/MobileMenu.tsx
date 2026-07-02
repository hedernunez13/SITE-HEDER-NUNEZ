import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks, siteConfig, whatsappLink } from "@/data/navigation"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  transparentTrigger?: boolean
}

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
        <div className="flex h-full flex-col">
          <div className="container-editorial flex items-center justify-between py-6">
            <span className="font-serif text-lg tracking-wide">Heder Nunez</span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-9 items-center justify-center"
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
      </SheetContent>
    </Sheet>
  )
}
