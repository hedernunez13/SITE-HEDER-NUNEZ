import { Link } from "react-router-dom"

import { navLinks, siteConfig, whatsappLink } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-3 md:py-24">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl tracking-wide">Heder Nunez Fotografia</span>
          <p className="max-w-xs text-sm text-cream/60">
            Fotografia profissional em Salvador, Bahia.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="mb-1 text-xs tracking-[0.25em] text-cream/40 uppercase">Navegação</span>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="w-fit text-cream/70 transition-colors hover:text-cream">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="mb-1 text-xs tracking-[0.25em] text-cream/40 uppercase">Contato</span>
          <a
            href={whatsappLink("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-cream/70 transition-colors hover:text-cream"
          >
            WhatsApp
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="w-fit text-cream/70 transition-colors hover:text-cream">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="w-fit text-cream/70 transition-colors hover:text-cream">
            {siteConfig.email}
          </a>
          <span className="text-cream/50">{siteConfig.location}</span>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Heder Nunez Fotografia. Todos os direitos reservados.</span>
          <span>Fotografia · Salvador, Bahia</span>
        </div>
      </div>
    </footer>
  )
}
