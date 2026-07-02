import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

import { MobileMenu } from "@/components/MobileMenu"
import { navLinks } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        transparent
          ? "bg-transparent"
          : "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(14,14,14,0.08)]"
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <NavLink to="/" className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-xl tracking-wide transition-colors",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            Heder Nunez
          </span>
          <span
            className={cn(
              "text-[0.6rem] tracking-[0.3em] uppercase transition-colors",
              transparent ? "text-cream/70" : "text-warmgray"
            )}
          >
            Fotografia
          </span>
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors",
                  transparent ? "text-cream/80 hover:text-cream" : "text-ink/70 hover:text-ink",
                  isActive && (transparent ? "text-cream" : "text-ink")
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <NavLink
            to="/contato"
            className={cn(
              "hidden text-sm tracking-wide underline-offset-4 hover:underline md:inline-block",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            Solicitar orçamento
          </NavLink>
          <MobileMenu transparentTrigger={transparent} />
        </div>
      </div>
    </header>
  )
}
