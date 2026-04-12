export const site = {
  name: "Aqua Zen",
  phone: "+7 (938) 418-58-34",
  phoneHref: "tel:+79384185834",
  whatsappHref: "https://wa.me/79384185834",
  telegramHandle: "@DanteAlighery",
  telegramHref: "https://t.me/DanteAlighery",
  region: "Сочи",
  address: "г. Сочи, Краснодарский край",
  domain: "https://obsluzivanie-baseynov-sochi.ru",
} as const;

export const checklistItems = [
  "Контроль химии",
  "Чистка ватерлинии",
  "Уборка пылесосом",
  "Чистка фильтра",
  "Химическая обработка",
] as const;

export const faqItems = [
  {
    question: "Как часто нужно обслуживать бассейн в Сочи?",
    answer:
      "В сезон частный бассейн обычно требует регулярного визита 1-2 раза в неделю. Частота зависит от объема чаши, температуры, загрузки и состояния оборудования.",
  },
  {
    question: "Можно ли почистить бассейн без полной замены воды?",
    answer:
      "В большинстве случаев да. Мы проводим диагностику, корректируем химию, чистим чашу и фильтрацию, поэтому часто удается восстановить воду без полного слива.",
  },
  {
    question: "Вы работаете только с частными бассейнами?",
    answer:
      "Нет. Обслуживаем частные бассейны, мини-отели, гостевые дома, спа-зоны и небольшие коммерческие объекты по Сочи и ближайшим районам.",
  },
  {
    question: "Сколько стоит обслуживание бассейна?",
    answer:
      "Стоимость зависит от объема бассейна, частоты выездов и состояния оборудования. Базовые ориентиры есть в прайсе на сайте, точную цену уточняем после осмотра или короткого созвона.",
  },
  {
    question: "Что входит в выезд специалиста?",
    answer:
      "Проверка воды, корректировка химии, чистка чаши и ватерлинии, уборка пылесосом, обслуживание фильтрации и рекомендации по дальнейшей эксплуатации.",
  },
] as const;

export const priceItems = [
  { name: "Обслуживание бассейна", price: 6000, unit: "месяц" },
  { name: "Чистка бассейна", price: 5000, unit: "раз" },
  { name: "Ремонт бассейна", price: 3000, unit: "от" },
  { name: "Консервация бассейна", price: 7000, unit: "раз" },
  { name: "Диагностика оборудования", price: 2000, unit: "раз" },
  { name: "Химия для бассейна", price: 2500, unit: "от" },
] as const;

export const calculatorRates = {
  basePerCubic: 400,
  minMonthly: 12000,
  equipment: 2000,
  chemistry: 1500,
} as const;

export const portfolioItems = [
  {
    id: "arlekin",
    title: "Частный бассейн в Адлере",
    type: "Частный дом",
    volume: "45 м3",
    description: "Комплексное обслуживание и восстановление прозрачности воды.",
    image: "/portfolio/arlekin_do_posle.webp",
  },
  {
    id: "hotel",
    title: "Бассейн мини-отеля в Головинке",
    type: "Мини-отель",
    volume: "70 м3",
    description: "Экстренная чистка без полного слива воды.",
    image: "/portfolio/hotel_do_posle.webp",
  },
  {
    id: "imperial",
    title: "Гостиничный бассейн в Сочи",
    type: "Гостиница",
    volume: "80 м3",
    description: "Восстановили воду и вернули объект в работу к утру.",
    image: "/portfolio/imperial_do_posle.webp",
  },
  {
    id: "karkas",
    title: "Каркасный бассейн в Лазаревском",
    type: "Частный дом",
    volume: "30 м3",
    description: "Чистка, запуск и восстановление оборудования.",
    image: "/portfolio/karkas_do_posle.webp",
  },
  {
    id: "spa",
    title: "SPA-зона частного дома",
    type: "SPA",
    volume: "12 м3",
    description: "Поддерживающее обслуживание и корректировка химии.",
    image: "/portfolio/spa.webp",
  },
  {
    id: "kids",
    title: "Детский бассейн в коттеджном поселке",
    type: "Детский бассейн",
    volume: "15 м3",
    description: "Безопасная химическая обработка и регулярный уход.",
    image: "/portfolio/kinder_pool_cottage.webp",
  },
] as const;

