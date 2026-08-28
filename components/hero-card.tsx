"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Snowflake, Flame } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";

export function HeroCard() {
  return (
    <section id="home" className="pt-6 pb-12 px-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Dark Hero Card matching the reference image */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient emerald backlight glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                #1 Event Equipment & VIP Rentals in Pretoria
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                New Standard <br />
                for your Events
              </motion.h1>

              {/* Sub-actions matching reference */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold">
                <button
                  onClick={() => {
                    const el = document.getElementById("calculator");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors cursor-pointer group"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
                >
                  <span>Our services</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Top Floating Preview Card matching reference */}
            <div className="lg:col-span-4 flex lg:justify-end w-full">
              <div className="w-full max-w-[280px] rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 shadow-2xl space-y-3">
                <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-slate-700">
                  <Image
                    src={BUSINESS_INFO.logoUrl}
                    alt={BUSINESS_INFO.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-slate-950/70 px-2 py-0.5 rounded-md">
                    Verified Fleet
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-semibold text-white">Featured Equipment</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById("services");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer font-bold"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics Stats Bar matching reference */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">350+</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Events successfully catered across Pretoria & Gauteng
              </p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-slate-800/80 sm:pl-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hospital-grade sanitized VIP toilets & temperature-tested units
              </p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-slate-800/80 sm:pl-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">24/7</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Same-day early delivery & prompt post-event collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
