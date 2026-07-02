import { motion } from "framer-motion"

import { CTASection } from "@/components/CTASection"
import { HeroSection } from "@/components/HeroSection"
import { aboutHeroImage } from "@/data/portfolio"

const blocks = [
  {
    title: "Experiência",
    description:
      "10 anos de atuação profissional em Salvador, transitando por diferentes segmentos da fotografia — do palco ao retrato.",
  },
  {
    title: "Estilo de fotografia",
    description:
      "Um olhar voltado para emoção, composição, luz e presença, buscando sempre a verdade do momento antes da técnica.",
  },
  {
    title: "Equipamentos profissionais",
    description:
      "Equipamento adequado para cada contexto — de baixa luz em shows a grandes distâncias em eventos esportivos.",
  },
  {
    title: "Compromisso com entrega",
    description:
      "Curadoria cuidadosa e prazos combinados com transparência, do briefing até a entrega final.",
  },
  {
    title: "Olhar autoral",
    description:
      "Uma assinatura visual que atravessa todos os projetos, seja institucional, comercial ou pessoal.",
  },
]

export default function Sobre() {
  return (
    <>
      <HeroSection
        variant="page"
        image={aboutHeroImage}
        eyebrow="Sobre"
        title="Por trás da câmera, existe um olhar."
      />

      <section className="container-editorial py-20 sm:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl text-balance font-serif text-2xl leading-relaxed text-ink sm:text-3xl"
        >
          Heder Nunez é fotógrafo profissional com 10 anos de experiência, atuando em Salvador e
          em diferentes segmentos da fotografia. Seu trabalho une técnica, sensibilidade e
          narrativa visual para registrar pessoas, eventos, expressões, movimentos e atmosferas
          reais.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg"
        >
          Ao longo da sua trajetória, desenvolveu um olhar voltado para emoção, composição, luz e
          presença. Seja em shows, eventos culturais, fotografia esportiva, retratos ou projetos
          institucionais, sua missão é criar imagens que comuniquem, emocionem e permaneçam.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
              className="border-t border-warmgray/25 pt-6"
            >
              <h3 className="font-serif text-xl text-ink">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
