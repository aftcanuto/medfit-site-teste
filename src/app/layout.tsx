import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/config/content";

const HOME_TITLE = "MedFit — Medicina, Avaliação Física e Performance em BH";
const HOME_DESCRIPTION =
  "Medicina, avaliação física, emagrecimento, performance e teste de VO₂máx em Belo Horizonte. Agende sua avaliação e cuide da sua saúde com dados.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "avaliação física belo horizonte",
    "medicina do exercício",
    "performance esportiva",
    "avaliação funcional",
    "TAF",
    "atestado médico de aptidão física",
    "atestado médico de aptidão física PMMG",
    "medfit",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: SITE.fullName,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MedFit Saúde e Bem-estar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.fullName,
  alternateName: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/og.png`,
  telephone: SITE.whatsapp.replace("https://wa.me/", "+"),
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.street}, ${SITE.address.complement}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -19.861594536183574,
    longitude: -43.969530724016316,
  },
  areaServed: "Belo Horizonte",
  sameAs: [SITE.instagram],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Atestado Médico de Aptidão Física para TAF",
      description:
        "Atestado médico de aptidão física exigido pelo edital do TAF (Teste de Aptidão Física) para concursos como PMMG, Polícia Civil, Corpo de Bombeiro Militar, Guarda Municipal e Polícia Penal.",
      url: `${SITE.url}/performance/`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
