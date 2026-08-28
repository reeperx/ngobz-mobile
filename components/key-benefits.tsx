"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bath, Snowflake, Flame, Truck, CreditCard, Sparkles } from "lucide-react";

export function KeyBenefits() {
  return (
    <section id="benefits" className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Key benefits
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Everything you need for seamless event catering and guest hospitality under one roof.
          </p>
        </motion.div>

        {/* Bento Grid layout with responsive spans and non-stacking badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: VIP Sanitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex"
          >
            <Card className="w-full rounded-3xl border-border/70 bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-start gap-2">
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <Bath className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                  100% Sanitized
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg text-foreground">VIP Mobile Restrooms</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Spotlessly clean flushing toilets with freshwater wash basins, soap, and mirrors for guest comfort.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-accent/40 text-[11px] text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">Single & luxury VIP dual suites</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Digital Cold Storage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            <Card className="w-full rounded-3xl border-border/70 bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-start gap-2">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Snowflake className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                  -2°C Rapid Chill
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg text-foreground">Heavy-Duty Coolers</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Spacious refrigeration trailers keeping drinks, beverages, and bulk meat perfectly cold.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-accent/40 text-[11px] text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span className="truncate">Standard 220V plug or generator</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Food Warmers & Chafing Sets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex"
          >
            <Card className="w-full rounded-3xl border-border/70 bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-start gap-2">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Flame className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                  Chafing Included
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg text-foreground">Mobile Food Warmers</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Commercial heating units with complete stainless steel serving dishes to serve piping hot meals.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-accent/40 text-[11px] text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span className="truncate">Full set of chafing dishes & lids</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Same-Day Delivery & Collection (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 flex"
          >
            <Card className="w-full rounded-3xl border-border/70 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="space-y-2 max-w-md">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Same-Day Delivery & Collection</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We deliver directly to your venue on event morning and collect after the ceremony concludes. Zero stress for event hosts.
                </p>
              </div>
              <div className="rounded-2xl bg-accent/50 p-4 border border-border/50 text-xs space-y-1 shrink-0 whitespace-nowrap">
                <p className="font-semibold text-foreground">Pretoria & Surrounding Hubs</p>
                <p className="text-muted-foreground">Soshanguve • Mabopane • Hammanskraal</p>
              </div>
            </Card>
          </motion.div>

          {/* Card 5: Transparent Pricing (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex"
          >
            <Card className="w-full rounded-3xl border-border/70 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-center">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Direct & Transparent</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No hidden fees. Upfront quotes with convenient EFT or Cash on Delivery options.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
