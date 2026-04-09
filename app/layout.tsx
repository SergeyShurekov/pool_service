import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { YandexMetrica } from "./components/YandexMetrica";
import { MobileQuickActions } from "./components/MobileQuickActions";
import { localBusinessSchema } from "@/lib/data";

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
    default: "Обслуживание бассейнов в Сочи | Aqua Zen",
    template: "%s | Aqua Zen",
  },
  description:
    "Обслуживание, чистка, ремонт и консервация бассейнов в Сочи. Регулярный сервис, прайс, FAQ и быстрая заявка.",
  keywords: [
    "обслуживание бассейнов сочи",
    "сервисное обслуживание бассейнов",
    "обслуживание бассейна сочи",
    "бассейн сервис",
    "ремонт бассейнов сочи",
    "строительство бассейнов сочи",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
        <JsonLd data={localBusinessSchema} />
        <a href="#main" className="skip-link">
          Перейти к основному содержимому
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileQuickActions />
      </body>
    </html>
  );
}
