"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Snowflake,
  Flame,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Thermometer,
  Layers,
  MessageCircle,
  Calculator,
  Sparkles,
  Lock,
  Utensils,
  Truck,
  Droplets,
  Award,
  Users,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badgeText: string;
  badgeColor: string;
  tempPill: string;
  accentGradient: string;
  glowBorder: string;
  imageSrc: string;
  specs: { label: string; value: string; icon: React.ElementType }[];
  inclusions: string[];
  idealFor: string[];
  ctaLabel: string;
}

const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: "coolers",
    name: "Heavy-Duty Mobile Coolers & Cold Rooms",
    category: "Industrial Refrigeration",
    tagline: "Heavy dual-axle cold rooms engineered for peak African summer heat. Keeps 500+ drink crates and bulk meat freezing cold.",
    badgeText: "Cold Hold Guaranteed",
    tempPill: "-2°C Deep Chill",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
    accentGradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    glowBorder: "hover:border-sky-500/40 hover:shadow-sky-500/10",
    imageSrc: "/images/hero/mobile-cooler-trailer.jpg",
    specs: [
      { label: "Target Temp", value: "-2°C to +4°C Digital", icon: Thermometer },
      { label: "Power Source", value: "220V Grid / Generator", icon: Zap },
      { label: "Chassis Build", value: "Heavy Dual-Axle Trailer", icon: Truck },
      { label: "Security", value: "Reinforced Lockable Door", icon: Lock },
    ],
    inclusions: [
      "Heavy-duty power lead with built-in surge protector",
      "Hitch security lock & heavy-duty wheel chocks",
      "Multi-tier heavy shelving for crates & bulk meat",
      "Pre-cooled to optimal temperature before arrival",
    ],
    idealFor: ["Weddings & Receptions", "Traditional Ceremonies", "Large Weekend Braais", "Catering Base Camps"],
    ctaLabel: "Get Cooler Quote",
  },
  {
    id: "warmers",
    name: "Commercial Mobile Food Warmers & Bain-Marie",
    category: "Heated Catering Stations",
    tagline: "Commercial Bain-Marie warming trailers complete with stainless steel chafing dish sets. Keeps buffet courses steaming hot (+75°C).",
    badgeText: "Chafing Dishes Included",
    tempPill: "+75°C Steaming Hot",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    accentGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    glowBorder: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    imageSrc: "/images/hero/mobile-food-warmer.jpg",
    specs: [
      { label: "Heat Tech", value: "Multi-Tier Bain-Marie", icon: Flame },
      { label: "Guest Capacity", value: "Feeds 50 - 500+ Guests", icon: Utensils },
      { label: "Build Finish", value: "Food-Grade Stainless Steel", icon: ShieldCheck },
      { label: "Serving Inserts", value: "Full Gastronorm Pans & Lids", icon: Layers },
    ],
    inclusions: [
      "Complete set of stainless steel chafing dishes & deep pans",
      "Dual electric / Sterno fuel heat compatibility",
      "Precision multi-level heat regulation for meats & gravies",
      "Hospital-grade sanitization before dispatch",
    ],
    idealFor: ["Family Banquets", "Church Conferences", "Memorial Services", "Outdoor VIP Buffets"],
    ctaLabel: "Get Warmer Quote",
  },
  {
    id: "toilets",
    name: "VIP & Standard Mobile Sanitation Restrooms",
    category: "Sanitation Solutions",
    tagline: "Ultra-clean portable restrooms and luxury VIP trailer suites equipped with fresh water flushing, vanity mirrors, and washbasins.",
    badgeText: "100% Hospital Sanitized",
    tempPill: "Spotless & Fresh",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    glowBorder: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    imageSrc: "/images/showcase/toilet.jpg",
    specs: [
      { label: "Hygiene", value: "Deep Hospital Sanitized", icon: Droplets },
      { label: "Water Setup", value: "Fresh Water Flush Basin", icon: Droplets },
      { label: "Lighting", value: "Vanity Mirror & LED", icon: Sparkles },
      { label: "Tiers", value: "Single, Double & VIP", icon: Award },
    ],
    inclusions: [
      "Spotless chemical flush and fresh water rinse system",
      "Handwash basins with soap dispensers & mirror",
      "Pre-event deep deodorization and sanitization",
      "Fast 15-minute setup upon morning arrival",
    ],
    idealFor: ["VIP Weddings", "Funerals & Memorials", "Corporate Gatherings", "Outdoor Festivals"],
    ctaLabel: "Get Restroom Quote",
  },
];

