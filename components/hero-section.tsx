"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, ShieldCheck, Truck, Sparkles, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gradient" className="px-3 py-1 text-xs sm:text-sm font-semibold gap-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                #1 Event Rentals in Pretoria & Gauteng
              </Badge>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                <Star className="h-4 w-4 fill-amber-500" />
                <span>5.0 Star Rated Service</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Mobile Coolers, Warmers &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                VIP Mobile Toilets
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Elevate your weddings, ceremonies, and private events with pristine, fully-sanitized
              mobile refrigeration, VIP warming units with chafing dishes, and luxury portable restrooms.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent/40 rounded-xl p-3 border border-border/50">
                <Truck className="h-4 w-4 text-primary shrink-0" />
                <span>Same-Day Event Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent/40 rounded-xl p-3 border border-border/50">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>100% Hospital Sanitized</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent/40 rounded-xl p-3 border border-border/50 col-span-2 sm:col-span-1">
                <Calendar className="h-4 w-4 text-primary shrink-0" />
                <span>Prompt Collection</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="gradient"
                size="lg"
                className="gap-2.5 text-base shadow-xl"
                onClick={() => {
                  const el = document.getElementById("calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Calendar className="h-5 w-5" />
                <span>Get Instant Quote</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2.5 text-base hover:border-primary/50"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20NGOBZ%20Mobile,%20I'd%20like%20to%20check%20availability%20for%20an%20upcoming%20event.`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="h-5 w-5 text-emerald-500" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Verified Client Profile & Service Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center gap-4 border-b border-border/50 pb-5">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-md">
                  <Image
                    src={BUSINESS_INFO.logoUrl}
                    alt={BUSINESS_INFO.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-foreground">{BUSINESS_INFO.name}</h3>
                    <Badge variant="secondary" className="text-xs">Verified</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground">Main Offerings</span>
                  <span className="font-semibold text-foreground">Toilets • Coolers • Warmers</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground">Serving</span>
                  <span className="font-semibold text-foreground">Pretoria, Soshanguve & Surrounds</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/30">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-emerald-500 font-mono">Under 15 Mins</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-muted-foreground">Service Mode</span>
                  <span className="font-semibold text-primary">On-site Delivery & Setup</span>
                </div>
              </div>

              <div className="rounded-2xl bg-primary/10 p-4 border border-primary/20 text-center">
                <p className="text-xs font-semibold text-primary tracking-wide uppercase">
                  Planning an event this weekend?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Reserve your equipment early to guarantee availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
