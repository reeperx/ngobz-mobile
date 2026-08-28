"use client";

import * as React from "react";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-gradient-to-r from-sky-400 via-primary to-blue-600 p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
          {/* Subtle decorative background circles */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left text column matching Image 1 */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-90">
                Join 200+ successful events in Pretoria & Gauteng
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Start Hiring with <br />
                NGOBZ Mobile Today
              </h2>
              <p className="text-sm sm:text-base opacity-90 max-w-lg leading-relaxed">
                Secure your mobile cooler, food warmer with chafing sets, or VIP restrooms for your upcoming celebration date.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-slate-900 hover:bg-white/90 font-bold px-8 py-6 text-sm shadow-xl cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById("calculator");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book Equipment Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-6 text-sm gap-2 cursor-pointer"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20reserve%20units%20for%20an%20event.`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: {BUSINESS_INFO.phone}</span>
                </Button>
              </div>
            </div>

            {/* Right mini card mockup matching reference */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-full max-w-[240px] rounded-3xl bg-white text-slate-900 p-5 shadow-2xl space-y-4 text-left border border-white/40">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200">
                    <Image
                      src={BUSINESS_INFO.logoUrl}
                      alt={BUSINESS_INFO.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs">{BUSINESS_INFO.name}</h5>
                    <span className="text-[10px] text-emerald-600 font-semibold">Available</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>VIP Toilets:</span>
                    <span className="font-bold text-slate-900">Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile Coolers:</span>
                    <span className="font-bold text-slate-900">Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Food Warmers:</span>
                    <span className="font-bold text-slate-900">Ready</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Response</span>
                  <span className="font-bold text-primary">&lt; 15 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
