"use client";

import * as React from "react";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/business-data";
import { ShieldCheck, CheckCircle2, Truck, Clock, Sparkles } from "lucide-react";

export function SafetyBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left visual card matching reference Image 1 */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white shadow-2xl space-y-6 overflow-hidden border border-slate-800">
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
                    <p className="text-[10px] text-slate-400">Quality Verified</p>
                  </div>
                </div>
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Sanitation Standard:</span>
                  <span className="text-emerald-400 font-bold">100% Certified</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Temperature Calibration:</span>
                  <span className="text-blue-400 font-bold">Passed</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Delivery Fleet:</span>
                  <span className="text-white font-bold">GPS Monitored</span>
                </div>
              </div>

              {/* Floating Success Pill Tag matching reference */}
              <div className="rounded-2xl bg-white text-slate-900 p-3 shadow-lg flex items-center gap-2.5">
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold">Event Guaranteed</p>
                  <p className="text-[10px] text-slate-500">Zero-Delay Onsite Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column matching reference Image 1 */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Your events are seamless <br className="hidden sm:inline" />
              <span className="text-muted-foreground font-medium">with NGOBZ Mobile</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              All equipment is thoroughly sanitized, temperature-tested, and prepared ahead of time.
              Units are delivered directly to your ceremony or venue with on-site leveling and setup so you can focus on your guests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Early Morning Delivery</h4>
                  <p className="text-xs text-muted-foreground">Arrives hours before service start time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Prompt Post-Service Collection</h4>
                  <p className="text-xs text-muted-foreground">Collected swiftly when the event wraps up.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
