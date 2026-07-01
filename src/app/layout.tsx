import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/config/content";

export const metadata: Metadata = {
  title: `${SITE.fullName} — Medicina, Avaliação Física e Acompanhamento`,
  description: SITE.description,
  keywords: [
    "avaliação física belo horizonte",
    "medicina do exercício",
    "performance esportiva",
    "avaliação funcional",
    "TAF",
    "medfit",
  ],
  openGraph: {
    title: SITE.fullName,
    description: SITE.description,
    siteName: SITE.fullName,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
