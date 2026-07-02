export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Briefing",
    description:
      "Entendimento do evento, objetivo, local, público e tipo de entrega desejada.",
  },
  {
    step: "02",
    title: "Planejamento visual",
    description:
      "Definição da abordagem fotográfica, horários importantes, estilo de cobertura e necessidades técnicas.",
  },
  {
    step: "03",
    title: "Cobertura fotográfica",
    description:
      "Registro profissional com equipamentos adequados, olhar atento e direção visual precisa.",
  },
  {
    step: "04",
    title: "Seleção e entrega",
    description:
      "Curadoria, tratamento das imagens e entrega digital em alta qualidade dentro do prazo combinado.",
  },
]
