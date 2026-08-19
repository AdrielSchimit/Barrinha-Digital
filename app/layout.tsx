import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barrinha Digital | Serviços e informações municipais",
  description: "Demonstração do novo portal municipal de Barrinha: serviços, notícias, ouvidoria, transparência e atendimento digital em um só lugar.",
  keywords: ["Prefeitura de Barrinha", "Barrinha SP", "IPTU Barrinha", "serviços municipais", "ouvidoria Barrinha"],
  openGraph: { title: "Barrinha Digital", description: "A Prefeitura mais perto de você.", locale: "pt_BR", type: "website", images: ["/assets/prefeitura-barrinha.jpg"] },
  robots: { index: true, follow: true }, icons: { icon: "/assets/logo-prefeitura.png" },
};

const structuredData = { "@context": "https://schema.org", "@type": "GovernmentOrganization", name: "Prefeitura Municipal de Barrinha", url: "https://portal.barrinha.sp.gov.br/", telephone: "+55-16-3943-9400", address: { "@type": "PostalAddress", streetAddress: "Praça Antônio Prado, 70", addressLocality: "Barrinha", addressRegion: "SP", postalCode: "14860-027", addressCountry: "BR" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>; }
