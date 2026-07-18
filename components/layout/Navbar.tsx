"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type NavItem = {
  name: string;
  index?: number;
  href?: string;
  subItems?: { name: string; index?: number; href?: string }[];
};

const navLinks: NavItem[] = [
  { name: "Home", href: "/", index: 0 },
  { name: "About", href: "/about" },
  {
    name: "Leaders",
    href: "/leaders/current",
    subItems: [
      { name: "Current Leaders", href: "/leaders/current" },
      {
        name: "Past District Presidents",
        href: "/leaders/past-district-presidents",
      },
    ],
  },
  { name: "Clubs", href: "/clubs" },
  // { name: "Projects", href: "/projects" },
  // { name: "Downloads", href: "/downloads" },
  // { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  activeIndex?: number;
  setActiveIndex?: (idx: number) => void;
}

export function Navbar({ activeIndex = 0, setActiveIndex }: NavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (item: NavItem) => {
    if (item.index !== undefined && setActiveIndex) {
      setActiveIndex(item.index);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-grey-dark/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <Link
          href="/"
          onClick={() => setActiveIndex?.(0)}
          className="flex items-center gap-2 outline-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/district-logo-cropped.png"
            alt="Leo District Logo"
            className="h-10 w-auto rounded-sm"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(link.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {link.href && !link.subItems ? (
                <Link
                  href={link.href}
                  onClick={() => handleClick(link)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors outline-none text-foreground/80 hover:text-gold"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(link)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors outline-none text-foreground/80 hover:text-gold"
                >
                  {link.name}
                  {link.subItems && (
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  )}
                </button>
              )}

              {/* Dropdown Menu */}
              {link.subItems && (
                <AnimatePresence>
                  {hoveredItem === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-56 bg-grey-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2"
                    >
                      <div className="flex flex-col">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            className="text-left px-4 py-2.5 text-sm font-medium transition-colors text-foreground/80 hover:text-gold hover:bg-white/5 block"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
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
