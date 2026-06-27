// ============================================================
// MEDFIT — ARQUIVO CENTRAL DE CONTEÚDO
// Edite aqui todos os textos, links, vídeo e CTAs do site
// ============================================================

export const SITE = {
  name: "MedFit",
  fullName: "MedFit Saúde e Bem-estar",
  description: "Medicina Concierge, Performance, TAF e avaliação física em Belo Horizonte e Online.",
  whatsapp: "https://wa.me/5531995995428",
  instagram: "https://instagram.com/medfitsaude",
  instagramHandle: "@medfitsaude",
  email: "contato@medfit.med.br",
  address: {
    street: "Avenida Abrahão Caram, 620",
    complement: "Sala 203",
    neighborhood: "Pampulha",
    city: "Belo Horizonte",
    state: "MG",
    cep: "31275-000",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4451.1937536590885!2d-43.969530724016316!3d-19.861594536183574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6905ed747423b%3A0x839b3eccc775b2b0!2sAv.%20Ant%C3%B4nio%20Abrah%C3%A3o%20Caram%2C%20620%20-%20Pampulha%2C%20Belo%20Horizonte%20-%20MG%2C%2031275-000!5e1!3m2!1spt-BR!2sbr!4v1782315678283!5m2!1spt-BR!2sbr",
  },
  hours: [
    { days: "Segunda a Sexta", time: "17h às 22h" },
    { days: "Sábado",          time: "08h às 12h" },
  ],
};

export const NAV = {
  links: [
    { label: "Medicina",              href: "/medicina"     },
    { label: "Emagrecimento",  href: "/emagrecimento"     },
    { label: "Performance & TAF",       href: "/performance"},
    { label: "Teste de VO₂max",  href: "/vo2"    },
    { label: "Avaliações",       href: "/avaliacao"},  // ← editar nome e URL
  ],
  store: { href: "https://LINK_DA_LOJA_AQUI", label: "Loja" },  // ← substituir pelo link da loja
  cta: { label: "Agendar consulta", href: "/contato" },
};

export const HERO = {
  eyebrow: "Medicina com acompanhamento real",
  title: "Sua meta, nossa ciência.",
  titleAccent: "Conduta individualizada.",
  subtitle: "Avaliar antes de prescrever. Acompanhar para evoluir.",
  cta: {
    label: "Agendar pelo WhatsApp",
    href:  "https://wa.me/5531995995428",
  },
  floatingCards: [
    { label: "Avaliação clínica" },
    { label: "Emagrecimento"  },
    { label: "Avaliação Física"               },
    { label: "Performance"            },
  ],
};

// ─── VÍDEO ─────────────────────────────────────────────────
// Opção A (recomendado): colocar arquivo em /public/video/ e preencher localFile
// Opção B: preencher youtubeId com o ID do vídeo do YouTube
export const VIDEO = {
  eyebrow:     "Veja na prática",
  title:       "Faça o teste de VO₂Max na MedFit",
  description: "O teste de VO₂Max é um dos principais marcadores de saúde e condicionamento cardiorrespiratório. Na MedFit, a avaliação vai além, entregando também os valores de limiar 2, VAM, recuperação da frequência cardíaca e zonas de treino (Z1 a Z5), para orientar a prescrição, melhorar a performance e acompanhar sua evolução.",
  youtubeId:   "YOUTUBE_ID_AQUI",  // ← Opção B: ID do YouTube ex: "dQw4w9WgXcQ"
  localFile:   "https://res.cloudinary.com/dzecivnfx/video/upload/v1782493266/Fitcheck_dwyg8r.mp4",  // ← Cloudinary URL
};

// ─── SERVIÇOS (hub da homepage) ────────────────────────────
export const SERVICES = {
  eyebrow: "Serviços",
  title:   "O que a MedFit oferece",
  cards: [
    {
      title:       "Medicina Concierge",
      description: "Consulta, avaliação clínica e acompanhamento médico individualizado. Sem filas, com atenção real.",
      href:        "/medicina",
      featured:    true,
    },
    {
      title:       "Emagrecimento",
      description: "Protocolo baseado em dados — composição corporal, exercício e acompanhamento para resultados reais.",
      href:        "/emagrecimento",
      featured:    false,
    },
    {
      title:       "VO₂max e Avaliação Física",
      description: "Teste de esforço máximo, limiar anaeróbio, zonas de treinamento e composição corporal.",
      href:        "/avaliacao",
      featured:    false,
    },
    {
      title:       "TAF",
      description: "Preparação e avaliação para o Teste de Aptidão Física. Dados objetivos de força, resistência e desempenho.",
      href:        "/taf",
      featured:    false,
    },
    {
      title:       "Performance Esportiva",
      description: "Acompanhamento para atletas e praticantes que querem evoluir com mais controle e eficiência.",
      href:        "/performance",
      featured:    false,
    },
    {
      title:       "Prevenção de Lesões",
      description: "Avaliações e estratégias para reduzir riscos e melhorar a relação entre corpo, treino e rotina.",
      href:        "/prevencao",
      featured:    false,
    },
    {
      title:       "[Título do serviço]",           // ← editar título
      description: "[Descrição do serviço]",        // ← editar descrição
      href:        "/servico-extra",                // ← editar URL de destino
      featured:    false,
    },
  ],
};

