import type { MetadataRoute } from "next";

const base = "https://obsluzivanie-baseynov-sochi.ru/";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/obsluzhivanie-basseynov",
    "/chistka-basseyna",
    "/remont-basseynov",
    "/konservaciya-basseyna",
    "/himiya-dlya-basseyna",
    "/blog",
    "/blog/kak-chistit-basseyn",
    "/blog/stoimost-obsluzhivaniya-basseyna",
    "/blog/himiya-dlya-basseyna",
    "/kontakty",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
