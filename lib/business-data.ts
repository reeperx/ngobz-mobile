import { ServiceItem, Testimonial, FAQItem } from "./types";

export const BUSINESS_INFO = {
  name: "NGOBZ Mobile",
  legalName: "NGOBZ Mobile Event Rentals",
  slogan: "Premium Mobile Equipment & VIP Sanitary Solutions",
  phone: "+27 76 707 6120",
  whatsappNumber: "27767076120",
  email: "giftwandile1@gmail.com",
  facebookUrl: "https://web.facebook.com/people/NGOBZ-mobile/100057655171100/",
  location: "Pretoria, Gauteng, South Africa",
  logoUrl: "/images/client/client_logo.jpg",
  serviceAreas: [
    "Soshanguve",
    "Mabopane",
    "Hammanskraal",
    "Pretoria Central",
    "Pretoria North",
    "Ga-Rankuwa",
    "Centurion",
    "Mamelodi",
    "Winterveld",
    "Akasia",
  ],
  workingHours: "Mon - Sun: 06:00 - 20:00 (24/7 Event Delivery & Emergency Support)",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "mobile-toilets",
    name: "VIP & Standard Mobile Toilets",
    category: "toilets",
    tagline: "Ultra-clean, hygienic, and dignified sanitation for any gathering",
    description:
      "Spotlessly sanitized portable flushing toilets and luxury VIP mobile restroom trailers equipped with handwash basins, mirrors, and premium toiletries.",
    features: [
      "Flushing mechanism & fresh water rinse",
      "Integrated handwash basin with soap & hand towels",
      "Interior vanity mirror & LED lighting",
      "Full pre-delivery deep sanitization & deodorization",
      "Available in Single Units, Double Trailers & VIP Executive Suites",
    ],
    specs: [
      { label: "Hygiene Standard", value: "100% Hospital Grade Sanitized" },
      { label: "Water Capacity", value: "Self-contained fresh water" },
      { label: "Setup Time", value: "15 - 30 minutes on arrival" },
    ],
    idealFor: ["Weddings", "Traditional Ceremonies", "Funerals", "Corporate Events", "Outdoor Festivals"],
    badge: "Essential",
    popular: true,
  },
  {
    id: "mobile-coolers",
    name: "Heavy-Duty Mobile Coolers & Cold Rooms",
    category: "coolers",
    tagline: "Rapid chilling & deep cold storage to keep beverages and meats perfectly chilled",
    description:
      "High-capacity mobile refrigeration trailers designed for large outdoor gatherings. Keeps drinks ice-cold and bulk meat/catering supplies fresh regardless of ambient heat.",
    features: [
      "Digital precision temperature control (down to -2°C / 4°C)",
      "High-efficiency industrial compressor unit",
      "Double insulated heavy-duty lockable door",
      "Shelving compartments for beverage crates and food trays",
      "Standard 220V power connection or generator compatible",
    ],
    specs: [
      { label: "Cooling Range", value: "-2°C to +6°C" },
      { label: "Capacity", value: "Large Dual-Axle Trailer Volume" },
      { label: "Power Source", value: "Standard 220V / Generator" },
    ],
    idealFor: ["Large Parties", "Weddings", "Catering Operations", "Community Gatherings", "Braai Events"],
    badge: "Top Seller",
    popular: true,
  },
  {
    id: "mobile-warmers",
    name: "Mobile Food Warmers & VIP Warmers",
    category: "warmers",
    tagline: "Keep your celebration feasts steaming hot, fresh, and ready to serve",
    description:
      "Commercial mobile food warmers and VIP Bain-Marie heated units complete with stainless steel chafing dishes. Prevents cold meals and ensures guests enjoy steaming hot food.",
    features: [
      "Includes full set of premium stainless steel chafing dishes & lids",
      "Adjustable multi-tier temperature regulation",
      "Even heat distribution across all food compartments",
      "Hygienic easy-clean stainless steel surfaces",
      "Delivered ready-to-use with heat fuel or electric options",
    ],
    specs: [
      { label: "Included Accessories", value: "Full set chafing dishes & serving trays" },
      { label: "Temperature Control", value: "Multi-level heat regulator" },
      { label: "Capacity", value: "Feeds 50 - 500+ guests" },
    ],
    idealFor: ["Wedding Receptions", "Memorial Services", "Banquets", "Catered Feasts", "Church Conferences"],
    badge: "Customer Favorite",
    popular: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Kabelo M.",
    location: "Soshanguve Block L",
    eventType: "Family Wedding",
    comment:
      "NGOBZ Mobile arrived right on time early in the morning. The cooler was ice cold and the VIP toilets were spotless. Made our wedding reception stress-free!",
    rating: 5,
    date: "August 2026",
  },
  {
    id: "2",
    name: "Thando N.",
    location: "Mabopane",
    eventType: "Ceremony & Feast",
    comment:
      "Their mobile warmer kept our food piping hot throughout the day. Chafing dishes were clean and top quality. Excellent communication from Wandile.",
    rating: 5,
    date: "July 2026",
  },
  {
    id: "3",
    name: "Sipho D.",
    location: "Hammanskraal",
    eventType: "Memorial Service",
    comment:
      "Reliable service when we needed it most. Delivery on the morning of the service and prompt collection. Highly recommended across Pretoria.",
    rating: 5,
    date: "June 2026",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "When are the rental units delivered and collected?",
    answer:
      "We deliver the units on the morning of your event or ceremony and collect them promptly after the service concludes or at the agreed end-of-day time.",
    category: "Delivery",
  },
  {
    question: "Which areas do you deliver to in Gauteng?",
    answer:
      "We primarily service Pretoria and surrounding communities including Soshanguve, Mabopane, Hammanskraal, Ga-Rankuwa, Centurion, Mamelodi, and nearby regions.",
    category: "Coverage",
  },
  {
    question: "Do the mobile warmers include chafing dishes?",
    answer:
      "Yes! All our mobile warmer and VIP warmer rentals include high-grade stainless steel chafing dishes and serving inserts ready for your catering team.",
    category: "Equipment",
  },
  {
    question: "How do I secure a booking for my event date?",
    answer:
      "You can send an instant booking request through our online quote builder or WhatsApp us directly at +27 76 707 6120 with your event date and location.",
    category: "Booking",
  },
];
