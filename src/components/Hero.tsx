
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 px-4 md:px-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight hover:scale-105 transition-transform duration-200">
          SHUBH GUPTA
        </h1>
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          Software Developer | Backend Engineer & Coding Enthusiast
          <br />
          Specialist in Python, Data Structures & Algorithms, scalable backend systems, and problem-solving.
        </p>
        <div className="flex gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/shubh-gupta-2ab23a280/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 bg-gray-800 hover:bg-green-600 hover:scale-110 transition-transform duration-200 shadow group"
          >
            <Linkedin className="text-white group-hover:text-white" size={28} />
          </a>
          <a
            href="https://github.com/titanShubh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-200 shadow group"
          >
            <Github className="text-white group-hover:text-green-400" size={28} />
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-all text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
        >
          Let's get started <ArrowRight size={20} />
        </Link>
      </div>
      <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-green-500 shadow-xl bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform duration-200">
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
