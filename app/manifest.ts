import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONFIG.siteName,
    short_name: "NGOBZ Mobile",
    description: SEO_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
