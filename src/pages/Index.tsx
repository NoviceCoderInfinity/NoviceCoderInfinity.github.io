import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
