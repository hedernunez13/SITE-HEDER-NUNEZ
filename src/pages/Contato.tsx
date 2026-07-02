import { Mail, MapPin, MessageCircle } from "lucide-react"

import { ContactForm } from "@/components/ContactForm"
import { HeroSection } from "@/components/HeroSection"
import { siteConfig, whatsappLink } from "@/data/navigation"
import { unsplashUrl } from "@/data/portfolio"

export default function Contato() {
  return (
    <>
      <HeroSection
        variant="page"
        image={unsplashUrl("1544005313-94ddf0286df2", 2000, 80)}
        eyebrow="Contato"
        title="O instante certo, o olhar certo."
        subtitle="Conte um pouco sobre o seu projeto, evento ou ensaio. Quanto mais detalhes você enviar, melhor será o direcionamento da proposta."
      />

      <section className="container-editorial grid grid-cols-1 gap-16 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <span className="mb-3 block text-xs tracking-[0.35em] text-editorial uppercase">
              Fale direto
            </span>
            <a
              href={whatsappLink("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 font-serif text-2xl text-ink transition-colors hover:text-editorial"
            >
              <MessageCircle className="size-5 text-gold" strokeWidth={1.5} />
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t border-warmgray/25 pt-8 text-sm text-ink/70">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-ink">
              <Mail className="size-4 text-gold" strokeWidth={1.5} />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" strokeWidth={1.5} />
              {siteConfig.location}
            </span>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-ink/55">
            Atendo em Salvador e região, e viajo para projetos em outras cidades mediante
            combinação prévia de cobertura e logística.
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  )
}
