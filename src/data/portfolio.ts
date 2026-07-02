export type PortfolioCategoryId =
  | "shows"
  | "eventos"
  | "esporte"
  | "retratos"
  | "institucional"
  | "autoral"

export interface PortfolioCategory {
  id: PortfolioCategoryId
  label: string
  shortLabel: string
  description: string
}

export interface PortfolioImage {
  id: string
  category: PortfolioCategoryId
  src: string
  alt: string
  featured?: boolean
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "shows",
    label: "Shows & Festivais",
    shortLabel: "Shows",
    description: "Palco, bastidores, artistas e a energia do público em movimento.",
  },
  {
    id: "eventos",
    label: "Eventos Corporativos",
    shortLabel: "Eventos",
    description: "Cobertura institucional, social e corporativa com olhar narrativo.",
  },
  {
    id: "esporte",
    label: "Fotografia Esportiva",
    shortLabel: "Esporte",
    description: "Ação, superação e a expressão real do esforço físico.",
  },
  {
    id: "retratos",
    label: "Retratos",
    shortLabel: "Retratos",
    description: "Presença, expressão e identidade em imagens autorais.",
  },
  {
    id: "institucional",
    label: "Cultura & Institucional",
    shortLabel: "Institucional",
    description: "Projetos culturais, museus e marcas com propósito de comunicação.",
  },
  {
    id: "autoral",
    label: "Autoral",
    shortLabel: "Autoral",
    description: "Imagens fine art voltadas para decoração e projetos exclusivos.",
  },
]

function photo(category: PortfolioCategoryId, slug: string) {
  return `/photos/${category}/${slug}.jpg`
}

