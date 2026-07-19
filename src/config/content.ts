// ============================================================
// MEDFIT — ARQUIVO CENTRAL DE CONTEÚDO
// Edite aqui todos os textos, links, vídeo e CTAs do site
// ============================================================

export const SITE = {
  name: "MedFit",
  fullName: "MedFit Saúde e Bem-estar",
  url: "https://medfit-site-teste.vercel.app",  // ← quando o domínio oficial entrar no ar, trocar por "https://medfit.med.br"
  description: "Medicina (clínica médica, endocrinologia e medicina do esporte), emagrecimento, performance, TAF, teste de VO₂max e avaliação física em Belo Horizonte e Online.",
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
    { days: "Segunda a Sexta", time: "Mediante agendamento a partir das 17h" },
    { days: "Sábado e Domingo", time: "Mediante agendamento de 08h às 12h" },
  ],
};

export const NAV = {
  links: [
    { label: "Medicina",              href: "/medicina"     },
    { label: "Emagrecimento",  href: "/emagrecimento"     },
    { label: "Performance & TAF",       href: "/performance"},
    { label: "Teste de VO₂máx",  href: "/vo2"    },
    { label: "Avaliações",       href: "/avaliacao"},  // ← editar nome e URL
  ],
  store: { href: "https://avaliacao.medfit.med.br/catalogo", label: "Serviços MedFit" },
  cta: { label: "Agendar consulta", href: "/contato" },
};

export const HERO = {
  eyebrow: "Medicina com acompanhamento real",
  title: "Sua meta, nossa ciência.",
  titleAccent: "Conduta individualizada.",
  subtitle: "Avaliar para compreender. Acompanhar para transformar.",
  cta: {
    label: "Agendar pelo WhatsApp",
    href:  "https://wa.me/5531995995428",
  },
  imagePosition: "center 25%",  // ← enquadramento da foto no mobile da home
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
  title:       "Faça o teste de VO₂máx na MedFit",
  description: "O teste de VO₂máx é um dos principais marcadores de saúde e condicionamento cardiorrespiratório. Na MedFit, a avaliação vai além, entregando também os valores de limiar 2, VAM, recuperação da frequência cardíaca e zonas de treino (Z1 a Z5), para orientar a prescrição, melhorar a performance e acompanhar sua evolução.",
  youtubeId:   "YOUTUBE_ID_AQUI",  // ← Opção B: ID do YouTube ex: "dQw4w9WgXcQ"
  localFile:   "https://res.cloudinary.com/dzecivnfx/video/upload/v1782493266/Fitcheck_dwyg8r.mp4",  // ← Cloudinary URL
};

// ─── SERVIÇOS (hub da homepage) ────────────────────────────
export const SERVICES = {
  eyebrow: "Serviços",
  title:   "O que a MedFit oferece",
  cards: [
    {
      title:       "Medicina",
      description: "Consulta, avaliação clínica e acompanhamento médico individualizado.",
      href:        "/medicina",
      featured:    true,
    },
    {
      title:       "Emagrecimento",
      description: "Avaliação e tratamento médico do sobrepeso e da obesidade, considerando os fatores clínicos, metabólicos, hormonais, comportamentais e relacionados ao estilo de vida que podem influenciar o peso e a resposta ao tratamento.",
      href:        "/emagrecimento",
      featured:    false,
    },
    {
      title:       "Performance Esportiva",
      description: "Consultoria e assessoria com avaliações e testes específicos para obter dados individualizados e direcionar o treinamento afim de otimizar o desempenho esportivo.",
      href:        "/performance",
      featured:    false,
    },
    {
      title:       "TAF",
      description: "Com experiência de 25 anos no meio militar, avaliamos as exigências do edital e a condição atual de cada candidato para direcionar o treinamento, corrigir limitações e acompanhar sua evolução até a prova.",
      href:        "/performance",
      featured:    false,
    },
    {
      title:       "Teste de VO₂máx",
      description: "Teste de esforço máximo com ventilometria esportiva: obtenha seu VO₂máx, limiar anaeróbio, VAM, recuperação da FC e zonas de treinamento individualizadas.",
      href:        "/vo2",
      featured:    false,
    },
    {
      title:       "Avaliações Físicas e Clínicas",
      description: "Uma avaliação integrada para compreender sua saúde, capacidade física, composição corporal, força, mobilidade e condicionamento. ",
      href:        "/avaliacao",
      featured:    false,
    },
    {
      title:       "Avaliação biomecânica da corrida",
      description: "Análise cinemática da corrida para observar o ciclo da passada, assimetrias e o padrão de movimento. Os dados podem orientar ajustes técnicos, o planejamento do treinamento e condutas relacionadas às necessidades de cada corredor.",
      href:        "/avaliacao",
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
      description: "Composição corporal, força, VO₂máx, mobilidade e capacidade funcional.",
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
      question: "A MedFit é uma clínica médica?",
      answer:   "A MedFit é uma empresa de saúde que reúne serviços médicos, avaliações físicas e acompanhamento do exercício. Cada área mantém sua responsabilidade profissional, mas pode trabalhar de forma integrada quando isso fizer sentido para o paciente.",
    },
    {
      question: "Preciso ser atleta para fazer avaliação?",
      answer:   "Não. A avaliação é o ponto de partida essencial para qualquer evolução, seja você um iniciante ou um atleta de alto rendimento. Através dela, mapeamos suas condições reais para que você comece ou ajuste seus treinos com máxima segurança e eficiência.",
    },
    {
      question: "O tratamento de emagrecimento sempre envolve medicação?",
      answer:   "Não. O tratamento é definido após avaliação clínica individualizada. Medicamentos podem ser considerados quando houver indicação médica, mas fazem parte de uma estratégia mais ampla que inclui hábitos, composição corporal, saúde metabólica, atividade física e acompanhamento.",
    },
    {
      question: "O que é o exame de VO₂máx?",
      answer:   "É um teste de esforço máximo realizado com análise de gases (ventilometria). Ele mede com precisão científica a sua capacidade cardiorrespiratória e os seus limiares metabólicos, servindo para individualizar as suas zonas de treino.",
    },
    {
      question: "O que é o TAF e como a MedFit ajuda?",
      answer:   "O TAF (Teste de Aptidão Física) é a etapa eliminatória e classificatória de testes físicos em concursos públicos. Na MedFit, a preparação é liderada por um profissional com 25 anos de experiência militar. Nós realizamos a análise do seu edital, anamnese e testes específicos para coletar seus dados individualizados. A partir dos resultados, direcionamos o treinamento para as exigências do edital, priorizamos os pontos que precisam evoluir e acompanhamos sua preparação até a prova.",
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
  title:   "Atendimento em Belo Horizonte e online",
  body:    "Agende uma avaliação e entenda, com clareza, qual caminho faz sentido para sua saúde e seus objetivos.",
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
      { label: "Medicina", href: "/medicina"     },
      { label: "Emagrecimento",      href: "/emagrecimento"},
      { label: "Performance & TAF",  href: "/performance"  },
      { label: "Teste de VO₂máx",   href: "/vo2"          },
      { label: "Avaliações",         href: "/avaliacao"    },
    ],
    institucional: [
      { label: "Início",        href: "/"                },
      { label: "Quem somos",    href: "/sobre-a-medfit"  },
      { label: "Contato",       href: "/contato"         },
      { label: "Serviços MedFit", href: "https://avaliacao.medfit.med.br/catalogo" },
    ],
  },
  legal: "MedFit Saúde e Bem-estar · Belo Horizonte, MG",
  responsavelTecnico: "Responsável técnica: Dra. Denise Nunes Lacerda — CRM-MG 109474",  // ← editar responsável técnico
};


