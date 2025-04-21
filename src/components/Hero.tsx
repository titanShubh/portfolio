
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  name: string;
  intro: string;
}

const Hero = ({ name, intro }: HeroProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 px-4 md:px-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-white mb-6">{name}</h1>
        <p className="text-gray-400 mb-8 text-lg">
          {intro}
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors">
          Let's get started <ArrowRight size={16} />
        </Link>
      </div>
      <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-700">
        <img 
          src="/lovable-uploads/317309dc-ced9-481f-8e8d-4fac64567f48.png" 
          alt="Shubh Gupta"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