export const portfolioImages: PortfolioImage[] = [
  { id: "shows-01", category: "shows", src: photo("shows", "shows-01"), alt: "Fogos de artifício e palco em show de música ao vivo", featured: true },
  { id: "shows-03", category: "shows", src: photo("shows", "shows-03"), alt: "Cantor se apresentando ao vivo em show" },
  { id: "shows-04", category: "shows", src: photo("shows", "shows-04"), alt: "Silhueta em preto e branco de artista no palco" },
  { id: "shows-05", category: "shows", src: photo("shows", "shows-05"), alt: "Cantor em close durante apresentação ao vivo" },
  { id: "shows-07", category: "shows", src: photo("shows", "shows-07"), alt: "Show noturno com letreiro luminoso no palco" },
  { id: "shows-08", category: "shows", src: photo("shows", "shows-08"), alt: "Cantor se apresentando sob luzes de palco" },
  { id: "shows-09", category: "shows", src: photo("shows", "shows-09"), alt: "Cantor com braço erguido durante show" },
  { id: "shows-10", category: "shows", src: photo("shows", "shows-10"), alt: "Cantor em performance de palco" },
  { id: "shows-11", category: "shows", src: photo("shows", "shows-11"), alt: "Cantor se apresentando com banda sob luz roxa" },
  { id: "shows-12", category: "shows", src: photo("shows", "shows-12"), alt: "Cantor com braço erguido em show noturno" },
  { id: "shows-13", category: "shows", src: photo("shows", "shows-13"), alt: "Cantor sorrindo durante apresentação ao vivo" },

  { id: "eventos-03", category: "eventos", src: photo("eventos", "eventos-03"), alt: "Momento próximo entre noivos em casamento", featured: true },
  { id: "eventos-04", category: "eventos", src: photo("eventos", "eventos-04"), alt: "Casal comemorando em evento social" },
  { id: "eventos-05", category: "eventos", src: photo("eventos", "eventos-05"), alt: "Convidadas em ativação de marca durante evento" },
  { id: "eventos-06", category: "eventos", src: photo("eventos", "eventos-06"), alt: "Convidada em evento noturno" },

  { id: "esporte-01", category: "esporte", src: photo("esporte", "esporte-01"), alt: "Corredora em prova de rua", featured: true },
  { id: "esporte-02", category: "esporte", src: photo("esporte", "esporte-02"), alt: "Grupo de corredores em prova de rua" },
  { id: "esporte-03", category: "esporte", src: photo("esporte", "esporte-03"), alt: "Corredora sorrindo durante prova de rua" },
  { id: "esporte-04", category: "esporte", src: photo("esporte", "esporte-04"), alt: "Jogadora de beach tennis em quadra de areia" },
  { id: "esporte-05", category: "esporte", src: photo("esporte", "esporte-05"), alt: "Corredora sorrindo durante prova de rua na cidade" },
  { id: "esporte-06", category: "esporte", src: photo("esporte", "esporte-06"), alt: "Jogadora de beach tennis rebatendo na rede" },

  { id: "retratos-01", category: "retratos", src: photo("retratos", "retratos-01"), alt: "Retrato editorial de mulher com iluminação natural", featured: true },
  { id: "retratos-03", category: "retratos", src: photo("retratos", "retratos-03"), alt: "Retrato de mulher sentada em pedras à beira-mar" },
  { id: "retratos-06", category: "retratos", src: photo("retratos", "retratos-06"), alt: "Retrato de mulher com vestido floral" },
  { id: "retratos-07", category: "retratos", src: photo("retratos", "retratos-07"), alt: "Silhueta de mulher à beira-mar ao entardecer" },
  { id: "retratos-08", category: "retratos", src: photo("retratos", "retratos-08"), alt: "Retrato de mulher na água" },

  { id: "institucional-01", category: "institucional", src: photo("institucional", "institucional-01"), alt: "Vista aérea do litoral de Salvador", featured: true },
  { id: "institucional-02", category: "institucional", src: photo("institucional", "institucional-02"), alt: "Vista aérea de praia e cidade" },
  { id: "institucional-03", category: "institucional", src: photo("institucional", "institucional-03"), alt: "Procissão cultural com imagem religiosa" },
  { id: "institucional-04", category: "institucional", src: photo("institucional", "institucional-04"), alt: "Registro de manifestação cultural e religiosa" },
  { id: "institucional-05", category: "institucional", src: photo("institucional", "institucional-05"), alt: "Farol da Barra ao entardecer, Salvador" },

  { id: "autoral-01", category: "autoral", src: photo("autoral", "autoral-01"), alt: "Composição autoral em preto e branco com farol", featured: true },
  { id: "autoral-02", category: "autoral", src: photo("autoral", "autoral-02"), alt: "Estudo autoral de onda do mar" },
  { id: "autoral-03", category: "autoral", src: photo("autoral", "autoral-03"), alt: "Composição abstrata de luz ao pôr do sol" },
  { id: "autoral-04", category: "autoral", src: photo("autoral", "autoral-04"), alt: "Silhuetas sobre ponte ao entardecer" },
  { id: "autoral-05", category: "autoral", src: photo("autoral", "autoral-05"), alt: "Pôr do sol com stand up paddle e colina histórica" },
  { id: "autoral-06", category: "autoral", src: photo("autoral", "autoral-06"), alt: "Campo dourado ao entardecer" },
  { id: "autoral-07", category: "autoral", src: photo("autoral", "autoral-07"), alt: "Composição artística com vitral e pôr do sol" },
  { id: "autoral-08", category: "autoral", src: photo("autoral", "autoral-08"), alt: "Reflexo do pôr do sol na orla" },
]

export const heroImage = photo("shows", "shows-01")
export const aboutHeroImage = photo("retratos", "retratos-01")
export const ctaBackgroundImage = photo("shows", "shows-04")

export function getFeaturedByCategory(): Record<PortfolioCategoryId, PortfolioImage> {
  const result = {} as Record<PortfolioCategoryId, PortfolioImage>
  for (const category of portfolioCategories) {
    const featured =
      portfolioImages.find((img) => img.category === category.id && img.featured) ??
      portfolioImages.find((img) => img.category === category.id)
    if (featured) result[category.id] = featured
  }
  return result
}