// ─── MÉTODO ────────────────────────────────────────────────
export const METHOD = {
  eyebrow: "Método MedFit",
  title:   "Como funciona",
  body:    "Cada conduta parte de uma avaliação inicial e evolui com acompanhamento. Decisões melhores, individualizadas e com mais segurança.",
  steps: [
    {
      number:      "01",
      title:       "Escuta clínica e histórico",
      description: "Histórico de saúde, queixas, rotina e objetivos antes de qualquer medida.",
    },
    {
      number:      "02",
      title:       "Avaliação física e testes",
      description: "Composição corporal, força, VO₂max, mobilidade e capacidade funcional.",
    },
    {
      number:      "03",
      title:       "Plano individualizado",
      description: "Com os dados em mãos, construímos um plano orientado para seus objetivos e sua realidade.",
    },
    {
      number:      "04",
      title:       "Acompanhamento e reavaliação",
      description: "Reavaliações periódicas e ajustes conforme sua resposta ao longo do tempo.",
    },
  ],
};

// ─── DADOS + CTA ───────────────────────────────────────────
export const DATA_EVALUATION = {
  eyebrow: "Avaliação baseada em dados",
  title:   "Avaliar antes de prescrever. Acompanhar para evoluir.",
  body:    "A MedFit utiliza informações clínicas, físicas e funcionais para orientar decisões. Testes objetivos identificam força, assimetrias, limitações e evolução.",
  badges:  ["Força", "Mobilidade", "Composição corporal", "Funcionalidade", "Assimetria", "Condicionamento", "Evolução"],
};

export const REAL_FOLLOWUP = {
  eyebrow: "Acompanhamento real",
  title:   "Medicina com acompanhamento real.",
  body:    "Mais do que avaliar, a MedFit acompanha. O cuidado é construído com orientação, reavaliações e ajustes conforme sua rotina e seus objetivos.",
  cta: {
    label: "Quero ser acompanhado pela MedFit",
    href:  "https://wa.me/5531995995428",
  },
};

// ─── PÚBLICO-ALVO ──────────────────────────────────────────
export const AUDIENCE = {
  eyebrow:     "Para quem é",
  title:       "Do cuidado clínico à performance esportiva,",
  titleAccent: "o foco é entender seu corpo.",
  items: [
    "Pessoas que querem iniciar exercício com segurança",
    "Pessoas que sentem dor, cansaço ou perda de força",
    "Alunos que desejam acompanhamento mais próximo",
    "Atletas recreacionais",
    "Beach tennis, corrida, futebol, tênis, vôlei e natação",
    "Idosos que buscam autonomia e qualidade de vida",
    "Pessoas em retorno ao esporte ou ao treino",
  ],
};

// ─── FAQ ───────────────────────────────────────────────────
export const FAQ = {
  eyebrow: "Perguntas frequentes",
  title:   "Dúvidas comuns",
  items: [
    {
      question: "A MedFit é uma clínica médica ou um espaço de avaliação física?",
      answer:   "A MedFit integra medicina, avaliação física, exercício e acompanhamento. O diferencial está justamente na integração entre essas áreas.",
    },
    {
      question: "Preciso ser atleta para fazer avaliação?",
      answer:   "Não. O atendimento é indicado para público geral, idosos, praticantes de exercício e atletas.",
    },
    {
      question: "A avaliação serve para quem quer começar a treinar?",
      answer:   "Sim. Ela ajuda a iniciar com mais segurança e direcionamento.",
    },
    {
      question: "O que é o exame de VO₂max?",
      answer:   "É o teste de esforço máximo que mede a capacidade cardiorrespiratória, o limiar anaeróbio e as zonas de treinamento ideais para cada pessoa.",
    },
    {
      question: "O que é o TAF e como a MedFit ajuda?",
      answer:   "O TAF (Teste de Aptidão Física) é exigido em concursos militares e policiais. Na MedFit fazemos a avaliação e preparação com dados objetivos de força e resistência.",
    },
    {
      question: "Como faço para agendar?",
      answer:   "O agendamento é feito pelo WhatsApp. Nossa equipe irá orientar sobre as opções disponíveis.",
    },
  ],
};

