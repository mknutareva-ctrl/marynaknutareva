export type RoleChipProps = {
  /** Назва ролі, наприклад «UX/UI-дизайнерка». */
  children: string;
};

/**
 * Чип ролі: біла плашка з акцентною точкою і назвою ролі.
 * Стоїть над заголовком першого екрана. Не інтерактивний.
 */
export function RoleChip({ children }: RoleChipProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-control bg-surface px-4 py-2 font-sans text-caption text-accent shadow-chip">
      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
      {children}
    </span>
  );
}