export const beforeAfterSlides = [
  {
    slug: "arlekin-adler-45m3",
    src: "/arlekin_do_posle.webp",
    alt: "Результат обслуживания бассейна Арлекин",
    title: "Частный дом, Адлер | 45 м³",
    description: "Вода без хлора, чистота за 24 часа",
  },
  {
    slug: "hotel-golovinka-70m3",
    src: "/hotel_do_posle.webp",
    alt: "Результат обслуживания бассейна в гостинице",
    title: "Гостиничный комплекс, Головинка | 70 м³",
    description: "Клиент хотел слить воду, но сэкономил 30 000 руб.",
  },
  {
    slug: "imperial-sochi-80m3",
    src: "/imperial_do_posle.webp",
    alt: "Результат обслуживания бассейна Imperial",
    title: "Гостиничный комплекс, Сочи | 80 м³",
    description: "Экстренный выезд, восстановили к утру!",
  },
  {
    slug: "karkas-lazarevskoe-30m3",
    src: "/karkas_do_posle.webp",
    alt: "Результат обслуживания каркасного бассейна",
    title: "Каркасник при доме, Лазаревское | 30 м³",
    description: "Сломался насос, восстановили, запустили!",
  },
] as const;

export type BeforeAfterSlide = (typeof beforeAfterSlides)[number];
export type BeforeAfterSlideSlug = BeforeAfterSlide["slug"];

export function getBeforeAfterCaseHref(slug: BeforeAfterSlideSlug) {
  return `/portfolio/${slug}`;
}

export const serviceCards = [
  {
    slug: "obsluzhivanie-basseynov",
    title: "Обслуживание бассейнов",
    shortTitle: "Обслуживание",
    description:
      "Регулярный сервис, контроль воды, чистка чаши и обслуживание оборудования по графику.",
  },
  {
    slug: "chistka-basseyna",
    title: "Чистка бассейна",
    shortTitle: "Чистка",
    description:
      "Разовая или регулярная чистка бассейна с восстановлением прозрачности воды без лишних простоев.",
  },
  {
    slug: "remont-basseynov",
    title: "Ремонт бассейнов",
    shortTitle: "Ремонт",
    description:
      "Диагностика и ремонт насосов, фильтров, автоматики и другого оборудования бассейна.",
  },
  {
    slug: "konservaciya-basseyna",
    title: "Консервация бассейна",
    shortTitle: "Консервация",
    description:
      "Подготовка бассейна к зиме и безопасный запуск в новый сезон без повреждений оборудования.",
  },
  {
    slug: "himiya-dlya-basseyna",
    title: "Химия для бассейна",
    shortTitle: "Химия",
    description:
      "Подбор и применение профессиональной химии для чистой и безопасной воды в бассейне.",
  },
] as const;

export type ServiceSlug = (typeof serviceCards)[number]["slug"];

type ServiceSectionBase = {
  title: string;
  description?: string;
};

export type ServiceSection =
  | (ServiceSectionBase & {
      type: "list";
      items: readonly string[];
    })
  | (ServiceSectionBase & {
      type: "cards";
      items: readonly {
        title: string;
        description: string;
      }[];
    })
  | (ServiceSectionBase & {
      type: "steps";
      items: readonly string[];
    })
  | (ServiceSectionBase & {
      type: "price";
      items: readonly {
        label: string;
        value: string;
      }[];
    })
  | (ServiceSectionBase & {
      type: "text";
      paragraphs: readonly string[];
    });

