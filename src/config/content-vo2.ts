// ============================================================
// TESTE DE VO₂MAX — Conteúdo da subpágina /vo2
// Edite aqui todos os textos desta página
// ============================================================

export const VO2 = {
  hero: {
    eyebrow:     "Teste de VO₂Max com ventilometria",
    title:       "Performance começa no diagnóstico.",
    titleAccent: "Avalie, entenda, evolua.",
    description: "Mais do que medir o VO₂máx, identificamos seus limiares ventilatórios, zonas individuais de treinamento, velocidade aeróbica máxima (VAM), eficiência cardiorrespiratória e recuperação da FC, permitindo uma prescrição totalmente personalizada.",
    image:       "/fotos/vo2.png",
    imageAlt:    "Teste de VO₂max com máscara de ventilometria na MedFit",
    cta:         { label: "Agendar teste", href: "https://wa.me/5531995995428" },
    imagePosition: "center 10%",  // ← ajusta enquadramento no mobile
  },

  features: {
    eyebrow: "O que o exame entrega",
    title:   "Muito mais do que um número.",
    body:    "O relatório do teste de VO₂max na MedFit inclui todos os parâmetros necessários para uma prescrição de treino precisa e segura.",
    items: [
      {
        title:       "VO₂max — Volume Máximo de Oxigênio",
        description: "Importância: O VO2 máx é um fator limitante do desempenho em esportes de resistência. Melhorar o VO2 máx aumenta a capacidade do atleta de realizar exercícios aeróbicos intensos por mais tempo.",
      },
      {
        title:       "Limiar anaeróbio (Limiar 2)",
        description: "Importância: Conhecer o Limiar 2 é crucial para determinar a intensidade ideal de treinamento de resistência. Treinar próximo ao Limiar 2 melhora a capacidade do corpo de sustentar esforços prolongados, enquanto treinar acima dele pode levar ao overtraining.",
      },
      {
        title:       "VAM — Velocidade Aeróbica Máxima",
        description: "Importância: A VAM é um excelente indicador de desempenho em esportes de resistência. Melhorar a VAM permite que o atleta corra ou nade mais rápido por mais tempo, aumentando sua eficiência e resistência.",
      },
      {
        title:       "Zonas de treinamento (Z1 a Z5)",
        description: "Importância: Treinar dentro das zonas ideais garante que o atleta esteja trabalhando na intensidade correta para alcançar seus objetivos. Isso otimiza o desenvolvimento de resistência, força, velocidade e outras qualidades físicas, além de minimizar o risco de lesões e overtraining.",
      },
      {
        title:       "Consumo energético",
        description: "Importância: Compreender a contribuição energética durante o exercício permite que o treinamento seja direcionado para o desenvolvimento dos sistemas energéticos mais relevantes para a modalidade esportiva. Isso otimiza a produção de energia e melhora o desempenho em situações específicas.",
      },
      {
        title:       "Recuperação da FC",
        description: "Importância: Monitorar a recuperação cardiovascular ajuda a determinar os intervalos de descanso adequados entre os treinos e a prevenir o overtraining. Além disso, uma recuperação lenta pode ser um sinal de alerta para problemas de saúde cardiovascular.",
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
        title:       "Equipamento e exame",
        description: "Colocação da máscara de ventilometria e explicação do exame.",
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
    label:  "Modelo do relatório",
    title:  "Veja como é o laudo do exame",
    fotos: [
      "/relatorio/1.png",  // ← ex: "/relatorio/pagina-1.png"
      "/relatorio/2.png",  // ← ex: "/relatorio/pagina-2.jpg"
      "/relatorio/3.png",  // ← ex: "/relatorio/pagina-3.jpg"
      // adicione quantas linhas precisar
    ],
  },

  cta: {
    title:  "Descubra suas zonas e treine de forma mais inteligênte.",
    body:   "Agende o exame na MedFit e tenha os dados que orientam um treino mais eficiente, seguro e individualizado.",
    button: { label: "Agendar pelo WhatsApp", href: "https://wa.me/5531995995428" },
  },
};
