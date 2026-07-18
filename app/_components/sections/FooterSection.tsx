"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import footerData from "@/data/footer.json";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v10a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterSectionProps {
  isActive: boolean;
  direction: number;
}

export function FooterSection({ isActive, direction }: FooterSectionProps) {
  return (
    <section className="absolute inset-0 flex items-center justify-center pt-24 overflow-hidden pointer-events-none">
      <div
        className={`container px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-6xl z-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.footer
              key="footer-content"
              className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-4 px-6 md:py-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md max-h-[85vh] overflow-y-auto no-scrollbar"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 100, rotateX: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  rotateX: -20,
                  transition: { duration: 0.5 },
                },
              }}
              style={{ perspective: 1000 }}
            >
              <div className="w-full mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8 lg:gap-12 mb-4 md:mb-8">
                  {/* Logos Column */}
                  <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-row items-center justify-center lg:justify-start gap-4 w-full">
                    {footerData.logos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        alt={`Logo ${idx + 1}`}
                        className="h-10 md:h-12 w-auto rounded-sm object-contain"
                      />
                    ))}
                  </div>

                  {/* Quick Links Column */}
                  <div className="col-span-1">
                    <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
                      {footerData.quickLinks.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-2">
                      {footerData.quickLinks.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.url}
                            className="text-muted-foreground hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources Column */}
                  <div className="col-span-1">
                    <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
                      {footerData.resources.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-2">
                      {footerData.resources.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.url}
                            className="text-muted-foreground hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info Column */}
                  {/* <div className="col-span-2 md:col-span-1">
                    <h4 className="text-gold font-semibold mb-2 md:mb-6 uppercase tracking-wider text-sm">
                      {footerData.contact.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-4 text-muted-foreground">
                      {footerData.contact.info.map((info, idx) => (
                        <li key={idx}>{info}</li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Follow Us Column */}
                  <div className="col-span-2 md:col-span-1">
                    <h4 className="text-gold font-semibold mb-2 md:mb-6 uppercase tracking-wider text-sm">
                      {footerData.socials.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {footerData.socials.platforms.map((platform) => {
                        const Icon =
                          platform.name === "Facebook"
                            ? Facebook
                            : platform.name === "Twitter"
                              ? Twitter
                              : platform.name === "Instagram"
                                ? Instagram
                                : platform.name === "Linkedin"
                                  ? Linkedin
                                  : platform.name === "Youtube"
                                    ? Youtube
                                    : platform.name === "Tiktok"
                                      ? Tiktok
                                      : null;

                        if (!Icon) return null;

                        return (
                          <Link
                            key={platform.name}
                            href={platform.url}
                            className="p-1 md:p-2 rounded-full bg-white/5 hover:bg-gold/20 text-muted-foreground hover:text-gold transition-colors"
                          >
                            <Icon className="w-5 h-5" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-2 sm:pt-4 w-full flex flex-col md:flex-row  items-center justify-between">
                  <p className="text-sm text-center text-muted-foreground w-full">
                    {footerData.copyright}
                  </p>
                </div>
              </div>
            </motion.footer>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
