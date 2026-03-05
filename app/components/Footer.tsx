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
          <div>
            <p className="font-heading text-lg font-bold text-white">Бассейн Сервис Сочи</p>
            <p className="mt-2 text-sm">
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
              <a href="tel:+78622601234" className="text-[var(--primary)] hover:underline">
                +7 (862) 260-12-34
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
          © {new Date().getFullYear()} Бассейн Сервис Сочи. Обслуживание и строительство бассейнов в Сочи.
        </div>
      </div>
    </footer>
  );
}
