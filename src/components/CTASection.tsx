import { motion } from "framer-motion"

import { EditorialButton } from "@/components/EditorialButton"
import { ctaBackgroundImage } from "@/data/portfolio"
import { whatsappLink } from "@/data/navigation"

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = "Vamos transformar seu próximo momento em imagem?",
  subtitle = "Entre em contato para solicitar orçamento, apresentar seu projeto ou agendar uma cobertura fotográfica.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <img
        src={ctaBackgroundImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />

      <div className="container-editorial relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-balance font-serif text-3xl leading-tight text-cream sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-cream/70 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <EditorialButton
              href={whatsappLink("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}
              external
              variant="cream"
            >
              Solicitar orçamento pelo WhatsApp
            </EditorialButton>
            <EditorialButton to="/contato" variant="outline-cream">
              Enviar mensagem
            </EditorialButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
