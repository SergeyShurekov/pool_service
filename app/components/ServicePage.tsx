import Link from "next/link";
import { Checklist } from "./Checklist";
import { ContactForm } from "./ContactForm";
import { FaqAccordion } from "./FaqAccordion";
import { JsonLd } from "./JsonLd";
import { PriceTable } from "./PriceTable";
import { ServiceGallery } from "./ServiceGallery";
import {
  faqItems,
  mainServiceSchema,
  serviceCards,
  servicePages,
  site,
  type ServiceSlug,
} from "@/lib/data";

function buildFaqSchema() {
  return {
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
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = servicePages[slug];

  return (
    <>
      <JsonLd
        data={{
          ...mainServiceSchema,
          name: service.title,
          description: service.description,
          url: `${site.domain}/${slug}`,
        }}
      />
      <JsonLd data={buildFaqSchema()} />

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Aqua Zen
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-teal-50">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#forma"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]"
            >
              Заказать
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
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Описание услуги
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[var(--muted)]">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold">Другие услуги</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceCards
                .filter((item) => item.slug !== slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      className="font-medium text-[var(--primary)] hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Как мы чистим бассейн
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Работаем по понятному чек-листу, чтобы чистка и сервис были
            предсказуемыми и давали стабильный результат.
          </p>
          <div className="mt-6">
            <Checklist />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            {service.priceTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            {service.priceDescription}
          </p>
          <div className="mt-6">
            <PriceTable />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Фото работ</h2>
          <div className="mt-6">
            <ServiceGallery ids={service.galleryIds} />
          </div>
        </section>

        <section id="forma" className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-8 text-white">
            <h2 className="font-heading text-2xl font-bold">{service.ctaTitle}</h2>
            <p className="mt-4 text-teal-50">{service.ctaDescription}</p>
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
        </section>

        <section className="mt-14" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      </div>
    </>
  );
}
