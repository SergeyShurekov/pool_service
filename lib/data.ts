export const site = {
  name: "Aqua Zen",
  phone: "+7 (938) 418-58-34",
  region: "Сочи",
  address: "г. Сочи, Краснодарский край",
} as const;

export const priceItems = [
  { name: "Комплексное обслуживание (до 30 м³)", price: 12000, unit: "мес" },
  { name: "Комплексное обслуживание (30–50 м³)", price: 19000, unit: "мес" },
  { name: "Комплексное обслуживание (50–80 м³)", price: 27000, unit: "мес" },
  { name: "Комплексное обслуживание (80+ м³)", price: 36000, unit: "мес" },
  { name: "Разовая чистка бассейна", price: 6000, unit: "раз" },
  { name: "Обслуживание оборудования (диагностика)", price: 3500, unit: "раз" },
  { name: "Ремонт насоса", price: 4500, unit: "от" },
  { name: "Замена песочного фильтра", price: 2500, unit: "от" },
  { name: "Химическая обработка воды (без хлора)", price: 5000, unit: "от" },
  { name: "Консервация / расконсервация", price: 12000, unit: "сезон" },
];

export const portfolioItems = [
  {
    id: "1",
    title: "Частный бассейн в Адлере",
    type: "Частный дом",
    volume: "45 м³",
    description: "Комплексное обслуживание с системой водоподготовки без хлора.",
    image: "/portfolio/caravella_1.webp",
  },
  {
    id: "2",
    title: "Бассейн мини-отеля в Красной Поляне",
    type: "Малая гостиница",
    volume: "80 м³",
    description: "Строительство под ключ и ежемесячное сервисное обслуживание.",
    image: "/portfolio/caravella_2.webp",
  },
  {
    id: "3",
    title: "Бассейн на даче, Лазаревское",
    type: "Дача",
    volume: "25 м³",
    description: "Обслуживание каркасного бассейна, водоподготовка без хлора.",
    image: "/portfolio/mini_hotel_kp.webp",
  },
  {
    id: "4",
    title: "СПА-зона частного дома, Сочи",
    type: "Частный дом",
    volume: "12 м³",
    description: "Обслуживание спа-бассейна и гидромассажа.",
    image: "/portfolio/spa.webp",
  },
  {
    id: "5",
    title: "Детский бассейн в коттеджном поселке",
    type: "Частный дом",
    volume: "15 м³",
    description: "Безопасная водоподготовка без хлора для детей.",
    image: "/portfolio/kinder_pool_cottage.webp",
  },
  {
    id: "6",
    title: "Бассейн гостевого дома, Имеретинка",
    type: "Малая гостиница",
    volume: "60 м³",
    description: "Договор на обслуживание, ремонт оборудования.",
    image: "/portfolio/hotel_pool_imeretinka.webp",
  },
];

export const calculatorRates = {
  basePerCubic: 400,
  minMonthly: 12000,
  equipment: 2000,
  chemistry: 1500,
};
