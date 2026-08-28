"use client";

import * as React from "react";
import {
  Truck,
  Snowflake,
  Flame,
  MapPin,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";

export function TrustLogos() {
  const trustHighlights = [
    {
      icon: Truck,
      iconColor: "text-blue-600 dark:text-blue-400",
      title: "06:00 AM Dispatch",
      subtitle: "Delivered early to your venue",
    },
    {
      icon: Snowflake,
      iconColor: "text-cyan-600 dark:text-cyan-400",
      title: "-2°C Cold Hold",
      subtitle: "Tested industrial compressors",
    },
    {
      icon: Flame,
      iconColor: "text-amber-600 dark:text-amber-400",
      title: "Chafing Dishes Included",
      subtitle: "Ready-to-use stainless steel trays",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      title: "Zero Hidden Fees",
      subtitle: "Transparent flat-rate pricing",
    },
  ];

  return (
    <section className="py-8 sm:py-10 border-b border-border/40 bg-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* 4-Item Quick Trust Metric Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-card border border-border/60 shadow-xs"
              >
                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <IconComp className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-muted-foreground truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Coverage Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground mr-1">
            <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Serving Gauteng Daily:</span>
          </span>
          {BUSINESS_INFO.serviceAreas.map((area, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-card border border-border/50 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:border-blue-500/30 transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
