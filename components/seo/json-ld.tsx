import React from "react";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-schema";

export function JsonLd() {
  const localBusiness = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
