import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { JsonLd } from "./JsonLd";
import {
  mainServiceSchema,
  serviceCards,
  servicePages,
  site,
  type ServiceSection,
  type ServiceSlug,
} from "@/lib/data";

function SectionContent({ section }: { section: ServiceSection }) {
  if (section.type === "list") {
    return (
      <ul className="mt-6 grid gap-3 text-[var(--muted)] sm:grid-cols-2">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (section.type === "cards") {
    return (
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === "steps") {
    return (
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {section.items.map((item, index) => (
          <article
            key={item}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Шаг {index + 1}
            </p>
            <h3 className="mt-3 font-heading text-xl font-semibold">{item}</h3>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === "price") {
    return (
      <div className="mt-6 space-y-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-medium">{item.label}</span>
            <span className="text-lg font-semibold text-[var(--primary)]">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4 text-base leading-7 text-[var(--muted)]">
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
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

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Aqua Zen
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold sm:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-teal-50">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#forma"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)]"
            >
              Оставить заявку
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
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-14">
            {service.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="mt-3 max-w-3xl text-[var(--muted)]">{section.description}</p>
                ) : null}
                <SectionContent section={section} />
              </section>
            ))}

            <section
              id="forma"
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
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
          </div>

          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit">
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
        </div>
      </div>
    </>
  );
}
