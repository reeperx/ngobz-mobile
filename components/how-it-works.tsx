"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/business-data";
import { CheckCircle2, Sparkles } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-950 text-white rounded-[2.5rem] sm:rounded-[3rem] mx-3 sm:mx-6 lg:mx-8 my-10 overflow-hidden shadow-2xl relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            How it works?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Hassle-free 3-step rental process designed to keep your special occasion running seamlessly.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto min-h-[460px] flex items-center justify-center">
          {/* Central Mockup Device with floating animation */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full max-w-[320px] rounded-[2.8rem] border-[6px] border-slate-800 bg-slate-900 p-5 shadow-2xl space-y-4 text-left"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap">NGOBZ Booking Assistant</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            </div>

            <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 space-y-2">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Event Dispatch</span>
              <p className="text-sm font-bold text-white whitespace-nowrap">Pretoria & Gauteng Hub</p>
              <div className="flex justify-between text-xs pt-2 border-t border-slate-800 text-slate-400">
                <span>Fleet Status</span>
                <span className="text-emerald-400 font-semibold whitespace-nowrap">Ready to Roll</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-slate-300 truncate">1. Select Units</span>
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-slate-300 truncate">2. Venue & Date</span>
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-slate-300 truncate">3. Delivery & Setup</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* Step 1 - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block absolute right-0 top-4 w-72 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-5 text-left shadow-xl"
          >
            <span className="text-xs font-bold text-primary tracking-wider uppercase whitespace-nowrap">STEP 1</span>
            <h4 className="font-bold text-white text-sm mt-1">Select your equipment</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Choose from heavy-duty coolers, food warmers with chafing dishes, or VIP luxury mobile toilets.
            </p>
          </motion.div>

          {/* Step 2 - Left Middle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block absolute left-0 top-32 w-72 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-5 text-left shadow-xl"
          >
            <span className="text-xs font-bold text-primary tracking-wider uppercase whitespace-nowrap">STEP 2</span>
            <h4 className="font-bold text-white text-sm mt-1">Confirm date & venue</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Tell us your suburb in Pretoria, Soshanguve, Mabopane or surrounding areas via instant WhatsApp quote.
            </p>
          </motion.div>

          {/* Step 3 - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block absolute right-0 bottom-4 w-72 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-5 text-left shadow-xl"
          >
            <span className="text-xs font-bold text-primary tracking-wider uppercase whitespace-nowrap">STEP 3</span>
            <h4 className="font-bold text-white text-sm mt-1">Same-day delivery & collection</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              We deliver early on event morning, handle on-site setup, and collect seamlessly after service concludes.
            </p>
          </motion.div>
        </div>

        {/* Mobile Step Cards */}
        <div className="grid grid-cols-1 gap-3 md:hidden text-left">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-bold text-primary uppercase whitespace-nowrap">STEP 1</span>
            <h4 className="font-bold text-white text-sm mt-1">Select your equipment</h4>
            <p className="text-xs text-slate-400 mt-1">Pick mobile coolers, food warmers, or VIP mobile restrooms.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-bold text-primary uppercase whitespace-nowrap">STEP 2</span>
            <h4 className="font-bold text-white text-sm mt-1">Confirm date & location</h4>
            <p className="text-xs text-slate-400 mt-1">Provide your event location and timing for immediate dispatch booking.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-bold text-primary uppercase whitespace-nowrap">STEP 3</span>
            <h4 className="font-bold text-white text-sm mt-1">Same-day delivery & collection</h4>
            <p className="text-xs text-slate-400 mt-1">Professional setup before guests arrive and prompt collection post-event.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
