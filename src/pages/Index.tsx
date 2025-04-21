
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <Hero />
        <Companies />
      </div>
    </div>
  );
};

export default Index;
