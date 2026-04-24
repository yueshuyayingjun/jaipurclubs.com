import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club Offers | Stay and Play Packages for Hotel and Online Gaming",
  description:
    "Jai Club offers combine boutique hotel stays, online gaming value, and direct concierge routing so visitors can compare packages from one focused page.",
  path: "/offers/",
  keywords: ["Jai Club offers", "Jai Club packages", "stay and play Jaipur"],
});

const packages = [
  {
    name: "Club Arrival",
    summary:
      "A starter package for first-time guests who want the hotel experience, an introduction to online gaming, and an easy follow-up path.",
    inclusions: [
      "Boutique room planning",
      "Lounge access orientation",
      "Introductory gaming overview",
    ],
  },
  {
    name: "Weekend Circuit",
    summary:
      "A weekend-led package for visitors who want a richer blend of stay atmosphere, tournament energy, and concierge support.",
    inclusions: [
      "Priority stay enquiry",
      "Package-based member perks",
      "Fast path to FAQ and support",
    ],
  },
  {
    name: "Private Circle",
    summary:
      "A higher-touch route for groups who want the hotel, lounge, and gaming sides of Jai Club to feel coordinated from the start.",
    inclusions: [
      "Group planning support",
      "Private club atmosphere",
      "Direct contact handoff",
    ],
  },
];

const relatedLinks = [
  {
    href: "/hotel/",
    title: "Start with the hotel",
    description: "Use the hotel page first if you want to understand the stay experience before comparing packages.",
    label: "Back to hotel",
  },
  {
    href: "/online-gaming/",
    title: "Layer in online gaming",
    description: "Move to the gaming page if you want to evaluate tournaments, member access, and responsible play context.",
    label: "Visit online gaming",
  },
  {
    href: "/contact/",
    title: "Close with concierge contact",
    description: "Use the contact page when you are ready to discuss package fit, timing, or private requests.",
    label: "Go to contact",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Offers", path: "/offers/" },
]);

export default function OffersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Jai Club Offers"
        title="Jai Club offers bring hotel stays and online gaming perks together in one place."
        summary="The offers page brings together rooms, member experiences, and direct concierge support so guests can compare packages with ease."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Offers" },
        ]}
        actions={[
          { href: "/contact/", label: "Talk to Jai Club" },
          { href: "/hotel/", label: "Review the hotel", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Featured Packages</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">Packages work best when the next click still feels obvious.</h2>
            <p className="text-sm leading-7 text-slate-700">
              Jai Club presents its most appealing stay and play combinations in a way that feels clear and inviting.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="panel-card rounded-[2rem] p-7">
              <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">{item.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                {item.inclusions.map((inclusion) => (
                  <li key={inclusion} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand-copper)]" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Planning Flow</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                Compare the package, then move one step to the page that removes your last objection.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                That might be the hotel page for stay confidence, the gaming page for member energy, or the contact page for a direct answer.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/faq/"
                className="btn btn-primary"
              >
                Read the FAQ
              </a>
              <a
                href="/contact/"
                className="btn btn-contrast"
              >
                Contact Jai Club
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Keep Your Options Open"
        summary="These pages help you compare the hotel, gaming experience, and direct contact options before you decide."
        links={relatedLinks}
      />
    </>
  );
}