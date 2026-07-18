"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import statsData from "@/data/stats.json";
import { NumberTicker } from "@/components/ui/number-ticker";

interface StatsSectionProps {
  isActive: boolean;
  direction: number;
}

export function StatsSection({ isActive, direction }: StatsSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div
        className={`container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl z-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="stats-content"
              className="flex w-full justify-center items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full text-center">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, y: 100 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.2 + index * 0.15,
                        },
                      },
                      exit: {
                        opacity: 0,
                        scale: 1.5,
                        y: -50,
                        transition: { duration: 0.5, delay: index * 0.05 },
                      },
                    }}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group"
                  >
                    {/* Glowing orbit effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <motion.div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-yellow-600 mb-2 font-heading flex items-center justify-center">
                      <NumberTicker
                        value={parseInt(stat.value.replace(/[^0-9]/g, ""), 10)}
                        className="text-transparent"
                      />
                      {stat.value.replace(/[0-9]/g, "")}
                    </motion.div>
                    <span className="text-lg md:text-xl text-foreground/80 font-medium tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
