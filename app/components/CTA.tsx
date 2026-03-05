import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({ title = "Закажите обслуживание бассейна в Сочи", description = "Оставьте заявку — перезвоним и рассчитаем стоимость." }: CTAProps) {
  return (
    <section className="bg-[var(--primary)] py-12 text-white shadow-md">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-2 text-white/90">{description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+78622601234"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--primary)] shadow-sm transition hover:bg-slate-100 hover:shadow-md"
          >
            Позвонить
          </a>
          <Link
            href="/kontakty"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </section>
  );
}