export type ServicePageData = {
  title: string;
  h1: string;
  metaTitle: string;
  description: string;
  heroDescription: string;
  sections: readonly ServiceSection[];
  ctaTitle: string;
  ctaDescription: string;
};

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  "obsluzhivanie-basseynov": {
    title: "Обслуживание бассейнов в Сочи",
    h1: "Обслуживание бассейнов в Сочи",
    metaTitle: "Обслуживание бассейнов в Сочи — цена и сервис",
    description:
      "Регулярное обслуживание бассейнов в Сочи: контроль химии, чистка, проверка оборудования и сервис для частных и коммерческих объектов.",
    heroDescription:
      "Регулярное обслуживание бассейна — это чистая вода, стабильная химия и исправная работа оборудования. Мы берём на себя полный контроль состояния бассейна.",
    sections: [
      {
        type: "list",
        title: "Что входит в обслуживание бассейна",
        items: [
          "Контроль уровня pH и хлора",
          "Очистка стенок и дна",
          "Проверка оборудования",
          "Чистка фильтра",
          "Добавление химии",
        ],
      },
      {
        type: "cards",
        title: "Виды обслуживания",
        description: "Выберите подходящий формат ухода за бассейном.",
        items: [
          {
            title: "Разовое обслуживание",
            description: "Подходит при разовых проблемах или перед сезоном.",
          },
          {
            title: "Регулярное обслуживание",
            description:
              "Оптимально для поддержания чистоты и безопасности воды.",
          },
        ],
      },
      {
        type: "price",
        title: "Сколько стоит обслуживание бассейна",
        description: "Цена зависит от объёма бассейна, частоты обслуживания и состояния воды.",
        items: [
          { label: "Ежемесячное обслуживание", value: "от 6 000 ₽" },
          { label: "Разовое обслуживание", value: "от 5 000 ₽" },
        ],
      },
      {
        type: "text",
        title: "Обслуживание частных бассейнов",
        paragraphs: [
          "Регулярный уход за бассейнами в частных домах и на виллах.",
        ],
      },
      {
        type: "text",
        title: "Обслуживание коммерческих бассейнов",
        paragraphs: [
          "Работаем с отелями, СПА и бассейнами с высокой нагрузкой.",
        ],
      },
    ],
    ctaTitle: "Заказать обслуживание",
    ctaDescription: "Оставьте заявку — рассчитаем стоимость.",
  },
  "chistka-basseyna": {
    title: "Чистка бассейна в Сочи",
    h1: "Чистка бассейна в Сочи",
    metaTitle: "Чистка бассейна в Сочи — цена и выезд",
    description:
      "Чистка бассейнов в Сочи: удаление загрязнений, чистка стенок и дна, восстановление прозрачности воды и настройка химии.",
    heroDescription:
      "Проводим разовую и регулярную чистку бассейнов в Сочи. Возвращаем прозрачность воде, убираем налет и отложения, очищаем фильтрацию и подбираем корректную химию.",
    sections: [
      {
        type: "list",
        title: "Что входит в чистку бассейна",
        items: [
          "Удаление налёта и загрязнений",
          "Чистка стенок и дна",
          "Чистка ватерлинии",
          "Проверка фильтрации",
          "Корректировка химии воды",
        ],
      },
      {
        type: "text",
        title: "Когда нужна чистка",
        paragraphs: [
          "Чистка нужна, если вода мутнеет, появляется налёт, водоросли или бассейн долго стоял без ухода.",
          "Выезжаем для разовой чистки перед сезоном, после простоя и при заметном ухудшении качества воды.",
        ],
      },
      {
        type: "price",
        title: "Стоимость чистки",
        items: [{ label: "Чистка бассейна", value: "от 5 000 ₽" }],
      },
    ],
    ctaTitle: "Заказать чистку бассейна",
    ctaDescription: "Оставьте заявку — оценим состояние бассейна и согласуем выезд.",
  },
  "remont-basseynov": {
    title: "Ремонт бассейнов в Сочи",
    h1: "Ремонт бассейнов в Сочи",
    metaTitle: "Ремонт бассейнов в Сочи — оборудование и системы",
    description:
      "Ремонт бассейнов в Сочи: диагностика оборудования, ремонт насосов, фильтров, систем циркуляции и срочный выезд.",
    heroDescription:
      "Проводим диагностику и ремонт оборудования бассейнов: насосов, фильтров, систем циркуляции.",
    sections: [
      {
        type: "list",
        title: "Какие поломки устраняем",
        items: [
          "Не работает насос",
          "Слабая фильтрация",
          "Протечки",
          "Сбои системы",
        ],
      },
      {
        type: "text",
        title: "Диагностика оборудования",
        paragraphs: [
          "Проверяем все системы и выявляем причину неисправности.",
        ],
      },
      {
        type: "price",
        title: "Стоимость ремонта",
        items: [
          { label: "Диагностика", value: "от 2 000 ₽" },
          { label: "Ремонт", value: "от 3 000 ₽" },
        ],
      },
      {
        type: "text",
        title: "Срочный выезд",
        paragraphs: ["Возможен выезд в день обращения."],
      },
    ],
    ctaTitle: "Заказать ремонт",
    ctaDescription: "Оставьте заявку — приедем и устраним проблему.",
  },
  "konservaciya-basseyna": {
    title: "Консервация бассейна в Сочи",
    h1: "Консервация бассейна в Сочи",
    metaTitle: "Консервация бассейна в Сочи на зиму",
    description:
      "Консервация бассейна в Сочи на зиму: защита оборудования, обработка воды, подготовка чаши и профилактика повреждений.",
    heroDescription:
      "Подготовим бассейн к зиме: защитим оборудование и предотвратим повреждения.",
    sections: [
      {
        type: "list",
        title: "Зачем нужна консервация",
        items: [
          "Защита от замерзания",
          "Сохранение оборудования",
          "Предотвращение загрязнений",
        ],
      },
      {
        type: "list",
        title: "Что входит в услугу",
        items: [
          "Очистка бассейна",
          "Обработка химией",
          "Подготовка оборудования",
        ],
      },
      {
        type: "price",
        title: "Цена консервации",
        items: [{ label: "Консервация бассейна", value: "от 7 000 ₽" }],
      },
    ],
    ctaTitle: "Заказать консервацию",
    ctaDescription: "Оставьте заявку — подготовим бассейн к зиме.",
  },
  "himiya-dlya-basseyna": {
    title: "Химия для бассейна в Сочи",
    h1: "Химия для бассейна в Сочи",
    metaTitle: "Химия для бассейна в Сочи — подбор и обслуживание",
    description:
      "Химия для бассейна в Сочи: подбор средств, контроль pH и хлора, обслуживание воды и безопасная обработка бассейнов.",
    heroDescription:
      "Подбираем и используем профессиональную химию для бассейнов. Обеспечиваем безопасную и чистую воду.",
    sections: [
      {
        type: "list",
        title: "Какие средства используются",
        items: ["Хлор", "Альгициды", "Коагулянты"],
      },
      {
        type: "list",
        title: "Как правильно подбирать химию",
        description: "Подбор зависит от параметров конкретного бассейна.",
        items: ["Объёма бассейна", "Типа воды", "Частоты использования"],
      },
      {
        type: "list",
        title: "Частые ошибки",
        items: ["Передозировка химии", "Неправильный баланс pH"],
      },
    ],
    ctaTitle: "Заказать обслуживание с химией",
    ctaDescription: "Оставьте заявку — подберём оптимальный вариант.",
  },
};

