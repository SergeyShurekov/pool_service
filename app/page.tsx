import type { Metadata } from "next";
import Link from "next/link";
import { Checklist } from "./components/Checklist";
import { ContactForm } from "./components/ContactForm";
import { FaqAccordion } from "./components/FaqAccordion";
import { HeroCarousel } from "./components/HeroCarousel";
import { JsonLd } from "./components/JsonLd";
import { PriceTable } from "./components/PriceTable";
import { ServiceCard } from "./components/ServiceCard";
import { faqItems, mainServiceSchema, serviceCards, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Обслуживание бассейнов в Сочи",
  description:
    "Обслуживание бассейнов в Сочи: чистка, ремонт, консервация, цены, FAQ и быстрая заявка на выезд специалиста.",
};

const advantages = [
  {
    title: "Опыт",
    description:
      "Работаем с частными бассейнами, мини-отелями и SPA-зонами в Сочи и ближайших районах.",
  },
  {
    title: "Гарантия",
    description:
      "Работаем по понятному регламенту и помогаем не доводить бассейн до дорогого восстановления.",
  },
  {
    title: "Быстрый выезд",
    description:
      "Оперативно подключаемся к объектам по Сочи, когда нужно срочно восстановить воду или оборудование.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={mainServiceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270%200%2060%2060%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
            Обслуживание бассейнов в Сочи
          </h1>
          <p className="mt-4 text-lg text-teal-100 sm:text-xl">
            Чистка, ремонт, консервация и регулярный сервис бассейнов в Сочи.
            Работаем с частными объектами и небольшими гостиницами.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-teal-50"
            >
              Заказать
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
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Прайс взят с действующей страницы обслуживания бассейнов. Точный расчет
            зависит от объема бассейна, частоты выездов и состояния оборудования.
          </p>
          <div className="mt-6">
            <PriceTable />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Почему выбирают нас
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Как мы чистим бассейн
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          Короткий и понятный чек-лист, по которому мы работаем на каждом выезде.
        </p>
        <div className="mt-6">
          <Checklist />
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">FAQ</h2>
        <div className="mt-6">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-8 text-white">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Закажите выезд специалиста
            </h2>
            <p className="mt-4 text-teal-50">
              Оставьте имя и телефон. Мы быстро свяжемся, уточним задачу и
              предложим удобный формат обслуживания.
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
