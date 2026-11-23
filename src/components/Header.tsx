import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { Navigation, type NavigationItem } from "./Navigation";

export type HeaderLanguage = "UA" | "EN";

export type HeaderProps = {
  /** Назва сайту для скрінрідерів: це опис логотипа, посилання на головну. */
  name: string;
  /** Пункти меню. */
  items: NavigationItem[];
  /** `href` активного пункту меню. */
  active?: string;
  /** Поточна мова сайту. */
  language?: HeaderLanguage;
};

const languages: { code: HeaderLanguage; lang: string; href: string }[] = [
  { code: "UA", lang: "uk", href: "/" },
  { code: "EN", lang: "en", href: "/en" },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * Шапка сайту: логотип, навігація і перемикач мови.
 * Прилипає до верху сторінки, фон напівпрозорий із розмиттям.
 * На вузькому екрані навігація згортається в кнопку, а меню відкривається на всю ширину шапки.
 */
export function Header({ name, items, active, language = "UA" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface-header/80 font-sans backdrop-blur-header">
      <div className="flex items-center gap-2 px-4 py-3 md:px-18 md:py-4">
        <div className="flex flex-1 justify-start">
          <Link href="/" className={`block rounded-control ${focus}`}>
            <Image src={logo} alt={name} priority className="h-8 w-auto md:h-10" />
          </Link>
        </div>
        <Navigation items={items} active={active} />
        <div className="flex md:flex-1 md:justify-end">
          <ul aria-label="Мова" className="flex items-center gap-2">
            {languages.map((item) => {
              const current = item.code === language;
              return (
                <li key={item.code}>
                  <Link
                    href={item.href}
                    lang={item.lang}
                    aria-current={current ? "true" : undefined}
                    className={
                      `flex size-8 items-center justify-center rounded-full text-caption transition-colors ${focus} ` +
                      (current ? "bg-accent text-surface" : "text-ink hover:bg-line")
                    }
                  >
                    {item.code}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
