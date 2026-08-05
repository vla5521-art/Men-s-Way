# Лендинг «Путь мужчины»

Production-ready React/Vite лендинг по утвержденной структуре и визуальной концепции проекта.

## Требования
- Node.js 20+
- npm 10+

## Установка и запуск
```bash
npm ci
npm run dev
```

## Проверки
```bash
npm run lint
npm run typecheck
npm run build
```

## Preview production-сборки
```bash
npm run preview
```

## Деплой на Vercel
1. Загрузить проект в GitHub.
2. В Vercel выбрать **Add New → Project**.
3. Импортировать репозиторий.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Нажать Deploy.

## Контент
Основные тексты находятся в `src/data/content.ts`.

## Изображения
Локальные изображения находятся в `src/assets/`:
- `logo-dark.jpg` — логотип на темном фоне;
- `community.webp` — desktop-визуал сообщества;
- `community-mobile.webp` — mobile-визуал.

## Форма
Форма работает в демонстрационном режиме. Для реальной отправки укажите `VITE_FORM_ENDPOINT` в `.env` на основе `.env.example`.

## Временные заглушки
Секции «Преподаватели» и «Отзывы» созданы технически, но не содержат вымышленных данных. После утверждения контента замените текст заглушек в `src/components/Sections.tsx`.

## Примечание по sitemap
В `public/sitemap.xml` замените `https://example.com/` на реальный домен после публикации.

## Подготовка package-lock.json
В среде создания архива доступ к npm-реестру был недоступен, поэтому `package-lock.json` не был сформирован автоматически. Перед первым деплоем выполните один раз:
```bash
npm install
```
После этого зафиксируйте созданный `package-lock.json` в репозитории. В дальнейшем используйте `npm ci`.
