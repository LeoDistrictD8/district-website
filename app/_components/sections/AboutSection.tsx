"use client";

import { motion, AnimatePresence } from "framer-motion";
import aboutData from "@/data/about.json";

interface AboutSectionProps {
  isActive: boolean;
  direction: number;
}

export function AboutSection({ isActive, direction }: AboutSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-48 md:pt-24 overflow-hidden pointer-events-none">
      <div
        className={`container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl z-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="about-content"
              className="flex flex-col w-full h-full justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: -50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1,
                    },
                  },
                  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
                }}
                className="font-heading text-4xl md:text-5xl tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-600"
              >
                {aboutData.title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/* Left: Image */}
                {/* <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -100, rotateY: 30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      transition: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3,
                      },
                    },
                    exit: {
                      opacity: 0,
                      x: -100,
                      rotateY: -20,
                      transition: { duration: 0.6 },
                    },
                  }}
                  style={{ perspective: 1000 }}
                  className="w-full flex justify-center md:justify-start"
                >
                  <img
                    src={aboutData.image}
                    alt="District Image"
                    className="w-full max-w-[300px] h-[400px] object-cover rounded-2xl border border-white/10 shadow-2xl shadow-gold/10"
                  />
                </motion.div> */}

                {/* Center: Description */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.5,
                      },
                    },
                    exit: {
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="text-center px-4"
                >
                  <div className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors group relative overflow-hidden text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                      {aboutData.description}
                    </p>
                  </div>
                </motion.div>

                {/* Right: Logo */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 100, rotateY: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      transition: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.7,
                      },
                    },
                    exit: {
                      opacity: 0,
                      x: 100,
                      rotateY: 20,
                      transition: { duration: 0.6 },
                    },
                  }}
                  style={{ perspective: 1000 }}
                  className="w-full flex justify-center md:justify-end"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={aboutData.logo}
                    alt="District Logo"
                    className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
