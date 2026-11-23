@AGENTS.md

# Портфоліо Марини Кнутарєвої

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт (Vercel публікує кожен пуш), тому перед пушем питай мене.

## Токени

Усі токени оголошені в `src/app/globals.css` (блок `@theme`), назви за роллю. Стандартні кольори, розміри тексту й радіуси Tailwind скинуті, тож інших значень, окрім цих, немає.

- **Кольори** (`--color-*`): `canvas`, `surface`, `surface-header`, `line`, `border-field`, `accent`, `ink`, `ink-muted`, `danger`, `glow`, `shadow` (основа тіней, окремо як колір не вживається).
- **Текст** (`--text-*`, разом з висотою рядка, трекінгом і жирністю): `display`, `heading`, `title`, `lead`, `button`, `body`, `nav`, `caption`.
- **Радіуси** (`--radius-*`): `control` (кнопки й поля), `card` (картки). Круг: вбудоване `rounded-full`.
- **Тіні** (`--shadow-*`): `chip` (чіп ролі), `control` (кнопки), `card` (портрет у hero).
- **Розмиття** (`--blur-*`): `glow` (`blur-glow`, світіння hero), `header` (`backdrop-blur-header`, шапка).
- **Скинуті без заміни:** жирність, трекінг і висота рядка окремими утилітами (`font-medium`, `tracking-*`, `leading-*`), `drop-shadow`, `inset-shadow`, `ease`, `animate`, `perspective` і розміри `max-w-3xl` тощо. Жирність, трекінг і висота рядка задані парами в `--text-*`.
- **Пропорції** (`--aspect-*`): `cover` (4/3), `portrait` (3/4).
- **Шрифт** (`--font-sans`): Manrope через `next/font`, файл `src/app/fonts.ts`.
- **Лише для сторінок, не для компонентів:** `--container-page` (1296px, `max-w-page`) і `--spacing-section` (96px, `py-section`).
- **Відступи сторінки поза набором:** `--spacing-page-x` (72px: `px-page-x` у шапці, `py-page-x` у hero) і `--spacing-glow` (384px, `size-glow`, коло світіння). Виняток без токена: логотип `h-10` (40px) і `gap-16` (64px) у hero.
- **Відступи** окремо не оголошені: беремо кроки Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), наприклад `p-4`.

## Компоненти

Заповнимо далі.

## Правила

Заповнимо далі.

## Посилання

- План сайту: `docs/plan-saitu-portfolio.html`
