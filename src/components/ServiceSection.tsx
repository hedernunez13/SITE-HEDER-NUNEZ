import { motion } from "framer-motion"

import { EditorialButton } from "@/components/EditorialButton"
import { SectionHeading } from "@/components/SectionHeading"
import type { Service } from "@/data/services"
import { services as allServices } from "@/data/services"

interface ServiceSectionProps {
  services?: Service[]
  showHeading?: boolean
  showCta?: boolean
}

export function ServiceSection({
  services = allServices,
  showHeading = true,
  showCta = true,
}: ServiceSectionProps) {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        {showHeading && (
          <SectionHeading
            eyebrow="Serviços"
            title="Fotografia sob medida para cada tipo de momento."
            className="mb-16"
          />
        )}

        <div className="grid grid-cols-1 gap-px bg-warmgray/20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
              className="flex flex-col gap-4 bg-cream p-8 sm:p-10"
            >
              <span className="font-serif text-xl text-editorial">0{index + 1}</span>
              <h3 className="font-serif text-2xl leading-snug text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{service.shortDescription}</p>
            </motion.div>
          ))}
        </div>

        {showCta && (
          <div className="mt-14 flex justify-center">
            <EditorialButton to="/servicos" variant="outline-ink">
              Ver todos os serviços
            </EditorialButton>
          </div>
        )}
      </div>
    </section>
  )
}
