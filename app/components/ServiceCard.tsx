import Link from "next/link";

export function ServiceCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-lg"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
        Услуга
      </p>
      <h3 className="mt-3 font-heading text-xl font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
        Подробнее
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
