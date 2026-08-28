"use client";

import * as React from "react";
import { Sparkles, Award, Shield, CheckCircle2, HeartHandshake } from "lucide-react";

export function TrustLogos() {
  const trustBadges = [
    { label: "Pretoria Events", icon: <Award className="h-5 w-5 text-emerald-500" /> },
    { label: "Soshanguve Hub", icon: <Shield className="h-5 w-5 text-slate-700 dark:text-slate-200" /> },
    { label: "Mabopane Feasts", icon: <CheckCircle2 className="h-5 w-5 text-slate-700 dark:text-slate-200" /> },
    { label: "Hammanskraal", icon: <HeartHandshake className="h-5 w-5 text-slate-700 dark:text-slate-200" /> },
    { label: "Gauteng Weddings", icon: <Sparkles className="h-5 w-5 text-slate-700 dark:text-slate-200" /> },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Focusing on quality, we <br className="hidden sm:inline" />
              maintain customer trust
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We ensure that every rental trailer and VIP restroom reaches your ceremony spotlessly clean, fully powered, and ready for immediate service.
            </p>
          </div>
        </div>

        {/* Circular Trust Badges matching reference */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 pt-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-accent/40 border border-border/60 hover:border-emerald-500/40 hover:bg-accent transition-all duration-300 shadow-xs"
            >
              <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center shadow-xs">
                {badge.icon}
              </div>
              <span className="font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
