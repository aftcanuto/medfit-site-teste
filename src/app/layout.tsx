import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/config/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — Medicina, Avaliação Física e Acompanhamento`,
    template: `%s | ${SITE.name}`,
  },
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MedFit Saúde e Bem-estar" }],
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
