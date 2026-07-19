// ============================================================
// AVALIAÇÕES — Conteúdo da subpágina /avaliacao
// Edite aqui todos os textos desta página
// ============================================================

export const AVALIACAO = {
  hero: {
    eyebrow:     "Avaliações",
    title:       "Entenda seu corpo antes de agir.",
    titleAccent: "Dados que orientam decisões.",
    description: "A MedFit oferece um conjunto completo de avaliações clínicas, físicas e funcionais para mapear seu estado atual, identificar limitações e construir um plano individualizado.",
    image:       "/fotos/ava1.jpg",
    imageAlt:    "Avaliação física completa na MedFit",
    cta:         { label: "Agendar avaliação", href: "https://wa.me/5531995995428" },
    imagePosition: "center 35%",  // ← ajusta enquadramento no mobile
  },

  // ─── AVALIAÇÕES POR OBJETIVO (logo após o hero) ────────
  objetivos: {
    eyebrow: "Por onde começar",
    title:   "Avaliações por objetivo.",
    body:    "Cada momento pede uma avaliação diferente. Identifique o seu objetivo e veja por onde começar.",
    items: [
      "Avaliação completa premium",     // ← editar itens
      "Para emagrecimento",
      "Para corrida",
      "Para performance",
      "Para começar a treinar",
      "Para idosos",
      "Para retorno ao esporte",
      "Para TAF",
    ],
  },

  features: {
    eyebrow: "Avaliações disponíveis",
    title:   "Equipamentos e tecnologias que ampliam a precisão dos resultados",
    body:    "Equipamentos modernos aliados ao conhecimento clínico para gerar dados confiáveis e condutas individualizadas.",
    items: [
      {
        title:       "Avaliação clínica esportiva",
        description: "Objetiva traçar um perfil completo da saúde e da capacidade funcional. Busca identificar riscos cardiovasculares, prevenir lesões e otimizar o desempenho esportivo.",
        foto:        "",  // ← ex: "/fotos/clinica.jpg"
        icon:        "stethoscope",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Avaliação postural",
        description: "Análise do alinhamento corporal para identificar desvios e as compensações musculoesqueléticas.",
        foto:        "",  // ← ex: "/fotos/postural.jpg"
        icon:        "scan",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Termografia clínica",
        description: "Mapeamento térmico infravermelho para identificar assimetrias, sinais de inflamação e resposta muscular ao esforço.",
        foto:        "",  // ← ex: "/fotos/termografia.jpg"
        icon:        "thermometer",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Composição corporal",
        description: "Antropometria e bioimpedância para medir as dimensões, proporções físicas e composição corporal.",
        foto:        "",  // ← ex: "/fotos/bioimpedancia.jpg"
        icon:        "scale",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Flexibilidade",
        description: "Mensuração da amplitude de movimento, base para prevenção de lesões e otimização do desempenho.",
        foto:        "",  // ← ex: "/fotos/funcional.jpg"
        icon:        "person",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Força",
        description: "Avaliação objetiva de força muscular e simetria bilateral através da dinamometria isométrica.",
        foto:        "",  // ← ex: "/fotos/dinamometria.jpg"
        icon:        "gauge",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Aptidão cardiorrespiratória",
        description: "Teste de VO₂max, limiar anaeróbio e recuperação de frequência cardíaca com ventilometria esportiva.",
        foto:        "",  // ← ex: "/fotos/vo2.jpg"
        icon:        "heart",  // ← ícone exibido enquanto não há foto
      },
      {
        title:       "Biomecânica da corrida",
        description: "Utilizando tecnologia de análise cinemática, mapeamos o ciclo da sua passada para identificar desequilíbrios, assimetrias e desvios importantes.",
        foto:        "",  // ← ex: "/fotos/flexibilidade.jpg"
        icon:        "ruler",  // ← ícone exibido enquanto não há foto
      },
    ],
  },

  process: {
    eyebrow: "Como funciona",
    title:   "Da coleta de dados ao plano de ação.",
    steps: [
      {
        number:      "01",
        title:       "Escolha suas avaliações",
        description: "Selecionamos em conjunto as avaliações mais relevantes para seus objetivos.",
      },
      {
        number:      "02",
        title:       "Coleta de dados",
        description: "Aplicação dos testes em ambiente clínico controlado, com equipamentos calibrados.",
      },
      {
        number:      "03",
        title:       "Análise e interpretação",
        description: "Os dados são analisados e contextualizados com seu histórico clínico e objetivos.",
      },
      {
        number:      "04",
        title:       "Relatório e plano",
        description: "Entrega de relatório detalhado com condutas e recomendações individualizadas.",
      },
    ],
  },

  cta: {
    title:  "Pronto para conhecer seu corpo com profundidade?",
    body:   "Agende sua avaliação e tenha dados concretos para tomar decisões melhores sobre saúde, treino e bem-estar.",
    button: { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
