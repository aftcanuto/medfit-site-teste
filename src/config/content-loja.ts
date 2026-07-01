// ============================================================
// LOJA — Conteúdo da subpágina /loja
// Edite aqui todos os textos e produtos desta página
// ============================================================

export const LOJA = {
  hero: {
    eyebrow:     "Loja MedFit",
    title:       "Serviços e pacotes.",
    titleAccent: "Invista na sua saúde.",
    description: "Escolha o serviço ou pacote ideal para o seu objetivo. Todos os produtos incluem atendimento individualizado e acompanhamento real da equipe MedFit.",
  },

  categories: [
    {
      label: "Consultas",
      slug:  "consultas",
    },
    {
      label: "Avaliações",
      slug:  "avaliacoes",
    },
    {
      label: "Pacotes",
      slug:  "pacotes",
    },
  ],

  products: [
    // ─── CONSULTAS ────────────────────────────────────────
    {
      category:    "consultas",
      title:       "Consulta Medicina Concierge",
      description: "Consulta médica completa com avaliação clínica, solicitação de exames e orientações individualizadas.",
      price:       "R$ [valor]",       // ← editar preço
      duration:    "60–90 min",
      href:        "https://wa.me/5531995995428",
      featured:    true,
    },
    {
      category:    "consultas",
      title:       "Retorno / Acompanhamento",
      description: "Consulta de retorno para revisão de exames, ajuste de condutas e continuidade do acompanhamento.",
      price:       "R$ [valor]",
      duration:    "30–45 min",
      href:        "https://wa.me/5531995995428",
      featured:    false,
    },

    // ─── AVALIAÇÕES ───────────────────────────────────────
    {
      category:    "avaliacoes",
      title:       "Teste de VO₂max",
      description: "Ergoespirometria com análise de VO₂max, limiar 2, VAM e zonas de treinamento Z1–Z5.",
      price:       "R$ [valor]",
      duration:    "60 min",
      href:        "https://wa.me/5531995995428",
      featured:    false,
    },
    {
      category:    "avaliacoes",
      title:       "Avaliação Física Completa",
      description: "Composição corporal, dinamometria, mobilidade e capacidade funcional em uma única sessão.",
      price:       "R$ [valor]",
      duration:    "90 min",
      href:        "https://wa.me/5531995995428",
      featured:    false,
    },
    {
      category:    "avaliacoes",
      title:       "Avaliação TAF",
      description: "Simulação e avaliação específica para os testes exigidos em concursos militares e policiais.",
      price:       "R$ [valor]",
      duration:    "60 min",
      href:        "https://wa.me/5531995995428",
      featured:    false,
    },

    // ─── PACOTES ──────────────────────────────────────────
    {
      category:    "pacotes",
      title:       "Pacote Emagrecimento",
      description: "Avaliação clínica + composição corporal + 3 retornos mensais de acompanhamento.",
      price:       "R$ [valor]",
      duration:    "3 meses",
      href:        "https://wa.me/5531995995428",
      featured:    true,
    },
    {
      category:    "pacotes",
      title:       "Pacote Performance",
      description: "VO₂max + avaliação de força + plano de periodização + 2 reavaliações.",
      price:       "R$ [valor]",
      duration:    "2 meses",
      href:        "https://wa.me/5531995995428",
      featured:    false,
    },
  ],

  cta: {
    title:  "Dúvida sobre qual serviço escolher?",
    body:   "Entre em contato pelo WhatsApp e nossa equipe vai orientar sobre o melhor caminho para o seu objetivo.",
    button: { label: "Falar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
