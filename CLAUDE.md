@AGENTS.md

# Портфоліо Марини Кнутарєвої

## Проєкт і стек

Сайт-портфоліо UX/UI-дизайнерки, українською. Дизайн-система живе в коді: токени в CSS, компоненти в `src/components`, історії в Storybook.

- Next.js (App Router), TypeScript, Tailwind CSS 4 (токени в `@theme`, без `tailwind.config`).
- Шрифт: Manrope через `next/font`, файл `src/app/fonts.ts`, утиліта `font-sans`.
- Команди: `npm run dev` (сайт), `npm run storybook` (порт 6006), `npm run build-storybook`, `npm run lint`.

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт (Vercel публікує кожен пуш), тому перед пушем питай мене.

## Кольори

Усі токени в `src/app/globals.css`, блок `@theme static`. Стандартна палітра Tailwind скинута (`--color-*: initial`), тож існують лише ці кольори. Клас = утиліта + назва: `bg-accent`, `text-ink-muted`, `border-line`.

| Токен | Для чого |
| --- | --- |
| `canvas` | фон сторінки |
| `surface` | картки, чіп ролі, друга кнопка, заливка поля, текст на `accent` |
| `surface-header` | фон шапки й відкритого меню |
| `line` | розділювачі, рамки карток, hover другої кнопки, чіп стану |
| `border-field` | межа поля вводу (3,5:1 на білому) |
| `accent` | єдиний акцент: основна кнопка, активна мова й пункт меню, чіп ролі |
| `ink` | основний текст, hover основної кнопки, контур фокуса |
| `ink-muted` | приглушений текст: опис, пояснення, placeholder |
| `danger` | текст помилки й межа поля в стані помилки |
| `glow` | декоративне світіння hero, підкладка під обкладинкою |
| `shadow` | основа тіней, окремо як колір не вживається |

## Типографіка

Токен `--text-*` задає розмір, висоту рядка, трекінг і жирність разом: потрібен лише `text-<назва>`, без `font-medium`, `tracking-*`, `leading-*` (їх скинуто).

| Клас | Розмір | Жирність | Де |
| --- | --- | --- | --- |
| `text-display` | 64px | 500 | H1 |
| `text-heading` | 36px | 600 | заголовок секції |
| `text-title` | 20px | 600 | назва в картці |
| `text-lead` | 20px | 400 | підзаголовок hero |
| `text-button` | 20px | 600 | текст великої кнопки |
| `text-body` | 16px | 500 | основний текст, підписи полів |
| `text-nav` | 16px | 500 | меню, текст звичайної кнопки |
| `text-caption` | 12px | 700 | UA/EN, чіп, помилка, пояснення |

## Відступи, радіуси й пропорції

- **Відступи в компонентах:** кроки Tailwind 2, 3, 4, 6, 8 = 8, 12, 16, 24, 32 px (`p-4`, `gap-2`, `px-6 py-3`). Власні значення відступів не оголошуємо.
- **Лише для сторінок:** `max-w-page` (1296px), `py-section` (96px), `px-page-x` / `py-page-x` (72px), `size-glow` (384px, коло світіння).
- **Радіуси:** `rounded-control` (8px, кнопки й поля), `rounded-card` (16px, картки), `rounded-full` (круг, вбудоване).
- **Тіні:** `shadow-chip`, `shadow-control` (кнопки), `shadow-card` (портрет у hero).
- **Розмиття:** `blur-glow` (64px), `backdrop-blur-header` (12px).
- **Пропорції:** `aspect-cover` (4/3, обкладинка роботи), `aspect-portrait` (3/4, портрет). Решта `aspect-*` Tailwind не скинута.

## Компоненти

Лежать у `src/components/<Назва>.tsx`, поруч `<Назва>.stories.tsx`. Опис пропсів у JSDoc над типом.

