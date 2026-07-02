import { CTASection } from "@/components/CTASection"
import { HeroSection } from "@/components/HeroSection"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { unsplashUrl } from "@/data/portfolio"

export default function Portfolio() {
  return (
    <>
      <HeroSection
        variant="page"
        image={unsplashUrl("1503428593586-e225b39bddfe", 2000, 80)}
        eyebrow="Portfólio"
        title="Imagens que carregam presença."
        subtitle="Uma seleção de trabalhos em shows, eventos, esporte, retratos e projetos institucionais e autorais."
      />

      <section className="container-editorial py-20 sm:py-28">
        <PortfolioGrid mode="full" />
      </section>

      <CTASection
        title="Gostou do que viu?"
        subtitle="Solicite um orçamento e vamos planejar o próximo registro juntos."
      />
    </>
  )
}
