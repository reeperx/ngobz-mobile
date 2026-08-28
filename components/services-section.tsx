"use client";

import * as React from "react";
import { SERVICES, BUSINESS_INFO } from "@/lib/business-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, Snowflake, Flame, CheckCircle2, MessageCircle, Sparkles, Shield, ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Featured Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Our Rental Catalog
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Specialized mobile equipment built to handle weddings, funerals, private celebrations, and corporate events.
          </p>
        </div>

        {/* Bento Grid layout for Services across all breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: VIP Mobile Toilets (Col Span 7) */}
          <Card className="md:col-span-7 rounded-[2.5rem] border-border/70 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Bath className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  100% Sanitized
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-foreground">
                  VIP & Standard Mobile Toilets
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Spotlessly clean portable flushing restrooms and luxury VIP trailers with freshwater rinse, handwash basins, soap dispensers, and mirrors.
                </p>
              </div>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Flushing & Fresh Water Basin</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Mirror & Vanity Lighting</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Deep Sanitized on Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Single & VIP Dual Suites</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">Ideal for: Weddings, Funerals, Private Events</span>
              <Button
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 text-xs gap-1.5 shrink-0"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20hire%20the%20VIP%20Mobile%20Toilets%20for%20an%20event.`,
                    "_blank"
                  )
                }
              >
                <span>Book Toilets</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>

          {/* Card 2: Mobile Coolers (Col Span 5) */}
          <Card className="md:col-span-5 rounded-[2.5rem] border-border/70 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Snowflake className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                  Down to -2°C
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Mobile Coolers & Cold Rooms
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  High-capacity mobile refrigeration trailers keeping drinks, beverages, and bulk meat ice-cold throughout warm weather gatherings.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Precision digital temperature gauge</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground p-2 rounded-xl bg-accent/40">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Lockable heavy-duty insulated doors</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">Dual Axle Volume</span>
              <Button
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 text-xs gap-1.5 shrink-0"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20hire%20the%20Mobile%20Cooler%20for%20an%20event.`,
                    "_blank"
                  )
                }
              >
                <span>Book Cooler</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>

          {/* Card 3: Mobile Food Warmers & VIP Warmers (Col Span 12) */}
          <Card className="md:col-span-12 rounded-[2.5rem] border-border/70 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Flame className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Mobile Food Warmers & VIP Warmers
                    </h3>
                    <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full hidden sm:inline">
                      Chafing Dishes Included
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Includes full set of stainless steel chafing dishes & lids</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Commercial heating units and Bain-Marie warmers designed to keep wedding feasts, funeral catering, and banquets steaming hot and ready to serve for 50 - 500+ guests.
              </p>
            </div>

            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-xs sm:text-sm gap-2 shrink-0 w-full md:w-auto"
              onClick={() =>
                window.open(
                  `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20hire%20the%20Mobile%20Food%20Warmer%20with%20chafing%20dishes.`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book Warmers on WhatsApp</span>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
