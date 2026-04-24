import type { Metadata } from "next";
import { CompassIcon, PulseIcon, ShieldIcon, SparkIcon, SuiteIcon, TrophyIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { faqItems, siteConfig } from "@/lib/site-data";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club | Hotel and Online Gaming Destination in Jaipur",
  description: siteConfig.description,
  path: "/",
  keywords: ["Jai Club Jaipur", "Jai Club destination", "Jai Club offers"],
});

metadata.verification = {
  google: "WHa6cAiZFw2OpDXHq3t02eEhuNLDy4KEk35j9LS00Lk",
};

const signals = [
  {
    label: "Stay-first design",
    value: "Boutique hotel pages lead the journey before any deeper offer or FAQ path.",
  },
  {
    label: "Play-ready access",
    value: "Online gaming details, fair-play notes, and upgrade routes stay within one click.",
  },
  {
    label: "Offer-led planning",
    value: "Packages connect the hotel, gaming, FAQ, and contact pages without dead ends.",
  },
];

const pillars = [
  {
    title: "Boutique hotel stays",
    description:
      "Discover suites, dining energy, and a club-style arrival flow built for short escapes and longer Jaipur stays.",
    href: "/hotel/",
    label: "Explore the hotel",
    Icon: SuiteIcon,
  },
  {
    title: "Online gaming lounge",
    description:
      "See how Jai Club organizes digital play, tournaments, fair-play standards, and member progression in one place.",
    href: "/online-gaming/",
    label: "See online gaming",
    Icon: PulseIcon,
  },
  {
    title: "Integrated offers",
    description:
      "Move straight into stay-and-play packages that connect room choices, member benefits, and enquiry-ready next steps.",
    href: "/offers/",
    label: "Browse offers",
    Icon: SparkIcon,
  },
];

const journey = [
  {
    title: "Choose your hotel route",
    description: "Start with the stay experience and get a feel for the hospitality, lounge mood, and suite offering.",
  },
  {
    title: "Step into online gaming",
    description: "Move next into digital play, member advantages, and the responsible gaming standards that support the offer.",
  },
  {
    title: "Finish on an action page",
    description: "Offers, FAQ, and contact pages make it easy to compare options and reach the right team.",
  },
];

const valueCards = [
  {
    title: "Easy to explore",
    description:
      "Every important page sits at the first level: hotel, online gaming, offers, FAQ, about, and contact.",
    Icon: CompassIcon,
  },
  {
    title: "Trust-first details",
    description:
      "Responsible play notes, direct brand language, and concise service explanations keep the experience easy to evaluate.",
    Icon: ShieldIcon,
  },
  {
    title: "Membership energy",
    description:
      "The tone stays premium and social, pairing heritage hospitality with a sharper, modern gaming atmosphere.",
    Icon: TrophyIcon,
  },
];

const relatedLinks = [
  {
    href: "/hotel/",
    title: "Hotel overview",
    description: "Read the room, lounge, and arrival experience that anchors the Jai Club brand.",
    label: "Visit the hotel page",
  },
  {
    href: "/online-gaming/",
    title: "Online gaming experience",
    description: "See the lobbies, tournaments, and fair-play guidance before you move into offers.",
    label: "Open the gaming page",
  },
  {
    href: "/faq/",
    title: "Planning FAQ",
    description: "Use the FAQ to resolve common stay, package, and access questions in one place.",
    label: "Read the FAQ",
  },
];

