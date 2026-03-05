import { site } from "@/lib/data";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.region,
    addressRegion: "Краснодарский край",
  },
  areaServed: {
    "@type": "City",
    name: "Сочи",
  },
  description: "Сервисное обслуживание и строительство бассейнов в Сочи. Чистая вода без хлора. Обслуживание частных бассейнов и бассейнов для гостиниц.",
  url: "https://pool-service-sochi.ru",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
