import { motion } from "framer-motion"

import { CTASection } from "@/components/CTASection"
import { EditorialButton } from "@/components/EditorialButton"
import { HeroSection } from "@/components/HeroSection"
import { services } from "@/data/services"

export default function Servicos() {
  return (
    <>
      <HeroSection
        variant="page"
        image="/photos/eventos/eventos-01.jpg"
        eyebrow="Serviços"
        title="Fotografia para quem entende o valor da memória."
        subtitle="Cada serviço é conduzido com a mesma exigência técnica e sensibilidade — adaptado ao contexto de cada projeto."
      />

      <section className="container-editorial py-20 sm:py-28">
        <div className="flex flex-col gap-20">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-1 gap-8 border-t border-warmgray/25 pt-10 lg:grid-cols-[auto_1fr] lg:gap-16"
            >
              <span className="font-serif text-2xl text-editorial">0{index + 1}</span>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-ink">{service.title}</h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-xs tracking-[0.2em] text-editorial uppercase">
                      Para quem é indicado
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{service.forWho}</p>
                  </div>

                  <div>
                    <span className="text-xs tracking-[0.2em] text-editorial uppercase">
                      O que está incluso
                    </span>
                    <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink/65">
                      {service.includes.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <EditorialButton to="/contato" variant="outline-ink">
                      Solicitar orçamento
                    </EditorialButton>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
