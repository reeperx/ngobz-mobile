import { SEO_CONFIG } from "./seo-config";
import { SERVICES, FAQS, BUSINESS_INFO } from "./business-data";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PartyRentalService"],
    "@id": `${SEO_CONFIG.siteUrl}/#business`,
    name: SEO_CONFIG.siteName,
    legalName: BUSINESS_INFO.legalName,
    alternateName: "NGOBZ Mobile",
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    image: `${SEO_CONFIG.siteUrl}/images/client/client_logo.jpg`,
    logo: `${SEO_CONFIG.siteUrl}/images/client/client_logo.jpg`,
    sameAs: [SEO_CONFIG.socials.facebook],
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_CONFIG.location.city,
      addressRegion: SEO_CONFIG.location.region,
      addressCountry: SEO_CONFIG.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.location.latitude,
      longitude: SEO_CONFIG.location.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "20:00",
      },
    ],
    areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Gauteng`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Event Equipment Hire",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          category: service.category,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SEO_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Equipment Hire",
        item: `${SEO_CONFIG.siteUrl}/#equipment`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Service Areas",
        item: `${SEO_CONFIG.siteUrl}/#coverage`,
      },
    ],
  };
}
