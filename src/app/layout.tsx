import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { SITE_URL, bases, empresa } from "@/lib/dados";
import { buscarResumoGoogle } from "@/lib/google";

const descricao =
  "Borracharia móvel com bases em Parada de Lucas, Padre Miguel e Barra da Tijuca. Troca e conserto de pneu no local, carga de bateria e reboque para carro, moto, caminhão e máquina. Todos os dias, das 5h às 19h. WhatsApp: (21) 96016-6562.";
const chamada = "Pneu furou? A gente vai até você. Três bases no Rio, todos os dias das 5h às 19h.";
const titulo = "Silva Pneus | Borracharia Móvel no Rio de Janeiro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/img/favicon-32-escuro.png", sizes: "32x32", type: "image/png" },
      { url: "/img/icon-512-escuro.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/img/apple-touch-icon-escuro.png",
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
        alt: "Silva Pneus, borracharia móvel: pneu furou? A gente vai até você. Três bases no Rio, todos os dias das 5h às 19h.",
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
  themeColor: "#121212",
};

const montarDadosEstruturados = (nota: number, total: number) => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Borracharia Móvel Silva Pneus",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/img/og.jpg`,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: "+55-21-96016-6562",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "05:00",
    closes: "19:00",
  },
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
    ratingValue: nota.toFixed(1),
    reviewCount: String(total),
  },
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { nota, total } = await buscarResumoGoogle();
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Antes de desenhar a página: aplica o tema salvo (sem piscar) e liga as animações, a menos que o visitante peça menos movimento. Se o JavaScript do site não carregar em 4s, as animações são desligadas para nada ficar escondido. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("tema")==="claro"){document.documentElement.dataset.tema="claro";document.querySelector('meta[name="theme-color"]')?.setAttribute("content","#ffffff")}}catch(e){}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("anima");setTimeout(function(){if(!window.__animacoes)document.documentElement.classList.remove("anima")},4000)}`,
          }}
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(montarDadosEstruturados(nota, total)) }}
        />
      </body>
    </html>
  );
}
