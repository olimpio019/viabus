import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Passagens Aéreas Nacionais`,
  description:
    "Compre passagens aéreas domésticas no Brasil com segurança. Compare voos entre cidades brasileiras e reserve em poucos cliques.",
  keywords: [
    "passagem aérea",
    "voo nacional",
    "passagem avião Brasil",
    "viagem doméstica",
    "reserva de voo",
  ],
  openGraph: {
    title: `${siteConfig.name} | Passagens Aéreas Nacionais`,
    description:
      "Reserve sua passagem aérea nacional online com pagamento rápido e seguro.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
