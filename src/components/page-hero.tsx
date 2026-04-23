import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, type BreadcrumbLink } from "@/components/breadcrumbs";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  crumbs: BreadcrumbLink[];
  actions: HeroAction[];
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, summary, crumbs, actions, aside }: PageHeroProps) {
  return (
    <section className="section-wrap pb-10 pt-10 lg:pb-14 lg:pt-14">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.88fr)] lg:items-start">
        <div className="animate-rise space-y-6">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="max-w-4xl font-display text-5xl leading-none text-[var(--brand-forest)] text-balance sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">{summary}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {actions.map((action) => (
              <Link
                key={`${action.href}-${action.label}`}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "btn btn-secondary"
                    : "btn btn-primary"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>

        {aside ? <aside className="panel-card rounded-[2rem] p-7">{aside}</aside> : null}
      </div>
    </section>
  );
}