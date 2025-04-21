
import { Link } from "react-router-dom";
import { LinkedinIcon, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-8">
      <div className="flex space-x-10">
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/case-studies" className="text-white hover:text-gray-300 transition-colors">
          Case Studies
        </Link>
        <Link to="/testimonials" className="text-white hover:text-gray-300 transition-colors">
          Testimonials
        </Link>
        <Link to="/recent-work" className="text-white hover:text-gray-300 transition-colors">
          Recent work
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
          Get In Touch
        </Link>
      </div>
      <div className="flex space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
          <LinkedinIcon size={20} />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
          <span className="text-xl font-bold">Be</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
          <Twitter size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
