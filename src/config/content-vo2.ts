// ============================================================
// TESTE DE VO₂MAX — Conteúdo da subpágina /vo2
// Edite aqui todos os textos desta página
// ============================================================

export const VO2 = {
  hero: {
    eyebrow:     "Teste de VO₂Max",
    title:       "Conheça seu limite cardiorrespiratório.",
    titleAccent: "Treine nas zonas certas.",
    description: "O teste de VO₂max é o padrão-ouro para avaliar a capacidade aeróbica. Na MedFit, o exame vai além: identificamos o limiar anaeróbio, VAM, zonas de treinamento e curva de recuperação para uma prescrição precisa.",
    image:       "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=85&auto=format",
    imageAlt:    "Teste de VO₂max com máscara de ventilometria na MedFit",
    cta:         { label: "Agendar teste", href: "https://wa.me/5531995995428" },
  },

  features: {
    eyebrow: "O que o exame entrega",
    title:   "Muito mais do que um número.",
    body:    "O relatório do teste de VO₂max na MedFit inclui todos os parâmetros necessários para uma prescrição de treino precisa e segura.",
    items: [
      {
        title:       "VO₂max",
        description: "Consumo máximo de oxigênio — o indicador mais preciso de aptidão cardiorrespiratória.",
      },
      {
        title:       "Limiar anaeróbio (Limiar 2)",
        description: "Intensidade máxima sustentável — essencial para corredores, ciclistas e triatletas.",
      },
      {
        title:       "VAM — Velocidade Aeróbica Máxima",
        description: "Base para prescrição de treinos intervalados de alta intensidade.",
      },
      {
        title:       "Zonas de treinamento (Z1 a Z5)",
        description: "Frequências cardíacas ideais para cada tipo de estímulo: base, tempo, VO₂ e sprint.",
      },
      {
        title:       "Curva de lactato estimada",
        description: "Análise do comportamento metabólico ao longo do esforço progressivo.",
      },
      {
        title:       "Recuperação da FC",
        description: "Indicador de aptidão autonômica cardíaca e eficiência do sistema parassimpático.",
      },
    ],
  },

  process: {
    eyebrow: "Como é o exame",
    title:   "Protocolo do teste de VO₂max.",
    steps: [
      {
        number:      "01",
        title:       "Preparação",
        description: "Jejum leve, roupas confortáveis. Sem treino intenso nas 24h anteriores.",
      },
      {
        number:      "02",
        title:       "Equipamento e calibração",
        description: "Colocação da máscara de ventilometria e calibração do ergoespirômetro.",
      },
      {
        number:      "03",
        title:       "Teste progressivo",
        description: "Protocolo em esteira ou cicloergômetro com aumento gradual de intensidade até esforço máximo.",
      },
      {
        number:      "04",
        title:       "Análise e relatório",
        description: "Entrega do relatório completo com todos os parâmetros e prescrição das zonas de treino.",
      },
    ],
  },

  // ─── RELATÓRIO (card de exemplo na página) ────────────
  // Adicione quantas fotos quiser — o card faz carrossel automático
  // Coloque os arquivos em public/relatorio/ e liste os caminhos abaixo
  relatorio: {
    label:  "Exemplo de relatório",
    title:  "Veja como é o laudo do exame",
    fotos: [
      "",  // ← ex: "/relatorio/pagina-1.jpg"
      "",  // ← ex: "/relatorio/pagina-2.jpg"
      "",  // ← ex: "/relatorio/pagina-3.jpg"
      // adicione quantas linhas precisar
    ],
  },

  cta: {
    title:  "Descubra seu VO₂max e treine de forma mais inteligente.",
    body:   "Agende o exame na MedFit e tenha os dados que orientam um treino mais eficiente, seguro e individualizado.",
    button: { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
