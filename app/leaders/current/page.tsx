"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import currentLeadersData from "@/data/current-leaders.json";
import Image from "next/image";

// Define the interface for a Leader
interface Leader {
  imageUrl: string;
  name: string;
  position: string;
  positionCategory: string;
  positionPriority: number;
}

function LeaderCard({ leader, index, priority }: { leader: Leader; index: number; priority: boolean }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
      }}
      className="h-full"
    >
      <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg h-full flex flex-col">
        <div className="relative w-full aspect-[4/5] bg-white overflow-hidden shrink-0">
          <Image
            src={leader.imageUrl}
            alt={leader.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center grow flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
          <p className="text-gold font-medium text-sm tracking-wide uppercase">
            {leader.position}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurrentLeadersPage() {
  const leaders: Leader[] = currentLeadersData;

  // Group leaders by category
  const groupedLeaders = leaders.reduce((acc, leader) => {
    if (!acc[leader.positionCategory]) {
      acc[leader.positionCategory] = [];
    }
    acc[leader.positionCategory].push(leader);
    return acc;
  }, {} as Record<string, Leader[]>);

  // Sort leaders within each category by priority
  Object.keys(groupedLeaders).forEach((category) => {
    groupedLeaders[category].sort(
      (a, b) => a.positionPriority - b.positionPriority
    );
  });

  // Define an order for the categories to display them logically
  const categoryOrder = [
    "District Executive Officers",
    "Key Council Officers",
    "Chief Coordinators",
    "Region and Zone Directors",
    "District Directors",
  ];
  
  const finalCategories = Object.keys(groupedLeaders).sort((a, b) => {
    let idxA = categoryOrder.indexOf(a);
    let idxB = categoryOrder.indexOf(b);
    
    // If a category is not in the predefined order, push it to the end
    idxA = idxA === -1 ? 999 : idxA;
    idxB = idxB === -1 ? 999 : idxB;
    
    return idxA - idxB;
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
          Current Leaders
        </motion.h1>

        {finalCategories.map((category, catIndex) => (
          <motion.div 
            key={category} 
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
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-3xl font-heading font-semibold mb-8 text-white border-b border-white/20 pb-2"
            >
              {category}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {groupedLeaders[category].map((leader, index) => (
                <LeaderCard 
                  key={index} 
                  leader={leader} 
                  index={index} 
                  priority={catIndex === 0 && index < 4} // Preload the first few images
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
