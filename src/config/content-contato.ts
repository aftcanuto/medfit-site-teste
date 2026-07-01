// ============================================================
// CONTATO — Conteúdo da subpágina /contato
// Edite aqui todos os textos desta página
// ============================================================

export const CONTATO = {
  hero: {
    eyebrow:  "Contato",
    title:    "Fale com a MedFit.",
    subtitle: "Agendamentos, dúvidas e informações.",
    body:     "O atendimento é feito de forma individualizada. Entre em contato pelo WhatsApp ou Instagram e nossa equipe vai orientar sobre as opções disponíveis para o seu objetivo.",
  },

  card: {
    titulo:    "Onde nos encontrar",

    whatsapp: {
      label:  "WhatsApp",
      numero: "(31) 99599-5428",                     // ← editar número visível
      href:   "https://wa.me/5531995995428",          // ← editar link
    },

    instagram: {
      label:  "Instagram",
      handle: "@medfitsaude",                         // ← editar handle
      href:   "https://instagram.com/medfitsaude",    // ← editar link
    },

    email: {
      label:   "E-mail",
      address: "contato@medfit.med.br",               // ← editar e-mail
      href:    "mailto:contato@medfit.med.br",
    },

    endereco: {
      label:      "Endereço",
      logradouro: "Av. Antônio Abrahão Caram, 620",  // ← editar
      complemento:"Sala 203 — Pampulha",
      cidade:     "Belo Horizonte, MG",
      mapsHref:   "https://maps.google.com/?q=Av.+Antônio+Abrahão+Caram,+620,+Pampulha,+Belo+Horizonte",
    },

    horarios: {
      label: "Horários de atendimento",
      items: [
        { dias: "Segunda a Sexta", hora: "17h às 22h" }, // ← editar
        { dias: "Sábado",          hora: "08h às 12h" },
      ],
    },
  },

  cta: {
    label: "Agendar pelo WhatsApp",
    href:  "https://wa.me/5531995995428",             // ← editar
  },
};
