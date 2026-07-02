import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <section className="bg-ink py-24 text-cream sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já registrou seus momentos com Heder Nunez."
          tone="cream"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col gap-6 border-t border-cream/15 pt-8"
            >
              <Quote className="size-6 text-gold" strokeWidth={1.25} />
              <blockquote className="font-serif text-xl leading-snug text-cream/90">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="text-sm text-cream/50">
                {testimonial.name} · {testimonial.context}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
