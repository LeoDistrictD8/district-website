"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background pointer-events-none">
      <div className="absolute top-[10%] w-full opacity-5">
        <ScrollVelocityContainer className="text-5xl font-black tracking-[-0.02em] md:text-7xl lg:text-9xl uppercase text-foreground/30">
          <ScrollVelocityRow baseVelocity={2} direction={1}>
            LEO DISTRICT 306 D8 &nbsp;•&nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={2} direction={-1}>
            RISE TO LEAD &nbsp;•&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      <div className="absolute inset-0 opacity-20 transition-opacity duration-1000">
        <Globe className="top-auto -bottom-[10%] translate-y-1/4" />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 150, 0, -150, 0],
          y: [0, 80, 150, 80, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0, 120, 0],
          y: [0, -80, -150, -80, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -100, -200, -100, 0],
          y: [0, 100, 50, -50, 0],
          scale: [0.8, 1.1, 0.9, 1.2, 0.8],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, 100, 200, 100, 0],
          y: [0, -100, -50, 50, 0],
          scale: [1.2, 0.8, 1.1, 0.9, 1.2],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/3 left-1/3 w-[550px] h-[550px] bg-white/5 rounded-full blur-[120px]"
      />
    </div>
  );
}
