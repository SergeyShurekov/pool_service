import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { serviceCards, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты Aqua Zen: телефон, Telegram @DanteAlighery и форма заявки на обслуживание бассейнов в Сочи.",
};

export default function KontaktyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-6 py-10 text-white sm:px-10">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Контакты</h1>
        <p className="mt-4 max-w-2xl text-lg text-teal-50">
          Свяжитесь с нами по обслуживанию, чистке, ремонту, консервации или
          подбору химии для бассейна в Сочи.
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <h2 className="font-heading text-2xl font-semibold">Как связаться</h2>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
            Телефон
          </p>
          <p className="mt-2">
            <a
              href={site.phoneHref}
              className="text-2xl font-semibold text-[var(--primary)] hover:underline"
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
            Telegram
          </p>
          <p className="mt-2">
            <a
              href={site.telegramHref}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-semibold text-[var(--primary)] hover:underline"
            >
              {site.telegramHandle}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
            <a
              href={site.telegramHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold"
            >
              Telegram
            </a>
          </div>
          <div className="mt-8">
            <h2 className="font-heading text-xl font-semibold">Услуги</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceCards.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-[var(--primary)] hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
