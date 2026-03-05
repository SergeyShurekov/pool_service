import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "../components/CTA";

export const metadata: Metadata = {
  title: "Бассейн без хлора в Сочи — чистая вода без хлорки",
  description:
    "Строим и обслуживаем бассейны с гарантией чистоты воды без хлора. Бассейн без хлорки — без запаха, без вреда для кожи и аллергии. Технологии водоподготовки без хлора в Сочи.",
  keywords: [
    "бассейн без хлора",
    "бассейн без хлорки",
    "бассейны без хлорки",
    "вода без хлора бассейн",
  ],
};

export default function BasseynBezHloraPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Бассейн без хлора — наше главное преимущество</h1>
      <p className="mt-3 text-lg text-[var(--muted)]">
        Строим и обслуживаем бассейны с гарантией чистоты воды без хлора. Никакого запаха хлорки, раздражения кожи и аллергии. Идеально для частных домов, дач и малых гостиниц в Сочи.
      </p>

      <section className="mt-10 rounded-xl border-2 border-[var(--primary)] bg-[var(--primary-light)]/20 p-6">
        <h2 className="font-heading text-xl font-semibold text-[var(--primary)]">УТП: чистая вода без хлора</h2>
        <p className="mt-2 text-[var(--foreground)]">
          Мы не используем хлорку в бассейне как основной способ дезинфекции. Вместо этого — комбинация активного кислорода, УФ-стерилизации и при необходимости минимальной дозы реагентов. Результат: вода безопасна для купания, но не пахнет хлоркой и не вредит коже и глазам. Бассейн без хлорки в Сочи — это реально и доступно.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Почему бассейн без хлорки лучше</h2>
        <ul className="mt-4 space-y-2 text-[var(--muted)]">
          <li>— Нет запаха хлорки в бассейне</li>
          <li>— Нет раздражения глаз и кожи (бассейн хлорка глаза — не про нас)</li>
          <li>— Подходит тем, у кого аллергия на хлорку в бассейне</li>
          <li>— Безопасно для детей и беременных</li>
          <li>— Мягкая вода, приятная для купания</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Как мы добиваемся чистоты без хлора</h2>
        <p className="mt-2 text-[var(--muted)]">
          Используем системы водоподготовки на основе активного кислорода и УФ-ламп. Оборудование для бассейна без хлорки подбираем под объём и тип чаши. Обслуживание включает контроль параметров воды и дозирование бесхлорной химии. Договор на обслуживание бассейна без хлора — с теми же условиями, что и для обычного сервиса, но с акцентом на вашу «безхлорную» схему.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Для кого подойдёт</h2>
        <p className="mt-2 text-[var(--muted)]">
          Бассейн без хлорки идеален для частного дома, дачи, детского бассейна и малых гостиниц в Сочи — там, где важны комфорт и безопасность гостей. Стоимость обслуживания бассейна без хлора сопоставима с классической схемой; разница — в выборе реагентов и оборудования.
        </p>
      </section>

      <section className="mt-10 flex flex-wrap gap-4">
        <Link href="/obsluzhivanie-basseynov" className="text-[var(--primary)] hover:underline">
          Обслуживание бассейнов
        </Link>
        <Link href="/himicheskaya-obrabotka-vody" className="text-[var(--primary)] hover:underline">
          Водоподготовка и химия
        </Link>
      </section>

      <CTA title="Заказать бассейн без хлора в Сочи" />
    </div>
  );
}
