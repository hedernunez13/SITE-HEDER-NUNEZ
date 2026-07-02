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
  photoId: string
  alt: string
  featured?: boolean
}

export function unsplashUrl(photoId: string, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`
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

export const portfolioImages: PortfolioImage[] = [
  { id: "shows-01", category: "shows", photoId: "1470229722913-7c0e2dbbafd3", alt: "Público de show com braços levantados sob luz de palco", featured: true },
  { id: "shows-02", category: "shows", photoId: "1493676304819-0d7a8d026dcf", alt: "Luzes de palco em show noturno" },
  { id: "shows-03", category: "shows", photoId: "1459749411175-04bf5292ceea", alt: "Show com iluminação dramática" },
  { id: "shows-04", category: "shows", photoId: "1501281668745-f7f57925c3b4", alt: "Artista em performance no palco" },
  { id: "shows-05", category: "shows", photoId: "1478147427282-58a87a120781", alt: "Feixes de luz coloridos sobre a plateia" },

  { id: "eventos-01", category: "eventos", photoId: "1540575467063-178a50c2df87", alt: "Plateia atenta em evento corporativo" },
  { id: "eventos-02", category: "eventos", photoId: "1552664730-d307ca884978", alt: "Reunião de negócios em ambiente profissional" },
  { id: "eventos-03", category: "eventos", photoId: "1515187029135-18ee286d815b", alt: "Conferência institucional com público", featured: true },
  { id: "eventos-04", category: "eventos", photoId: "1475721027785-f74eccf877e2", alt: "Encontro corporativo com apresentação" },
  { id: "eventos-05", category: "eventos", photoId: "1519741497674-611481863552", alt: "Retrato de noiva em dia de casamento" },
  { id: "eventos-06", category: "eventos", photoId: "1511285560929-80b456fea0bc", alt: "Detalhe de alianças de casamento" },
  { id: "eventos-07", category: "eventos", photoId: "1583939003579-730e3918a45a", alt: "Casal em cerimônia de casamento" },
  { id: "eventos-08", category: "eventos", photoId: "1606216794074-735e91aa2c92", alt: "Primeira dança dos noivos" },

  { id: "esporte-01", category: "esporte", photoId: "1461896836934-ffe607ba8211", alt: "Corredores em prova de rua", featured: true },
  { id: "esporte-02", category: "esporte", photoId: "1517649763962-0c623066013b", alt: "Jogador em ação durante partida" },
  { id: "esporte-03", category: "esporte", photoId: "1552674605-db6ffd4facb5", alt: "Ciclista em movimento" },
  { id: "esporte-04", category: "esporte", photoId: "1518611012118-696072aa579a", alt: "Atleta em lance de quadra" },

  { id: "retratos-01", category: "retratos", photoId: "1544005313-94ddf0286df2", alt: "Retrato editorial de mulher", featured: true },
  { id: "retratos-02", category: "retratos", photoId: "1507003211169-0a1dd7228f2d", alt: "Retrato de homem em luz natural" },
  { id: "retratos-03", category: "retratos", photoId: "1500648767791-00dcc994a43e", alt: "Retrato em preto e branco" },
  { id: "retratos-04", category: "retratos", photoId: "1552058544-f2b08422138a", alt: "Retrato autoral com iluminação dramática" },
  { id: "retratos-05", category: "retratos", photoId: "1516450360452-9312f5e86fc7", alt: "Retrato próximo com expressão intensa" },

  { id: "institucional-01", category: "institucional", photoId: "1503428593586-e225b39bddfe", alt: "Interior de galeria de arte", featured: true },
  { id: "institucional-02", category: "institucional", photoId: "1518998053901-5348d3961a04", alt: "Arquitetura institucional" },
  { id: "institucional-03", category: "institucional", photoId: "1487958449943-2429e8be8625", alt: "Espaço cultural e museológico" },

  { id: "autoral-01", category: "autoral", photoId: "1500462918059-b1a0cb512f1d", alt: "Composição fine art abstrata", featured: true },
  { id: "autoral-02", category: "autoral", photoId: "1493246507139-91e8fad9978e", alt: "Imagem autoral em preto e branco" },
  { id: "autoral-03", category: "autoral", photoId: "1519750783826-e2420f4d687f", alt: "Estudo visual autoral" },
  { id: "autoral-04", category: "autoral", photoId: "1543269865-cbf427effbad", alt: "Composição artística de luz e sombra" },
]

export const heroImage = unsplashUrl("1470229722913-7c0e2dbbafd3", 2000, 80)
export const aboutHeroImage = unsplashUrl("1516450360452-9312f5e86fc7", 1600, 80)
export const ctaBackgroundImage = unsplashUrl("1543269865-cbf427effbad", 2000, 80)

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
