"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Snowflake,
  Flame,
  Star,
  Sparkles,
  PhoneCall,
  Clock,
  MapPin,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";
import { openQuoteModal } from "@/components/quote-modal";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-3 sm:pt-6 lg:pt-8 pb-12 sm:pb-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Light Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[280px] h-[280px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: High-Impact Copy & Conversion Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-left"
          >
            {/* Live Active Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-card border border-border/80 text-xs font-bold text-foreground shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>24/7 Delivery Active in Pretoria &amp; Gauteng</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="hidden sm:inline text-blue-600 dark:text-blue-400 font-semibold">350+ Events Catered</span>
            </div>

            {/* Main Catchy Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground leading-[1.1] text-balance">
                Keep Drinks{" "}
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  -2°C Cold
                </span>{" "}
                &amp; Feasts{" "}
                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                  Steaming Hot.
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                Heavy-duty mobile cold rooms, commercial food warmers with stainless steel chafing dishes included, and VIP portable restrooms delivered on-time to your gate across Pretoria &amp; Gauteng.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button
                size="lg"
                className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 sm:h-13 px-8 text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01] transition-all cursor-pointer gap-2"
                onClick={openQuoteModal}
              >
                <Calculator className="h-4.5 w-4.5" />
                <span>Get Instant Quote</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-border/80 font-bold h-12 sm:h-13 px-6 text-sm sm:text-base hover:bg-accent transition-all cursor-pointer gap-2"
                onClick={() => scrollToSection("equipment")}
              >
                <span>Explore Fleet</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Hotline Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1 font-medium">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors font-semibold"
              >
                <PhoneCall className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>Direct Hotline: {BUSINESS_INFO.phone}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Mon-Sun: 06:00 - 20:00</span>
              </span>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 border-t border-border/60 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-foreground">350+</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">Events Catered</div>
              </div>
              <div className="border-l border-border/60 pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400">-2°C</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">Cold Hold Guaranteed</div>
              </div>
              <div className="border-l border-border/60 pl-3 sm:pl-6">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  <span>5.0</span>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">100% Client Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Carousel Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 w-full flex justify-center"
          >
            <HeroCarousel
              onSelectService={(targetId) => {
                scrollToSection(targetId);
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
