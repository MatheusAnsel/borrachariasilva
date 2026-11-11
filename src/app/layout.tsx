import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { SITE_URL, bases, empresa } from "@/lib/dados";

const descricao =
  "Borracharia móvel com bases em Parada de Lucas, Padre Miguel e Barra da Tijuca. Troca e conserto de pneu no local, carga de bateria e reboque para carro, moto, caminhão e máquina. Todos os dias até 22h. WhatsApp: (21) 96016-6562.";
const chamada = "Pneu furou? A gente vai até você. Três bases no Rio, todos os dias até 22h.";
const titulo = "Silva Pneus | Borracharia Móvel no Rio de Janeiro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: empresa.nome,
    url: "/",
    title: titulo,
    description: chamada,
    images: [
      {
        url: "/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Silva Pneus, borracharia móvel: pneu furou? A gente vai até você. Três bases no Rio, todos os dias até 22h.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: chamada,
    images: ["/img/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Borracharia Móvel Silva Pneus",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/img/og.jpg`,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: "+55-21-96016-6562",
  sameAs: [empresa.instagram],
  areaServed: bases.flatMap((b) => b.bairros),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Brasil, 13709",
    addressLocality: "Parada de Lucas, Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "21010-075",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(empresa.totalAvaliacoes),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
