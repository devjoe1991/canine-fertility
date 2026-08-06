import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { AREAS, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
    { path: "/faqs", priority: 0.7 },
    { path: "/areas-served", priority: 0.7 },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: r.path === "/" ? base : `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${base}/services/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaEntries = AREAS.map((a) => ({
    url: `${base}/areas-served/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries];
}
