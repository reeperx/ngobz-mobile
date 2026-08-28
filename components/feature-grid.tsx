"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Snowflake,
  Flame,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Thermometer,
  Layers,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";

export function FeatureGrid() {
  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Layers className="h-3.5 w-3.5 text-blue-500" />
            <span>Equipment Specifications &amp; Inclusions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
            Two Core Rental Solutions,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Engineered for Big Events
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything your catering crew needs for flawless food preservation and continuous hot serving. Delivered ready-to-use with zero setup hassle.
          </p>
        </div>

        {/* 2 Deep-Dive Equipment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Mobile Cooler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-5">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Snowflake className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      Cold Storage Fleet
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">
                      Mobile Chiller &amp; Cold Rooms
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-700 dark:text-cyan-300 whitespace-nowrap">
                  -2°C Rapid Chill
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Industrial dual-axle refrigeration trailers engineered for outdoor South African heat. Keeps bulk meat supplies, drinks, and ingredients freezing cold throughout your entire function.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-2.5 p-4 rounded-2xl bg-accent/30 border border-border/50 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[11px]">Temperature Range</span>
                  <strong className="text-foreground font-bold">-2°C to +4°C Active</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Power Compatibility</span>
                  <strong className="text-foreground font-bold">220V Grid or Generator</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Trailer Build</span>
                  <strong className="text-foreground font-bold">Heavy-Duty Dual-Axle</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Security</span>
                  <strong className="text-foreground font-bold">Lockable Double Door</strong>
                </div>
              </div>

              {/* What's Included Checklist */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Included with every rental:
                </span>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Heavy-duty power extension lead with surge protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Heavy-duty trailer hitch lock and wheel stabilizing chocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Deep interior shelving for beverage crates &amp; bulk meat trays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Pre-cooled on arrival for instant loading</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center gap-3">
              <Button
                className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 text-xs sm:text-sm gap-1.5 cursor-pointer shadow-sm"
                onClick={scrollToCalculator}
              >
                <span>Calculate Cooler Price</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Commercial Mobile Food Warmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-5">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Flame className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Catering &amp; Buffet Ready
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">
                      Mobile Food Warmers &amp; VIP Units
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300 whitespace-nowrap">
                  Chafing Dishes Included
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Commercial mobile food warmers and VIP Bain-Marie heated units. Prevents cold feasts and ensures wedding or funeral guests enjoy steaming hot food all day.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-2.5 p-4 rounded-2xl bg-accent/30 border border-border/50 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[11px]">Heat Technology</span>
                  <strong className="text-foreground font-bold">Multi-Tier Bain-Marie</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Capacity</span>
                  <strong className="text-foreground font-bold">Feeds 50 - 500+ Guests</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Material</span>
                  <strong className="text-foreground font-bold">Hygienic Stainless Steel</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Serving Inserts</span>
                  <strong className="text-foreground font-bold">Deep Chafing Dish Pans</strong>
                </div>
              </div>

              {/* What's Included Checklist */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Included with every rental:
                </span>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Complete set of stainless steel chafing dishes, pans, and fitted lids</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Adjustable heat regulator for delicate meats, gravies, and starches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Sanitized and deodorized before dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Delivered ready-to-use with heat fuel / electric options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center gap-3">
              <Button
                className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 text-xs sm:text-sm gap-1.5 cursor-pointer shadow-sm"
                onClick={scrollToCalculator}
              >
                <span>Calculate Warmer Price</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
