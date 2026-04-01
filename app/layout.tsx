import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { YandexMetrica } from "./components/YandexMetrica";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const YANDEX_METRIKA_ID =
  process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "108237877";

export const metadata: Metadata = {
  metadataBase: new URL("https://obsluzivanie-baseynov-sochi.ru"),
  title: {
    default:
      "Обслуживание бассейнов в Сочи — сервис, ремонт, строительство | Aqua Zen",
    template: "%s | Aqua Zen",
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
  icons: {
    icon: "/logo_transparent.webp",
    shortcut: "/logo_transparent.webp",
    apple: "/logo_transparent.webp",
  },
  openGraph: {
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <YandexMetrica counterId={YANDEX_METRIKA_ID} />
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
