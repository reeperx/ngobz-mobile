"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Bath, Snowflake, Flame, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";

export function ServicesNumbered() {
  const [selectedService, setSelectedService] = React.useState(0);

  const servicesList = [
    {
      num: "01",
      title: "VIP Mobile Toilets",
      desc: "Flushing luxury portable restrooms with fresh water vanity basins and mirror lighting.",
      icon: <Bath className="h-5 w-5 text-emerald-500" />,
    },
    {
      num: "02",
      title: "Mobile Coolers",
      desc: "Refrigeration trailers keeping drinks and bulk meat at optimal -2°C cold temperatures.",
      icon: <Snowflake className="h-5 w-5 text-blue-500" />,
    },
    {
      num: "03",
      title: "Food Warmers",
      desc: "Bain-Marie commercial warmers with full sets of stainless steel chafing dishes.",
      icon: <Flame className="h-5 w-5 text-amber-500" />,
    },
    {
      num: "04",
      title: "Full Event Combos",
      desc: "Turnkey bundles combining coolers, warmers, and VIP toilets for large celebrations.",
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column matching reference: Title + Button + 4 Numbered Cards */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Trusted service, <span className="text-muted-foreground font-medium">for your various needs</span>
              </h2>
              <Button
                size="sm"
                className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 h-10 gap-1.5 shadow-sm text-xs cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Quick Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            {/* 4 Numbered Cards (2x2 Grid) matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {servicesList.map((srv, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedService(idx)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer space-y-2 text-left ${
                    selectedService === idx
                      ? "border-emerald-500 bg-accent/40 shadow-sm ring-1 ring-emerald-500/20"
                      : "border-border/70 bg-card hover:border-border"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-muted-foreground">{srv.num}</span>
                  <h4 className="font-bold text-sm text-foreground">{srv.title}</h4>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500 pt-1">
                    <span>View Details</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-white shadow-2xl space-y-6 border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700">
                    <Image
                      src={BUSINESS_INFO.logoUrl}
                      alt={BUSINESS_INFO.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{BUSINESS_INFO.name}</h4>
                    <p className="text-[10px] text-slate-400">Pretoria Hub</p>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                  {servicesList[selectedService].icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {servicesList[selectedService].num} Overview
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {servicesList[selectedService].title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {servicesList[selectedService].desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Delivery Status:</span>
                  <span className="text-emerald-400 font-bold">Same-Day Early Dispatch</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Included Accessories:</span>
                  <span className="text-white font-bold">Full Standard Kit</span>
                </div>
              </div>

              <Button
                className="w-full rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-11 text-xs gap-1.5 shadow-md"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'm%20interested%20in%20${encodeURIComponent(
                      servicesList[selectedService].title
                    )}.`,
                    "_blank"
                  )
                }
              >
                <span>Book {servicesList[selectedService].title} on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
