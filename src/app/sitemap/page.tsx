import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club Sitemap | Browse Every Main Page",
  description:
    "Jai Club sitemap brings the hotel, online gaming, offers, FAQ, about, and contact pages into one clear place so visitors can move through the website quickly.",
  path: "/sitemap/",
  keywords: ["Jai Club sitemap", "Jai Club site map", "Jai Club pages"],
});

const sitemapSections = [
  {
    eyebrow: "Start Here",
    title: "Begin with the pages that introduce the Jai Club experience.",
    summary:
      "Use these entry points when you want the main overview first, then move deeper into stays, offers, and planning.",
    links: [
      {
        href: "/",
        label: "Homepage",
        description: "See the overall Jai Club story, featured highlights, and the main paths through the website.",
      },
      {
        href: "/about/",
        label: "About",
        description: "Read the brand story, hospitality focus, and the character behind the Jai Club atmosphere.",
      },
      {
        href: "/offers/",
        label: "Offers",
        description: "Review featured packages and combinations when you want a faster route to booking ideas.",
      },
    ],
  },
  {
    eyebrow: "Stay And Play",
    title: "Move directly to the core hotel and online gaming pages.",
    summary:
      "These links cover the main guest journey, from room planning and lounge atmosphere to digital club activity.",
    links: [
      {
        href: "/hotel/",
        label: "Hotel",
        description: "Explore the stay experience, comfort details, and the hospitality side of Jai Club in Jaipur.",
      },
      {
        href: "/online-gaming/",
        label: "Online Gaming",
        description: "View the digital club experience, fair-play guidance, and how online gaming fits the overall offer.",
      },
      {
        href: "/offers/",
        label: "Signature Offers",
        description: "Compare curated packages if you want the hotel and club experience framed around value and timing.",
      },
    ],
  },
  {
    eyebrow: "Plan Your Visit",
    title: "Find support pages that help guests make decisions faster.",
    summary:
      "Use these pages when you need answers, direct contact, or a cleaner route into the next part of the website.",
    links: [
      {
        href: "/faq/",
        label: "FAQ",
        description: "Get quick answers on stays, offers, and online gaming before reaching out directly.",
      },
      {
        href: "/contact/",
        label: "Contact",
        description: "Reach the Jai Club team for concierge help, gaming questions, or partnership conversations.",
      },
      {
        href: "/sitemap/",
        label: "Sitemap",
        description: "Stay on this page when you want a complete overview of the website structure in one view.",
      },
    ],
  },
] as const;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap/" },
]);

export default function SitemapPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Jai Club Sitemap"
        title="A clear sitemap page for every main part of Jai Club."
        summary="Use this page to move quickly between the homepage, hotel, online gaming, offers, FAQ, about, and contact pages without guessing where to go next."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
        actions={[
          { href: "/hotel/", label: "Explore the hotel" },
          { href: "/contact/", label: "Contact Jai Club", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Quick Access</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">
              One page that connects the full Jai Club website journey.
            </h2>
            <p className="text-sm leading-7 text-slate-700">
              This sitemap keeps the main guest paths visible, so visitors can jump from discovery to planning without extra clicks.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-6 xl:grid-cols-3">
          {sitemapSections.map((section) => (
            <div key={section.title} className="panel-card rounded-[2rem] p-6 lg:p-7">
              <div className="space-y-3">
                <span className="eyebrow">{section.eyebrow}</span>
                <h2 className="font-display text-3xl leading-tight text-[var(--brand-forest)] text-balance">
                  {section.title}
                </h2>
                <p className="text-sm leading-7 text-slate-700">{section.summary}</p>
              </div>

              <div className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-[1.4rem] border border-black/6 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_36px_rgba(20,56,47,0.08)]"
                  >
                    <p className="text-base font-semibold text-[var(--brand-ink)]">{link.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Direct Paths</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                Need the fastest route to help or a complete machine-readable map?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Use contact for a direct response from the Jai Club team, or open the XML sitemap when you want the technical site map alongside this visitor-friendly page.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/contact/" className="btn btn-primary">
                Contact Jai Club
              </a>
              <a href="/sitemap.xml" className="btn btn-contrast">
                Open XML sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}