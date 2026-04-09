import Image from "next/image";
import { portfolioItems } from "@/lib/data";

export function ServiceGallery({ ids }: { ids: readonly string[] }) {
  const items = portfolioItems.filter((item) => ids.includes(item.id));

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.id}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <figcaption className="p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              {item.type}
            </p>
            <p className="mt-2 font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
