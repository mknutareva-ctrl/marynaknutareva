import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

type StoryArgs = Omit<ComponentProps<typeof FormField>, "error"> & {
  hasError: boolean;
  errorText: string;
};

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["error"] },
    docs: {
      description: {
        component: `
Текстове поле з підписом для форм: ім'я, пошта, повідомлення. Підпис завжди над полем.

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`label\` | підпис над полем (обов'язковий) | немає |
| \`defaultValue\` | початкове значення, стан «заповнене» | порожньо |
| \`error\` | текст помилки; якщо він є, поле в стані помилки | немає |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`placeholder\`, \`type\`, \`name\`, \`id\` | як у \`<input>\` | \`type="text"\` |

Решта атрибутів \`<input>\` проходять як є.

**Стани**

- Default: заливка \`surface\`, межа \`border-field\` (3,5:1 на білому), текст \`ink\`, підказка в полі \`ink-muted\`.
- Hover: межа стає \`ink\`.
- Focus (Tab або клік): контур 2 px кольору \`ink\` з відступом 2 px, контраст понад 3:1.
- Заповнене: те саме, що default, але з текстом. Перемикається значенням у Controls.
- Помилка: межа \`danger\`, під полем іконка й текст кольором \`danger\`. Поле позначене \`aria-invalid\`, текст помилки зв'язаний через \`aria-describedby\`. Помилка не передається лише кольором.
- Disabled: напівпрозоре, курсор \`not-allowed\`, hover не діє.

**Токени:** кольори \`surface\`, \`border-field\`, \`ink\`, \`ink-muted\`, \`danger\`; радіус \`rounded-control\`; текст \`text-body\` (підпис і значення), \`text-caption\` (помилка); відступи 8, 12, 16 px (\`px-4 py-3\`, \`gap-2\`).

**Коли використовувати.** Для короткого однорядкового тексту. Підпис завжди видимий, підказкою в полі його не замінюй. Помилку пиши по суті: що не так і як виправити. Для багаторядкового тексту потрібен окремий компонент.

**Як брати в код**

\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Ім'я" name="name" placeholder="Як до вас звертатись" />
<FormField label="Пошта" type="email" error="Введіть пошту у форматі name@example.com" />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "text", description: "Значення поля: заповнене або порожнє" },
    hasError: { control: "boolean", description: "Показати стан помилки" },
    errorText: { control: "text", description: "Текст помилки" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    label: "Пошта",
    defaultValue: "",
    placeholder: "name@example.com",
    hasError: false,
    errorText: "Введіть пошту у форматі name@example.com",
    disabled: false,
  },
  // key перемальовує поле, коли значення змінюється в Controls.
  render: ({ hasError, errorText, ...args }) => (
    <FormField key={String(args.defaultValue)} {...args} error={hasError ? errorText : undefined} />
  ),
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
