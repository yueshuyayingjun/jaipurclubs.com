import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = ["/", "/hotel/", "/online-gaming/", "/offers/", "/about/", "/faq/", "/contact/", "/sitemap/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/sitemap/" ? 0.6 : 0.8,
  }));
}