import Link from "next/link";
import Image from "next/image";
import { CTA } from "./components/CTA";
import { PriceTable } from "./components/PriceTable";
import { portfolioItems } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Строим и обслуживаем бассейны с гарантией чистоты воды без хлора
          </h1>
          <p className="mt-4 text-lg text-teal-100 sm:text-xl">
            Сервисное обслуживание и строительство бассейнов в Сочи — для частного дома и малой гостиницы. Договор, прайс, выезд техника.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kalkulyator"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-teal-50"
            >
              Рассчитать стоимость
            </Link>
            <a
              href="tel:+78622601234"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              +7 (862) 260-12-34
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Услуги в Сочи</h2>
        <p className="mt-2 text-[var(--muted)]">
          Техническое обслуживание бассейнов, ремонт оборудования, водоподготовка без хлора.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/obsluzhivanie-basseynov", title: "Обслуживание бассейнов", desc: "Комплексное сервисное обслуживание, чистка, договор, прайс." },
            { href: "/obsluzhivanie-basseynov-dlya-chastnyh-domov", title: "Для домов и гостиниц", desc: "Обслуживание частных бассейнов и бассейнов малых гостиниц в Сочи." },
            { href: "/remont-oborudovaniya-basseynov", title: "Ремонт оборудования", desc: "Ремонт насосов, фильтров, замена оборудования для бассейнов." },
            { href: "/himicheskaya-obrabotka-vody", title: "Водоподготовка", desc: "Химическая обработка воды, водоподготовка. Ответы на вопросы про хлорку." },
            { href: "/basseyn-bez-hlora", title: "Бассейн без хлора", desc: "Чистая вода без хлора — наше УТП. Без запаха и вреда для кожи." },
            { href: "/kalkulyator", title: "Калькулятор", desc: "Узнайте стоимость обслуживания бассейна в месяц за минуту." },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-[var(--primary)] hover:shadow-md"
            >
              <h3 className="font-heading font-semibold text-[var(--primary)] group-hover:underline">{card.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Стоимость обслуживания бассейнов</h2>
          <p className="mt-2 text-[var(--muted)]">
            Прозрачный прайс. Итоговая цена зависит от объёма бассейна и частоты выездов. Рассчитайте в калькуляторе или оставьте заявку.
          </p>
          <div className="mt-6">
            <PriceTable />
          </div>
          <p className="mt-4 text-center">
            <Link href="/kalkulyator" className="font-semibold text-[var(--primary)] hover:underline">
              Калькулятор стоимости обслуживания →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Почему мы</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Вода без хлора — без запаха и раздражения кожи",
            "Договор на обслуживание, регламент работ",
            "Выезд техника по Сочи и Красной Поляне",
            "Ремонт и обслуживание оборудования в одном месте",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)] font-semibold">{i + 1}</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Наши объекты</h2>
        <p className="mt-2 text-[var(--muted)]">Частные дома и малые гостиницы в Сочи, Адлере, Красной Поляне.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={item.id === "1"}
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-[var(--primary)]">{item.type}</span>
                <h2 className="mt-1 font-heading text-lg font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.volume}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Частный бассейн, Адлер", type: "45 м³" },
            { title: "Мини-отель, Красная Поляна", type: "80 м³" },
            { title: "Дача, Лазаревское", type: "25 м³" },
          ].map((p) => (
            <div key={p.title} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="aspect-video bg-gradient-to-br from-teal-200 to-cyan-300" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-[var(--muted)]">{p.type}</p>
              </div>
            </div>
          ))}
        </div> */}
        <p className="mt-6 text-center">
          <Link href="/portfolios" className="font-semibold text-[var(--primary)] hover:underline">
            Вся галерея работ →
          </Link>
        </p>
      </section>

      <CTA />
    </>
  );
}
