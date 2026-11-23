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

type Appearance = {
  /** Вигляд кнопки: `primary` — на кольорі accent, `secondary` — із заливкою surface і межею line. */
  variant?: keyof typeof variants;
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: keyof typeof sizes;
};

type ButtonAsButton = Omit<ComponentProps<"button">, "disabled"> &
  Appearance & {
    /** Вимикає кнопку через `aria-disabled`: вона лишається у фокусі, але не спрацьовує. */
    disabled?: boolean;
    /** Пояснення під вимкненою кнопкою; зв'язується з нею через `aria-describedby`. */
    disabledReason?: string;
    href?: undefined;
  };

type ButtonAsLink = Appearance &
  Pick<ComponentProps<"a">, "className" | "children" | "aria-label"> & {
    /** Якщо задано, замість `<button>` рендериться посилання (`<a>`): для переходів на сторінку чи якір. */
    href: string;
    // Посилання не має стану «вимкнено» і не приймає обробників кнопки: TypeScript це забороняє.
    disabled?: never;
    disabledReason?: never;
    onClick?: never;
    type?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Кнопка дизайн-системи: основна і другорядна, два розміри.
 * Вимкнена кнопка лишається доступною з клавіатури (`aria-disabled`), а причину читає скрінрідер.
 * З `href` це посилання з тим самим виглядом; `disabled`, `onClick` і `type` для нього не приймаються.
 */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) return <ButtonLink {...props} />;
  return <ButtonElement {...props} />;
}

function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...rest
}: ButtonAsLink) {
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
  return (
    <Link href={href} aria-label={rest["aria-label"]} className={classes}>
      {children}
    </Link>
  );
}

function ButtonElement({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  className,
  onClick,
  type = "button",
  children,
  ...rest
}: ButtonAsButton) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");

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
