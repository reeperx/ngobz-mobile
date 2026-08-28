"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";

export function TrustLogos() {
  const guarantees = [
    {
      icon: Clock,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
      title: "06:00 AM Dispatch",
      badge: "On-Time",
      description: "Early morning venue delivery so equipment is cooled, heated, and ready before guests arrive.",
    },
    {
      icon: Snowflake,
      iconColor: "text-cyan-600 dark:text-cyan-400",
      iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
      title: "-2°C Active Chill",
      badge: "Tested",
      description: "Industrial dual-axle refrigeration trailers keeping bulk meats and beverages freezing cold.",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
      title: "100% Sanitized",
      badge: "Hospital Grade",
      description: "Every VIP restroom and warmer tray is thoroughly steam cleaned, sanitized, and deodorized.",
    },
    {
      icon: CheckCircle2,
      iconColor: "text-violet-600 dark:text-violet-400",
      iconBg: "bg-violet-500/10 dark:bg-violet-500/20",
      title: "Zero Hidden Fees",
      badge: "Transparent",
      description: "Clear flat pricing, free equipment testing on arrival, and fast WhatsApp direct support.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-border/40 bg-accent/15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Centered Clean Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            <span>Quality &amp; Reliability Guarantee</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
            Focusing on Quality,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Built on Customer Trust
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We ensure every mobile cooler, food warmer, and VIP unit reaches your event spotlessly clean, fully temperature-tested, and ready for immediate service.
          </p>
        </div>

        {/* 4-Pillar Quality Cards Grid: 2 cols on mobile, 4 cols on tablet/desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {guarantees.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/70 bg-card p-4 sm:p-5 lg:p-6 shadow-xs hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <IconComp className={`h-4 w-4 sm:h-5 sm:w-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-muted-foreground bg-accent/60 px-2 py-0.5 rounded-md border border-border/40">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-xs sm:text-sm md:text-base text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-1.5 line-clamp-3 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Coverage Ticker / Badges */}
        <div className="pt-2">
          <div className="rounded-2xl sm:rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 sm:p-5 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-foreground">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Delivering Daily Across Pretoria &amp; Gauteng Regions:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-accent/40 border border-border/50 text-foreground/80 hover:text-blue-600 hover:border-blue-500/30 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
