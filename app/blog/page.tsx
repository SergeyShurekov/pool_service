import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Блог об обслуживании бассейнов: как чистить бассейн, сколько стоит обслуживание и какую химию использовать.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-bold sm:text-4xl">Блог</h1>
      <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
        Полезные статьи о чистке, обслуживании, химии и стоимости работ по
        бассейнам в Сочи.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
          >
            <h2 className="font-heading text-2xl font-semibold">
              {post.title}
            </h2>
            <p className="mt-4 flex-1 text-sm leading-6 text-[var(--muted)]">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
            >
              Читать статью
              <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
