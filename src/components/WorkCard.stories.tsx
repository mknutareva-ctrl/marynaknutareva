import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover.png";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Картка роботи в портфоліо: обкладинка, назва з чіпом стану, заголовок і короткий опис. Уся картка клікабельна і веде на сторінку роботи.

**Параметри**

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`brand\` | назва бренду або проєкту | немає |
| \`status\` | текст чіпа стану, наприклад «В процесі» | чіпа немає |
| \`title\` | заголовок: що це за робота | немає |
| \`description\` | короткий опис, одне-два речення | немає |
| \`href\` | адреса сторінки роботи | немає |
| \`image\` | обкладинка, імпортована з \`src/assets\` | немає |
| \`imageAlt\` | опис обкладинки для скрінрідерів | порожній (декоративна) |

**Стани**

- Default: заливка \`surface\`, межа \`line\`, відступ усередині 32 px. Обкладинка із закругленням \`rounded-card\` у пропорції \`aspect-cover\`. Під нею назва \`ink\` з чіпом стану праворуч (заливка \`line\`, круглий), заголовок \`ink\` і опис \`ink-muted\`.
- Hover: межа стає \`ink-muted\`, назва підкреслюється.
- Focus (Tab): контур 2 px кольору \`ink\` з відступом 2 px, контраст понад 3:1.

Варіантів і розмірів немає: ширину картки задає колонка, у якій вона лежить, а висота обкладинки визначається пропорцією.

**Токени:** кольори \`surface\`, \`line\`, \`ink\`, \`ink-muted\`, \`glow\` (фон під обкладинкою); радіуси \`rounded-card\` і \`rounded-full\` (чіп); пропорція \`aspect-cover\`; текст \`text-title\` (назва), \`text-body\` (заголовок і опис), \`text-caption\` (чіп); відступи 8, 12, 16, 32 px (\`p-8\`, \`gap-4\`, \`gap-3\`, \`px-3 py-2\`).

**Коли використовувати.** У списку робіт на головній і на сторінці портфоліо. Обкладинка завжди в пропорції \`aspect-cover\`, вона обрізається за краями. Для однієї великої роботи на всю ширину потрібен окремий компонент. Не клади в картку другу кнопку чи посилання: вона вже сама посилання.

**Як брати в код.** Обкладинку клади в \`src/assets\` і імпортуй, не з \`public\`.

\`\`\`tsx
import cover from "@/assets/work-cover.png";
import { WorkCard } from "@/components/WorkCard";

<WorkCard
  brand="OLETICA"
  status="В процесі"
  title="Інтернет-магазин нішевої косметики"
  description="Розробка структури, CJM та вайєрфреймів."
  href="/works/oletica"
  image={cover}
  imageAlt="Макет сайту на екрані ноутбука"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    brand: { control: "text" },
    status: { control: "text", description: "Порожній текст прибирає чіп" },
    title: { control: "text" },
    description: { control: "text" },
    href: { control: "text" },
    imageAlt: { control: "text" },
    image: { control: false },
  },
  args: {
    brand: "OLETICA",
    status: "В процесі",
    title: "Інтернет-магазин нішевої косметики",
    description: "Розробка структури, CJM та вайєрфреймів для бренду з індивідуальним підбором догляду.",
    href: "#",
    image: cover,
    imageAlt: "Макет сайту на екрані ноутбука",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
