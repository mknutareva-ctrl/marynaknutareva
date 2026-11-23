"use client";

import Link from "next/link";
import { useId, type ComponentProps, type MouseEvent } from "react";

const base =
  "inline-flex items-center justify-center rounded-control border font-sans shadow-control transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

const variants = {
  primary: "border-accent bg-accent text-surface not-aria-disabled:hover:bg-ink",
  secondary: "border-line bg-surface text-ink not-aria-disabled:hover:bg-line",
} as const;

const sizes = {
  md: "px-6 py-3 text-nav",
  lg: "px-8 py-4 text-button",
} as const;

export type ButtonProps = Omit<ComponentProps<"button">, "disabled"> & {
  /** Вигляд кнопки: `primary` — на кольорі accent, `secondary` — із заливкою surface і межею line. */
  variant?: keyof typeof variants;
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: keyof typeof sizes;
  /** Вимикає кнопку через `aria-disabled`: вона лишається у фокусі, але не спрацьовує. */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою; зв'язується з нею через `aria-describedby`. */
  disabledReason?: string;
  /** Якщо задано, замість `<button>` рендериться посилання (`<a>`): для переходів на сторінку чи якір. */
  href?: string;
};

/**
 * Кнопка дизайн-системи: основна і другорядна, два розміри.
 * Вимкнена кнопка лишається доступною з клавіатури (`aria-disabled`), а причину читає скрінрідер.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  className,
  onClick,
  type = "button",
  href,
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");

  if (href !== undefined) {
    return (
      <Link href={href} aria-label={rest["aria-label"]} className={classes}>
        {children}
      </Link>
    );
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={handleClick}
        className={classes}
      >
        {children}
      </button>
      {showReason && (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      )}
    </div>
  );
}
