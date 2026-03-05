import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор стоимости обслуживания бассейна в Сочи",
  description:
    "Рассчитайте стоимость обслуживания бассейна в месяц. Объём, выезды техника, оборудование и водоподготовка. Сочи и Красная Поляна.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
