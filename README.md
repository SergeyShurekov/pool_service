# Pool Service Sochi — App Summary (EN + RU)

## EN

### What It Is

Next.js marketing site for pool construction and maintenance services in the Sochi region.  
Includes lead capture, pricing, and portfolio content.

### Who It Is For

Homeowners and small hotel or property managers in Sochi seeking pool maintenance, repair, and chlorine-free water treatment.

### What It Does

- Service landing pages for maintenance, repair, and water treatment.
- Chlorine-free pool positioning and related content.
- Interactive monthly cost calculator (volume, visits, options).
- Price table with service tiers.
- Portfolio gallery of completed projects.
- Contact page with phone links and web form.
- Sends form submissions to email via SMTP.

### How It Works

- Next.js App Router pages under `app/` render content and UI.
- Shared UI components in `app/components/`.
- Static content and rates in `lib/data.ts`.
- Contact form -> `POST /api/contact` -> `nodemailer` -> SMTP -> `CONTACT_TO_EMAIL`.
- Assets served from `public/` (icons, portfolio images).
- Database: Not found in repo.

### How To Run

1. `npm install`
1. Copy `.env.example` to `.env.local` and fill in: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO_EMAIL`.
1. `npm run dev` and open `http://localhost:3000`.

---

## RU

### Что Это

Маркетинговый сайт на Next.js для строительства и обслуживания бассейнов в Сочи.  
Есть сбор заявок, цены и портфолио.

### Для Кого

Владельцы частных домов и небольших гостиниц в Сочи, которым нужно обслуживание, ремонт и водоподготовка без хлора.

### Что Делает

- Лендинги услуг: обслуживание, ремонт, водоподготовка.
- Позиционирование и контент о бассейнах без хлора.
- Калькулятор стоимости в месяц (объем, выезды, опции).
- Прайс с типовыми тарифами.
- Галерея выполненных объектов.
- Контакты с телефонами и формой заявки.
- Отправка заявок на email через SMTP.

### Как Работает

- Страницы App Router в `app/` рендерят контент и интерфейс.
- Общие компоненты в `app/components/`.
- Данные и тарифы в `lib/data.ts`.
- Форма -> `POST /api/contact` -> `nodemailer` -> SMTP -> `CONTACT_TO_EMAIL`.
- Статика в `public/` (иконки, изображения портфолио).
- База данных: Not found in repo.

### Как Запустить

1. `npm install`
1. Скопируйте `.env.example` в `.env.local` и заполните: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO_EMAIL`.
1. `npm run dev` и открыть `http://localhost:3000`.

---

Source: repo evidence only. Missing items are explicitly marked as "Not found in repo."
