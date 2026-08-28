"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
  Pause,
  Play,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

export function CaseStudySlider() {
  const [isPaused, setIsPaused] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Smooth infinite continuous scroll
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.75; // Smooth marquee speed

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // When scrolled half of the duplicated elements, seamlessly loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate for seamless infinite loop
  const loopedReviews = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 border-b border-border/40 scroll-mt-20 overflow-hidden">
      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
            Trusted by Families &amp; Caterers,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Across Gauteng
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Read authentic feedback from wedding hosts, family elders, and event planners who trust NGOBZ Mobile for prompt deliveries and spotless equipment.
          </p>
        </div>

        {/* Continuous Horizontal Infinite Marquee */}
        <div
          className="relative w-full overflow-hidden select-none py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {loopedReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="flex-none w-[300px] sm:w-[380px] md:w-[420px] rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
              >
                {/* Rating & Event Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-accent text-[11px] font-bold text-muted-foreground">
                    {review.eventType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div className="pt-2 border-t border-border/50 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <strong className="text-xs sm:text-sm font-bold text-foreground">
                        {review.name}
                      </strong>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Status Indicator */}
          <div className="flex items-center justify-center gap-2 pt-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1 font-medium">
              {isPaused ? (
                <>
                  <Pause className="h-3 w-3 text-amber-500" />
                  <span>Paused on hover</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-emerald-500" />
                  <span>Continuous review scroll • Hover or swipe to pause</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-foreground">
                Join 350+ Satisfied Event Hosts in Pretoria &amp; Gauteng
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Lock in your date today for reliable coolers, food warmers, and on-time service.
              </p>
            </div>

            <Button
              className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 h-11 text-xs sm:text-sm gap-2 cursor-pointer shadow-sm shrink-0"
              onClick={openQuoteModal}
            >
              <span>Get Your Event Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
