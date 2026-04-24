type RelatedLink = {
  href: string;
  title: string;
  description: string;
  label: string;
};

type RelatedLinksProps = {
  title: string;
  summary: string;
  links: RelatedLink[];
};

export function RelatedLinks({ title, summary, links }: RelatedLinksProps) {
  return (
    <section className="section-wrap pb-16 lg:pb-20">
      <div className="space-y-4 pb-8">
        <span className="eyebrow">Explore More</span>
        <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">{title}</h2>
        <p className="max-w-3xl text-base leading-8 text-slate-700">{summary}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="panel-card group rounded-[1.9rem] p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">{link.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{link.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-copper)]">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}