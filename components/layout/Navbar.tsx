"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", index: 0 },
  { name: "Impact", index: 1 },
  { name: "Clubs", index: 2 },
  { name: "Events", index: 3 },
  { name: "Contact", index: 4 },
];

interface NavbarProps {
  activeIndex?: number;
  setActiveIndex?: (idx: number) => void;
}

export function Navbar({ activeIndex = 0, setActiveIndex }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-grey-dark/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <button 
          onClick={() => setActiveIndex?.(0)}
          className="flex items-center gap-2 outline-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://dummyimage.com/150x40/1a1a1a/D4AF37&text=LOGO"
            alt="Leo District Logo"
            className="h-8 w-auto rounded-sm"
          />
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => setActiveIndex?.(link.index)}
                className="text-sm font-medium transition-colors outline-none text-foreground/80 hover:text-gold"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <button className="text-foreground/80 hover:text-gold p-2 outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
