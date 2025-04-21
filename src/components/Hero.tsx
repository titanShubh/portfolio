
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 px-4 md:px-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-white mb-6">SHUBH GUPTA</h1>
        <p className="text-gray-400 mb-8 text-lg">
          Skilled software developer specializing in Python, Data Structures & Algorithms, and backend development.<br />
          Passionate about building scalable, efficient solutions for real-world problems.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {"Let's get started"} <ArrowRight size={20} />
        </Link>
      </div>
      <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-700 shadow-lg bg-gray-800 flex items-center justify-center">
        <img
          src="/lovable-uploads/a8297a70-b371-4ca2-bb50-fbbef0c3b175.png"
          alt="Shubh Gupta"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
