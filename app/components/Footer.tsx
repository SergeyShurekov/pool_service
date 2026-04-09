import Image from "next/image";
import Link from "next/link";
import { serviceCards, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-slate-900 pb-24 text-slate-300 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative px-4 py-4 sm:px-5">
            <span
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_26%,rgba(255,255,255,0.03)_0%,rgba(186,255,246,0.02)_14%,rgba(45,212,191,0.015)_24%,rgba(15,23,42,0)_42%)]"
              aria-hidden="true"
            />
            <Link href="/" className="relative z-10 inline-flex items-center gap-3" aria-label="Aqua Zen">
              <Image
                src="/logo_transparent.png"
                alt="Aqua Zen"
                width={220}
                height={64}
                className="h-11 w-auto"
              />
              <span className="font-heading text-lg font-bold tracking-[0.18em] text-white">
                AQUA ZEN
              </span>
            </Link>
            <p className="relative z-10 mt-3 text-sm">
              Обслуживание, чистка, ремонт и консервация бассейнов в Сочи.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Контакты</h2>
            <p className="mt-3 text-sm">{site.address}</p>
            <p className="mt-2 text-sm">Город: Сочи</p>
            <p className="mt-3">
              <a href={site.phoneHref} className="font-semibold text-white hover:underline">
                {site.phone}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Услуги</h2>
            <ul className="mt-3 space-y-2">
              {serviceCards.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-sm hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white">Быстрые ссылки</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-white">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/kontakty" className="text-sm hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.telegramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-white"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aqua Zen. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
