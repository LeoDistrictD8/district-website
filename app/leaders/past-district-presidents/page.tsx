"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import pastPresidentsData from "@/data/past-district-presidents.json";
import Image from "next/image";

interface PastPresident {
  name: string;
  leosticYear: string;
  logoUrl: string;
  leoClub: string;
  motto: string;
  photoUrl: string;
  gender: string;
}

function PresidentCard({ president, index, priority }: { president: PastPresident; index: number; priority: boolean }) {
  // Determine the placeholder image based on gender
  const imageSrc = president.photoUrl || (president.gender.toLowerCase() === 'female' ? '/common/placeholder-women.jpg' : '/common/placeholder-men.jpg');

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
      }}
      className="h-full"
    >
      <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg h-full flex flex-col relative">
        <div className="relative w-full aspect-[4/5] bg-white overflow-hidden shrink-0">
          <Image
            src={imageSrc}
            alt={president.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {president.logoUrl && (
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 rounded-full p-1 shadow-md z-10 overflow-hidden">
              <Image 
                src={president.logoUrl} 
                alt="Logo" 
                fill 
                sizes="48px"
                className="object-cover" 
              />
            </div>
          )}
        </div>
        <div className="p-6 text-center grow flex flex-col justify-center gap-2">
          <h3 className="text-xl font-bold text-white">{president.name}</h3>
          <p className="text-gold font-medium text-lg tracking-wide">
            {president.leosticYear}
          </p>
          <p className="text-white/80 text-sm">
            {president.leoClub}
          </p>
          {president.motto && (
            <p className="text-white/60 text-xs italic mt-2">
              "{president.motto}"
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PastDistrictPresidentsPage() {
  // Sort from oldest to newest. Parse the start year from "2024/25".
  const sortedPresidents = [...pastPresidentsData].sort((a, b) => {
    const yearA = parseInt(a.leosticYear.split('/')[0]);
    const yearB = parseInt(b.leosticYear.split('/')[0]);
    return yearA - yearB;
  });

  return (
    <main className="flex flex-col flex-grow w-full bg-background text-foreground min-h-[100dvh]">
      <Navbar />
      <div className="relative z-10 flex-grow pt-40 px-6 max-w-7xl mx-auto w-full pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-12 text-gold text-center"
        >
          Past District Presidents
        </motion.h1>

        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedPresidents.map((president, index) => (
              <PresidentCard 
                key={index} 
                president={president} 
                index={index} 
                priority={index < 8} // Preload the first few images
              />
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
