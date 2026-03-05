import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "../components/CTA";

export const metadata: Metadata = {
  title: "Ремонт и обслуживание оборудования бассейнов в Сочи",
  description:
    "Ремонт оборудования для бассейнов, обслуживание насоса и фильтра. Обслуживание фильтров бассейнов, песочный фильтр. Всё для бассейнов: оборудование, химия, строительство, ремонт.",
  keywords: [
    "ремонт оборудования для бассейнов",
    "ремонт и обслуживание бассейнов",
    "обслуживание оборудования бассейнов",
    "обслуживание насоса бассейна",
    "обслуживание фильтров бассейнов",
    "бассейн фильтр песочный обслуживание",
  ],
};

export default function RemontOborudovaniyaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Ремонт и обслуживание оборудования бассейнов</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Ремонт и обслуживание бассейнов в Сочи: насосы, фильтры, системы водоподготовки. Диагностика, замена запчастей, обслуживание песочного фильтра и насоса — выезд техника по Сочи и Красной Поляне.
      </p>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Что ремонтируем и обслуживаем</h2>
        <ul className="mt-4 space-y-2 text-[var(--muted)]">
          <li>— Насосы для бассейнов: диагностика, ремонт, замена</li>
          <li>— Песочные фильтры: обслуживание фильтров бассейнов, замена песка, ремонт</li>
          <li>— Системы подогрева и автоматики</li>
          <li>— Оборудование для водоподготовки</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Обслуживание насоса бассейна</h2>
        <p className="mt-2 text-[var(--muted)]">
          Регулярное обслуживание насоса бассейна продлевает срок службы и сохраняет качество фильтрации. В комплексное обслуживание входит осмотр, при необходимости — чистка и замена уплотнений. Ремонт оборудования бассейна выполняем на месте или в сервисе.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Обслуживание фильтров бассейнов</h2>
        <p className="mt-2 text-[var(--muted)]">
          Песочный фильтр нуждается в обратной промывке и периодической замене загрузки. Обслуживание фильтров бассейнов входит в договор на сервис. Бассейн фильтр песочный — обслуживание по регламенту, при поломке — ремонт или замена.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-[var(--border)] bg-slate-50 p-6">
        <h2 className="font-heading text-xl font-semibold">Ориентировочные цены</h2>
        <ul className="mt-4 space-y-2 text-[var(--muted)]">
          <li>Диагностика оборудования — от 3 500 ₽</li>
          <li>Ремонт насоса — от 4 500 ₽</li>
          <li>Замена песка в фильтре — от 2 500 ₽</li>
          <li>Ремонт/замена оборудования — по смете после осмотра</li>
        </ul>
      </section>

      <section className="mt-10 flex flex-wrap gap-4">
        <Link href="/obsluzhivanie-basseynov" className="text-[var(--primary)] hover:underline">
          Комплексное обслуживание бассейнов
        </Link>
        <Link href="/kontakty" className="text-[var(--primary)] hover:underline">
          Заказать ремонт
        </Link>
      </section>

      <CTA title="Заказать ремонт оборудования бассейна в Сочи" />
    </div>
  );
}
