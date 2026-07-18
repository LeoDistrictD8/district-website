"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/app/_components/sections/HeroSection";
import { AboutSection } from "@/app/_components/sections/AboutSection";
import { WhatWeDoSection } from "@/app/_components/sections/WhatWeDoSection";
import { StatsSection } from "@/app/_components/sections/StatsSection";
import { LeadersSection } from "@/app/_components/sections/LeadersSection";
import { ClubsSection } from "@/app/_components/sections/ClubsSection";
import { ProjectsSection } from "@/app/_components/sections/ProjectsSection";
import { FooterSection } from "@/app/_components/sections/FooterSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ScrollProgressTracker } from "@/components/ui/ScrollProgressTracker";
import { useScrollJacking } from "@/hooks/useScrollJacking";

const TOTAL_SECTIONS = 7;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useScrollJacking((scrollDir) => {
    setActiveIndex((prev) => {
      let nextIndex = prev + scrollDir;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= TOTAL_SECTIONS) nextIndex = TOTAL_SECTIONS - 1;

      if (nextIndex !== prev) {
        setDirection(scrollDir);
      }
      return nextIndex;
    });
  }, 1500); // 1.5s cooldown to let complex exit/enter animations play out

  return (
    <main className="fixed inset-0 overflow-hidden bg-background text-foreground">
      <AnimatedBackground />

      <Navbar
        activeIndex={activeIndex}
        setActiveIndex={(idx) => {
          setDirection(idx > activeIndex ? 1 : -1);
          setActiveIndex(idx);
        }}
      />

      {/* Sections are stacked on top of each other. 
          They internally handle AnimatePresence to trigger 
          multi-directional entry/exit animations based on isActive */}
      <div className="relative w-full h-full perspective-[1000px]">
        <HeroSection isActive={activeIndex === 0} direction={direction} />
        <AboutSection isActive={activeIndex === 1} direction={direction} />
        <WhatWeDoSection isActive={activeIndex === 2} direction={direction} />
        <StatsSection isActive={activeIndex === 3} direction={direction} />
        <LeadersSection isActive={activeIndex === 4} direction={direction} />
        <ClubsSection isActive={activeIndex === 5} direction={direction} />
        {/* <ProjectsSection isActive={activeIndex === 6} direction={direction} /> */}
        <FooterSection isActive={activeIndex === 6} direction={direction} />
      </div>

      <ScrollProgressTracker
        activeIndex={activeIndex}
        totalSections={TOTAL_SECTIONS}
      />
    </main>
  );
}
