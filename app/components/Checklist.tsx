import { checklistItems } from "@/lib/data";

export function Checklist({ items = checklistItems }: { items?: readonly string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
