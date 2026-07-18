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

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/10 mt-auto">
      <div className="w-full bg-white/5 py-6 md:py-8 px-6 md:px-12 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-6">
            {/* Logos Column */}
            <div className="flex flex-row items-start gap-4 w-full">
              {footerData.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="h-12 w-auto rounded-sm object-contain"
                />
              ))}
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
                {footerData.quickLinks.title}
              </h4>
              <ul className="space-y-2 md:space-y-4">
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
            <div>
              <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
                {footerData.resources.title}
              </h4>
              <ul className="space-y-2 md:space-y-4">
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
            {/* <div>
              <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
                {footerData.contact.title}
              </h4>
              <ul className="space-y-2 md:space-y-4 text-muted-foreground">
                {footerData.contact.info.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            </div> */}

            {/* Follow Us Column */}
            <div>
              <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">
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
                      className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-4 w-full flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-center text-muted-foreground w-full">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
