import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Passagens de Ônibus Online`,
  description:
    "Compre passagens de ônibus com segurança. Compare rotas, horários e reserve sua viagem em poucos cliques.",
  keywords: ["passagem de ônibus", "viagem", "ônibus", "rodoviária", "reserva"],
  openGraph: {
    title: `${siteConfig.name} | Passagens de Ônibus Online`,
    description:
      "Reserve sua passagem de ônibus online com pagamento rápido e seguro.",
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
