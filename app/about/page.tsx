"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { NumberTicker } from "@/components/ui/number-ticker";
import statsData from "@/data/stats.json";
import { Globe } from "@/components/ui/globe";

export default function AboutPage() {
  const clubStat =
    statsData.find((s) => s.label.includes("Clubs"))?.value || "18";
  const memberStat =
    statsData.find((s) => s.label.includes("Leos"))?.value || "1000+";

  return (
    <main className="flex flex-col flex-grow w-full bg-background text-foreground min-h-[100dvh]">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 flex-grow pt-24 md:pt-40 pb-12 md:pb-24 w-full">
        {/* Section 1: Hero */}
        <section className="container mx-auto px-6 max-w-6xl mb-12 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
              About Leo District 306 D8
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
              Leadership, Experience, Opportunity - Our commitment to developing
              future leaders
            </p>
          </motion.div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="container mx-auto px-6 max-w-6xl mb-12 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <h2 className="text-3xl font-heading font-bold text-gold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To empower young leaders through meaningful service
                opportunities, leadership development programs, and community
                engagement initiatives that create lasting positive impact in
                Sri Lanka and Maldives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <h2 className="text-3xl font-heading font-bold text-gold mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To be the premier youth leadership organization that develops
                confident, capable, and compassionate leaders who transform
                communities and inspire positive change worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Key Achievements */}
        <section className="container mx-auto px-6 max-w-6xl mb-12 md:mb-32">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              District 306 D8 Key Achievements
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: parseInt(clubStat) || 18,
                suffix: clubStat.includes("+") ? "+" : "",
                title: "Active Clubs",
                desc: "Leading multiple Leo Clubs across our district with dedicated service programs.",
              },
              {
                value: parseInt(memberStat) || 1000,
                suffix: memberStat.includes("+") ? "+" : "",
                title: "Active Members",
                desc: "Empowering hundreds of young leaders with skills and opportunities.",
              },
              {
                value: 20,
                suffix: "+",
                title: "Years of Excellence",
                desc: "Consistent leadership development and community service since 2010.",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center shadow-lg"
              >
                <div className="text-5xl md:text-6xl font-bold text-gold mb-4 font-heading flex items-center justify-center">
                  <NumberTicker
                    value={stat.value}
                    className="text-gold dark:text-gold"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {stat.title}
                </h3>
                <p className="text-foreground/70">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Global Movement */}
        <section className="container mx-auto px-6 max-w-6xl mb-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                  Part of a <span className="text-gold">Global Movement</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  The Leo Club Program is a youth organization of Lions Clubs
                  International. We are part of a massive global network of
                  young individuals dedicated to making a positive impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2 border-l-2 border-gold/30 pl-4 transition-all hover:border-gold">
                  <div className="text-3xl font-bold text-gold font-heading">
                    1957
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    First Leo Club Founded
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Pennsylvania, USA
                  </p>
                </div>
                <div className="space-y-2 border-l-2 border-gold/30 pl-4 transition-all hover:border-gold">
                  <div className="text-3xl font-bold text-gold font-heading">
                    1967
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Official Lions Program
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Lions International Adoption
                  </p>
                </div>
                <div className="space-y-2 border-l-2 border-gold/30 pl-4 transition-all hover:border-gold">
                  <div className="text-3xl font-bold text-gold font-heading">
                    150
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Countries Worldwide
                  </h4>
                  <p className="text-sm text-foreground/70">Global Presence</p>
                </div>
                <div className="space-y-2 border-l-2 border-gold/30 pl-4 transition-all hover:border-gold">
                  <div className="text-3xl font-bold text-gold font-heading">
                    7200+
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Clubs Globally
                  </h4>
                  <p className="text-sm text-foreground/70">Active Leo Clubs</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] md:h-[450px] w-full rounded-full flex items-center justify-center opacity-80"
            >
              <Globe className="" />
            </motion.div>
          </div>
        </section>

        {/* Section 5: Milestones */}
        <section className="container mx-auto px-6 max-w-4xl mb-12 md:mb-24">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              District 306 D8 Milestones
            </motion.h2>
            <p className="text-lg text-foreground/80">
              Key achievements in our journey of leadership development
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {[
              {
                title: "District Establishment",
                desc: "LEO District 306 D8 was officially established, creating a dedicated platform for youth leadership development in the region.",
              },
              {
                title: "Regional Growth",
                desc: "Expanded operations with structured leadership programs and established strong community partnerships across multiple regions.",
              },
              {
                title: "Digital Innovation",
                desc: "Successfully adapted to digital platforms, maintaining continuous service and leadership development during challenging times.",
              },
              {
                title: "Continued Excellence",
                desc: "Leading with 18+ active clubs and 1000+ dedicated members, creating sustainable positive change across communities.",
              },
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gold text-background shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl transition-all hover:border-gold/30 hover:bg-white/10">
                  <h3 className="font-bold text-xl text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
