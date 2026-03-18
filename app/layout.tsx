import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obsluzivanie-baseynov-sochi.ru"),
  title: {
    default:
      "Обслуживание бассейнов в Сочи — сервис, ремонт, строительство | Бассейн Сервис Сочи",
    template: "%s | Бассейн Сервис Сочи",
  },
  description:
    "Сервисное обслуживание и строительство бассейнов в Сочи. Чистая вода без хлора. Обслуживание частных бассейнов и бассейнов для гостиниц. Ремонт оборудования. Договор, прайс, гарантия.",
  keywords: [
    "обслуживание бассейнов сочи",
    "сервисное обслуживание бассейнов",
    "обслуживание бассейна сочи",
    "бассейн сервис",
    "ремонт бассейнов сочи",
    "строительство бассейнов сочи",
  ],
  openGraph: {
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${montserrat.variable}`}>
      <GoogleAnalytics gaId="G-KWNC7YKMRZ" />
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <JsonLd />
        <a href="#main" className="skip-link">
          Перейти к основному содержимому
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
