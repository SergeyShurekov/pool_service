"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { serviceCards, site } from "@/lib/data";

const nav = [
  { href: "/obsluzhivanie-basseynov", label: "Обслуживание" },
  { href: "/chistka-basseyna", label: "Чистка" },
  { href: "/remont-basseynov", label: "Ремонт" },
  { href: "/konservaciya-basseyna", label: "Консервация" },
  { href: "/himiya-dlya-basseyna", label: "Химия" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group relative shrink-0" aria-label="Aqua Zen">
          <span className="relative flex items-center gap-2 overflow-visible">
            <span className="relative flex items-center justify-center overflow-visible">
              <span
                className="absolute top-1/2 left-1/2 -z-10 h-18 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.62)_0%,rgba(220,255,247,0.38)_30%,rgba(112,211,202,0.18)_58%,rgba(17,94,89,0)_82%)] blur-xl transition-all duration-300 group-hover:scale-105 sm:h-24 sm:w-48"
                aria-hidden="true"
              />
              <Image
                src="/logo_transparent.png"
                alt="Aqua Zen"
                width={220}
                height={64}
                priority
                className="h-11 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:scale-[1.02] sm:h-15"
              />
            </span>
            <span className="font-heading text-sm font-semibold tracking-[0.18em] text-white/90 md:hidden">
              AQUA ZEN
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Основное меню">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/24 text-white"
                    : "text-white/80 hover:bg-white/12 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm hover:bg-slate-50"
          >
            {site.phone}
          </a>
          <Link
            href="/kontakty"
            className="rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Заказать
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {open ? (
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
            <div className="mt-2 rounded-2xl bg-white/10 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                Услуги
              </p>
              <ul className="mt-2 space-y-1">
                {serviceCards.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={site.phoneHref}
              className="mt-2 rounded-full bg-white px-4 py-2 text-center font-semibold text-[var(--primary)] shadow-sm"
            >
              {site.phone}
            </a>
            <Link
              href="/kontakty"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/70 px-4 py-2 text-center font-semibold text-white"
            >
              Заказать
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
