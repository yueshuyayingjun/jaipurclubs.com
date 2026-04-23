import type { Metadata } from "next";
import { CompassIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { siteConfig } from "@/lib/site-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club About | Brand Story for Hotel and Online Gaming",
  description:
    "Jai Club explains how its hotel and online gaming identity comes together through premium service, clear planning routes, and a Jaipur-led brand voice.",
  path: "/about",
  keywords: ["Jai Club about", "Jai Club brand story", "Jai Club Jaipur"],
});

const principles = [
  {
    title: "Hospitality first",
    description: "The brand starts with the feel of arrival, comfort, and service before expanding into any secondary layer.",
    Icon: ShieldIcon,
  },
  {
    title: "Digital clarity",
    description: "Every part of the experience is explained in plain language so guests know what Jai Club offers at a glance.",
    Icon: CompassIcon,
  },
  {
    title: "Club atmosphere",
    description: "Jai Club balances heritage warmth with contemporary gaming energy so the brand feels distinct rather than generic.",
    Icon: SparkIcon,
  },
];

const relatedLinks = [
  {
    href: "/hotel",
    title: "See the hotel experience",
    description: "Move from brand story to the stay-led page if you want the clearest overview of the hospitality offer.",
    label: "Visit hotel",
  },
  {
    href: "/offers",
    title: "See the package offers",
    description: "Open the offers page to understand how Jai Club turns the brand into action-oriented packages.",
    label: "View offers",
  },
  {
    href: "/contact",
    title: "Talk to the team",
    description: "Use the contact page when you are ready to move from brand understanding to a direct conversation.",
    label: "Contact Jai Club",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.conciergeEmail,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, organizationSchema]} />
      <PageHero
        eyebrow="About Jai Club"
        title="Jai Club was shaped to feel like one destination instead of two disconnected businesses."
        summary="The brand blends boutique hotel appeal with a modern online gaming layer, bringing both together in a polished experience for travellers, members, and private groups."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        actions={[
          { href: "/hotel", label: "Explore the hotel" },
          { href: "/contact", label: "Contact Jai Club", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Brand position</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">Premium hospitality and member-facing energy.</h2>
            <p className="text-sm leading-7 text-slate-700">
              That balance shapes the mood, service style, and overall feel of Jai Club.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-card rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="eyebrow">Story</span>
              <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
                A Jaipur-facing brand with enough depth to serve travellers, members, and private groups.
              </h2>
              <p className="text-base leading-8 text-slate-700">
                Jai Club is positioned as a polished destination where hospitality is the primary layer and online gaming extends the sense of membership, momentum, and repeat engagement.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item) => {
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
        </div>
      </section>

      <RelatedLinks
        title="Continue Exploring Jai Club"
        summary="The about page leads naturally into the hotel, offers, and contact pages when you want to keep planning."
        links={relatedLinks}
      />
    </>
  );
}