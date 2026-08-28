"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Maximize2,
  Calculator,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

interface ShowcasePhoto {
  id: string;
  src: string;
  location: string;
  title: string;
  description: string;
}

const SHOWCASE_PHOTOS: ShowcasePhoto[] = [
  {
    id: "p-1",
    src: "/images/showcase/480631305_1101248498473646_3279892248643713850_n.jpg",
    location: "Pretoria Event",
    title: "Heavy-Duty Dual-Axle Mobile Cooler Trailer",
    description: "Cold storage trailer on-site holding beverages and meat freezing cold at -2°C.",
  },
  {
    id: "p-2",
    src: "/images/showcase/473332374_1539923037410052_884203722908243039_n.jpg",
    location: "Soshanguve Feast",
    title: "Commercial Mobile Food Warmer Station",
    description: "Stainless steel mobile warmer complete with deep chafing dishes keeping buffet dishes steaming hot.",
  },
  {
    id: "p-3",
    src: "/images/showcase/186496935_606919277377104_8201199303261366693_n.jpg",
    location: "Mabopane Ceremony",
    title: "VIP Bain-Marie Warmer Setup",
    description: "Multi-compartment food warming station prepped for immediate banquet serving.",
  },
  {
    id: "p-4",
    src: "/images/showcase/134053434_476860987049601_7704482159405034626_n.jpg",
    location: "Hammanskraal",
    title: "High-Capacity Chiller Trailer",
    description: "Pre-cooled dual-axle cold room trailer connected to 220V power on arrival.",
  },
  {
    id: "p-5",
    src: "/images/showcase/118917366_380772963325071_4493756953176247080_n.jpg",
    location: "Centurion Gathering",
    title: "Live Celebration Catering Setup",
    description: "Full warmer and cooler equipment fleet serving 300+ celebration guests flawlessly.",
  },
  {
    id: "p-6",
    src: "/images/showcase/103148205_307715297297505_2231334706333180757_n.jpg",
    location: "Ga-Rankuwa",
    title: "Equipment Pre-Event Safety Check",
    description: "Spotless inspection and compressor temperature checks before dispatch.",
  },
  {
    id: "p-7",
    src: "/images/showcase/95143669_273543197381382_7075362345555329024_n.jpg",
    location: "Mamelodi Event",
    title: "VIP Mobile Food Warmer Trailer",
    description: "Equipped with stainless steel chafing pans and heating controls ready for service.",
  },
  {
    id: "p-8",
    src: "/images/showcase/81513094_180965276639175_517937768446296064_n.jpg",
    location: "Pretoria North",
    title: "06:00 AM Prompt Early Delivery",
    description: "Delivered early in the morning and leveled securely before catering staff arrive.",
  },
  {
    id: "p-9",
    src: "/images/showcase/75642394_158609285541441_5750532202240671744_n.jpg",
    location: "Winterveld",
    title: "Outdoor Traditional Feast Station",
    description: "Reliable Bain-Marie warming for traditional stew, pap, and vegetable dishes.",
  },
  {
    id: "p-10",
    src: "/images/showcase/75439477_154065505995819_7143059435391287296_n.jpg",
    location: "Akasia Celebration",
    title: "Hygienically Sanitized Chafing Pans",
    description: "Hospital-grade sanitization on all food contact surfaces and serving inserts.",
  },
];

export function ShowcaseGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PHOTOS.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_PHOTOS.length) % SHOWCASE_PHOTOS.length);
  }, []);

  // Auto rotation timer (5.5s)
  React.useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, nextSlide]);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  const currentPhoto = SHOWCASE_PHOTOS[currentIndex];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 border-b border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Camera className="h-3.5 w-3.5 text-blue-500" />
            <span>Real Event Fleet &amp; Setups</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
            Authentic On-Site Equipment,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Direct from Our Events
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Browse genuine photos of our heavy-duty mobile coolers, commercial food warmers, and catering trailers in action across Pretoria &amp; Gauteng.
          </p>
        </div>

        {/* Single Full-Width Image Carousel Container */}
        <div
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border/80 bg-slate-950 shadow-2xl group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Photo Area */}
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] max-h-[520px] overflow-hidden cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentPhoto.src}
                  alt={`NGOBZ Mobile Event Rental - ${currentPhoto.location}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30" />
              </motion.div>
            </AnimatePresence>

            {/* Top Left: Clean Location Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-white shadow-xl">
                <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>{currentPhoto.location}</span>
              </span>
            </div>

            {/* Top Right: Expand / Pause Status */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90 shadow-md flex items-center gap-1.5">
                {isPaused ? (
                  <>
                    <Pause className="h-3 w-3 text-amber-400" />
                    <span className="hidden sm:inline">Paused</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 text-emerald-400" />
                    <span className="hidden sm:inline">Auto-Playing</span>
                  </>
                )}
              </div>

              <div className="h-8 w-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Bottom Photo Title & Counter */}
            <div className="absolute bottom-4 inset-x-4 z-20 flex items-end justify-between gap-4 text-left">
              <div className="space-y-0.5 max-w-lg">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug drop-shadow-md">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs text-slate-300 hidden sm:block drop-shadow-sm">
                  {currentPhoto.description}
                </p>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white shrink-0 shadow-md">
                {currentIndex + 1} / {SHOWCASE_PHOTOS.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Dot Selectors */}
          <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto">
            {SHOWCASE_PHOTOS.map((photo, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 sm:w-10 bg-blue-500 shadow-sm shadow-blue-500/50"
                      : "w-2 sm:w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Action Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              Book this equipment for your event in Pretoria or surrounding areas
            </h4>
            <p className="text-xs text-muted-foreground">
              Same-day 06:00 AM delivery • Chafing dishes included with food warmers
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-10 text-xs sm:text-sm gap-2 cursor-pointer shadow-sm"
              onClick={openQuoteModal}
            >
              <Calculator className="h-4 w-4" />
              <span>Get Instant Quote</span>
            </Button>

            <Button
              variant="outline"
              className="rounded-xl border-emerald-600/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold px-4 h-10 text-xs sm:text-sm gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I'm%20looking%20at%20your%20photo%20gallery%20and%20want%20to%20check%20availability.`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Us</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Controls */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-semibold text-white">
                    <MapPin className="h-3.5 w-3.5 text-blue-400" />
                    <span>{currentPhoto.location}</span>
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentIndex + 1} / {SHOWCASE_PHOTOS.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="h-8 w-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main Photo Display */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={currentPhoto.src}
                  alt={`NGOBZ Mobile Event Rental - ${currentPhoto.location}`}
                  fill
                  className="object-contain"
                />

                {/* Left / Right Navigation */}
                <button
                  type="button"
                  onClick={() => prevSlide()}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => nextSlide()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Direct Booking CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-left">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {currentPhoto.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {currentPhoto.description}
                  </p>
                </div>

                <Button
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 h-11 text-xs sm:text-sm gap-2 cursor-pointer w-full sm:w-auto shrink-0"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I'm%20inquiring%20about%20booking%20the%20${encodeURIComponent(
                        currentPhoto.title
                      )}%20from%20your%20${encodeURIComponent(currentPhoto.location)}%20event%20photo.`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire on WhatsApp</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
