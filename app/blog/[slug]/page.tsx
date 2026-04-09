import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, serviceCards } from "@/lib/data";

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.description,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
        <div>
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {post.intro}
          </p>

          <nav
            aria-label="Оглавление статьи"
            className="mt-8 rounded-2xl border border-[var(--border)] bg-slate-50 p-5"
          >
            <h2 className="font-heading text-xl font-semibold">Оглавление</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {post.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[var(--primary)] hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-[var(--muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {"subsections" in section && section.subsections ? (
                  <div className="mt-6 space-y-6">
                    {section.subsections.map((subsection) => (
                      <section key={subsection.title}>
                        <h3 className="font-heading text-xl font-semibold">
                          {subsection.title}
                        </h3>
                        <div className="mt-3 space-y-3 text-base leading-7 text-[var(--muted)]">
                          {subsection.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit">
          <h2 className="font-heading text-xl font-semibold">Услуги по теме</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceCards.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="font-medium text-[var(--primary)] hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-slate-50 p-4">
            <h3 className="font-heading text-lg font-semibold">Нужна помощь по объекту?</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Если не хочется разбираться в химии, фильтрации и графике ухода,
              напишите нам через страницу контактов.
            </p>
            <Link
              href="/kontakty"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
            >
              Перейти к контактам
              <span aria-hidden>→</span>
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
