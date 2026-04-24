export type BreadcrumbLink = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbLink[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <a href={item.href} className="transition-colors duration-300 hover:text-[var(--brand-forest)]">
                {item.label}
              </a>
            ) : (
              <span className={isLast ? "font-semibold text-[var(--brand-forest)]" : undefined}>{item.label}</span>
            )}
            {!isLast ? <span aria-hidden="true">/</span> : null}
          </div>
        );
      })}
    </nav>
  );
}