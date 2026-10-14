import type { Metadata } from "next";
import { Inter, Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CECAB | Novo rumo no saber",
  description:
    "Centro Educacional Carvalho Braga: Educação Infantil, Ensino Fundamental e Médio, ensino bilíngue e formação em valores cristãos. Unidades Nova Iguaçu, Japeri, Mucajá e Centro.",
  openGraph: {
    title: "CECAB | Novo rumo no saber",
    description:
      "Escola particular com 4 unidades, da Educação Infantil ao Ensino Médio, com ensino bilíngue e formação em valores cristãos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${oswald.variable} ${montserrat.variable} ${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
