
import { User, FileText } from "lucide-react";

const AboutMe = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="rounded-xl overflow-hidden w-44 h-44 border-4 border-gray-700 shadow-lg bg-gray-800 flex items-center justify-center shrink-0">
        <img
          src="/lovable-uploads/a8297a70-b371-4ca2-bb50-fbbef0c3b175.png"
          alt="Shubh Gupta"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 text-xl font-semibold mb-2">
          <User /> About Me
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          I am a passionate software developer, specializing in <span className="text-white font-semibold">Python</span>, Data Structures & Algorithms, and backend engineering. <br />
          Strong fundamentals in computer science, problem-solving skills, and the drive to build impactful technology solutions.<br />
          Experienced with scalable systems, automation, and delivering projects under tight deadlines.
        </p>
        <a
          className="inline-flex items-center gap-2 mt-4 text-green-400 hover:underline text-base"
          href="https://drive.google.com/file/d/your-resume-link-here"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={18} /> Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default AboutMe;
