// ============================================================
// AVALIAÇÕES — Conteúdo da subpágina /avaliacao
// Edite aqui todos os textos desta página
// ============================================================

export const AVALIACAO = {
  hero: {
    eyebrow:     "Avaliações",
    title:       "Entenda seu corpo antes de agir.",
    titleAccent: "Dados que orientam decisões.",
    description: "A MedFit oferece um conjunto completo de avaliações físicas, funcionais e clínicas para mapear seu estado atual, identificar limitações e construir um plano individualizado baseado em evidências.",
    image:       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format",
    imageAlt:    "Avaliação física completa na MedFit",
    cta:         { label: "Agendar avaliação", href: "https://wa.me/5531995995428" },
  },

  features: {
    eyebrow: "Avaliações disponíveis",
    title:   "Uma avaliação para cada objetivo.",
    body:    "Cada avaliação gera dados concretos sobre seu corpo — base para condutas mais seguras, eficientes e individualizadas.",
    items: [
      {
        title:       "Composição corporal",
        description: "Bioimpedância e antropometria para análise de gordura, massa muscular e distribuição corporal.",
        foto:        "",  // ← ex: "/fotos/bioimpedancia.jpg"
      },
      {
        title:       "Avaliação funcional",
        description: "Testes de mobilidade, equilíbrio, coordenação e padrões de movimento.",
        foto:        "",  // ← ex: "/fotos/funcional.jpg"
      },
      {
        title:       "Dinamometria",
        description: "Avaliação objetiva de força muscular, simetria bilateral e índices de fadiga.",
        foto:        "",  // ← ex: "/fotos/dinamometria.jpg"
      },
      {
        title:       "Aptidão cardiorrespiratória",
        description: "Teste de VO₂max, limiar anaeróbio e capacidade aeróbica com ergoespirometria.",
        foto:        "",  // ← ex: "/fotos/vo2.jpg"
      },
      {
        title:       "Avaliação postural",
        description: "Análise de postura estática e dinâmica para identificar desvios e compensações.",
        foto:        "",  // ← ex: "/fotos/postural.jpg"
      },
      {
        title:       "Avaliação clínica integrada",
        description: "Combinação de dados físicos e clínicos para uma visão completa do seu estado de saúde.",
        foto:        "",  // ← ex: "/fotos/clinica.jpg"
      },
      {
        title:       "[Avaliação 7]",          // ← editar título
        description: "[Descrição da avaliação]", // ← editar descrição
        foto:        "",                          // ← ex: "/fotos/avaliacao7.jpg"
      },
      {
        title:       "[Avaliação 8]",          // ← editar título
        description: "[Descrição da avaliação]", // ← editar descrição
        foto:        "",                          // ← ex: "/fotos/avaliacao8.jpg"
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
