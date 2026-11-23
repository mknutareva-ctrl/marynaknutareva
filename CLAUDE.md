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

### Прийняті винятки (аудит не піднімає їх повторно)

- Позиції кіл світіння в hero (`-top-16`, `-left-20`, `bottom-16`, `top-16`, `left-1/3`): декоративне позиціонування поза набором 8–32 px.
- Логотип `h-10` (40px) у шапці й `gap-16` (64px) між блоками тексту в hero.
- Посилання-логотип у шапці без hover: лише focus.
- Службові утиліти Tailwind поза `@theme`: `z-10`, `z-20`, `opacity-50`, `bg-surface-header/80`, `outline-2 outline-offset-2`, `underline-offset-4`.
- Відступи поза набором 8–32 px нічим не блокуються (Tailwind 4 це не дозволяє): правило тримається на цьому файлі й аудиті, лінтера немає.
- Перемикач «EN» веде на `/en`, якої ще немає: до появи англійської версії не чіпаємо.
- Кнопка з `href` є посиланням і не приймає `disabled`, `disabledReason`, `onClick`, `type` (перевіряє TypeScript).

## Посилання

- План сайту: `docs/plan-saitu-portfolio.html`
