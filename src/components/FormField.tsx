import { useId, type ComponentProps } from "react";

export type FormFieldProps = Omit<ComponentProps<"input">, "id"> & {
  /** Підпис над полем. Обов'язковий: кожне поле має назву. */
  label: string;
  /** Текст помилки. Якщо він є, поле переходить у стан помилки: межа danger, іконка й текст під полем. */
  error?: string;
  /** Власний id поля; без нього генерується автоматично. */
  id?: string;
};

const input =
  "w-full rounded-control border bg-surface px-4 py-3 font-sans text-body text-ink " +
  "placeholder:text-ink-muted transition-colors " +
  "border-border-field aria-invalid:border-danger " +
  "enabled:not-aria-invalid:hover:border-ink " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Текстове поле форми з підписом над ним і станом помилки.
 * Помилка зв'язана з полем через `aria-describedby`, а не лише кольором: є іконка й текст.
 */
export function FormField({ label, error, id, className, disabled, ...rest }: FormFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;

  return (
    <div className="flex w-full flex-col gap-2 font-sans">
      <label htmlFor={fieldId} className="text-body text-ink">
        {label}
      </label>
      <input
        {...rest}
        id={fieldId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : rest["aria-describedby"]}
        className={[input, className].filter(Boolean).join(" ")}
      />
      {error && (
        <p id={errorId} className="flex items-start gap-2 text-caption text-danger">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-4 shrink-0"
          >
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 4.5v4" />
            <path d="M8 11.25h.01" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
