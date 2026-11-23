import type { Preview } from "@storybook/nextjs-vite";
import { manrope } from "../src/app/fonts";
import "../src/app/globals.css";

// Сторінки docs (MDX) не проходять через декоратор історій, тому змінну шрифту ставимо на <html> iframe.
if (typeof document !== "undefined") {
  document.documentElement.classList.add(manrope.variable);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Storybook не бачить layout сайту, тому клас зі змінною шрифту вішаємо тут.
    (Story) => (
      <div className={`${manrope.variable} font-sans text-ink`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
