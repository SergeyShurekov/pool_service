import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/obsluzhivanie-basseynov", label: "Обслуживание бассейнов" },
  { href: "/obsluzhivanie-basseynov-dlya-chastnyh-domov", label: "Для частных домов и гостиниц" },
  { href: "/remont-oborudovaniya-basseynov", label: "Ремонт оборудования" },
  { href: "/himicheskaya-obrabotka-vody", label: "Водоподготовка" },
  { href: "/basseyn-bez-hlora", label: "Бассейн без хлора" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative px-4 py-4 sm:px-5">
            <span
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_26%,rgba(255,255,255,0.03)_0%,rgba(186,255,246,0.02)_14%,rgba(45,212,191,0.015)_24%,rgba(15,23,42,0)_42%)]"
              aria-hidden="true"
            />
            <span
              className="absolute -left-2 top-0 h-24 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,rgba(186,255,246,0.04)_22%,rgba(45,212,191,0.025)_38%,rgba(15,23,42,0)_66%)] blur-2xl"
              aria-hidden="true"
            />
            <Link
              href="/"
              className="group relative z-10 inline-flex items-center gap-3"
              aria-label="Aqua Zen"
            >
              <span className="relative flex items-center overflow-visible">
                <span
                  className="absolute top-1/2 left-1/2 -z-10 h-16 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(220,255,247,0.14)_24%,rgba(112,211,202,0.06)_48%,rgba(15,23,42,0)_78%)] blur-lg transition-all duration-300 group-hover:scale-105 sm:h-18 sm:w-32"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-1/2 left-1/2 -z-10 h-20 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,255,248,0.06)_0%,rgba(45,212,191,0.04)_38%,rgba(15,23,42,0)_72%)] blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <Image
                  src="/logo_transparent.png"
                  alt="Aqua Zen"
                  width={220}
                  height={64}
                  className="relative h-11 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.14)] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </span>
              <span className="font-heading text-lg font-bold tracking-[0.18em] text-white">
                AQUA ZEN
              </span>
            </Link>
            <p className="relative z-10 mt-2 text-sm">
              Строительство и сервисное обслуживание бассейнов в Сочи. Чистая вода без хлора.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Услуги</h3>
            <ul className="mt-2 space-y-1">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Сочи</h3>
            <p className="mt-2 text-sm">
              г. Сочи, Краснодарский край
              <br />
              <a href="tel:+79384185834" className="text-[var(--primary)] hover:underline">
                +7 (938) 418-58-34
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Полезное</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/kalkulyator" className="text-sm hover:text-white">
                  Калькулятор стоимости
                </Link>
              </li>
              <li>
                <Link href="/portfolios" className="text-sm hover:text-white">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/kontakty" className="text-sm hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aqua Zen. Обслуживание и строительство бассейнов в Сочи.
        </div>
      </div>
    </footer>
  );
}
