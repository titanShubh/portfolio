
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <Hero 
          name="Shubh Gupta" 
          intro="Skilled software developer with expertise in Python, data structures, and algorithms. Experienced in building efficient solutions for complex problems, with a focus on creating high-quality, maintainable code."
        />
        <Companies />
      </div>
    </div>
  );
};

export default Index;
