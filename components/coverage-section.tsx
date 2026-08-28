"use client";

import * as React from "react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Badge } from "@/components/ui/badge";
import { MapPin, Truck, Clock, ShieldCheck } from "lucide-react";

export function CoverageSection() {
  return (
    <section id="areas" className="py-16 bg-accent/10 border-t border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-5">
            <Badge variant="gradient" className="px-3 py-1 text-xs">
              Service Delivery Areas
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Servicing Pretoria, Northern Gauteng & Surrounding Townships
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide prompt, reliable delivery right to your ceremony venue, residential address, or event ground.
              Our drivers ensure equipment is leveled, connected, powered, and thoroughly tested before service starts.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck className="h-4 w-4" />
                </div>
                <span>Delivered on the morning of your event / ceremony</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Collected promptly post-service or at the end of the day</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Full on-site setup & technical assistance included</span>
              </div>
            </div>
          </div>

          {/* Right pills */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Key Covered Locations
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {BUSINESS_INFO.serviceAreas.map((area, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent/60 border border-border/60 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent transition-colors"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/40 text-xs text-muted-foreground">
                Don&apos;t see your area listed? Contact us directly — we frequently cater to broader Gauteng and North West border regions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
