import { motion } from "framer-motion"

import { EditorialButton } from "@/components/EditorialButton"
import { SectionHeading } from "@/components/SectionHeading"

const highlights = [
  "10 anos de experiência",
  "Eventos culturais e corporativos",
  "Shows e festivais",
  "Fotografia esportiva",
  "Ensaios e retratos",
  "Projetos institucionais",
]

export function AboutPreview() {
  return (
    <section className="container-editorial py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          eyebrow="Sobre o trabalho"
          title="Um olhar que transforma momentos em memória."
          description="A fotografia vai além do registro. Ela traduz atmosfera, intensidade, presença e emoção. Heder Nunez atua com uma abordagem sensível e técnica, buscando entregar imagens que carregam verdade, força estética e valor narrativo."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col justify-between gap-10"
        >
          <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-warmgray/25 pt-4 text-sm text-ink/80">
                {item}
              </li>
            ))}
          </ul>
          <div>
            <EditorialButton to="/sobre" variant="outline-ink">
              Conhecer a trajetória
            </EditorialButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
