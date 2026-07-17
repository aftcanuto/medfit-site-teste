import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste de VO₂max",
  description: "Teste de esforço máximo com ergoespirometria: VO₂max, limiar anaeróbio e zonas de treinamento individualizadas em Belo Horizonte.",
};

export default function Vo2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
