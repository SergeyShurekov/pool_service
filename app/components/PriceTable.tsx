import { priceItems } from "@/lib/data";

export function PriceTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] bg-slate-50/80">
            <th className="px-4 py-3 font-semibold text-[var(--foreground)]">Услуга</th>
            <th className="px-4 py-3 font-semibold text-[var(--foreground)] text-right">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {priceItems.map((item) => (
            <tr key={item.name} className="border-b border-[var(--border)] last:border-0">
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3 text-right font-medium">
                от {item.price.toLocaleString("ru-RU")} ₽ / {item.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--muted)]">
        Точная стоимость зависит от объема, состояния воды, оборудования и удаленности объекта. Оставьте заявку, и мы подскажем ориентир по вашему бассейну.
      </p>
    </div>
  );
}
