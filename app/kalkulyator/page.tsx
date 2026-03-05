"use client";

import { useState } from "react";
import Link from "next/link";
import { calculatorRates } from "@/lib/data";

export default function CalculatorPage() {
  const [volume, setVolume] = useState(30);
  const [visits, setVisits] = useState(4);
  const [equipment, setEquipment] = useState(true);
  const [chemistry, setChemistry] = useState(true);

  const base = Math.max(calculatorRates.minMonthly, volume * calculatorRates.basePerCubic);
  const visitMultiplier = visits / 4;
  const total = Math.round(
    (base * visitMultiplier) + (equipment ? calculatorRates.equipment : 0) + (chemistry ? calculatorRates.chemistry : 0)
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold">Калькулятор стоимости обслуживания бассейна</h1>
      <p className="mt-2 text-[var(--muted)]">
        Узнайте ориентировочную стоимость обслуживания бассейна в Сочи в месяц. Точный расчёт после осмотра объекта.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div>
            <label htmlFor="volume" className="block font-medium">
              Объём бассейна, м³
            </label>
            <input
              id="volume"
              type="range"
              min="10"
              max="120"
              step="5"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--primary)]"
            />
            <p className="mt-1 text-2xl font-semibold text-[var(--primary)]">{volume} м³</p>
          </div>
          <div>
            <label htmlFor="visits" className="block font-medium">
              Выездов техника в месяц
            </label>
            <select
              id="visits"
              value={visits}
              onChange={(e) => setVisits(Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
            >
              <option value={2}>2 выезда</option>
              <option value={4}>4 выезда (рекомендуется)</option>
              <option value={8}>8 выездов</option>
              <option value={12}>12 выездов</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={equipment}
                onChange={(e) => setEquipment(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-[var(--primary)]"
              />
              <span>Обслуживание оборудования (насос, фильтр)</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={chemistry}
                onChange={(e) => setChemistry(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-[var(--primary)]"
              />
              <span>Водоподготовка без хлора (химия)</span>
            </label>
          </div>
        </div>

        <div className="rounded-xl border-2 border-[var(--primary)] bg-[var(--primary-light)]/30 p-6">
          <p className="text-sm font-medium text-[var(--muted)]">Ориентировочная стоимость в месяц</p>
          <p className="mt-2 text-4xl font-bold text-[var(--primary)]">{total.toLocaleString("ru-RU")} ₽</p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Включено: выезды техника по Сочи, контроль качества воды, обслуживание оборудования при отмеченных опциях.
            Химия и расходники оплачиваются отдельно по факту или входят в пакет по договору.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+78622601234"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 font-semibold text-white hover:bg-[var(--primary-hover)]"
            >
              Заказать расчёт
            </a>
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] px-5 py-2.5 font-semibold text-[var(--primary)] hover:bg-[var(--primary-light)]"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-[var(--muted)]">
        <Link href="/obsluzhivanie-basseynov" className="text-[var(--primary)] hover:underline">
          Подробнее об обслуживании бассейнов
        </Link>
      </p>
    </div>
  );
}
