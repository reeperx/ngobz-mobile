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
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

interface ShowcasePhoto {
  id: string;
  src: string;
  location: string;
}

const SHOWCASE_PHOTOS: ShowcasePhoto[] = [
  {
    id: "p-1",
    src: "/images/showcase/480631305_1101248498473646_3279892248643713850_n.jpg",
    location: "Pretoria",
  },
  {
    id: "p-2",
    src: "/images/showcase/473332374_1539923037410052_884203722908243039_n.jpg",
    location: "Soshanguve",
  },
  {
    id: "p-3",
    src: "/images/showcase/186496935_606919277377104_8201199303261366693_n.jpg",
    location: "Mabopane",
  },
  {
    id: "p-4",
    src: "/images/showcase/134053434_476860987049601_7704482159405034626_n.jpg",
    location: "Hammanskraal",
  },
  {
    id: "p-5",
    src: "/images/showcase/118917366_380772963325071_4493756953176247080_n.jpg",
    location: "Centurion",
  },
  {
    id: "p-6",
    src: "/images/showcase/103148205_307715297297505_2231334706333180757_n.jpg",
    location: "Ga-Rankuwa",
  },
  {
    id: "p-7",
    src: "/images/showcase/95143669_273543197381382_7075362345555329024_n.jpg",
    location: "Mamelodi",
  },
  {
    id: "p-8",
    src: "/images/showcase/81513094_180965276639175_517937768446296064_n.jpg",
    location: "Pretoria North",
  },
  {
    id: "p-9",
    src: "/images/showcase/75642394_158609285541441_5750532202240671744_n.jpg",
    location: "Winterveld",
  },
  {
    id: "p-10",
    src: "/images/showcase/75439477_154065505995819_7143059435391287296_n.jpg",
    location: "Akasia",
  },
];

export function ShowcaseGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = React.useState<number | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Smooth continuous auto-scroll
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let speed = 0.8; // Smooth pixel speed per frame

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // When scrolled past half the duplicate track, reset to seamlessly loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scrollByAmount = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const activePhoto = activeLightboxIndex !== null ? SHOWCASE_PHOTOS[activeLightboxIndex] : null;

  const navigateLightbox = React.useCallback(
    (direction: number) => {
      if (activeLightboxIndex === null) return;
      let nextIndex = activeLightboxIndex + direction;
      if (nextIndex < 0) nextIndex = SHOWCASE_PHOTOS.length - 1;
      if (nextIndex >= SHOWCASE_PHOTOS.length) nextIndex = 0;
      setActiveLightboxIndex(nextIndex);
    },
    [activeLightboxIndex]
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, navigateLightbox]);

  // Duplicate items array for infinite looping marquee
  const loopedPhotos = [...SHOWCASE_PHOTOS, ...SHOWCASE_PHOTOS];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 border-b border-border/40 scroll-mt-20 overflow-hidden">
      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Camera className="h-3.5 w-3.5 text-blue-500" />
            <span>On-Site Event Fleet</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
            Authentic Photos,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Direct from Our Events
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Browse genuine photos of our heavy-duty mobile coolers, commercial food warmers, and catering trailers operating across Pretoria &amp; Gauteng.
          </p>
        </div>

        {/* Full-Width Auto-Scrolling Showcase Carousel */}
        <div
          className="relative w-full overflow-hidden group/track select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Left / Right Nav Arrows */}
          <button
            type="button"
            onClick={() => scrollByAmount(-350)}
            aria-label="Scroll left"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(350)}
            aria-label="Scroll right"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-2 px-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {loopedPhotos.map((photo, index) => {
              const originalIndex = index % SHOWCASE_PHOTOS.length;
              return (
                <div
                  key={`${photo.id}-${index}`}
                  onClick={() => setActiveLightboxIndex(originalIndex)}
                  className="group relative flex-none w-[260px] sm:w-[340px] md:w-[380px] h-[200px] sm:h-[250px] md:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border/70 bg-slate-950 shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  {/* Photo Image */}
                  <Image
                    src={photo.src}
                    alt={`NGOBZ Mobile Equipment - ${photo.location}`}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Legibility Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Clean Location Badge (Bottom Left) */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg">
                      <MapPin className="h-3 w-3 text-blue-400 shrink-0" />
                      <span>{photo.location}</span>
                    </span>
                  </div>

                  {/* Hover Maximize Icon (Top Right) */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-8 w-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Autoplay Pause Indicator Status */}
          <div className="flex items-center justify-center gap-2 pt-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1 font-medium">
              {isPaused ? (
                <>
                  <Pause className="h-3 w-3 text-amber-500" />
                  <span>Paused on hover • Click any photo to expand</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-blue-500" />
                  <span>Continuous fleet marquee • Hover or swipe to pause</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Bottom Booking Action Banner */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5 sm:p-7 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-foreground">
                Need these units for an upcoming event in Pretoria or Gauteng?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Book early to secure your date. Prompt 06:00 AM morning delivery guaranteed.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-11 text-xs sm:text-sm gap-2 cursor-pointer shadow-sm"
                onClick={openQuoteModal}
              >
                <Calculator className="h-4 w-4" />
                <span>Instant Quote</span>
              </Button>

              <Button
                variant="outline"
                className="rounded-xl border-emerald-600/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold px-5 h-11 text-xs sm:text-sm gap-2 cursor-pointer"
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
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveLightboxIndex(null)}
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
                    <span>{activePhoto.location}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="h-8 w-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main Photo Display */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={activePhoto.src}
                  alt={`NGOBZ Mobile Event Rental - ${activePhoto.location}`}
                  fill
                  className="object-contain"
                />

                {/* Left / Right Navigation */}
                <button
                  type="button"
                  onClick={() => navigateLightbox(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Direct Booking CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-400">
                  Photo from our Pretoria &amp; Gauteng event fleet
                </span>

                <Button
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 h-11 text-xs sm:text-sm gap-2 cursor-pointer w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I'm%20inquiring%20about%20the%20equipment%20from%20your%20${encodeURIComponent(
                        activePhoto.location
                      )}%20event%20photo.`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire About This Unit on WhatsApp</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
