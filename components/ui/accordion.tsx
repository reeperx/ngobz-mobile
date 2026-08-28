"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = React.useState(isOpen);
  const isExpanded = onToggle ? isOpen : internalOpen;

  const toggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-sm",
        isExpanded && "border-primary/40 shadow-md bg-card/90",
        className
      )}
    >
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground transition-all hover:text-primary cursor-pointer gap-4"
        aria-expanded={isExpanded}
      >
        <span className="text-base sm:text-lg">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isExpanded && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
