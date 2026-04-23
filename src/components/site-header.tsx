import Link from "next/link";
import { BrandMark } from "@/components/icons";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-[rgba(247,239,226,0.84)] backdrop-blur-xl">
      <div className="section-wrap flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark className="h-11 w-11 text-[var(--brand-forest)]" />
          <div>
            <p className="font-display text-3xl leading-none text-[var(--brand-forest)]">Jai Club</p>
            <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--brand-copper)]">
              Hotel + Online Gaming
            </p>
          </div>
        </Link>

        <nav className="flex flex-1 flex-wrap items-center justify-center gap-2 text-sm font-semibold text-slate-700 lg:flex-none">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/65 hover:text-[var(--brand-forest)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn btn-primary"
        >
          Plan your visit
        </Link>
      </div>
    </header>
  );
}