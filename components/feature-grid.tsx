"use client";

import * as React from "react";
import { ShieldCheck, CheckCircle2, Clock, BookOpen, Truck, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeatureGrid() {
  const features = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Layered sanitation",
      description: "Hospital-grade deep cleaning on all VIP mobile restrooms and catering equipment before dispatch.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      title: "Quality control of each unit",
      description: "Rigorous testing of refrigeration compressors and food warmer heating elements prior to delivery.",
    },
    {
      icon: <Clock className="h-5 w-5 text-emerald-500" />,
      title: "Reliable customer service",
      description: "Our dedicated support team is available 7 days a week with under 15-minute response times.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
      title: "Complimentary on-site setup",
      description: "Our delivery technicians level and test every trailer at your venue before your guests arrive.",
    },
    {
      icon: <Truck className="h-5 w-5 text-emerald-500" />,
      title: "Delivered safety & power",
      description: "All units are equipped for standard 220V power or generator hookup with surge protection.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-emerald-500" />,
      title: "Digital temperature control",
      description: "Digital readout displays keep beverages and bulk meat at optimal chilled temperatures (-2°C to 4°C).",
    },
  ];

  return (
    <section id="features" className="py-20 bg-accent/20 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            We offer quality, <span className="text-muted-foreground font-medium">with the best equipment and service</span>
          </h2>
        </div>

        {/* 6-Card Feature Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <Card
              key={idx}
              className="rounded-3xl border-border/70 bg-card p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 text-left"
            >
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                {feat.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-foreground">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
