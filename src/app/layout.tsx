import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Jai Club | Hotel and Online Gaming Destination in Jaipur",
  description:
    "Jai Club blends boutique hotel stays, lounge dining, and online gaming experiences into one polished Jaipur destination.",
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Jai Club",
    "Jai Club hotel",
    "Jai Club online gaming",
    "hotel and online gaming",
    "Jaipur hotel club",
  ],
  openGraph: {
    title: "Jai Club | Hotel and Online Gaming Destination in Jaipur",
    description:
      "Jai Club blends boutique hotel stays, lounge dining, and online gaming experiences into one polished Jaipur destination.",
    url: `${siteConfig.url}/`,
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
    title: "Jai Club | Hotel and Online Gaming Destination in Jaipur",
    description:
      "Jai Club blends boutique hotel stays, lounge dining, and online gaming experiences into one polished Jaipur destination.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(200,142,62,0.3),_transparent_68%)] blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(181,88,58,0.2),_transparent_72%)] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(20,56,47,0.12),_transparent_70%)] blur-3xl" />
        </div>
        <div className="flex min-h-full flex-col overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