| Компонент | Варіанти й пропси | Стани |
| --- | --- | --- |
| `Button` | `variant`: `primary` / `secondary`; `size`: `md` / `lg`; з `href` це посилання (`next/link`) | hover, focus, disabled (`disabled` + `disabledReason`) |
| `FormField` | `label` (обов'язковий), `error`, решта пропсів `<input>` | hover, focus, disabled, error |
| `WorkCard` | `brand`, `title`, `description`, `href`, `image`, необов'язкові `status`, `imageAlt` | hover, focus (уся картка є посиланням) |
| `Navigation` | `items`, `active`, `label`; на вузькому екрані згортається в кнопку «Меню», Esc закриває | hover, focus, active (`aria-current="page"`) |
| `Header` | `name`, `items`, `active`, `language` (`UA` / `EN`); логотип, навігація, перемикач мови | hover, focus, активна мова |
| `RoleChip` | `children` (назва ролі) | не інтерактивний |

Деталі:

- `Button` без `href` приймає `disabled`, `onClick`, `type`; з `href` вони заборонені типами (`disabled?: never`).
- `FormField` у стані помилки: `aria-invalid`, межа `danger`, іконка й текст під полем, зв'язок через `aria-describedby`.
- Текст інтерфейсу українською, мова чипів і підписів — як у макеті.

## Правила

1. Кольори, розміри тексту, радіуси, тіні й пропорції тільки з токенів `@theme`.
2. Класів, яких немає в `@theme`, не використовувати: `text-white`, `bg-black`, `text-lg`, `rounded-lg`, `shadow-md`, `font-bold`, `max-w-3xl`.
3. Відступи в компонентах тільки з кроків 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8 у класах). Токени розкладки (`max-w-page`, `py-section`, `px-page-x`, `size-glow`) тільки на сторінках.
4. Довільні значення в квадратних дужках заборонені: `p-[13px]`, `h-[150px]`, `text-[#1f4d46]`.
5. Нових кольорів не додавати. Потрібен інший колір — спитай мене.
6. Готові компоненти використовувати замість нових: кнопка це `Button`, поле це `FormField`.
7. Кожен інтерактивний елемент має стани default, hover, focus, disabled; поле форми ще й помилку. Фокус: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`.
8. Вимкнена кнопка через `aria-disabled` (не `disabled`), з поясненням `disabledReason`. Стилі hover обмежувати `not-aria-disabled:`.
9. Картинки лежать у `src/assets` і імпортуються (`import logo from "@/assets/logo.svg"`), у `next/image` іде імпортований об'єкт.
10. Після змін у компоненті оновлювати його історію й документацію в Storybook (скіл `storybook`). Змінив токен — перевір `src/stories/Tokens.mdx`.

### Прийняті винятки (аудит не піднімає їх повторно)

- Позиції кіл світіння в hero (`-top-16`, `-left-20`, `bottom-16`, `top-16`, `left-1/3`): декоративне позиціонування поза набором 8–32 px.
- Логотип `h-10` (40px) у шапці й `gap-16` (64px) між блоками тексту в hero.
- Посилання-логотип у шапці без hover: лише focus.
- Службові утиліти поза `@theme`: `z-10`, `z-20`, `opacity-50`, `bg-surface-header/80`, `outline-2 outline-offset-2`, `underline-offset-4`.
- Відступи поза набором нічим не блокуються (Tailwind 4 це не дозволяє): правило тримається на цьому файлі й аудиті, лінтера немає.
- Перемикач «EN» веде на `/en`: поки це сторінка-заглушка «English version is coming soon» (`src/app/en/page.tsx`). Коли зʼявиться англійська версія, заглушку замінити справжнім вмістом.

## Посилання

- План сайту: `docs/plan-saitu-portfolio.html`
- Storybook: `npm run storybook`, http://localhost:6006. Історії `Components/*` лежать поруч із компонентами, токени на сторінці `Foundations/Tokens` (`src/stories/Tokens.mdx`), конфіг у `.storybook/`.
