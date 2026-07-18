"use client";

import { motion, AnimatePresence } from "framer-motion";

const sectionTitles = [
  "Home",
  "About",
  "What We Do",
  "Impact",
  "Leaders",
  "Clubs",
  // "Projects",
  "Connect",
];

interface ScrollProgressTrackerProps {
  activeIndex: number;
  totalSections: number;
}

export function ScrollProgressTracker({
  activeIndex,
  totalSections,
}: ScrollProgressTrackerProps) {
  const progress = (activeIndex / (totalSections - 1)) * 100;
  const rotationAngle = (activeIndex / (totalSections - 1)) * 360;

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const itemHeight = 32;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4 hidden lg:flex drop-shadow-xl">
      {/* Scrollable Horizontal Titles */}
      <div className="relative w-32 h-[96px] overflow-hidden pointer-events-none fade-edges">
        <motion.div
          animate={{ y: -(activeIndex * itemHeight) + itemHeight }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 w-full flex flex-col items-end"
        >
          {sectionTitles.map((title, i) => {
            const distance = Math.abs(activeIndex - i);
            const isActive = distance === 0;
            // Only show adjacent items and the active one
            const isVisible = distance <= 1;
            const opacity = isActive ? 1 : isVisible ? 0.4 : 0;
            const blur = isActive
              ? "blur(0px)"
              : isVisible
                ? "blur(1px)"
                : "blur(2px)";
            const scale = isActive ? 1 : 0.85;

            return (
              <motion.div
                key={title}
                animate={{ opacity, scale, filter: blur }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-[32px] flex items-center justify-end origin-right whitespace-nowrap"
              >
                <span
                  className={`uppercase tracking-widest text-[9px] font-bold ${isActive ? "text-gold" : "text-white"}`}
                >
                  {title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Circular Progress & Rotating Dial (No Numbers) */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Rotating outer ring */}
        <motion.svg
          animate={{ rotate: rotationAngle }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full text-white/20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* A dot on the rotating ring to show the "dial" movement */}
          <circle
            cx="50"
            cy="8"
            r="3"
            fill="#D4AF37"
            className="drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]"
          />
        </motion.svg>

        {/* Smooth Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full text-gold transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition:
                "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
