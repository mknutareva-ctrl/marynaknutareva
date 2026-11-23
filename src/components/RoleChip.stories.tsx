import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RoleChip } from "./RoleChip";

const meta = {
  title: "Components/RoleChip",
  component: RoleChip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Чип ролі над заголовком першого екрана: «UX/UI-дизайнерка». Лише підпис, не клікається.

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`children\` | текст ролі | обов'язковий |

**Вигляд:** заливка \`surface\`, акцентна точка 8 px і текст \`accent\` (контраст понад 9:1). Точка декоративна (\`aria-hidden\`).

**Токени:** кольори \`surface\`, \`accent\`; радіус \`rounded-control\`; текст \`text-caption\`; тінь \`shadow-chip\`; відступи 8 і 16 px (\`px-4 py-2\`, \`gap-2\`).

**Коли використовувати.** Одна роль над H1 першого екрана. Для стану роботи в картці є власний чіп у \`WorkCard\`.

**Як брати в код**

\`\`\`tsx
import { RoleChip } from "@/components/RoleChip";

<RoleChip>UX/UI-дизайнерка</RoleChip>
\`\`\`
`,
      },
    },
  },
  args: { children: "UX/UI-дизайнерка" },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof RoleChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