// ─── QUEM SOMOS (seção curta na home) ─────────────────────
export const QUEM_SOMOS_HOME = {
  eyebrow:  "Quem somos",
  title:    "Medicina, movimento e conduta individualizada.",
  body:     "A MedFit nasceu da convicção de Denise e André de que medicina e movimento não devem caminhar separados. Unindo conhecimento médico, fisiologia do exercício, tecnologia e acompanhamento, criamos uma forma mais completa e humana de cuidar da saúde.",
  cta:      { label: "Conheça a MedFit", href: "/sobre-a-medfit" },
};

// ─── SOBRE A MEDFIT (subpágina /sobre-a-medfit) ────────────
export const SOBRE = {
  hero: {
    eyebrow:     "Nossa essência",
    title:       "A saúde que a gente acredita",
    subtitle:    "Clareza também é cuidado",
    body:        `Acreditamos que o paciente não deve sair de um atendimento apenas com uma receita, um exame ou uma planilha. Ele precisa compreender o que foi avaliado, o que os resultados significam, por que determinada estratégia foi escolhida e qual é o seu papel no processo.

Por isso, transformamos informações clínicas e físicas em orientações claras, aplicáveis e acompanhadas ao longo do tempo.`,
    image:       "/fotos/casalmed.jpg",   // ← URL ou caminho da foto
    imagePosition: "center 20%",              // ← enquadramento no mobile (ex: "/fotos/consultorio.jpg")
    imageAlt:    "Consultório MedFit",
  },

  historia: {
    eyebrow: "Sobre a MedFit",
    title:   "Como surgiu a MedFit",
    body:    `A MedFit foi idealizada pelo casal Denise e André a partir de uma inquietação em comum: muitas pessoas recebem diagnósticos, prescrições e planos de treinamento sem compreender verdadeiramente o que está acontecendo com sua saúde ou por que determinada conduta foi indicada.

Denise é médica, com formação continuada em Endocrinologia e Medicina do Esporte. André é educador físico, com formação continuada em Fisiologia do Exercício. A união desses conhecimentos permite observar cada pessoa de maneira mais ampla, conectando saúde clínica, capacidade física, rotina, objetivos e movimento.`,
    photo1:  { src: "/fotos/casalmed1.jpg", alt: "Equipe MedFit", imagePosition: "center 20%" },  // ← imagePosition ajusta enquadramento
  },

  atendimento: {
    eyebrow: "Como atendemos",
    title:   "Cuidado integrado ou independente.",
    body:    "Atendemos de forma presencial e online, com serviços que podem acontecer de forma compartilhada ou independente. Alguns pacientes são acompanhados pela medicina e pela educação física de forma integrada, enquanto outros utilizam apenas um dos serviços, conforme sua necessidade. Em todos os casos, o cuidado é individualizado, baseado em avaliação e acompanhamento real.",
  },

  fotos: [
    { src: "/fotos/c3.jpg", alt: "Consultório MedFit" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-1.jpg"
    { src: "/fotos/c1.jpg", alt: "Espaço de avaliação" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-2.jpg"
    { src: "/fotos/c4.jpg", alt: "Equipamentos MedFit" },      // ← substituir pelo caminho da foto ex: "/fotos/consultorio-3.jpg"
  ],

  cta: {
    title:  "Resultados começam com avaliação. Permanecem com acompanhamento.",
    body:   "Entender cada pessoa com profundidade para oferecer decisões mais seguras, individualizadas e mensuráveis.",
    button: { label: "Agendar atendimento", href: "https://wa.me/5531995995428" },
  },
};
