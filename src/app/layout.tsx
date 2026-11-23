import type { Metadata } from "next";
import { manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maryna Knutareva — UX/UI designer",
  description: "Портфоліо UX/UI-дизайнерки: структура й дизайн сайтів для експертів і нішевих брендів.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
