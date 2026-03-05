"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <h2 className="font-heading text-xl font-semibold">Оставить заявку</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Оставьте контакты — перезвоним, ответим на вопросы по обслуживанию бассейнов в Сочи и рассчитаем стоимость.
      </p>
      {sent ? (
        <p className="mt-4 rounded-lg bg-[var(--primary-light)] p-4 text-sm font-medium text-[var(--primary)]">
          Заявка отправлена. Мы перезвоним вам в ближайшее время.
        </p>
      ) : (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm shadow-inner"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm shadow-inner"
            required
          />
          <textarea
            name="message"
            placeholder="Сообщение (объём бассейна, тип услуги)"
            rows={3}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm shadow-inner"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--primary)] py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary-hover)] hover:shadow-md"
          >
            Отправить заявку
          </button>
        </form>
      )}
    </>
  );
}
