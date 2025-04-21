
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Achievements />
        <Projects />
        <Companies />
      </div>
    </div>
  );
};

export default Index;
