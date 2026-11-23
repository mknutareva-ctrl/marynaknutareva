import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type WorkCardProps = {
  /** Назва бренду або проєкту, велика, зверху під обкладинкою. */
  brand: string;
  /** Стан роботи в чіпі праворуч від назви, наприклад «В процесі». Без нього чіпа немає. */
  status?: string;
  /** Що це за робота: короткий заголовок під назвою. */
  title: string;
  /** Короткий опис: одне-два речення. */
  description: string;
  /** Куди веде картка. */
  href: string;
  /** Обкладинка: картинка, імпортована з теки assets. */
  image: StaticImageData;
  /** Опис обкладинки для скрінрідерів. Порожній, якщо картинка суто декоративна. */
  imageAlt?: string;
};

/**
 * Картка роботи: обкладинка, назва з чіпом стану, заголовок і короткий опис.
 * Уся картка є одним посиланням.
 */
export function WorkCard({
  brand,
  status,
  title,
  description,
  href,
  image,
  imageAlt = "",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={
        "group flex flex-col gap-4 rounded-card border border-line bg-surface p-8 font-sans " +
        "transition-colors hover:border-ink-muted " +
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      }
    >
      <div className="relative aspect-cover w-full overflow-hidden rounded-card bg-glow">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-title text-ink group-hover:underline">{brand}</h3>
          {status && (
            <span className="shrink-0 rounded-full bg-line px-3 py-2 text-caption text-ink">
              {status}
            </span>
          )}
        </div>
        <p className="text-body text-ink">{title}</p>
        <p className="text-body text-ink-muted">{description}</p>
      </div>
    </Link>
  );
}
