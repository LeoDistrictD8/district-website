"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const resources = [
  {
    title: "District Logo",
    path: "/images/logo/district-logo.png",
    type: "Image (PNG)",
  },
  {
    title: "Leo Logo",
    path: "/images/logo/leo-logo.png",
    type: "Image (PNG)",
  },
  {
    title: "Leos of Sri Lanka & Maldives Logo",
    path: "/images/logo/Leos-Of-SriLanka-Maldives.png",
    type: "Image (PNG)",
  },
  {
    title: "Lions Logo",
    path: "/images/logo/lion-logo.png",
    type: "Image (PNG)",
  },
];

export default function ResourcesPage() {
  return (
    <main className="flex flex-col flex-grow w-full bg-background text-foreground min-h-[100dvh]">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 flex-grow pt-24 mb:pt-40 pb-24 w-full">
        {/* Section 1: Hero */}
        <section className="container mx-auto px-6 max-w-6xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
              Download documents, logos, and other resources.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Downloadable Resources */}
        <section className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resources.map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-6 mb-6 sm:mb-0 w-full">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center p-3 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resource.path}
                      alt={resource.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {resource.type}
                    </p>
                  </div>
                </div>

                <a
                  href={resource.path}
                  download
                  className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-background font-medium transition-all gap-2 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
