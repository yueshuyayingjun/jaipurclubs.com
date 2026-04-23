import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const baseKeywords = [
  "Jai Club",
  "Jai Club hotel",
  "Jai Club online gaming",
  "Jai Club Jaipur",
  "hotel and online gaming",
];

export function absoluteUrl(path: string) {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

export function buildMetadata({ title, description, path, keywords = [] }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords: Array.from(new Set([...baseKeywords, ...keywords])),
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Jai Club hotel and online gaming destination",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}

type BreadcrumbSchemaItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}