"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Star, Quote, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/business-data";
import { Button } from "@/components/ui/button";

export function CaseStudySlider() {
  const [activeTab, setActiveTab] = React.useState(0);

  const cases = [
    {
      title: "Soshanguve Wedding Feast",
      client: "Kabelo M. Family",
      role: "Wedding Host",
      quote:
        "NGOBZ Mobile arrived early at 6 AM. The cooler was ice-cold for all our drinks and meat, and the VIP restrooms were spotless throughout the entire wedding day.",
      rating: 5,
      date: "August 2026",
    },
    {
      title: "Mabopane Ceremony & Feast",
      client: "Thando N.",
      role: "Event Coordinator",
      quote:
        "Their mobile warmer kept our buffet piping hot for 400 guests. The chafing dishes were premium grade and clean. Wandile was extremely responsive.",
      rating: 5,
      date: "July 2026",
    },
    {
      title: "Hammanskraal Memorial Service",
      client: "Sipho D.",
      role: "Family Representative",
      quote:
        "Reliable service when our family needed it most. Delivered on time and collected smoothly after service. Highly recommend them across Pretoria.",
      rating: 5,
      date: "June 2026",
    },
  ];

  return (
    <section className="py-20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            See how we solve problems, <span className="text-muted-foreground font-medium">right on target</span>
          </h2>
        </div>

        {/* Big Rounded Case Study Card matching reference */}
        <div className="rounded-[2.5rem] border border-border/80 bg-card p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-foreground">
                  {cases[activeTab].client}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  • {cases[activeTab].title}
                </span>
              </div>

              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed italic">
                &ldquo;{cases[activeTab].quote}&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="sm"
                  className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 h-10 gap-1.5 shadow-sm text-xs cursor-pointer"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I%20read%20the%20${encodeURIComponent(
                        cases[activeTab].title
                      )}%20review%20and%20want%20to%20inquire.`,
                      "_blank"
                    )
                  }
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-emerald-500" />
                  ))}
                  <span className="ml-1 text-muted-foreground">5.0 Verified</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-muted-foreground">
                <span className="font-bold text-foreground">{cases[activeTab].client}</span> — {cases[activeTab].role} ({cases[activeTab].date})
              </div>
            </div>

            {/* Right Card Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-950 p-6 text-white space-y-4 shadow-xl border border-slate-800">
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
                    <h5 className="font-bold text-sm text-white">{BUSINESS_INFO.name}</h5>
                    <p className="text-[10px] text-emerald-400">Execution Verified</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Cleanliness:</span>
                    <span className="text-emerald-400 font-bold">100% Passed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cold Temp Hold:</span>
                    <span className="text-blue-400 font-bold">-2°C Constant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Punctuality:</span>
                    <span className="text-white font-bold">06:00 AM On Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicator Buttons matching reference */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "bg-accent/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>0{idx + 1}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
