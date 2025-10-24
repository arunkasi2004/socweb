import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingPokemon from "@/components/FloatingPokemon";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <FloatingPokemon />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
