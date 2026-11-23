import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "Роботи", href: "#works" },
  { label: "Про мене", href: "#about" },
  { label: "Співпраця", href: "#cooperation" },
  { label: "Контакти", href: "#contacts" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Навігація сайту: пункти меню. На широкому екрані пункти стоять у ряд, на вузькому меню згортається в кнопку «Меню».

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`items\` | масив \`{ label, href }\` | немає |
| \`active\` | \`href\` активного пункту | немає (активного пункту немає) |
| \`label\` | назва навігації для скрінрідерів | «Головне меню» |

**Стани пункту**

- Default: текст \`ink-muted\`.
- Hover: заливка \`line\`, текст \`ink\`.
- Focus (Tab): контур 2 px кольору \`ink\` з відступом 2 px, контраст понад 3:1.
- Активний: текст \`accent\` і підкреслення, тож позначка не лише кольором. Пункт має \`aria-current="page"\`.

**Вузький екран (до 768 px).** Пункти ховаються за кнопкою «Меню» (\`aria-expanded\`, \`aria-controls\`). Відкрите меню лежить поверх контенту й не зсуває сторінку вниз. Закривається клавішею Escape (фокус повертається на кнопку), повторним натисканням на кнопку і вибором пункту. Перевіряти через Viewport у тулбарі Storybook.

**Токени:** кольори \`ink\`, \`ink-muted\`, \`accent\`, \`line\`, \`surface-header\` (панель відкритого меню); радіус \`rounded-control\`; текст \`text-nav\`; відступи 8, 12, 16 px (\`px-3 py-2\`, \`gap-2\`, \`p-4\`). Кнопка меню — компонент Button, варіант \`secondary\`.

**Коли використовувати.** Одна навігація в шапці сайту. Активним став той пункт, що відповідає поточній сторінці або розділу. Пунктів має бути небагато, щоб вони вміщалися в ряд.

**Як брати в код**

\`\`\`tsx
import { Navigation } from "@/components/Navigation";

<Navigation
  items={[
    { label: "Роботи", href: "/works" },
    { label: "Про мене", href: "/about" },
  ]}
  active="/works"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    active: {
      control: "select",
      options: ["", ...items.map((item) => item.href)],
      description: "Активний пункт (порожньо: жодного)",
    },
    items: { control: false },
    label: { control: "text" },
  },
  args: {
    items,
    active: "#works",
    label: "Головне меню",
  },
  // Під навігацією лежить контент, щоб було видно, що відкрите меню його перекриває, а не зсуває.
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Navigation {...args} active={args.active || undefined} />
      </div>
      <p className="text-body text-ink-muted">
        Контент сторінки під навігацією. Відкрите на вузькому екрані меню накриває його зверху,
        а цей текст лишається на місці.
      </p>
    </div>
  ),
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
