
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
