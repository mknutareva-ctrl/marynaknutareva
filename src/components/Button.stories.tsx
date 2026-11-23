import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка для головних дій на сайті: «Написати мені», надсилання форми, перехід до проєкту.

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`variant\` | \`primary\`, \`secondary\` | \`primary\` |
| \`size\` | \`md\`, \`lg\` | \`md\` |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`disabledReason\` | текст пояснення | немає |
| \`href\` | адреса сторінки чи якоря (\`#cases\`) | немає: тоді це \`<button>\` |

З \`href\` кнопка стає посиланням з тим самим виглядом (\`disabled\` для посилання не діє).

Решта атрибутів \`<button>\` (\`type\`, \`onClick\`, \`aria-*\`) проходять як є.

**Варіанти і стани**

- \`primary\`: заливка \`accent\`, текст \`surface\` (контраст 9,5:1). Hover: заливка \`ink\`.
- \`secondary\`: заливка \`surface\`, межа \`line\`, текст \`ink\` (понад 15:1). Hover: заливка \`line\`. Межа \`line\` декоративна: кнопку виділяють заливка й підпис.
- Focus (Tab): контур 2 px кольору \`ink\` з відступом 2 px, контраст з фоном понад 3:1.
- Disabled: напівпрозора, hover не діє. Робиться через \`aria-disabled\`, тож кнопка лишається у фокусі. З \`disabledReason\` під нею з'являється пояснення, зв'язане через \`aria-describedby\`.

**Токени:** кольори \`accent\`, \`ink\`, \`ink-muted\`, \`surface\`, \`line\`; радіус \`rounded-control\`; тінь \`shadow-control\`; текст \`text-nav\` (md) і \`text-button\` (lg), \`text-caption\` для пояснення; відступи 8, 12, 16, 24, 32 px (\`px-6 py-3\`, \`px-8 py-4\`, \`gap-2\`).

**Коли використовувати.** \`primary\` — одна головна дія на екран. \`secondary\` — додаткова дія поруч із головною. Якщо дія веде на іншу сторінку чи розділ, передай \`href\`, і кнопка стане посиланням. Вимикай кнопку лише з поясненням, чому вона недоступна.

**Як брати в код**

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="secondary" size="lg">Дивитись роботи</Button>
<Button href="#cases" size="lg">Дивитись роботи</Button>
<Button disabled disabledReason="Заповніть усі поля форми">Надіслати</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Заповніть усі поля форми",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
