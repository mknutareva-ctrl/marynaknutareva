import Image from "next/image";
import portrait from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { RoleChip } from "@/components/RoleChip";

// Сторінок «Роботи», «Про мене» тощо ще немає, тому пункти ведуть на якорі секцій.
const navItems = [
  { label: "Роботи", href: "#cases" },
  { label: "Про мене", href: "#about" },
  { label: "Співпраця", href: "#cooperation" },
  { label: "Контакти", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <Header name="Maryna Knutareva" items={navItems} />
      <main>
        <section className="relative overflow-hidden bg-canvas font-sans text-ink">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -left-20 size-glow rounded-full bg-glow blur-glow" />
            <div className="absolute bottom-16 left-1/3 size-glow rounded-full bg-glow blur-glow" />
            <div className="absolute top-16 right-0 size-glow rounded-full bg-glow blur-glow" />
          </div>
          <div className="relative mx-auto flex max-w-page flex-col gap-8 px-4 py-8 lg:flex-row lg:gap-6 lg:px-0 lg:py-page-x">
            <div className="flex flex-1 flex-col gap-16">
              <div className="flex flex-col items-start gap-6">
                <RoleChip>UX/UI-дизайнерка</RoleChip>
                <h1 className="text-heading lg:text-display">
                  Проєктую структуру та дизайн сайтів для експертів і нішевих брендів
                </h1>
              </div>
              <p className="text-lead">
                Від дослідження конкурентів і вайєрфреймів до UI і передачі в розробку
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#cases" size="lg">
                  Дивитись роботи
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  Написати
                </Button>
              </div>
            </div>
            <div className="relative aspect-portrait w-full overflow-hidden rounded-card bg-surface shadow-card lg:w-5/12 lg:shrink-0">
              <Image
                src={portrait}
                alt="Акварельний портрет Марини Кнутарєвої"
                fill
                priority
                sizes="(min-width: 1024px) 526px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
