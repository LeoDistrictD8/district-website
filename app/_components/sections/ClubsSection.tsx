"use client";

import { motion, AnimatePresence } from "framer-motion";
import clubsData from "@/data/clubs.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ClubsSectionProps {
  isActive: boolean;
  direction: number;
}

export function ClubsSection({ isActive, direction }: ClubsSectionProps) {
  const [expandedRegion, setExpandedRegion] = useState<number>(0);

  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div
        className={`container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-8xl z-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="clubs-content"
              className="flex flex-col w-full h-full max-h-[85vh] md:max-h-[80vh] items-center overflow-y-auto md:overflow-visible no-scrollbar pb-6 md:pb-0"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, scale: 1.5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1,
                    },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.5 },
                  },
                }}
                className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-600 shrink-0"
              >
                {clubsData.title}
              </motion.h2>

              <div className="w-full relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full text-left">
                  {clubsData.regions.map((region, rIndex) => {
                    const isExpanded = expandedRegion === rIndex;
                    return (
                      <motion.div
                        key={region.name}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.8,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.2 + rIndex * 0.2,
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: 20,
                            transition: { duration: 0.3 },
                          },
                        }}
                        className="border border-gold/30 rounded-3xl p-4 md:p-6 md:pt-8 relative"
                      >
                        {/* Mobile Header (Clickable Toggle) */}
                        <div
                          className="md:hidden flex items-center justify-between text-gold font-bold uppercase tracking-widest text-sm w-full cursor-pointer"
                          onClick={() =>
                            setExpandedRegion(isExpanded ? -1 : rIndex)
                          }
                        >
                          <span>{region.name}</span>
                          <span className="text-lg w-6 h-6 flex items-center justify-center rounded-full bg-gold/10">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </div>

                        {/* Desktop Header (Absolute, as before) */}
                        <div className="hidden md:block absolute -top-3 left-8 text-gold font-bold uppercase tracking-widest text-sm bg-white/[0.02]">
                          {region.name}
                        </div>

                        <div
                          className={`flex-col gap-5 mt-4 md:mt-0 ${isExpanded ? "flex" : "hidden md:flex"}`}
                        >
                          {region.zones.map((zone) => (
                            <div
                              key={zone.name}
                              className="border border-white/10 rounded-2xl p-3 relative pt-5 bg-white/[0.02]"
                            >
                              <div className="absolute -top-2 left-4 md:left-6 text-foreground/90 font-semibold text-xs text-shadow-sm">
                                {zone.name}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-3">
                                {zone.clubs.map((club) => (
                                  <div
                                    key={club.name}
                                    className="flex items-center gap-1 py-1 px-2 md:p-3 md:gap-3 rounded-xl bg-white/10 hover:bg-gold/10 border border-transparent hover:border-gold/30 transition-all cursor-pointer group"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(212,175,55,1)] transition-all shrink-0" />
                                    <div className="flex flex-col">
                                      <span className="text-foreground/80 group-hover:text-gold transition-colors text-[13px] font-medium leading-tight line-clamp-2">
                                        {club.name}
                                      </span>
                                      <span className="text-[10px] text-muted-foreground mt-0.5 group-hover:text-foreground/70 transition-colors line-clamp-1">
                                        President - {club.president || ""}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.8 },
                  },
                  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
                }}
                className="mt-4 md:mt-8 relative z-50 pointer-events-auto shrink-0"
              >
                <Link href="/clubs">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg border-gold text-gold hover:!bg-gold hover:!text-black transition-all"
                  >
                    Explore Clubs
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
