"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import clubsData from "@/data/clubs.json";

interface Club {
  name: string;
  president: string;
}

interface Zone {
  name: string;
  director: string;
  clubs: Club[];
}

interface Region {
  name: string;
  director: string;
  zones: Zone[];
}

interface ClubsData {
  title: string;
  regions: Region[];
}

const RegionHeader = ({
  region,
  regionIndex,
}: {
  region: Region;
  regionIndex: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: regionIndex === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative pl-6 self-end pb-2"
  >
    <div className="absolute left-0 top-1 w-1.5 h-full bg-gradient-to-b from-gold to-transparent rounded-full" />
    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
      {region.name}
    </h2>
    {region.director && (
      <div className="flex items-center gap-3">
        <span className="text-gold uppercase tracking-widest text-xs font-bold">
          Region Director
        </span>
        <span className="text-white/80">— {region.director}</span>
      </div>
    )}
  </motion.div>
);

const ZoneCard = ({
  zone,
  regionIndex,
  zoneIndex,
}: {
  zone: Zone;
  regionIndex: number;
  zoneIndex: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: zoneIndex * 0.2 + regionIndex * 0.1 }}
    className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors duration-500 h-full flex flex-col"
  >
    {/* Zone Header */}
    <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
      <div>
        <h3 className="text-2xl font-heading font-semibold text-white">
          {zone.name}
        </h3>
      </div>
      {zone.director && (
        <div className="sm:text-right">
          <p className="text-gold/80 text-[10px] uppercase tracking-widest mb-1 font-bold">
            Zone Director
          </p>
          <p className="text-white/90 font-medium">{zone.director}</p>
        </div>
      )}
    </div>

    {/* Clubs List */}
    <div className="flex flex-col flex-grow">
      {zone.clubs.map((club, clubIndex) => (
        <div
          key={club.name}
          className="group flex flex-col sm:flex-row sm:items-center justify-between py-4 px-2 sm:px-4 rounded-xl hover:bg-white/[0.06] transition-all duration-300 gap-2 sm:gap-4 border-b border-white/[0.03] last:border-0"
        >
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shrink-0" />
            <h4 className="text-white/80 font-medium text-base md:text-lg group-hover:text-white transition-colors">
              {club.name}
            </h4>
          </div>

          <div className="sm:text-right pl-5 sm:pl-0 shrink-0">
            {club.president ? (
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                <span className="text-white/30 text-[10px] uppercase tracking-wider block sm:mb-0.5">
                  President
                </span>
                <span className="text-gold/70 group-hover:text-gold text-sm md:text-base font-medium transition-colors">
                  {club.president}
                </span>
              </div>
            ) : (
              <span className="text-white/20 italic text-sm"></span>
            )}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function ClubsPage() {
  const { title, regions } = clubsData as ClubsData;

  return (
    <main className="flex flex-col flex-grow w-full bg-background text-foreground min-h-[100dvh]">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 relative w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 text-center"
        >
          {title}
        </motion.h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow px-6 max-w-[1400px] mx-auto w-full pb-24">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-12 lg:hidden">
          {regions.map((region, regionIndex) => (
            <div key={region.name} className="flex flex-col">
              <RegionHeader region={region} regionIndex={regionIndex} />
              <div className="space-y-6 mt-8">
                {region.zones.map((zone, zoneIndex) => (
                  <ZoneCard
                    key={zone.name}
                    zone={zone}
                    regionIndex={regionIndex}
                    zoneIndex={zoneIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-8">
          {/* Headers Row */}
          {regions.map((region, regionIndex) => (
            <RegionHeader
              key={region.name}
              region={region}
              regionIndex={regionIndex}
            />
          ))}

          {/* Zones Rows */}
          {Array.from({
            length: Math.max(...regions.map((r) => r.zones.length)),
          }).map((_, zoneIndex) => (
            <React.Fragment key={zoneIndex}>
              {regions.map((region, regionIndex) => {
                const zone = region.zones[zoneIndex];
                return zone ? (
                  <ZoneCard
                    key={zone.name}
                    zone={zone}
                    regionIndex={regionIndex}
                    zoneIndex={zoneIndex}
                  />
                ) : (
                  <div key={`empty-${region.name}-${zoneIndex}`} />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
