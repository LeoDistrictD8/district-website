"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const handleClick = (item: NavItem) => {
    if (item.index !== undefined && setActiveIndex) {
      setActiveIndex(item.index);
    }
    setIsMobileMenuOpen(false);
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground/80 hover:text-gold p-2 outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-grey-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.href && !link.subItems ? (
                  <Link
                    href={link.href}
                    onClick={() => handleClick(link)}
                    className="text-base font-medium text-foreground/80 hover:text-gold py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobileItem(
                          expandedMobileItem === link.name ? null : link.name
                        )
                      }
                      className="flex items-center justify-between text-base font-medium text-foreground/80 hover:text-gold py-2 w-full text-left"
                    >
                      {link.name}
                      {link.subItems && (
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform",
                            expandedMobileItem === link.name && "rotate-180"
                          )}
                        />
                      )}
                    </button>
                    {link.subItems && expandedMobileItem === link.name && (
                      <div className="flex flex-col pl-4 mt-2 border-l border-white/10 space-y-2">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-foreground/70 hover:text-gold py-1"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
