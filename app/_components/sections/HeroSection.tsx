"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { AuroraText } from "@/components/ui/aurora-text";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

import heroData from "@/data/hero.json";

interface HeroSectionProps {
  isActive: boolean;
  direction: number; // 1 for scrolling down, -1 for scrolling up
}

export function HeroSection({ isActive, direction }: HeroSectionProps) {
  // We can use direction to determine where elements fly out to
  // If direction is 1 (scrolled down to next section), elements fly UP and AWAY.

  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div
        className={`container px-4 md:px-6 flex flex-col items-center text-center max-w-4xl z-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="hero-content"
              className="flex flex-col items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -150,
                    scale: 0.8,
                    transition: { duration: 0.6 },
                  },
                }}
                className="inline-block mb-4 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium tracking-wide"
              >
                {heroData.badge}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, scale: 2, rotateX: 45 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.3,
                    },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.5,
                    y: -200,
                    transition: { duration: 0.7 },
                  },
                }}
                style={{ perspective: 1000 }}
                className={`text-5xl md:text-7xl tracking-wide mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 ${bebasNeue.className}`}
              >
                {heroData.titlePart1} <br className="hidden md:block" />
                <AuroraText
                  className="tracking-normal text-6xl md:text-8xl lg:text-9xl"
                  colors={["#FFEAA7", "#FFD700", "#D4AF37", "#996515"]}
                >
                  {heroData.titlePart2}
                </AuroraText>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -200, rotateY: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5,
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: 200,
                    rotateY: 30,
                    transition: { duration: 0.6 },
                  },
                }}
                style={{ perspective: 1000 }}
                className="text-md md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              >
                {heroData.description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.7,
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: 150,
                    scale: 0.8,
                    transition: { duration: 0.5 },
                  },
                }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                {heroData.buttons.map((button, index) => (
                  <Button
                    key={index}
                    render={<Link href={button.link} />}
                    nativeButton={false}
                    size="lg"
                    variant={button.variant as any}
                    className={
                      button.variant === "outline"
                        ? "h-12 px-8 text-base border-white/20 hover:bg-white/10 transition-all hover:scale-105"
                        : "h-12 px-8 text-base shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    }
                  >
                    {button.text}
                  </Button>
                ))}
              </motion.div>

              {/* Animated Scroll Indicator */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 1.2 },
                  },
                  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
                }}
                className="hidden lg:flex fixed bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
              >
                <div className="w-[20px] h-[32px] rounded-full border border-white/20 flex justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[3px] h-1.5 bg-gold rounded-full"
                  />
                </div>
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/50 font-medium">
                  {heroData.scrollText}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
