import type { Metadata } from "next";
import Link from "next/link";
import { PriceTable } from "../components/PriceTable";
import { CTA } from "../components/CTA";

export const metadata: Metadata = {
  title: "Обслуживание бассейнов в Сочи — сервис, цена, договор",
  description:
    "Сервисное и техническое обслуживание бассейнов в Сочи. Стоимость обслуживания бассейна в месяц, договор, регламент работ. Комплексное обслуживание, чистка, центр обслуживания бассейнов.",
  keywords: [
    "обслуживание бассейнов",
    "сервисное обслуживание бассейнов",
    "обслуживание бассейна сочи",
    "стоимость обслуживания бассейнов",
    "обслуживание бассейнов цена",
    "договор обслуживания бассейна",
    "комплексное обслуживание бассейнов",
  ],
};

export default function ObsluzhivanieBasseynovPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Обслуживание бассейнов в Сочи</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Комплексное сервисное обслуживание бассейнов: чистка, контроль воды, обслуживание оборудования. Работаем по договору с понятным регламентом и фиксированной стоимостью в месяц.
      </p>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Что входит в обслуживание бассейна</h2>
        <ul className="mt-4 space-y-2 text-[var(--muted)]">
          <li>— Контроль и корректировка качества воды (водоподготовка без хлора)</li>
          <li>— Чистка чаши, скиммера, фильтра</li>
          <li>— Обслуживание насоса и песочного фильтра</li>
          <li>— Обслуживание системы водоподготовки бассейна</li>
          <li>— Ведение журнала обслуживания бассейна</li>
          <li>— Выезд техника по Сочи и Красной Поляне</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Стоимость обслуживания бассейнов</h2>
        <p className="mt-2 text-[var(--muted)]">
          Цена зависит от объёма бассейна и количества выездов в месяц. Ниже — ориентировочный прайс. Точную стоимость обслуживания бассейна рассчитаем после осмотра или по калькулятору.
        </p>
        <div className="mt-4">
          <PriceTable />
        </div>
        <p className="mt-4">
          <Link href="/kalkulyator" className="font-semibold text-[var(--primary)] hover:underline">
            Рассчитать стоимость обслуживания бассейна в месяц →
          </Link>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Договор и регламент</h2>
        <p className="mt-2 text-[var(--muted)]">
          Заключаем договор на обслуживание бассейна с чётким регламентом работ и нормативами. Специалисты по обслуживанию плавательного бассейна выезжают по графику. Помещения обслуживания бассейна (технический узел) проверяем при каждом визите.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Для кого</h2>
        <ul className="mt-2 space-y-1 text-[var(--muted)]">
          <li>— Частные бассейны и домашние бассейны в Сочи</li>
          <li>— Плавательные бассейны малых гостиниц и мини-отелей</li>
          <li>— Каркасные бассейны, СПА-бассейны, детские бассейны</li>
        </ul>
        <p className="mt-4">
          <Link href="/obsluzhivanie-basseynov-dlya-chastnyh-domov" className="font-semibold text-[var(--primary)] hover:underline">
            Обслуживание бассейнов для частных домов и гостиниц →
          </Link>
        </p>
      </section>

      <CTA title="Заказать обслуживание бассейна в Сочи" />
    </div>
  );
}
