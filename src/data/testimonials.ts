export interface Testimonial {
  id: string
  quote: string
  name: string
  context: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Além das fotos incríveis, Heder conseguiu captar a essência do nosso evento.",
    name: "Marina Alcântara",
    context: "Evento corporativo — Salvador",
  },
  {
    id: "t2",
    quote: "O olhar dele transforma momentos simples em imagens fortes.",
    name: "Rafael Dantas",
    context: "Ensaio de retrato",
  },
  {
    id: "t3",
    quote: "Profissionalismo, sensibilidade e entrega impecável.",
    name: "Camila Souza",
    context: "Casamento",
  },
]
