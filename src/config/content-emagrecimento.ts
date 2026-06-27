// ============================================================
// EMAGRECIMENTO — Conteúdo da subpágina /emagrecimento
// Edite aqui todos os textos desta página
// ============================================================

export const EMAGRECIMENTO = {
  hero: {
    eyebrow:     "Emagrecimento",
    title:       "Perda de peso com dados.",
    titleAccent: "Sem achismo, sem dieta genérica.",
    description: "Um protocolo baseado em avaliação clínica, composição corporal e acompanhamento real. O objetivo não é apenas o número na balança — é a melhora da sua composição, da sua saúde e da sua qualidade de vida.",
    image:       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85&auto=format",
    imageAlt:    "Avaliação de composição corporal na MedFit",
    cta:         { label: "Agendar avaliação", href: "https://wa.me/5531995995428" },
  },

  features: {
    eyebrow: "Como trabalhamos",
    title:   "Emagrecimento baseado em avaliação.",
    body:    "Antes de qualquer conduta, avaliamos sua composição corporal, metabolismo e histórico clínico. Só assim é possível prescrever com segurança e eficiência.",
    items: [
      {
        title:       "Avaliação de composição corporal",
        description: "Bioimpedância e avaliação antropométrica para entender onde está sua gordura e sua massa muscular.",
      },
      {
        title:       "Avaliação clínica",
        description: "Investigação de causas secundárias de ganho de peso: hormônios, metabolismo, sono e inflamação.",
      },
      {
        title:       "Prescrição e acompanhamento",
        description: "Plano individualizado com exercício, orientação alimentar e farmacoterapia quando indicada, com reavaliações periódicas.",
      },
      {
        title:       "Reavaliação periódica",          // ← editar título
        description: "Monitoramento da evolução da composição corporal e ajuste das condutas conforme sua resposta ao protocolo.", // ← editar descrição
      },
    ],
  },

  // ─── SEÇÃO DE BENEFÍCIOS (após o protocolo) ────────────
  // Edite título, imagem e lista de itens livremente
  beneficios: {
    eyebrow:  "Farmacoterapia",                              // ← editar eyebrow
    title:    "Tirzepatida, Benefícios além do emagrecimento.", // ← editar título
    image:    "",                                            // ← ex: "/fotos/tirzepatida.jpg"
    imageAlt: "Tirzepatida",
    items: [
      "Melhora no controle da glicose (açúcar no sangue)",   // ← editar itens
      "Ajuda no tratamento da Lipedema",
      "Redução da gordura no fígado",
      "Redução da gordura visceral",
      "Auxílio no controle da pressão arterial",
      "Redução dos níveis de colesterol e triglicérides",
      "Diminuição da inflamação sistêmica",
      "Proteção cardiovascular em pacientes de risco",
    ],
  },

  process: {
    eyebrow: "Protocolo",
    title:   "Do diagnóstico ao resultado.",
    steps: [
      {
        number:      "01",
        title:       "Avaliação inicial completa",
        description: "Composição corporal, histórico clínico, exames e hábitos de vida.",
      },
      {
        number:      "02",
        title:       "Diagnóstico e plano",
        description: "Identificação das causas do sobrepeso e elaboração de protocolo individualizado.",
      },
      {
        number:      "03",
        title:       "Início do protocolo",
        description: "Implementação das condutas: exercício, alimentação e medicação quando indicada.",
      },
      {
        number:      "04",
        title:       "Acompanhamento e reavaliação",
        description: "Monitoramento periódico da composição corporal e ajuste de condutas.",
      },
    ],
  },

  cta: {
    title:  "Pronto para emagrecer com método e acompanhamento real?",
    body:   "Agende sua avaliação e entenda o que está impedindo seu progresso — com dados, não com suposições.",
    button: { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
