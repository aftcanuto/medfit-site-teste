// ============================================================
// EMAGRECIMENTO — Conteúdo da subpágina /emagrecimento
// Edite aqui todos os textos desta página
// ============================================================

export const EMAGRECIMENTO = {
  hero: {
    eyebrow:     "Emagrecimento",
    title:       "Perda de peso com dados.",
    titleAccent: "Com estratégia e acompanhamento real.",
    description: "Um protocolo baseado em avaliação clínica, composição corporal e acompanhamento real. O objetivo não é apenas o número na balança — é a melhora da sua composição, da sua saúde e da sua qualidade de vida.",
    image:       "/fotos/emagrecimento.jpg",
    imageAlt:    "Avaliação de composição corporal na MedFit",
    cta:         { label: "Agendar avaliação", href: "https://wa.me/5531995995428" },
    imagePosition: "center 20%",  // ← ajusta enquadramento no mobile
  },

  features: {
    eyebrow: "Como trabalhamos",
    title:   "Emagrecimento com estratégia e segurança.",
    body:    "Na MedFit, a sua saúde é o pilar central, cada conduta é individualizada e ajustada conforme sua resposta e evolução.",
    items: [
      {
        title:       "Avaliação da composição corporal",
        description: "Exame de bioimpedância e avaliação antropométrica para entender o seu estado atual.",
        foto:        "/fotos/avabio.png",  // ← ex: "/fotos/composicao.jpg"
      },
      {
        title:       "Avaliação clínica",
        description: "Investigação de causas secundárias de ganho de peso: hormônios, metabolismo, sono e inflamação.",
        foto:        "/fotos/avaclinica.png",  // ← ex: "/fotos/clinica.jpg"
      },
      {
        title:       "Prescrição e acompanhamento",
        description: "Plano individualizado com farmacoterapia quando indicada, com reavaliações periódicas.",
        foto:        "/fotos/plano.png",  // ← ex: "/fotos/prescricao.jpg"
      },
      {
        title:       "Reavaliação estratégica",
        description: "Monitoramento da evolução da composição corporal e ajustes das condutas conforme sua resposta ao tratamento.",
        foto:        "/fotos/reav.png",  // ← ex: "/fotos/reav.jpg"
      },
    ],
  },

  // ─── SEÇÃO DE BENEFÍCIOS (após o protocolo) ────────────
  // Edite título, imagem e lista de itens livremente
  beneficios: {
    eyebrow:  "Farmacoterapia",                              // ← editar eyebrow
    title:    "Tirzepatida, Benefícios além do emagrecimento.", // ← editar título
    image:    "/fotos/tirze.jpg",                                            // ← ex: "/fotos/tirzepatida.jpg"
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
        description: "Implementação das condutas e medicação quando indicada.",
      },
      {
        number:      "04",
        title:       "Acompanhamento e reavaliação",
        description: "Monitoramento periódico da composição corporal e ajustes estratégicos.",
      },
    ],
  },

  cta: {
    title:  "Pronto para emagrecer com método e acompanhamento real?",
    body:   "Agende sua avaliação e entenda o que precisa ser feito.",
    button: { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
