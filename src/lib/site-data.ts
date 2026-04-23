export type NavItem = {
  href: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactChannel = {
  title: string;
  description: string;
  value: string;
  href?: string;
};

export const siteConfig = {
  name: "Jai Club",
  url: "https://jaipurclubs.com",
  description:
    "Jai Club is a hotel and online gaming destination in Jaipur, pairing boutique stays, lounge dining, and member-focused digital experiences.",
  location: "Jaipur, Rajasthan",
  conciergeEmail: "hello@jaipurclubs.com",
  gamingEmail: "play@jaipurclubs.com",
};

export const navigation: NavItem[] = [
  { href: "/hotel", label: "Hotel" },
  { href: "/online-gaming", label: "Online Gaming" },
  { href: "/offers", label: "Offers" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/hotel", label: "Hotel" },
      { href: "/online-gaming", label: "Online Gaming" },
      { href: "/offers", label: "Offers" },
    ],
  },
  {
    title: "Plan",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Start",
    links: [
      { href: "/", label: "Homepage" },
      { href: "/hotel", label: "Stay journey" },
      { href: "/offers", label: "Package journey" },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What does Jai Club combine on one website?",
    answer:
      "Jai Club combines a boutique hotel experience, online gaming information, curated offers, and direct contact options so guests can plan their visit in one place.",
  },
  {
    question: "Should I start with the hotel page or the online gaming page?",
    answer:
      "Most visitors should start with the hotel page because it introduces the main hospitality offer, then move to online gaming if they want to see member-led digital experiences and lounge access details.",
  },
  {
    question: "How do Jai Club offers work?",
    answer:
      "Offers combine room planning, member perks, and easy follow-up with the Jai Club team. The package page brings the hotel, online gaming, and contact details together in one place.",
  },
  {
    question: "Does Jai Club mention responsible online gaming?",
    answer:
      "Yes. The online gaming section includes clear fair-play and eligibility messaging so the experience stays premium, understandable, and responsibly framed.",
  },
  {
    question: "Where should I go if I still have questions?",
    answer:
      "Use the contact page for direct enquiries, or move through the FAQ first if you need quick answers about stays, packages, or online gaming access.",
  },
  {
    question: "Is the site mobile-friendly?",
    answer:
      "Yes. The layout uses responsive sections, large tap targets, and clear navigation so visitors can move easily between the main pages on mobile and desktop.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    title: "Hotel concierge",
    description: "Use this desk for room planning, lounge enquiries, and partnership conversations.",
    value: siteConfig.conciergeEmail,
    href: `mailto:${siteConfig.conciergeEmail}`,
  },
  {
    title: "Gaming desk",
    description: "Use this channel for tournament questions, member access, and online gaming guidance.",
    value: siteConfig.gamingEmail,
    href: `mailto:${siteConfig.gamingEmail}`,
  },
  {
    title: "Location focus",
    description: "Jai Club is positioned around Jaipur hospitality with a digital-first guest journey.",
    value: siteConfig.location,
  },
];