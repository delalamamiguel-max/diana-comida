import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diana Flores | Catering Mexicano Casero en Chihuahua",
  description: "Catering mexicano casero en Chihuahua por Diana Flores. Comida para eventos, pedidos para recoger, postres artesanales y salsas embotelladas. Cotiza por WhatsApp.",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
