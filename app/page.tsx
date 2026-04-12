import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { HeroCarousel } from "./components/HeroCarousel";
import { JsonLd } from "./components/JsonLd";
import { ServiceCard } from "./components/ServiceCard";
import { mainServiceSchema, serviceCards, site } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "Обслуживание бассейнов в Сочи — чистка, ремонт, сервис" },
  description:
    "Профессиональное обслуживание бассейнов в Сочи: чистка, ремонт, контроль химии и регулярный сервис для частных и коммерческих объектов.",
};

const prices = [
  { label: "Обслуживание", value: "от 6 000 ₽ / месяц" },
  { label: "Чистка бассейна", value: "от 5 000 ₽" },
  { label: "Ремонт", value: "от 3 000 ₽" },
  { label: "Консервация", value: "от 7 000 ₽" },
] as const;

const advantages = [
  "Быстрый выезд по Сочи",
  "Работаем с любыми бассейнами",
  "Профессиональная химия",
  "Гарантия результата",
] as const;

const steps = ["Заявка", "Оценка", "Выполнение работ"] as const;

export default function Home() {
  return (
    <>
      <JsonLd data={mainServiceSchema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270%200%2060%2060%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-heading text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
            Обслуживание бассейнов в Сочи под ключ
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-teal-100 sm:text-xl">
            Профессиональное обслуживание бассейнов в Сочи: чистка, ремонт,
            контроль химии и регулярный сервис. Работаем с частными бассейнами,
            отелями и коммерческими объектами.
          </p>
          <p className="mt-3 max-w-3xl text-base text-teal-50">
            Выезжаем по Сочи, Адлеру, Хосте и Красной Поляне.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#forma"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-teal-50"
            >
              Заказать обслуживание
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              {site.phone}
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-10 w-full lg:w-[86%]">
          <HeroCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Наши услуги</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {serviceCards.map((card) => (
            <ServiceCard
              key={card.slug}
              href={`/${card.slug}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Цены</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {prices.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-white px-5 py-4 shadow-sm"
              >
                <p className="text-sm text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 font-heading text-2xl font-semibold text-[var(--primary)]">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Почему выбирают нас
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Как мы работаем
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step}
                className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Шаг {index + 1}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="forma" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-8 text-white">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Заказать обслуживание бассейна
            </h2>
            <p className="mt-4 text-teal-50">
              Оставьте заявку — подберём оптимальный вариант обслуживания.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]"
              >
                Позвонить
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
