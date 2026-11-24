import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Maryna Knutareva — UX/UI designer",
  description: "English version of the portfolio is coming soon.",
};

// Англійської версії ще немає: сторінка-заглушка, щоб перемикач EN не вів на 404.
const navItems = [{ label: "Home", href: "/" }];

export default function EnglishComingSoon() {
  return (
    <div lang="en">
      <Header name="Maryna Knutareva" items={navItems} language="EN" />
      <main className="bg-canvas font-sans text-ink">
        <div className="mx-auto flex max-w-page flex-col items-start gap-8 px-4 py-section md:px-page-x 2xl:px-0">
          <h1 className="text-heading lg:text-display">English version is coming soon</h1>
          <p className="text-lead text-ink-muted">
            The portfolio is currently available in Ukrainian only.
          </p>
          <Button href="/" size="lg">
            Go to the Ukrainian version
          </Button>
        </div>
      </main>
    </div>
  );
}
