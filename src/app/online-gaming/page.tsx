import type { Metadata } from "next";
import Link from "next/link";
import { CompassIcon, ShieldIcon, TrophyIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jai Club Online Gaming | Member Lobbies, Tournaments, and Fair Play",
  description:
    "Jai Club online gaming highlights member lobbies, tournament energy, and responsible play guidance with direct paths back to hotel stays, offers, and FAQ.",
  path: "/online-gaming/",
  keywords: ["Jai Club online gaming", "Jai Club tournaments", "Jaipur gaming club"],
});

const gamingHighlights = [
  {
    title: "Member lobbies",
    description:
      "The digital experience is framed like a private club, giving guests a premium look at what play at Jai Club can feel like.",
  },
  {
    title: "Tournament rhythm",
    description:
      "Competition is presented as a lively part of the broader Jai Club experience.",
  },
  {
    title: "Fair-play clarity",
    description:
      "Responsible gaming language stays visible so the page is easy to trust and easy to navigate.",
  },
];

const principles = [
  {
    title: "Fast entry",
    description: "The page surfaces the key member benefits quickly, then offers a clear path to packages or direct questions.",
    Icon: CompassIcon,
  },
  {
    title: "Protected experience",
    description: "Responsible play and eligibility notes are embedded alongside the experience description instead of hidden in secondary footnotes.",
    Icon: ShieldIcon,
  },
  {
    title: "Competitive energy",
    description: "Tournament and leaderboard messaging keeps the tone lively without overwhelming the hospitality side of the brand.",
    Icon: TrophyIcon,
  },
];

const relatedLinks = [
  {
    href: "/hotel/",
    title: "Jai Club hotel",
    description: "Return to the stay-led page when you want the hotel overview that anchors the whole brand journey.",
    label: "Back to the hotel",
  },
  {
    href: "/offers/",
    title: "Stay and play offers",
    description: "Compare packages that bring room planning, online gaming value, and concierge follow-up together.",
    label: "See package options",
  },
  {
    href: "/faq/",
    title: "Access and policy FAQ",
    description: "Use the FAQ for quick clarification on access, planning, and member questions.",
    label: "Open the FAQ",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Online Gaming", path: "/online-gaming/" },
]);

const gamingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Jai Club Online Gaming",
  url: absoluteUrl("/online-gaming/"),
  description:
    "Jai Club online gaming presents member lobbies, tournament information, and responsible play guidance connected to the hotel and offers pages.",
};

export default function OnlineGamingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, gamingSchema]} />
      <PageHero
        eyebrow="Jai Club Online Gaming"
        title="Jai Club online gaming keeps the energy high and the experience easy to explore."
        summary="The page shows how digital play fits the brand, then leads into offers, the hotel overview, and helpful answers for guests who want the full picture."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Online Gaming" },
        ]}
        actions={[
          { href: "/offers/", label: "Compare gaming offers" },
          { href: "/faq/", label: "Read access FAQ", variant: "secondary" },
        ]}
        aside={
          <div className="space-y-4">
            <span className="eyebrow">Fair-play note</span>
            <h2 className="font-display text-3xl text-[var(--brand-forest)]">Designed to feel premium, social, and clearly governed.</h2>
            <p className="text-sm leading-7 text-slate-700">
              Online gaming access should always align with local eligibility, responsible play practices, and transparent member communication.
            </p>
          </div>
        }
      />

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="grid gap-6 md:grid-cols-3">
          {gamingHighlights.map((item) => (
            <article key={item.title} className="panel-card rounded-[1.9rem] p-6">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 lg:pb-18">
        <div className="panel-card rounded-[2rem] p-8 lg:p-10">
          <div className="space-y-4 pb-8">
            <span className="eyebrow">What To Expect</span>
            <h2 className="font-display text-4xl text-[var(--brand-forest)] sm:text-5xl">
              The digital lounge supports the wider Jai Club brand instead of competing with it.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-700">
              This section stays useful because it shows benefits, notes the rules of engagement, and then points users toward the pages that answer the next natural question.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.Icon;

              return (
                <div key={item.title} className="rounded-[1.75rem] border border-[rgba(20,56,47,0.08)] bg-white/72 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(181,88,58,0.12)] text-[var(--brand-copper)]">
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
              <span className="eyebrow border-white/12 bg-white/6 text-[var(--brand-gold)]">Responsible Experience</span>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                Strong gaming pages are clearer when policy, experience, and next steps live together.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Jai Club frames digital play as one part of the wider destination, then gives users direct exits to the FAQ, offers, and contact pages.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/offers/"
                className="btn btn-primary"
              >
                See the packages
              </Link>
              <Link
                href="/contact/"
                className="btn btn-contrast"
              >
                Contact the gaming desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Keep Exploring the Jai Club Experience"
        summary="These pages help you move from online gaming into hotel stays, offers, and helpful answers."
        links={relatedLinks}
      />
    </>
  );
}