import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { faqItems } from "@/lib/site-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club FAQ | Hotel, Offers, and Online Gaming Questions",
  description:
    "Jai Club FAQ answers common questions about stays, offers, and online gaming so guests can plan with confidence.",
  path: "/faq/",
  keywords: ["Jai Club FAQ", "Jai Club questions", "Jai Club hotel FAQ"],
});

const relatedLinks = [
  {
    href: "/hotel/",
    title: "Return to the hotel page",
    description: "Use the hotel page if your question is really about the stay, arrival flow, or hospitality experience.",
    label: "Back to hotel",
  },
  {
    href: "/offers/",
    title: "Review the offers",
    description: "Move to the offers page if your question is about package fit, timings, or member benefits.",
    label: "Visit offers",
  },
  {
    href: "/contact/",
    title: "Get a direct answer",
    description: "Use contact when you have a specific request that needs concierge or gaming desk follow-up.",
    label: "Contact Jai Club",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq/" },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />
      <PageHero
        eyebrow="Jai Club FAQ"
        title="Jai Club FAQ answers common questions clearly and quickly."
        summary="Use this page for quick answers on stays, offers, and online gaming, then continue to the page that fits what you need next."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        actions={[
          { href: "/contact/", label: "Contact Jai Club" },
          { href: "/offers/", label: "See the offers", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Quick Answers</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">Short answers and easy next steps when you need them.</h2>
            <p className="text-sm leading-7 text-slate-700">
              The FAQ is here to make planning easier before you reach out directly.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-4">
          {faqItems.map((item) => (
            <details key={item.question} className="panel-card rounded-[1.8rem] p-5 open:bg-white/90" open={false}>
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[var(--brand-ink)] marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Still Deciding</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                The answer you need may already live on the next linked page.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Move to the hotel page for stay detail, to offers for package detail, or to contact if you need a direct response.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/hotel/"
                className="btn btn-primary"
              >
                Explore hotel details
              </a>
              <a
                href="/contact/"
                className="btn btn-contrast"
              >
                Ask a direct question
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Keep Exploring Jai Club"
        summary="These pages help you move from a quick answer to the hotel, offers, or contact team when you are ready."
        links={relatedLinks}
      />
    </>
  );
}