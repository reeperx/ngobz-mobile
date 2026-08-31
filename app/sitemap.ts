import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#equipment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#coolers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#warmers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#toilets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#coverage`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#reviews`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
