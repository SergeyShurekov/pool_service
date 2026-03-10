"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/obsluzhivanie-basseynov", label: "Обслуживание" },
  {
    href: "/obsluzhivanie-basseynov-dlya-chastnyh-domov",
    label: "Для домов и гостиниц",
  },
  { href: "/remont-oborudovaniya-basseynov", label: "Ремонт оборудования" },
  { href: "/himicheskaya-obrabotka-vody", label: "Водоподготовка" },
  { href: "/basseyn-bez-hlora", label: "Без хлора" },
  { href: "/portfolios", label: "Портфолио" },
  { href: "/kalkulyator", label: "Калькулятор" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-heading text-lg font-bold sm:text-xl"
        >
          Бассейн Сервис Сочи
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Основное меню"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-white/24 text-white"
                  : "text-white/80 hover:bg-white/12 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+79384185834"
          className="hidden shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm hover:bg-slate-50 md:inline-block"
        >
          +7 (938) 418-58-34
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--primary)] px-4 py-3 shadow-md md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Мобильное меню">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+79384185834"
              className="mt-2 rounded-full bg-white px-4 py-2 text-center font-semibold text-[var(--primary)] shadow-sm"
            >
              +7 (938) 418-58-34
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
