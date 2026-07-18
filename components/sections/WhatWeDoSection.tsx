"use client";

import { motion, AnimatePresence } from "framer-motion";
import whatWeDoData from "@/data/what-we-do.json";

interface WhatWeDoSectionProps {
  isActive: boolean;
  direction: number;
}

export function WhatWeDoSection({ isActive, direction }: WhatWeDoSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl pointer-events-auto z-10">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="what-we-do-content"
              className="flex flex-col w-full items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: -100, rotateX: -45 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
                  exit: { opacity: 0, y: -100, transition: { duration: 0.6 } }
                }}
                style={{ perspective: 1000 }}
                className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              >
                {whatWeDoData.title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {whatWeDoData.blocks.map((block, index) => (
                  <motion.div
                    key={block.id}
                    variants={{
                      hidden: { opacity: 0, y: 150, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          duration: 1, 
                          ease: [0.22, 1, 0.36, 1], 
                          delay: 0.3 + (index * 0.15) // Stagger effect
                        } 
                      },
                      exit: { 
                        opacity: 0, 
                        y: 100, 
                        scale: 0.8,
                        transition: { duration: 0.5, delay: index * 0.05 } 
                      }
                    }}
                    className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors group relative overflow-hidden"
                  >
                    {/* Futuristic glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="text-4xl font-light text-gold/50 mb-4 font-heading group-hover:text-gold transition-colors duration-300">
                      0{block.id}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                      {block.description}
                    </p>
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
