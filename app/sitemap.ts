import type { MetadataRoute } from "next";

const base = "https://obsluzivanie-baseynov-sochi.ru/";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/obsluzhivanie-basseynov",
    "/obsluzhivanie-basseynov-dlya-chastnyh-domov",
    "/remont-oborudovaniya-basseynov",
    "/himicheskaya-obrabotka-vody",
    "/basseyn-bez-hlora",
    "/portfolios",
    "/kalkulyator",
    "/kontakty",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
