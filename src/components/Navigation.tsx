"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "./Button";

export type NavigationItem = {
  /** Текст пункту меню. */
  label: string;
  /** Куди веде пункт. */
  href: string;
};

export type NavigationProps = {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** `href` активного пункту (поточна сторінка або розділ). Без нього активного пункту немає. */
  active?: string;
  /** Назва навігації для скрінрідерів. */
  label?: string;
};

const link =
  "block rounded-control px-3 py-2 text-nav transition-colors hover:bg-line hover:text-ink " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const linkDefault = "text-ink-muted";
// Активний пункт: колір accent і підкреслення, щоб позначка не трималась лише на кольорі.
const linkActive = "text-accent underline underline-offset-4";

// Вузький екран: список лежить поверх контенту (absolute) і не зсуває сторінку.
// Від md: звичайний ряд пунктів, кнопка меню прихована.
const listClosed = "hidden md:flex";
const listOpen = "flex";
const listBase =
  "absolute inset-x-0 top-full z-10 flex-col gap-2 border-b border-line bg-surface-header p-4 " +
  "md:static md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0";

/**
 * Навігація сайту: пункти меню в ряд, а на вузькому екрані меню згортається в кнопку.
 * Відкрите меню лежить поверх контенту й закривається клавішею Escape.
 * Панель меню прив’язується до найближчого предка з `position: relative` (у шапці це сама шапка).
 */
export function Navigation({ items, active, label = "Головне меню" }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const buttonWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonWrap.current?.querySelector("button")?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav aria-label={label} className="font-sans">
      <div ref={buttonWrap} className="md:hidden">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Закрити" : "Меню"}
        </Button>
      </div>
      <ul id={listId} className={`${listBase} ${open ? listOpen : listClosed}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={item.href === active ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`${link} ${item.href === active ? linkActive : linkDefault}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