// ─── LOCALIZAÇÃO ───────────────────────────────────────────
export const LOCATION = {
  eyebrow: "Localização",
  title:   "Atendimento em Belo Horizonte",
  body:    "Agende uma avaliação e entenda qual caminho faz mais sentido para seu objetivo.",
  cta: {
    whatsapp:  { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
    instagram: { label: "Instagram",             href: "https://instagram.com/medfitsaude" },
  },
};

// ─── CTA FINAL ─────────────────────────────────────────────
export const FINAL_CTA = {
  title: "Pronto para entender melhor seu corpo?",
  body:  "Agende uma avaliação na MedFit e dê o próximo passo com orientação, dados e acompanhamento.",
  cta: {
    label: "Agendar pelo WhatsApp",
    href:  "https://wa.me/5531995995428",
  },
};


// ─── TEXTOS DE INTERFACE (UI) ──────────────────────────────
// Textos fixos dos componentes — edite aqui sem tocar no código
export const UI = {
  hero: {
    imageLabel:   "Avaliação Clínica e Fisiológica",
    imageCaption: "Dados que orientam decisões",
  },
  services: {
    featuredBadge:  "Principal",
    learnMore:      "Saiba mais",
    countSuffix:    "áreas de atendimento",
  },
  video: {
    comingSoon: "Vídeo em breve",
  },
  location: {
    openMaps: "Ver no Google Maps",
  },
  footer: {
    colServices:      "Serviços",
    colInstitutional: "Institucional",
    colContact:       "Endereço",
    copyright:        "Todos os direitos reservados.",
  },
  whatsapp: {
    ariaLabel: "Agendar pelo WhatsApp",
  },
};

// ─── FOOTER ────────────────────────────────────────────────
export const FOOTER = {
  description: "Medicina, avaliação física e acompanhamento real. Cuidado individualizado em Belo Horizonte.",
  links: {
    servicos: [
      { label: "Medicina Concierge", href: "/medicina"     },
      { label: "Emagrecimento",      href: "/emagrecimento"},
      { label: "Performance & TAF",  href: "/performance"  },
      { label: "Teste de VO₂Max",   href: "/vo2"          },
      { label: "Avaliações",         href: "/avaliacao"    },
    ],
    institucional: [
      { label: "Início",        href: "/"                },
      { label: "Quem somos",    href: "/sobre-a-medfit"  },
      { label: "Contato",       href: "/contato"         },
    ],
  },
  legal: "MedFit Saúde e Bem-estar · Belo Horizonte, MG",
};


// ─── QUEM SOMOS (seção curta na home) ─────────────────────
export const QUEM_SOMOS_HOME = {
  eyebrow:  "Quem somos",
  title:    "Medicina, movimento e conduta individualizada.",
  body:     "A MedFit nasceu da união entre medicina e educação física, com o propósito de oferecer um cuidado mais completo, individualizado e baseado em ciência. Atuamos com avaliação clínica, avaliação física, prescrição e acompanhamento, de forma integrada ou independente, respeitando a necessidade de cada pessoa.",
  cta:      { label: "Conheça a MedFit", href: "/sobre-a-medfit" },
};

// ─── SOBRE A MEDFIT (subpágina /sobre-a-medfit) ────────────
export const SOBRE = {
  hero: {
    eyebrow:     "Sobre a MedFit",
    title:       "Sobre a MedFit",
    subtitle:    "Um projeto que une medicina, exercício físico e acompanhamento individualizado.",
    body:        "A MedFit nasceu de um propósito em comum: cuidar melhor de pessoas que buscam saúde, emagrecimento, performance e qualidade de vida. Mais do que uma clínica tradicional, somos um projeto profissional integrado, criado para transformar avaliação, ciência e acompanhamento em decisões mais seguras para cada pessoa.",
    image:       "",   // ← URL ou caminho da foto (ex: "/fotos/consultorio.jpg")
    imageAlt:    "Consultório MedFit",
  },

  historia: {
    eyebrow: "Nossa história",
    title:   "Como surgiu a MedFit",
    body:    "A MedFit foi idealizada pela Dra. Denise, médica pós-graduanda em Medicina do Esporte e Endocrinologia, e por um educador físico pós-graduando em Fisiologia do Exercício. A união entre essas áreas permite um olhar mais completo sobre o corpo, considerando saúde, metabolismo, composição corporal, condicionamento físico, força, rotina e objetivos individuais.",
    photo1:  { src: "", alt: "Equipe MedFit" },  // ← foto dos dois juntos: substituir src pelo caminho da imagem
  },

  atendimento: {
    eyebrow: "Como atendemos",
    title:   "Cuidado integrado ou independente.",
    body:    "Atendemos em consultório particular, com serviços que podem acontecer de forma compartilhada ou independente. Alguns pacientes são acompanhados pela medicina e pela educação física em conjunto, enquanto outros realizam apenas uma das especialidades, conforme sua necessidade. Em todos os casos, o cuidado é individualizado, baseado em avaliação e acompanhamento real.",
  },

  fotos: [
    { src: "", alt: "Consultório MedFit" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-1.jpg"
    { src: "", alt: "Espaço de avaliação" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-2.jpg"
    { src: "", alt: "Equipamentos MedFit" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-3.jpg"
  ],

  cta: {
    title:  "Avaliar antes de prescrever. Acompanhar para evoluir.",
    body:   "Esse é o princípio que guia a MedFit: entender cada pessoa com profundidade para oferecer decisões mais seguras, individualizadas e mensuráveis.",
    button: { label: "Agendar avaliação", href: "https://wa.me/5531995995428" },
  },
};
