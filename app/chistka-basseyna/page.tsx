import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { HeroCarousel } from "../components/HeroCarousel";
import { FaqAccordion } from "../components/FaqAccordion";
import { JsonLd } from "../components/JsonLd";
import { site } from "@/lib/data";

const faqItems = [
  {
    question: "Как часто нужно чистить бассейн?",
    answer: "В среднем — 1 раз в 1–2 недели при регулярном использовании.",
  },
  {
    question: "Можно ли почистить бассейн самостоятельно?",
    answer:
      "Можно, но без опыта легко нарушить баланс химии и повредить покрытие.",
  },
  {
    question: "Сколько времени занимает чистка?",
    answer: "Обычно от 1 до 3 часов, в зависимости от состояния бассейна.",
  },
] as const;

const signs = [
  "вода стала мутной или зелёной",
  "появился налёт на стенках и ватерлинии",
  "скользкое дно",
  "неприятный запах",
  "фильтр не справляется",
] as const;

const works = [
  "Контроль химии",
  "Чистка ватерлинии",
  "Уборка пылесосом",
  "Чистка фильтра",
  "Химическая обработка",
] as const;

const pricing = [
  "Разовая чистка бассейна — от 5 000 ₽",
  "Сильное загрязнение — от 8 000 ₽",
  "Экстренная очистка — рассчитывается индивидуально",
] as const;

const priceFactors = [
  "объём бассейна",
  "степень загрязнения",
  "наличие оборудования",
  "необходимость замены химии",
] as const;

const advantages = [
  "Опыт работы с частными и коммерческими бассейнами",
  "Быстрый выезд по Сочи и Адлеру",
  "Используем профессиональную химию",
  "Не повреждаем покрытие бассейна",
  "Даём рекомендации по дальнейшему уходу",
] as const;

const steps = [
  {
    title: "1. Заявка",
    description: "Вы оставляете заявку или отправляете фото бассейна.",
  },
  {
    title: "2. Оценка",
    description: "Мы оцениваем состояние и называем стоимость.",
  },
  {
    title: "3. Чистка",
    description: "Приезжаем и выполняем полный комплекс работ.",
  },
] as const;

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Чистка бассейна в Сочи",
  description:
    "Профессиональная чистка бассейнов в Сочи для частных домов, отелей и коммерческих объектов. Устраняем мутную воду, налёт, водоросли и возвращаем бассейну прозрачность за 1 выезд.",
  areaServed: ["Сочи", "Адлер"],
  serviceType: "Чистка бассейнов",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phone,
    address: site.address,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    description: "Разовая чистка бассейна от 5 000 ₽",
  },
  url: `${site.domain}/chistka-basseyna`,
};

export const metadata: Metadata = {
  title: "Чистка бассейна в Сочи — быстро и безопасно",
  description:
    "Чистка бассейнов в Сочи и Адлере: мутная вода, налёт, водоросли, экстренная очистка, восстановление прозрачности за 1 выезд.",
  keywords: [
    "чистка бассейна в сочи",
    "чистка бассейнов сочи",
    "чистка бассейна адлер",
    "очистка бассейна сочи",
    "разовая чистка бассейна",
    "срочная чистка бассейна сочи",
    "чистка воды в бассейне сочи",
  ],
  alternates: {
    canonical: "/chistka-basseyna",
  },
};

function ChecklistBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ChistkaBasseynaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Aqua Zen
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold sm:text-5xl">
            Чистка бассейна в Сочи — быстро и безопасно
          </h1>
          <div className="mt-5 max-w-3xl space-y-3 text-lg leading-8 text-teal-50">
            <p>
              Профессиональная чистка бассейнов в Сочи для частных домов, отелей
              и коммерческих объектов. Устраняем мутную воду, налёт, водоросли и
              возвращаем бассейну прозрачность за 1 выезд.
            </p>
            <p>
              Работаем по Сочи, Адлеру и ближайшим районам. Возможен срочный
              выезд.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#forma"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]"
            >
              Заказать чистку бассейна
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 font-semibold text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Когда нужна чистка бассейна
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">
              Регулярная чистка — это не только внешний вид, но и безопасность
              посетителей. Запущенный бассейн сложнее и дольше восстанавливать.
            </p>
            <div className="mt-6">
              <ChecklistBlock items={signs} />
            </div>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Если есть хотя бы один из этих признаков — бассейн уже требует
              незамедлительного обслуживания.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-bold">
              Сколько стоит чистка бассейна
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Стоимость зависит от состояния бассейна, объёма воды и типа
              загрязнений.
            </p>
            <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
              {pricing.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">
              От чего зависит цена
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
              {priceFactors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Точную стоимость рассчитываем после осмотра или по фото.
            </p>
          </aside>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Как мы чистим бассейн
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">
            В рамках чистки бассейна мы выполняем полный комплекс работ:
          </p>
          <div className="mt-6">
            <ChecklistBlock items={works} />
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--muted)]">
            После обработки вода становится прозрачной и безопасной для
            использования.
          </p>
        </section>
      </div>

      <section className="px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto max-w-[112rem] overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.18),transparent_28%),linear-gradient(135deg,#ecfeff_0%,#f8fafc_52%,#ecfdf5_100%)] px-5 py-8 ring-1 ring-teal-100 sm:px-8 sm:py-10 xl:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Реальные работы
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-slate-950 sm:text-3xl">
                Фото до и после
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Показываем реальные кейсы чистки бассейнов в Сочи и ближайших
                районах. Ситуации были разные, в том числе с экстренным выездом.
                Мы не оставим вас в беде!
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-white/70">
              До загрязнения и после профессиональной очистки
            </div>
          </div>
          <div className="mt-8">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-14">
        <section>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Почему выбирают нас
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
              >
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Как проходит чистка
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-14"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Часто задаваемые вопросы
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section
          id="forma"
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-8 text-white">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Заказать чистку бассейна в Сочи
            </h2>
            <p className="mt-4 text-teal-50">
              Оставьте заявку — свяжемся с вами и рассчитаем стоимость.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#forma-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]"
              >
                Заказать чистку бассейна
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 font-semibold text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div
            id="forma-form"
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
          >
            <ContactForm />
          </div>
        </section>

        <section className="mt-14 border-t border-[var(--border)] pt-10">
          <p className="max-w-5xl text-base leading-7 text-[var(--muted)]">
            Мы выполняем чистку бассейнов в Сочи любой сложности: от регулярного
            ухода до восстановления сильно загрязнённой воды. Работаем с
            частными бассейнами, гостиницами и коммерческими объектами.
          </p>
        </section>
      </div>
    </>
  );
}