export const mainServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Обслуживание бассейнов в Сочи",
  areaServed: "Сочи",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phone,
    address: site.address,
  },
  serviceType:
    "Обслуживание, чистка, ремонт, консервация и подбор химии для бассейнов",
};

export const localBusinessSchema = {
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
  description:
    "Сервисное обслуживание, чистка, ремонт, консервация и подбор химии для бассейнов в Сочи.",
  url: site.domain,
};

type BlogSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type BlogLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  toc: readonly {
    id: string;
    label: string;
  }[];
  sections: readonly BlogSection[];
  relatedLinks?: readonly BlogLink[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "kak-chistit-basseyn",
    title: "Как чистить бассейн",
    metaTitle: "Как чистить бассейн — этапы и советы",
    description:
      "Как чистить бассейн: этапы чистки, частые ошибки и практические советы для владельцев бассейнов.",
    intro:
      "Собрали короткую памятку по чистке бассейна, чтобы было проще поддерживать воду прозрачной и не доводить объект до дорогого восстановления.",
    toc: [
      { id: "etapy-chistki", label: "Этапы чистки" },
      { id: "oshibki", label: "Ошибки" },
      { id: "sovety", label: "Советы" },
    ],
    sections: [
      {
        id: "etapy-chistki",
        title: "Этапы чистки",
        bullets: [
          "Соберите мусор с поверхности и проверьте состояние воды.",
          "Очистите стенки, дно и ватерлинию.",
          "Промойте фильтр и скорректируйте химию.",
        ],
      },
      {
        id: "oshibki",
        title: "Ошибки",
        bullets: [
          "Добавлять химию без измерения pH и хлора.",
          "Игнорировать загрязнение фильтра.",
          "Откладывать чистку до сильного помутнения воды.",
        ],
      },
      {
        id: "sovety",
        title: "Советы",
        bullets: [
          "Проверяйте воду регулярно, особенно в сезон жары.",
          "Не запускайте бассейн после дождей и активного использования.",
          "При стойком помутнении лучше заказать профессиональную чистку.",
        ],
      },
    ],
    relatedLinks: [{ href: "/chistka-basseyna", label: "Перейти к услуге чистки бассейна" }],
  },
  {
    slug: "stoimost-obsluzhivaniya-basseyna",
    title: "Сколько стоит обслуживание бассейна",
    metaTitle: "Сколько стоит обслуживание бассейна в Сочи",
    description:
      "От чего зависит стоимость обслуживания бассейна: объём, состояние воды, частота выездов и примеры цен.",
    intro:
      "Стоимость обслуживания зависит не только от размера чаши. Ниже коротко разобрали основные факторы и ориентиры по цене.",
    toc: [
      { id: "ot-chego-zavisit-cena", label: "От чего зависит цена" },
      { id: "primery", label: "Примеры" },
    ],
    sections: [
      {
        id: "ot-chego-zavisit-cena",
        title: "От чего зависит цена",
        bullets: [
          "От объёма бассейна и расхода химии.",
          "От частоты обслуживания и графика выездов.",
          "От состояния воды и исправности оборудования.",
        ],
      },
      {
        id: "primery",
        title: "Примеры",
        bullets: [
          "Ежемесячное обслуживание — от 6 000 ₽.",
          "Разовое обслуживание — от 5 000 ₽.",
          "Если есть неисправности оборудования, цена увеличивается после диагностики.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/obsluzhivanie-basseynov",
        label: "Перейти к услуге обслуживания бассейнов",
      },
    ],
  },
  {
    slug: "himiya-dlya-basseyna",
    title: "Химия для бассейна: что использовать",
    metaTitle: "Химия для бассейна: что использовать",
    description:
      "Какая химия для бассейна используется на практике, какие ошибки встречаются чаще всего и куда обратиться за обслуживанием.",
    intro:
      "Химия для бассейна работает только при правильной дозировке и регулярном контроле воды. Вот базовые ориентиры, которые помогут не ошибиться.",
    toc: [
      { id: "bazovye-sredstva", label: "Какие средства используют" },
      { id: "tipichnye-oshibki", label: "Частые ошибки" },
      { id: "kuda-obratitsya", label: "Связанные услуги" },
    ],
    sections: [
      {
        id: "bazovye-sredstva",
        title: "Какие средства используют",
        bullets: [
          "Хлор для дезинфекции воды.",
          "Альгициды для борьбы с водорослями.",
          "Коагулянты для улучшения прозрачности воды.",
        ],
      },
      {
        id: "tipichnye-oshibki",
        title: "Частые ошибки",
        bullets: [
          "Передозировка химии.",
          "Неправильный баланс pH.",
          "Попытка решить проблему химией без чистки и проверки фильтрации.",
        ],
      },
      {
        id: "kuda-obratitsya",
        title: "Связанные услуги",
        paragraphs: [
          "Если нужна не только химия, но и полный контроль воды, лучше сочетать подбор средств с регулярным обслуживанием, чисткой или выездной диагностикой.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/himiya-dlya-basseyna", label: "Подбор химии для бассейна" },
      { href: "/obsluzhivanie-basseynov", label: "Обслуживание бассейнов" },
      { href: "/chistka-basseyna", label: "Чистка бассейна" },
    ],
  },
] as const;
