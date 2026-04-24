import { BrandMark } from "@/components/icons";
import { footerGroups, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/6 bg-[rgba(255,248,237,0.74)] backdrop-blur-md">
      <div className="section-wrap grid gap-10 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BrandMark className="h-10 w-10 text-[var(--brand-forest)]" />
            <div>
              <p className="font-display text-3xl leading-none text-[var(--brand-forest)]">Jai Club</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-copper)]">
                Jaipur hospitality, digital club energy
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-700">
            Jai Club brings together hotel stays, online gaming, offers, FAQ, and direct contact so guests can plan every part of the experience in one place.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {siteConfig.location}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand-copper)]">
                {group.title}
              </h2>
              <div className="space-y-2">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm leading-7 text-slate-700 transition-colors duration-300 hover:text-[var(--brand-forest)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}