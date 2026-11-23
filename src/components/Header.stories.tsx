import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";

const items = [
  { label: "Роботи", href: "#works" },
  { label: "Про мене", href: "#about" },
  { label: "Співпраця", href: "#cooperation" },
  { label: "Контакти", href: "#contacts" },
];

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Шапка сайту: логотип, навігація і перемикач мови UA/EN. Стоїть на кожній сторінці.

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`name\` | опис логотипа для скрінрідерів (назва сайту) | немає |
| \`items\` | пункти меню, масив \`{ label, href }\` | немає |
| \`active\` | \`href\` активного пункту меню | немає |
| \`language\` | \`UA\`, \`EN\` | \`UA\` |

**Склад і стани**

- Логотип: картинка \`src/assets/logo.svg\` заввишки 32 px, посилання на головну. Параметр \`name\` стає її описом для скрінрідерів. Focus: контур 2 px кольору \`ink\`.
- Розкладка на широкому екрані: логотип ліворуч (206×40 px), навігація точно по центру шапки, перемикач мови праворуч.
- Навігація: компонент Navigation з усіма його станами (default, hover, focus, активний пункт). Відстань між текстами пунктів 48 px.
- Перемикач мови: два круглі посилання UA і EN розміром 32×32 px (\`rounded-full\`, \`text-caption\`). Активна мова: заливка \`accent\`, текст \`surface\` (контраст 9,5:1), \`aria-current="true"\`. Інша: без заливки, текст \`ink\`, на hover заливка \`line\`. Focus: контур 2 px кольору \`ink\`. Кожне посилання має свій атрибут \`lang\`.
- Фон шапки: \`surface-header\` з прозорістю 80 % і розмиттям 12 px, знизу межа \`line\`. Шапка прилипає до верху сторінки.

**Вузький екран (до 768 px).** Пункти меню згортаються в кнопку «Меню», перемикач мови лишається поруч. Відкрите меню лежить поверх контенту на всю ширину шапки й закривається клавішею Escape. Перевіряти через Viewport у тулбарі Storybook.

**Токени:** кольори \`surface-header\`, \`line\`, \`ink\`, \`surface\`, \`accent\`; радіуси \`rounded-control\`, \`rounded-full\` (перемикач мови); текст \`text-caption\` (плюс \`text-nav\` у навігації); відступи: на вузькому екрані 8, 12, 16 px (\`px-4\`, \`py-3\`, \`gap-2\`); на широкому за макетом 72 px по боках (\`md:px-18\`) і 16 px зверху й знизу (\`md:py-4\`). Цього бокового відступу немає в наборі кроків 8–32 px: він узятий із макета Figma.

**Коли використовувати.** Одна шапка на сторінку, вгорі. Ширину контенту й відступи від країв вікна задає сторінка, шапка лише розтягується на ширину батька.

**Як брати в код**

\`\`\`tsx
import { Header } from "@/components/Header";

<Header
  name="Maryna Knutareva"
  items={[
    { label: "Роботи", href: "/works" },
    { label: "Про мене", href: "/about" },
  ]}
  active="/works"
  language="UA"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    active: {
      control: "select",
      options: ["", ...items.map((item) => item.href)],
      description: "Активний пункт меню (порожньо: жодного)",
    },
    language: { control: "select", options: ["UA", "EN"] },
    items: { control: false },
  },
  args: {
    name: "Maryna Knutareva",
    items,
    active: "#works",
    language: "UA",
  },
  // Під шапкою лежить абзац: видно, що відкрите на вузькому екрані меню його перекриває.
  render: (args) => (
    <div>
      <Header {...args} active={args.active || undefined} />
      <p className="p-8 text-body text-ink-muted">
        Контент сторінки під шапкою. Відкрите на вузькому екрані меню накриває цей текст, а не
        зсуває його.
      </p>
    </div>
  ),
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
