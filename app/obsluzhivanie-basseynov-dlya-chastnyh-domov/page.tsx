import type { Metadata } from "next";
import Link from "next/link";
import { PriceTable } from "../components/PriceTable";
import { CTA } from "../components/CTA";

export const metadata: Metadata = {
  title: "Обслуживание бассейнов для частных домов и гостиниц в Сочи",
  description:
    "Обслуживание бассейна дома, на даче и в малой гостинице в Сочи. Обслуживание частных и домашних бассейнов. Сколько стоит обслуживание бассейна в доме — прайс и калькулятор.",
  keywords: [
    "обслуживание бассейна дома",
    "обслуживание бассейна в доме",
    "обслуживание частных бассейнов",
    "обслуживание домашнего бассейна",
    "обслуживание бассейна на даче",
    "сколько стоит обслуживание бассейна в доме",
  ],
};

export default function ChastnyeDomaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Обслуживание бассейнов для частных домов и малых гостиниц</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Обслуживание бассейна в доме, на даче и в мини-отеле в Сочи. Частные и домашние бассейны — по договору, с выездом техника и гарантией чистоты воды без хлора.
      </p>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Обслуживание бассейна дома</h2>
        <p className="mt-2 text-[var(--muted)]">
          Домашний бассейн нуждается в регулярном сервисе: контроль воды, чистка, проверка насоса и фильтра. Мы ведём обслуживание домашнего бассейна по регламенту — вы знаете, когда приедет техник и что будет сделано. Вода — без хлора, без запаха и раздражения кожи.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Обслуживание бассейна на даче</h2>
        <p className="mt-2 text-[var(--muted)]">
          Дачные и каркасные бассейны тоже обслуживаем: чистка, водоподготовка, консервация на зиму и расконсервация. Обслуживание каркасного бассейна включается в договор на тех же условиях — выезд по Сочи и пригородам (Адлер, Лазаревское, Красная Поляна).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Бассейны для малых гостиниц</h2>
        <p className="mt-2 text-[var(--muted)]">
          Для мини-отелей и гостевых домов в Сочи предлагаем обслуживание бассейнов с фиксированной стоимостью в месяц. Удобный график выездов, журнал обслуживания бассейна, ремонт оборудования при необходимости — всё в одном договоре.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Сколько стоит обслуживание бассейна в доме</h2>
        <p className="mt-2 text-[var(--muted)]">
          Стоимость обслуживания частных бассейнов зависит от объёма и типа (открытый/закрытый, с подогревом и т.д.). Ниже — ориентировочные цены. Точный расчёт — в калькуляторе или по заявке.
        </p>
        <div className="mt-4">
          <PriceTable />
        </div>
        <p className="mt-4">
          <Link href="/kalkulyator" className="font-semibold text-[var(--primary)] hover:underline">
            Калькулятор: сколько стоит обслуживание бассейна в месяц →
          </Link>
        </p>
      </section>

      <section className="mt-10 flex flex-wrap gap-4">
        <Link href="/obsluzhivanie-basseynov" className="text-[var(--primary)] hover:underline">
          ← Общее обслуживание бассейнов
        </Link>
        <Link href="/basseyn-bez-hlora" className="text-[var(--primary)] hover:underline">
          Бассейн без хлора
        </Link>
      </section>

      <CTA />
    </div>
  );
}
