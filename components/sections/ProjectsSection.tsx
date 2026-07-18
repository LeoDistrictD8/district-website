"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

interface ProjectsSectionProps {
  isActive: boolean;
  direction: number;
}

export function ProjectsSection({ isActive, direction }: ProjectsSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl pointer-events-auto z-10">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="projects-content"
              className="flex flex-col w-full items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
                  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
                }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-600">
                  {projectsData.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {projectsData.subtitle}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {projectsData.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 100, rotateY: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        rotateY: 0,
                        transition: { 
                          duration: 1.2, 
                          ease: [0.22, 1, 0.36, 1], 
                          delay: 0.2 + (index * 0.15) 
                        } 
                      },
                      exit: { 
                        opacity: 0, 
                        y: 100,
                        rotateY: -20,
                        transition: { duration: 0.6, delay: index * 0.1 } 
                      }
                    }}
                    style={{ perspective: 1000 }}
                    className="flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow relative">
                      {/* Decorative glowing orb on hover */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex items-center text-xs font-semibold text-gold tracking-wider uppercase mb-3">
                        {project.date}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      {/* CSS Line clamp limits the description to 3 lines and adds ellipsis */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="mt-6 flex items-center text-sm font-medium text-foreground/80 group-hover:text-gold transition-colors duration-300">
                        Read more 
                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.8 } },
                  exit: { opacity: 0, y: 50, transition: { duration: 0.4 } }
                }}
                className="mt-12"
              >
                <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 rounded-full">
                  {projectsData.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
