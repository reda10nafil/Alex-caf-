import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Cafe — Il cuore del quartiere | Torino",
  description:
    "Bar di quartiere in Via Jacopo Foroni 3A, Torino. Colazioni, caffè, snack e aperitivi con atmosfera accogliente. Prenota il tuo tavolo.",
  keywords: [
    "cafe torino",
    "bar torino",
    "colazioni torino",
    "aperitivo torino",
    "caffè torino",
    "Via Jacopo Foroni",
    "mercato Piazza Foroni",
  ],
  openGraph: {
    title: "Alex Cafe — Il cuore del quartiere",
    description: "Bar di quartiere in Via Jacopo Foroni 3A, Torino",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
