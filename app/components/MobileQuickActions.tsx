import { site } from "@/lib/data";

export function MobileQuickActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <a
          href={site.phoneHref}
          className="flex-1 rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Позвонить
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
        >
          WhatsApp
        </a>
        <a
          href={site.telegramHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}
