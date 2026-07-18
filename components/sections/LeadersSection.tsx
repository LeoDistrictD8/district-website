"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import leadersData from "@/data/leaders.json";

interface LeadersSectionProps {
  isActive: boolean;
  direction: number;
}

export function LeadersSection({ isActive, direction }: LeadersSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl pointer-events-auto z-10">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="leaders-content"
              className="flex flex-col w-full items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: -100, rotateX: 45 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
                  exit: { opacity: 0, y: -100, transition: { duration: 0.6 } }
                }}
                style={{ perspective: 1000 }}
                className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
              >
                {leadersData.title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
                {leadersData.leaders.map((leader, index) => (
                  <motion.div
                    key={leader.id}
                    variants={{
                      hidden: { opacity: 0, y: 200, rotateY: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        rotateY: 0,
                        transition: { 
                          duration: 1.2, 
                          ease: [0.22, 1, 0.36, 1], 
                          delay: 0.3 + (index * 0.2) 
                        } 
                      },
                      exit: { 
                        opacity: 0, 
                        x: index === 1 ? 0 : (index === 0 ? -200 : 200),
                        y: index === 1 ? -200 : 0,
                        transition: { duration: 0.7, delay: index * 0.1 } 
                      }
                    }}
                    style={{ perspective: 1000 }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-foreground transition-colors group-hover:text-gold">
                      {leader.name}
                    </h3>
                    <p className="text-gold/80 font-medium tracking-wide uppercase text-sm">
                      {leader.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "backOut", delay: 1 } },
                  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.4 } }
                }}
              >
                <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 rounded-full">
                  {leadersData.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
