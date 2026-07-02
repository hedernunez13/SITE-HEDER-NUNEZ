import { motion } from "framer-motion"

import { AboutPreview } from "@/components/AboutPreview"
import { CTASection } from "@/components/CTASection"
import { EditorialButton } from "@/components/EditorialButton"
import { HeroSection } from "@/components/HeroSection"
import { InstagramFeed } from "@/components/InstagramFeed"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { ProcessSteps } from "@/components/ProcessSteps"
import { SectionHeading } from "@/components/SectionHeading"
import { ServiceSection } from "@/components/ServiceSection"
import { Testimonials } from "@/components/Testimonials"
import { heroImage } from "@/data/portfolio"

export default function Home() {
  return (
    <>
      <HeroSection
        image={heroImage}
        eyebrow="Heder Nunez Fotografia"
        title="Fotografia com emoção, nitidez e alma."
        subtitle="Heder Nunez registra histórias, movimentos, expressões e momentos reais com um olhar autoral construído ao longo de 10 anos de experiência em eventos, cultura, esporte, shows e projetos institucionais."
      >
        <EditorialButton to="/portfolio" variant="cream">
          Ver portfólio
        </EditorialButton>
        <EditorialButton to="/contato" variant="outline-cream">
          Solicitar orçamento
        </EditorialButton>
      </HeroSection>

      <AboutPreview />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="container-editorial mb-14">
          <SectionHeading
            eyebrow="Portfólio"
            title="Um portfólio construído em diferentes cenários."
            description="Shows, eventos, esporte, retratos e projetos institucionais — cada categoria carrega uma forma diferente de olhar."
          />
        </div>
        <PortfolioGrid mode="showcase" />
      </section>

      <ServiceSection />

      <ProcessSteps />

      <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24"
          >
            <div>
              <span className="mb-4 block text-xs tracking-[0.35em] text-gold uppercase">
                Trajetória
              </span>
              <h2 className="text-balance font-serif text-3xl leading-tight sm:text-5xl">
                Experiência construída em diferentes cenários.
              </h2>
            </div>
            <div>
              <p className="text-balance text-base leading-relaxed text-cream/70 sm:text-lg">
                Com uma trajetória construída em diferentes cenários, Heder Nunez une técnica,
                sensibilidade e presença para registrar desde a intensidade de um palco até a
                emoção silenciosa de um retrato.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-cream/60">
                <li className="border-t border-cream/15 pt-3">Eventos culturais</li>
                <li className="border-t border-cream/15 pt-3">Shows e artistas</li>
                <li className="border-t border-cream/15 pt-3">Corridas e eventos esportivos</li>
                <li className="border-t border-cream/15 pt-3">Projetos institucionais</li>
                <li className="border-t border-cream/15 pt-3 col-span-2">
                  Fotografia profissional em Salvador e região
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      <InstagramFeed />

      <CTASection />
    </>
  )
}
