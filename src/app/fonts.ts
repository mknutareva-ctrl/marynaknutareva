import { Manrope } from "next/font/google";

// Змінний шрифт: вага задається токенами --text-*--font-weight, окремо її тут не вказуємо.
export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});
