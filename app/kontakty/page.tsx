import type { Metadata } from "next";
import { site } from "@/lib/data";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты — обслуживание бассейнов в Сочи",
  description:
    "Aqua Zen: адрес, телефон, заявка на обслуживание и строительство бассейнов в Сочи, Адлере, Красной Поляне.",
  keywords: ["обслуживание бассейна сочи", "обслуживание бассейнов сочи", "бассейн сервис сочи"],
};

export default function KontaktyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Контакты</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Обслуживание и строительство бассейнов в Сочи. Звоните или оставьте заявку — перезвоним и рассчитаем стоимость.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="font-heading text-xl font-semibold">Aqua Zen</h2>
          <p className="mt-2 text-[var(--muted)]">
            Регион: <strong className="text-[var(--foreground)]">{site.region}</strong>, Краснодарский край
          </p>
          <p className="mt-2 text-[var(--muted)]">{site.address}</p>
          <p className="mt-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, "").replace(/[()]/g, "")}`}
              className="text-xl font-semibold text-[var(--primary)] hover:underline"
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">Пн–Пт: 9:00–18:00, Сб: 10:00–16:00</p>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <ContactForm />
        </section>
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Зона обслуживания — Сочи и окрестности</h2>
        <p className="mt-2 text-[var(--muted)]">
          Выезжаем на объекты в Сочи, Адлер, Красная Поляна, Лазаревское, Имеретинка и другие районы Большого Сочи. Обслуживание бассейнов в Сочи и пригородах — по договору с фиксированной стоимостью в месяц.
        </p>
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-gradient-to-br from-slate-200 to-slate-300">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A416d1d5a06f90ff1f667bf9f74438499776854aedd79920ee8e4b57ab3c17e03&amp;source=constructor"
            width="1131"
            height="720"></iframe>
          <div className="flex h-full items-center justify-center text-[var(--muted)]">
            Карта: г. Сочи, Краснодарский край
          </div>
        </div>
      </section>
    </div>
  );
}
