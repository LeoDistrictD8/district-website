import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col flex-grow w-full bg-background text-foreground min-h-[100dvh]">
      <Navbar />
      <div className="relative z-10 flex-grow pt-40 px-6 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-gold">Projects</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Explore the impactful projects our community has undertaken.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Content for the projects page goes here.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
