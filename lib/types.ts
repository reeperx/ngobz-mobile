export interface ServiceItem {
  id: string;
  name: string;
  category: "toilets" | "coolers" | "warmers";
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string[];
  badge?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  eventType: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  location: string;
  selectedServices: string[];
  durationDays: number;
  notes?: string;
}
