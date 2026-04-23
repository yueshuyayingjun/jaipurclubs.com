import type { Metadata } from "next";
import Link from "next/link";
import { CompassIcon, SparkIcon, SuiteIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { siteConfig } from "@/lib/site-data";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club Hotel | Boutique Stay and Club Lounge Experience",
  description:
    "Jai Club hotel pairs boutique suites, lounge-style dining, and polished arrival flow in Jaipur with direct paths to offers, FAQ, and online gaming.",
  path: "/hotel",
  keywords: ["Jai Club hotel", "Jai Club stay", "Jaipur boutique hotel"],
});

const highlights = [
  {
    title: "Calm suites",
    description:
      "Rooms are described with quiet, layered comfort in mind so the hotel story stays distinct and premium before any package discussion begins.",
  },
  {
    title: "Lounge-led dining",
    description:
      "The dining tone is social and club-like, giving Jai Club a hospitality identity that can support both overnight guests and local members.",
  },
  {
    title: "Flexible arrival flow",
    description:
      "The hotel page makes it easy to move from suites and dining into offers or direct contact when you are ready.",
  },
];

const guestFits = [
  {
    title: "Weekend escapes",
    description: "For guests who want a Jaipur stay that feels intimate, social, and easy to plan from one page onward.",
    Icon: SparkIcon,
  },
  {
    title: "Stay and play trips",
    description: "For visitors who want the hotel experience first, then want to layer in online gaming and member-led events.",
    Icon: SuiteIcon,
  },
  {
    title: "Group gatherings",
    description: "For private circles that want lounge atmosphere, package options, and a quick route to direct contact.",
    Icon: CompassIcon,
  },
];

const relatedLinks = [
  {
    href: "/offers",
    title: "Jai Club offers",
    description: "Move from the hotel overview into stay-and-play packages for a closer look at current offers.",
    label: "Compare hotel-led offers",
  },
  {
    href: "/online-gaming",
    title: "Online gaming experience",
    description: "See how the hotel story connects to member lobbies, tournaments, and responsible play.",
    label: "Open online gaming",
  },
  {
    href: "/contact",
    title: "Contact Jai Club",
    description: "Finish the journey on the contact page when you are ready to ask about suites, packages, or partnerships.",
    label: "Go to contact",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Hotel", path: "/hotel" },
]);

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: `${siteConfig.name} Hotel`,
  url: absoluteUrl("/hotel"),
  description:
    "Jai Club Hotel delivers a boutique Jaipur stay with lounge dining, premium arrival flow, and direct access to connected package and planning pages.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

export default function HotelPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, hotelSchema]} />
      <PageHero
        eyebrow="Jai Club Hotel"
        title="Jai Club hotel pages put boutique stay quality at the center of the experience."
        summary="The hotel journey leads with suites, lounge dining, and a calm club atmosphere, then connects outward to online gaming, offers, FAQ, and contact so planning never feels fragmented."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Hotel" },
        ]}
        actions={[
          { href: "/offers", label: "View stay offers" },
          { href: "/contact", label: "Contact the concierge", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Hotel-first route</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">A hospitality page that opens into memorable stays, offers, and member experiences.</h2>
            <p className="text-sm leading-7 text-slate-700">
              Guests discover the stay, then step into offers or online gaming only when they are ready for deeper detail.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="panel-card rounded-[1.9rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-card rounded-[2rem] p-8 lg:p-10">
          <div className="flex flex-col gap-4 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <span className="eyebrow">Best Match</span>
              <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
                Who the Jai Club hotel experience is designed for.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-700">
              This page serves guests who want a premium Jaipur stay and a simple path into packages or member experiences.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {guestFits.map((item) => {
              const Icon = item.Icon;

              return (
                <div key={item.title} className="rounded-[1.75rem] border border-[rgba(20,56,47,0.08)] bg-white/72 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(20,56,47,0.08)] text-[var(--brand-forest)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Next Step</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                When the hotel page has done its job, the right next click is obvious.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Visitors can continue into offers to compare packages, or move straight to online gaming if they want to understand the club’s digital layer.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/offers"
                className="btn btn-primary"
              >
                Review offers
              </Link>
              <Link
                href="/online-gaming"
                className="btn btn-contrast"
              >
                Explore online gaming
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Explore More From Jai Club"
        summary="These pages help guests move from the hotel experience into offers, online gaming, and direct contact."
        links={relatedLinks}
      />
    </>
  );
}