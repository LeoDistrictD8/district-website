"use client";

import { motion, AnimatePresence } from "framer-motion";
import clubsData from "@/data/clubs.json";

interface ClubsSectionProps {
  isActive: boolean;
  direction: number;
}

export function ClubsSection({ isActive, direction }: ClubsSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-5xl pointer-events-auto z-10">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="clubs-content"
              className="flex flex-col w-full h-full max-h-[80vh] items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, scale: 1.5 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
                  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
                }}
                className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-600"
              >
                {clubsData.title}
              </motion.h2>

              <div className="w-full overflow-hidden relative">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-full pr-4"
                >
                  {clubsData.clubs.map((club, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            duration: 0.8, 
                            ease: [0.22, 1, 0.36, 1], 
                            delay: 0.3 + (index * 0.05) 
                          } 
                        },
                        exit: { 
                          opacity: 0, 
                          x: index % 2 === 0 ? -100 : 100,
                          transition: { duration: 0.4, delay: index * 0.02 } 
                        }
                      }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-gold/10 border border-white/5 hover:border-gold/30 transition-all cursor-pointer group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(212,175,55,1)] transition-all" />
                      <div className="flex flex-col">
                        <span className="text-foreground/80 group-hover:text-gold transition-colors font-medium">
                          {club.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                          Club President - {club.president}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
