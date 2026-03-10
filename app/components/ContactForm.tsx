"use client";

import { type ComponentProps, useState } from "react";

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Ошибка при отправке");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.");
    } finally {
      setIsSending(false);
    }
  };

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
          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--primary)] py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[var(--primary-hover)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSending}
          >
            {isSending ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      )}
    </>
  );
}
