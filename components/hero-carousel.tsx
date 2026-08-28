"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Snowflake,
  ShieldCheck,
  Flame,
  Sparkles,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";
import { HERO_CAROUSEL_SLIDES } from "@/lib/business-data";
import type { HeroSlide } from "@/lib/types";

interface HeroCarouselProps {
  onSelectService?: (serviceId: string) => void;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
    },
  }),
};

export function HeroCarousel({ onSelectService }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const SLIDE_DURATION_MS = 5500;
  const UPDATE_INTERVAL_MS = 50;

  const slides = HERO_CAROUSEL_SLIDES;
  const currentSlide = slides[currentIndex];

  const paginate = React.useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = slides.length - 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        return nextIndex;
      });
      setProgress(0);
    },
    [slides.length]
  );

  const goToSlide = React.useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  // Autoplay timer with smooth progress bar
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = (UPDATE_INTERVAL_MS / SLIDE_DURATION_MS) * 100;
        if (prev + increment >= 100) {
          paginate(1);
          return 0;
        }
        return prev + increment;
      });
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const renderIcon = (iconName: HeroSlide["specPillIcon"]) => {
    switch (iconName) {
      case "snowflake":
        return <Snowflake className="h-3.5 w-3.5 text-blue-400 shrink-0 animate-pulse" />;
      case "shield":
        return <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />;
      case "flame":
        return <Flame className="h-3.5 w-3.5 text-amber-400 shrink-0" />;
      case "sparkles":
      default:
        return <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />;
    }
  };

  const handleActionClick = (targetId: string) => {
    if (onSelectService) {
      onSelectService(targetId);
      return;
    }
    const targetElement = document.getElementById(targetId) || document.getElementById("services") || document.getElementById("calculator");
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="NGOBZ Mobile Equipment Showcase"
    >
      {/* Decorative Glow Atmosphere */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-emerald-500/30 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none -z-10" />

      {/* Main Card Frame */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Main Slide Viewport */}
        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {/* Product Image */}
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient Vignette Overlays for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent" />

              {/* Top Floating Badges */}
              <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-4 flex items-center justify-between gap-2 z-20">
                {/* Dynamic Spec Pill */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-white shadow-lg"
                >
                  {renderIcon(currentSlide.specPillIcon)}
                  <span>{currentSlide.specPill}</span>
                </motion.div>

                {/* Fleet Category Tag */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/30 text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
                    {currentSlide.badge}
                  </span>
                </div>
              </div>

              {/* Bottom In-Slide Overlay Info */}
              <div className="absolute bottom-3.5 sm:bottom-4 inset-x-3.5 sm:inset-x-4 z-20 space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 text-left shadow-xl"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                      {currentSlide.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {currentIndex + 1} / {slides.length}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {currentSlide.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                    {currentSlide.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleActionClick(currentSlide.targetServiceId)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors cursor-pointer group"
                    >
                      <span>Explore details & specs</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                      Verified On-Site Fleet
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 inset-x-2 sm:inset-x-3 flex items-center justify-between pointer-events-none z-30">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="pointer-events-auto h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/15 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="pointer-events-auto h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/15 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bottom Thumbnail Strip & Controls */}
        <div className="p-3 sm:p-4 bg-card border-t border-border/60 space-y-3">
          {/* Thumbnail Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex items-center gap-3 p-2 sm:p-2.5 rounded-xl transition-all text-left cursor-pointer border ${
                    isActive
                      ? "bg-primary/10 border-primary shadow-sm"
                      : "bg-muted/40 hover:bg-muted/80 border-border/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="relative w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-border/50">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/20 ring-2 ring-primary inset-ring" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-xs sm:text-sm font-bold truncate ${
                        isActive ? "text-primary font-extrabold" : "text-foreground"
                      }`}
                    >
                      {slide.tag}
                    </span>
                    <span className="block text-[10px] sm:text-[11px] text-muted-foreground truncate">
                      {slide.specPill}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Autoplay Progress & Play/Pause Status */}
          <div className="flex items-center justify-between gap-3 pt-1 text-[11px] text-muted-foreground">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer text-[10px] font-medium"
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? (
                <>
                  <Play className="h-3 w-3 text-emerald-500" />
                  <span>Autoplay paused</span>
                </>
              ) : (
                <>
                  <Pause className="h-3 w-3 text-primary" />
                  <span>Rotating fleet showcase</span>
                </>
              )}
            </button>

            {/* Continuous Progress Bar Indicator */}
            <div className="flex-1 max-w-[140px] h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
