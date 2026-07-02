export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  forWho: string
  includes: string[]
}

export const services: Service[] = [
  {
    id: "eventos",
    title: "Cobertura de Eventos",
    shortDescription:
      "Registro profissional de eventos corporativos, culturais, sociais e institucionais, com foco em momentos espontâneos, detalhes e narrativa visual.",
    fullDescription:
      "Uma cobertura que acompanha o ritmo real do evento — dos bastidores à plateia, dos discursos aos detalhes que passam despercebidos. O objetivo é entregar um registro que funcione como narrativa, não como lista de fotos soltas.",
    forWho: "Empresas, organizadores e famílias que querem um registro completo e sensível do que aconteceu.",
    includes: [
      "Cobertura completa do evento do início ao fim",
      "Registro de momentos espontâneos e posados",
      "Seleção e tratamento profissional das imagens",
      "Entrega digital em alta resolução",
    ],
  },
  {
    id: "shows",
    title: "Shows e Festivais",
    shortDescription:
      "Fotografia de palco, bastidores, artistas, público e atmosfera, com domínio de luz extrema, movimento e emoção.",
    fullDescription:
      "Shows exigem leitura rápida de luz, movimento e intensidade. O trabalho aqui é capturar a energia do palco e da plateia sem perder nitidez, entregando imagens que carregam o clima do evento.",
    forWho: "Produtoras, artistas, casas de show e festivais que precisam de material de divulgação e memória do evento.",
    includes: [
      "Cobertura de palco e bastidores",
      "Registro do público e da atmosfera",
      "Fotos prontas para imprensa e redes sociais",
      "Entrega ágil para uso imediato",
    ],
  },
  {
    id: "esporte",
    title: "Fotografia Esportiva",
    shortDescription:
      "Registro de corrida, ciclismo, eventos esportivos e atletas, com foco em ação, expressão, superação e energia.",
    fullDescription:
      "Fotografia esportiva pede antecipação — saber onde o momento decisivo vai acontecer antes que ele aconteça. O foco é a expressão do esforço, a ação e a energia de quem compete.",
    forWho: "Organizadores de corridas e eventos esportivos, atletas e assessorias que precisam de registro de performance.",
    includes: [
      "Cobertura de largada, percurso e chegada",
      "Registro de atletas em ação",
      "Imagens para divulgação e patrocinadores",
      "Entrega rápida em alta resolução",
    ],
  },
  {
    id: "retratos",
    title: "Ensaios e Retratos",
    shortDescription:
      "Retratos profissionais, autorais e editoriais para pessoas, marcas, artistas e profissionais que desejam fortalecer sua imagem.",
    fullDescription:
      "Um retrato bem feito comunica antes mesmo de qualquer palavra. O ensaio é conduzido com direção sutil, buscando expressão real e presença — não pose engessada.",
    forWho: "Profissionais, artistas e marcas pessoais que precisam de imagem forte para portfólio, redes sociais ou material institucional.",
    includes: [
      "Briefing prévio de estilo e objetivo",
      "Direção de pose e expressão durante o ensaio",
      "Seleção e tratamento das melhores imagens",
      "Entrega digital em alta qualidade",
    ],
  },
  {
    id: "corporativa",
    title: "Fotografia Corporativa",
    shortDescription:
      "Retratos executivos, ambientes de trabalho e cultura organizacional registrados com padrão editorial.",
    fullDescription:
      "Imagens que comunicam solidez e identidade da empresa — de retratos executivos a registros do dia a dia da operação, sempre com acabamento editorial.",
    forWho: "Empresas que precisam de banco de imagens próprio para site, redes sociais e materiais institucionais.",
    includes: [
      "Retratos executivos e de equipe",
      "Registro de ambientes e rotina de trabalho",
      "Padrão visual consistente com a marca",
      "Entrega em pacote pronto para uso institucional",
    ],
  },
  {
    id: "institucional",
    title: "Fotografia Institucional",
    shortDescription:
      "Fotografia para empresas, museus, marcas, órgãos culturais, projetos sociais e comunicação institucional.",
    fullDescription:
      "Projetos institucionais pedem imagens que sustentem uma narrativa maior — de acervo, de memória ou de comunicação pública. O trabalho é construído em conjunto com o time de comunicação do contratante.",
    forWho: "Instituições culturais, órgãos públicos, ONGs e marcas com projetos de comunicação de longo prazo.",
    includes: [
      "Levantamento de necessidades junto à equipe de comunicação",
      "Cobertura de eventos, acervo e ambientes",
      "Tratamento de imagem com padrão editorial",
      "Entrega organizada por uso (site, imprensa, redes)",
    ],
  },
  {
    id: "fine-art",
    title: "Fotografia Autoral / Fine Art",
    shortDescription:
      "Imagens autorais com estética artística, voltadas para decoração, quadros e projetos visuais exclusivos.",
    fullDescription:
      "Um trabalho conduzido com liberdade criativa total, sem briefing de terceiros — imagens pensadas para existir como obra, não como registro de serviço.",
    forWho: "Colecionadores, decoradores e quem busca uma peça exclusiva com identidade autoral.",
    includes: [
      "Conceito e direção artística exclusivos",
      "Produção em edição limitada",
      "Impressão fine art sob consulta",
      "Certificado de autenticidade",
    ],
  },
]
