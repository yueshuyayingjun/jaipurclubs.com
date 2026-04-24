import { BrandMark } from "@/components/icons";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-[rgba(247,239,226,0.84)] backdrop-blur-xl">
      <div className="section-wrap py-3 lg:py-4">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <BrandMark className="h-10 w-10 shrink-0 text-[var(--brand-forest)] sm:h-11 sm:w-11" />
            <div className="min-w-0">
              <p className="truncate font-display text-2xl leading-none text-[var(--brand-forest)] sm:text-3xl">Jai Club</p>
              <p className="mt-1 hidden text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--brand-copper)] sm:block">
                Hotel + Online Gaming
              </p>
            </div>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-semibold text-slate-700 lg:flex lg:flex-none">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/65 hover:text-[var(--brand-forest)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <a
              href="/contact/"
              className="btn btn-primary px-4 py-2 text-sm sm:px-5 lg:px-6 lg:py-3"
            >
              <span className="sm:hidden">Plan</span>
              <span className="hidden sm:inline">Plan your visit</span>
            </a>

            <details className="group relative lg:hidden">
              <summary
                aria-controls="mobile-navigation"
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[rgba(20,56,47,0.14)] bg-white/80 text-[var(--brand-forest)] shadow-[0_12px_28px_rgba(20,56,47,0.08)] transition-colors duration-300 hover:bg-white [&::-webkit-details-marker]:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="relative h-4 w-5">
                  <span className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-transform duration-300 group-open:translate-y-[7px] group-open:rotate-45" />
                  <span className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-opacity duration-300 group-open:opacity-0" />
                  <span className="absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-transform duration-300 group-open:-translate-y-[7px] group-open:-rotate-45" />
                </span>
              </summary>

              <nav
                id="mobile-navigation"
                className="panel-card absolute right-0 top-full z-20 mt-3 grid w-[min(18rem,calc(100vw-2rem))] gap-2 rounded-[1.5rem] border border-black/6 bg-[rgba(255,248,237,0.96)] p-3 shadow-[0_24px_60px_rgba(20,56,47,0.12)]"
              >
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-[1rem] px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-white hover:text-[var(--brand-forest)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}