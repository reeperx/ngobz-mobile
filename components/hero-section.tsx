"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Calculator,
  ShieldCheck,
  Snowflake,
  Flame,
  Star,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroSection() {
  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Wandile, I would like to inquire about renting equipment for an upcoming event in Pretoria."
  )}`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-2 sm:pt-4 lg:pt-6 pb-12 sm:pb-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Light Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[280px] h-[280px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: High-Impact Copy & Conversion Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 space-y-5 text-left"
          >
            {/* Main Catchy Headline */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18] text-balance">
                Hire Event Equipment With Ease.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Keep Food Fresh &amp; Hot.
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Heavy-duty mobile coolers chilling down to{" "}
                <strong className="text-foreground font-semibold">-2°C</strong> and
                commercial mobile food warmers complete with stainless steel chafing dishes delivered on time across Pretoria &amp; Gauteng.
              </p>
            </div>

            {/* Quick Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Prompt 06:00 AM Morning Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                <span>-2°C Deep Cold Hold Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Chafing Dishes &amp; Inserts Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Zero Hidden Fees &amp; Direct WhatsApp</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 sm:h-13 px-7 text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01] transition-all cursor-pointer gap-2"
                onClick={() => scrollToSection("calculator")}
              >
                <Calculator className="h-4 w-4" />
                <span>Get Instant Quote</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-emerald-600/30 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold h-12 sm:h-13 px-6 text-sm sm:text-base gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                onClick={() => window.open(whatsappHref, "_blank")}
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Wandile</span>
              </Button>
            </div>

            {/* Quick Phone Call Hotline */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-blue-600" />
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
                <div className="text-[11px] sm:text-xs text-muted-foreground">Events Catered</div>
              </div>
              <div className="border-l border-border/60 pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">-2°C</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground">Cold Hold Guaranteed</div>
              </div>
              <div className="border-l border-border/60 pl-3 sm:pl-6">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  <span>5.0</span>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Image Carousel Showcase */}
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