export function FeatureGrid() {
  const [activeTab, setActiveTab] = React.useState<string>("coolers");

  const currentEquipment = EQUIPMENT_DATA.find((e) => e.id === activeTab) || EQUIPMENT_DATA[0];

  return (
    <section id="equipment" className="py-16 sm:py-20 lg:py-24 border-b border-border/40 scroll-mt-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            <span>Commercial Fleet &amp; Hardware</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance">
            Engineered For Seamless Celebrations
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Explore our specialized event rental equipment. Select below to inspect technical ratings, capacity, and included hardware.
          </p>
        </div>

        {/* Interactive Segmented Switcher (3 Tabs) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/80 border border-border/70 backdrop-blur-md max-w-lg w-full">
            {EQUIPMENT_DATA.map((item) => {
              const isActive = activeTab === item.id;
              let Icon = Snowflake;
              if (item.id === "warmers") Icon = Flame;
              if (item.id === "toilets") Icon = Droplets;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-card text-foreground shadow-md border border-border/60"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      item.id === "coolers"
                        ? "text-sky-500"
                        : item.id === "warmers"
                        ? "text-amber-500"
                        : "text-emerald-500"
                    }`}
                  />
                  <span className="truncate">{item.id === "coolers" ? "Coolers" : item.id === "warmers" ? "Warmers" : "VIP Toilets"}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Equipment Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEquipment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`rounded-3xl border border-border/80 bg-card bg-gradient-to-br ${currentEquipment.accentGradient} p-6 sm:p-8 lg:p-10 shadow-xl transition-all ${currentEquipment.glowBorder}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Visual Hardware Preview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/70 bg-slate-950 shadow-md group">
                  <Image
                    src={currentEquipment.imageSrc}
                    alt={currentEquipment.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full border text-xs font-bold shadow-md backdrop-blur-md ${currentEquipment.badgeColor}`}
                    >
                      {currentEquipment.badgeText}
                    </span>
                  </div>

                  {/* Temperature / Feature Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-black text-white">
                      {currentEquipment.tempPill}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 inset-x-3 z-10 text-left">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                      {currentEquipment.category}
                    </span>
                    <strong className="text-sm sm:text-base font-black text-white block">
                      {currentEquipment.name}
                    </strong>
                  </div>
                </div>

                {/* Ideal Event Types Chips */}
                <div className="space-y-1.5 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Recommended for:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentEquipment.idealFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-accent/60 border border-border/50 text-[11px] font-semibold text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Spec Metrics Dashboard & Inclusions */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {currentEquipment.category}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Pretoria &amp; Gauteng Fleet</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-foreground">
                    {currentEquipment.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {currentEquipment.tagline}
                  </p>
                </div>

                {/* 4 Metric Spec Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {currentEquipment.specs.map((spec, idx) => {
                    const SpecIcon = spec.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-card border border-border/70 shadow-xs space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <SpecIcon className="h-3.5 w-3.5 text-blue-500" />
                          <span className="text-[10px] uppercase font-bold tracking-wider truncate">
                            {spec.label}
                          </span>
                        </div>
                        <strong className="text-xs sm:text-sm font-bold text-foreground block truncate">
                          {spec.value}
                        </strong>
                      </div>
                    );
                  })}
                </div>

                {/* What's Included Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-accent/40 border border-border/60 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                    What is included with your rental:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {currentEquipment.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <Button
                    size="lg"
                    onClick={openQuoteModal}
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 h-11 text-xs sm:text-sm gap-2 cursor-pointer shadow-lg shadow-blue-600/20"
                  >
                    <Calculator className="h-4 w-4" />
                    <span>{currentEquipment.ctaLabel}</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