const faqPreviewItems = faqItems.slice(0, 3);

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: absoluteUrl("/"),
  description: siteConfig.description,
  inLanguage: "en-IN",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  url: absoluteUrl("/"),
  description:
    "Jai Club is a boutique hotel and online gaming destination in Jaipur, blending stays, lounge dining, and member-focused digital experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  email: siteConfig.conciergeEmail,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Boutique hotel experience",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Online gaming lounge",
      value: true,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/")}#faq-preview`,
  url: absoluteUrl("/"),
  mainEntity: faqPreviewItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function linkJaiClubText(text: string) {
  const parts = text.split("Jai Club");

  return parts.flatMap((part, index) => {
    const nodes = [];

    if (index > 0) {
      nodes.push(
        <a
          key={`jai-club-link-${index}`}
          href="/"
          className="font-semibold text-[var(--brand-forest)] underline decoration-[rgba(20,56,47,0.28)] underline-offset-4 transition-colors hover:text-[var(--brand-copper)]"
        >
          Jai Club
        </a>,
      );
    }

    if (part) {
      nodes.push(part);
    }

    return nodes;
  });
}

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteSchema, businessSchema, faqSchema]} />
      <section className="section-wrap pb-14 pt-10 lg:pb-20 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-center">
          <div className="animate-rise space-y-8">
            <span className="eyebrow">Jai Club · Jaipur Nights</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl leading-none text-[var(--brand-forest)] text-balance sm:text-6xl lg:text-7xl">
                Jai Club hotel comfort with an online gaming edge for Jaipur nights and modern members.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                {linkJaiClubText(
                  "Jai Club is a premium hotel and online gaming destination that brings together boutique stays, club-lounge energy, and standout experiences for guests and members.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/hotel/"
                className="btn btn-primary"
              >
                Explore the hotel
              </a>
              <a
                href="/online-gaming/"
                className="btn btn-secondary"
              >
                See online gaming
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {signals.map((signal) => (
                <div key={signal.label} className="panel-card rounded-[1.75rem] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--brand-copper)]">
                    {signal.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="panel-dark animate-rise animate-rise-delay rounded-[2rem] p-8 text-[var(--brand-cream)]">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                Stay to play journey
              </div>
              <h2 className="font-display text-4xl leading-tight text-balance">
                Hotel stays, digital play, and standout offers brought together in one refined destination.
              </h2>
              <ol className="space-y-4">
                {journey.map((step, index) => (
                  <li key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="flex flex-col gap-4 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="eyebrow">Primary Sections</span>
            <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
              Three core paths keep the Jai Club site focused.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            {linkJaiClubText(
              "Each section highlights a different part of the Jai Club experience so guests can move naturally from discovery to booking and enquiry.",
            )}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.Icon;

            return (
              <a
                key={pillar.title}
                href={pillar.href}
                className="panel-card group rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(20,56,47,0.08)] text-[var(--brand-forest)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--brand-ink)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-copper)]">
                  {pillar.label}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-card overflow-hidden rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
            <div className="space-y-4">
              <span className="eyebrow">The Experience</span>
              <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
                Designed for memorable stays, lively play, and effortless planning.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700">
                Guests can start with the hotel, explore online gaming, compare offers, and finish with quick answers or direct contact.
              </p>
            </div>
            <div className="grid gap-4">
              {valueCards.map((card) => {
                const Icon = card.Icon;

                return (
                  <div key={card.title} className="rounded-[1.75rem] border border-[rgba(20,56,47,0.08)] bg-white/70 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(200,142,62,0.16)] text-[var(--brand-copper)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{card.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">FAQ Preview</span>
            <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
              Frequent planning questions, answered clearly.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-700">
              Each answer helps guests choose the next page that fits their stay, package, or access question.
            </p>
            <a
              href="/faq/"
              className="btn btn-primary"
            >
              View the full FAQ
            </a>
          </div>
          <div className="grid gap-4">
            {faqPreviewItems.map((item) => (
              <div key={item.question} className="panel-card rounded-[1.75rem] p-5">
                <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{linkJaiClubText(item.answer)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Continue Exploring Jai Club"
        summary="These pages help guests move from the hotel experience to gaming, offers, and planning details without losing momentum."
        links={relatedLinks}
      />

      <section className="section-wrap pb-20 pt-6 lg:pb-28">
        <div className="panel-dark rounded-[2rem] p-8 text-[var(--brand-cream)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">
                Ready To Plan
              </span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                Move from discovery to your next booking step in a few clicks.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/offers/"
                className="btn btn-primary"
              >
                Compare offers
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
    </>
  );
}
