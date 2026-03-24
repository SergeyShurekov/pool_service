# Aqua Zen - App Summary (EN + RU)

## EN

### What It Is
Next.js marketing site for pool construction and maintenance services in the Sochi region.
Includes lead capture, pricing, portfolio content, and a contact form that sends requests by email.

### Who It Is For
Homeowners and small hotel or property managers in Sochi seeking pool maintenance, repair, and chlorine-free water treatment.

### What It Does
- Service landing pages for maintenance, repair, and water treatment.
- Chlorine-free pool positioning and related content.
- Interactive monthly cost calculator.
- Price table with service tiers.
- Portfolio gallery of completed projects.
- Contact page with phone links and web form.
- Email delivery of form submissions via SMTP.

### Technology Stack
- `Next.js` with App Router for the frontend and server routes.
- `React` for UI rendering.
- `Nodemailer` for SMTP-based contact form delivery.
- `Docker` for containerized build and runtime.
- `Portainer` for stack-based deployment and environment variable management.
- `Nginx` via `nginxproxy/nginx-proxy` as the reverse proxy.
- `Let's Encrypt` via `nginxproxy/acme-companion` for automatic SSL certificates.

### Architecture
- The `web` container builds and runs the Next.js application and listens on internal port `3000`.
- The `web` container is attached to the shared Docker network `shared-network`.
- The `web` container is not published directly to the internet; it uses `expose: 3000`.
- The `nginx-proxy` container listens on ports `80` and `443` on the server and routes requests to the correct container by reading Docker metadata through `/var/run/docker.sock`.
- The `web` container provides routing hints through environment variables:
  - `VIRTUAL_HOST` for the domain name.
  - `VIRTUAL_PORT=3000` for the internal app port.
  - `LETSENCRYPT_HOST` for certificate issuance.
  - `LETSENCRYPT_EMAIL` for certificate registration.
- The `nginx-proxy-acme` container watches Docker events, requests certificates from Let's Encrypt, and stores them in `/etc/nginx/certs`.
- HTTPS is terminated at `nginx-proxy`, then traffic is forwarded internally to the `web` container over Docker networking.
- Contact form flow: browser -> Next.js route `POST /api/contact` -> `nodemailer` -> SMTP provider -> `CONTACT_TO_EMAIL`.
- Database: not used in the current repo.

### Environment Variables
Local development uses `.env.local`.
Production deployment in Portainer should use stack environment variables instead of mounting `.env.local`.

Required SMTP variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO_EMAIL`

#### `.env.example` Usage
`.env.example` is a template that shows which variables the app expects.

For local development:
1. Create `.env.local` based on `.env.example`.
1. Fill in the SMTP values.
1. Run the app locally.

For Portainer:
1. Do not rely on `.env.local` inside the stack.
1. Add the same variable names in the Portainer Stack environment variables section.
1. Deploy the stack so Portainer injects the values into the containers.

### Local Run
1. `npm install`
1. Create `.env.local` from `.env.example`.
1. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO_EMAIL`.
1. Run `npm run dev`.
1. Open `http://localhost:3000`.

### Deploy On A New Server
This repository is set up so deployment can be done with one `git clone` and stack configuration in Portainer.

Prerequisites:
- Docker installed on the server.
- Portainer installed and accessible.
- DNS A record for `obsluzivanie-baseynov-sochi.ru` pointed to the server IP.
- Ports `80` and `443` open on the server.

Steps:
1. Clone the repository on the server:
   `git clone <YOUR_REPOSITORY_URL>`
1. Open Portainer and create a new Stack.
1. Use the repository's [docker-compose.yml](c:/Users/shure/WebMaster/pool_service/docker-compose.yml) as the stack definition.
1. In the Stack environment variables section, add:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_TO_EMAIL`
1. Deploy the stack.
1. Portainer starts three containers:
   - `poolservice-web`
   - `nginx-proxy`
   - `nginx-proxy-acme`
1. `nginx-proxy` receives traffic for the configured domain and forwards it to the Next.js container.
1. `nginx-proxy-acme` requests and renews the Let's Encrypt certificate automatically.

### Deployment Notes
- The application container is built from the local `Dockerfile`.
- SSL certificates are stored on the server through mounted volumes.
- If the stack fails with an env file error, remove `env_file` usage and define variables directly in Portainer. The current compose file already uses the Portainer-friendly approach.

---

## RU

### Что Это
Маркетинговый сайт на Next.js для строительства и обслуживания бассейнов в Сочи.
Включает сбор заявок, цены, портфолио и форму обратной связи с отправкой заявок на email.

### Для Кого
Владельцы частных домов и небольших гостиниц в Сочи, которым нужно обслуживание, ремонт и водоподготовка без хлора.

### Что Делает
- Лендинги услуг: обслуживание, ремонт, водоподготовка.
- Позиционирование и контент о бассейнах без хлора.
- Интерактивный калькулятор ежемесячной стоимости.
- Прайс с типовыми тарифами.
- Галерея выполненных объектов.
- Контакты с телефонами и формой заявки.
- Отправка заявок на email через SMTP.

### Стек Технологий
- `Next.js` с App Router для фронтенда и серверных маршрутов.
- `React` для интерфейса.
- `Nodemailer` для отправки заявок через SMTP.
- `Docker` для сборки и запуска в контейнерах.
- `Portainer` для разворачивания стека и управления переменными окружения.
- `Nginx` через `nginxproxy/nginx-proxy` как reverse proxy.
- `Let's Encrypt` через `nginxproxy/acme-companion` для автоматического SSL.

