import type { Metadata } from "next";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";
import { CTA } from "../components/CTA";

export const metadata: Metadata = {
  title: "Портфолио — бассейны в Сочи: частные дома и гостиницы",
  description:
    "Наши объекты: строительство и обслуживание бассейнов в Сочи, Адлере, Красной Поляне. Частные дома, дачи, малые гостиницы. Кейсы и примеры работ.",
};

export default function PortfoliosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Портфолио</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Объекты в Сочи, Адлере, Красной Поляне и Лазаревском: частные бассейны, бассейны для малых гостиниц, СПА-зоны. Строительство под ключ и сервисное обслуживание.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition hover:shadow-md"
          >
            <div
              className="aspect-[4/3] w-full bg-gradient-to-br from-teal-200 via-cyan-200 to-teal-300"
              aria-hidden
            />
            <div className="p-4">
              <span className="text-xs font-medium text-[var(--primary)]">{item.type}</span>
              <h2 className="mt-1 font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.volume}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-[var(--border)] bg-slate-50 p-6">
        <h2 className="font-heading text-xl font-semibold">Что мы делаем на объектах</h2>
        <ul className="mt-3 space-y-1 text-[var(--muted)]">
          <li>— Строительство бассейнов под ключ</li>
          <li>— Комплексное обслуживание бассейнов по договору</li>
          <li>— Водоподготовка без хлора</li>
          <li>— Ремонт и замена оборудования</li>
        </ul>
      </section>

      <CTA />
    </div>
  );
}
