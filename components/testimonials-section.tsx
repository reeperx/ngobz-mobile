"use client";

import * as React from "react";
import { TESTIMONIALS } from "@/lib/business-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header matching reference Image 1 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              What our <span className="text-muted-foreground font-medium">clients say</span>
            </h2>
            {/* Trustpilot-style Rating Badge */}
            <div className="flex items-center gap-2">
              <div className="flex bg-emerald-600 px-2 py-1 rounded text-white gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-white" />
                ))}
              </div>
              <span className="text-xs font-bold text-foreground">Google & Facebook</span>
              <span className="text-xs text-muted-foreground">Rated 5.0/5.0</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-border hover:bg-accent cursor-pointer"
              onClick={prevReview}
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={nextReview}
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <Card
              key={t.id}
              className={`rounded-3xl border-border/70 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 ${
                idx === currentIndex ? "border-primary/40 ring-2 ring-primary/10" : ""
              }`}
            >
              <CardContent className="p-0 space-y-3">
                {/* 5 Cyan/Blue Stars */}
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {t.comment}
                </p>
              </CardContent>

              {/* Author footer */}
              <div className="pt-4 border-t border-border/40 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary/20 to-primary/40 flex items-center justify-center font-bold text-xs text-primary shrink-0 border border-primary/20">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-foreground flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground">{t.location} • {t.eventType}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
