import { motion } from "framer-motion"

import { SectionHeading } from "@/components/SectionHeading"
import { processSteps } from "@/data/process"

export function ProcessSteps() {
  return (
    <section className="container-editorial py-24 sm:py-32">
      <SectionHeading
        eyebrow="Processo"
        title="Como funciona a contratação"
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="flex flex-col gap-3 border-t border-warmgray/25 pt-6"
          >
            <span className="font-serif text-3xl text-gold">{item.step}</span>
            <h3 className="font-serif text-xl text-ink">{item.title}</h3>
            <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