### Архитектура
- Контейнер `web` собирает и запускает Next.js-приложение и слушает внутренний порт `3000`.
- Контейнер `web` подключен к общей Docker-сети `shared-network`.
- Контейнер `web` не публикуется напрямую наружу; используется `expose: 3000`.
- Контейнер `nginx-proxy` слушает порты `80` и `443` на сервере и маршрутизирует запросы в нужный контейнер, читая метаданные Docker через `/var/run/docker.sock`.
- Контейнер `web` передает подсказки для маршрутизации через переменные окружения:
  - `VIRTUAL_HOST` для домена.
  - `VIRTUAL_PORT=3000` для внутреннего порта приложения.
  - `LETSENCRYPT_HOST` для выпуска сертификата.
  - `LETSENCRYPT_EMAIL` для регистрации сертификата.
- Контейнер `nginx-proxy-acme` отслеживает события Docker, запрашивает сертификаты у Let's Encrypt и сохраняет их в `/etc/nginx/certs`.
- HTTPS завершается на `nginx-proxy`, после чего трафик по внутренней Docker-сети уходит в контейнер `web`.
- Поток формы обратной связи: браузер -> Next.js маршрут `POST /api/contact` -> `nodemailer` -> SMTP-провайдер -> `CONTACT_TO_EMAIL`.
- База данных в текущем репозитории не используется.

### Переменные Окружения
Для локальной разработки используется `.env.local`.
Для production-развёртывания через Portainer нужно задавать переменные окружения в настройках Stack, а не полагаться на `.env.local`.

Обязательные SMTP-переменные:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO_EMAIL`

#### Как Использовать `.env.example`
`.env.example` служит шаблоном и показывает, какие переменные ожидает приложение.

Для локальной разработки:
1. Создайте `.env.local` на основе `.env.example`.
1. Заполните SMTP-переменные.
1. Запустите приложение локально.

Для Portainer:
1. Не используйте `.env.local` как файл внутри Stack.
1. Добавьте те же имена переменных в разделе environment variables при создании Stack.
1. Разверните Stack, чтобы Portainer передал значения в контейнеры.

### Локальный Запуск
1. `npm install`
1. Создайте `.env.local` на основе `.env.example`.
1. Заполните `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO_EMAIL`.
1. Выполните `npm run dev`.
1. Откройте `http://localhost:3000`.

### Развёртывание На Новом Сервере
Репозиторий подготовлен так, чтобы развёртывание можно было сделать через один `git clone` и настройку Stack в Portainer.

Предварительные условия:
- Docker установлен на сервере.
- Portainer установлен и доступен.
- DNS A-запись для `obsluzivanie-baseynov-sochi.ru` указывает на IP сервера.
- На сервере открыты порты `80` и `443`.

Шаги:
1. Клонируйте репозиторий на сервер:
   `git clone <YOUR_REPOSITORY_URL>`
1. Откройте Portainer и создайте новый Stack.
1. Используйте [docker-compose.yml](c:/Users/shure/WebMaster/pool_service/docker-compose.yml) из репозитория как описание Stack.
1. В разделе environment variables добавьте:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_TO_EMAIL`
1. Выполните Deploy.
1. Portainer запустит три контейнера:
   - `poolservice-web`
   - `nginx-proxy`
   - `nginx-proxy-acme`
1. `nginx-proxy` примет запросы для нужного домена и передаст их в контейнер Next.js.
1. `nginx-proxy-acme` автоматически выпустит и будет продлевать сертификат Let's Encrypt.

### Заметки По Развёртыванию
- Контейнер приложения собирается из локального `Dockerfile`.
- SSL-сертификаты сохраняются на сервере через примонтированные volume.
- Если Stack падает с ошибкой про env file, нужно убрать `env_file` и задавать переменные через Portainer. Текущий `docker-compose.yml` уже использует правильный для Portainer подход.
