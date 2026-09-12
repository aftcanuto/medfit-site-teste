import type { Metadata } from "next";

const TITLE = "Teste de VO₂máx em Belo Horizonte";
const DESCRIPTION =
  "Teste de VO₂máx com ergoespirometria: limiar anaeróbio, VAM e zonas de treino individualizadas em Belo Horizonte. Agende seu teste na MedFit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/vo2/" },
  openGraph: {
    title: `${TITLE} | MedFit`,
    description: DESCRIPTION,
    url: "/vo2/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MedFit Saúde e Bem-estar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | MedFit`,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function Vo2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
