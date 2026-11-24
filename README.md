# Портфоліо Марини Кнутарєвої

Сайт-портфоліо UX/UI-дизайнерки: проєктування структури й дизайну сайтів для експертів і нішевих брендів. Мова сайту: українська.

- Сайт: https://marynaknutareva.vercel.app
- Storybook (дизайн-система): https://marynaknutareva.vercel.app/storybook/

## Технології

- Next.js (App Router) і TypeScript
- Tailwind CSS 4: токени кольорів, типографіки, радіусів і тіней в `@theme` (`src/app/globals.css`)
- Manrope через `next/font`
- Storybook: історії й документація компонентів, сторінка токенів
- Vercel: публікація сайту, Storybook збирається разом із сайтом у `/storybook/`

## Дизайн-система

Токени живуть у CSS, компоненти в `src/components` (`Button`, `FormField`, `WorkCard`, `Navigation`, `Header`, `RoleChip`), історії лежать поруч із ними. Правила використання описані в `CLAUDE.md`, план сайту в `docs/plan-saitu-portfolio.html`.

## Запуск

```bash
npm install
npm run dev          # сайт, http://localhost:3000
npm run storybook    # Storybook, http://localhost:6006
npm run build        # збірка Storybook у public/storybook, потім сайту
npm run lint
```
