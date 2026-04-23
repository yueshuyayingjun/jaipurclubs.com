import type { Metadata } from "next";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { contactChannels, siteConfig } from "@/lib/site-data";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club Contact | Speak With the Hotel or Online Gaming Desk",
  description:
    "Jai Club contact gives visitors a direct route to the hotel concierge, gaming desk, and final planning information after reviewing the main pages.",
  path: "/contact",
  keywords: ["Jai Club contact", "Jai Club concierge", "Jai Club support"],
});

const relatedLinks = [
  {
    href: "/hotel",
    title: "Hotel details",
    description: "Go back to the hotel page if you want to refine the stay experience before reaching out.",
    label: "Back to hotel",
  },
  {
    href: "/online-gaming",
    title: "Online gaming page",
    description: "Use the gaming page if your enquiry relates to tournaments, member access, or fair-play positioning.",
    label: "Visit online gaming",
  },
  {
    href: "/faq",
    title: "FAQ page",
    description: "Check the FAQ first if you want a fast answer before starting a direct conversation.",
    label: "Open FAQ",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Jai Club Contact",
  url: absoluteUrl("/contact"),
  description:
    "Contact Jai Club for hotel, offer, or online gaming questions through the concierge or gaming desk.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, contactSchema]} />
      <PageHero
        eyebrow="Contact Jai Club"
        title="Jai Club contact puts guests in touch with the right desk quickly."
        summary="Use this page when you are ready to speak with the hotel concierge or gaming desk after exploring the Jai Club experience."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        actions={[
          { href: "/hotel", label: "Review the hotel" },
          { href: "/offers", label: "Compare packages", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Direct response</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">Clear contact details and one visible brand domain.</h2>
            <p className="text-sm leading-7 text-slate-700">
              This page helps guests move from interest to a direct conversation.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <article key={channel.title} className="panel-card rounded-[1.9rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(20,56,47,0.08)] text-[var(--brand-forest)]">
                {channel.href ? <EnvelopeIcon className="h-6 w-6" /> : <MapPinIcon className="h-6 w-6" />}
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">{channel.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{channel.description}</p>
              {channel.href ? (
                <a
                  href={channel.href}
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-copper)] underline-offset-4 hover:underline"
                >
                  {channel.value}
                </a>
              ) : (
                <p className="mt-5 text-sm font-semibold text-[var(--brand-copper)]">{channel.value}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Direct Domain</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                Start your direct route here: https://jaipurclubs.com
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Use the homepage for the main overview, then jump into hotel stays, online gaming, offers, or the FAQ based on what you need next.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
              <p className="text-sm leading-7 text-white/75">
                Jaipur, Rajasthan remains the geographic focus, with each main page easy to reach from the homepage.
              </p>
              <p className="text-sm leading-7 text-white/75">
                Online gaming access should always follow local rules, age checks, and responsible play expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Need One More Look Before Reaching Out?"
        summary="These pages help you review the hotel, online gaming, or FAQ before sending an enquiry."
        links={relatedLinks}
      />
    </>
  );
}