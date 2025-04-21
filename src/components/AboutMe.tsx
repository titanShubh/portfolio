
import { User, FileText, School } from "lucide-react";

const AboutMe = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="rounded-xl overflow-hidden w-44 h-44 border-4 border-green-500 shadow-xl bg-gray-800 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-200">
        <img
          src="/lovable-uploads/317309dc-ced9-481f-8e8d-4fac64567f48.png"
          alt="Shubh Gupta"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 text-xl font-semibold mb-2">
          <User /> About Me
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          I am a dedicated software developer with strong fundamentals in computer science, problem-solving, and backend engineering.<br />
          Skilled in competitive programming and building real-world solutions using Python, SQL, C++, and modern backend tech.<br />
          I thrive in high-paced environments and love tackling complex tech challenges.
        </p>
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-1 text-base font-semibold text-white">
            <School className="text-green-400" size={18}/> Education
          </div>
          <ul className="text-gray-300 ml-2 mb-2">
            <li>
              <strong>B.Tech, Computer Science & Engineering</strong>
              <br />
              Galgotias College of Engineering & Technology (2021-2025)
              <br />
              <span className="text-gray-400 text-sm">Current CGPA: 8.41*</span>
            </li>
            <li className="mt-3">
              <strong>CBSE (12th), PCM</strong>
              <br />
              Rani Laxmi Bai Memorial School, Lucknow, 2021 | 95.6%
            </li>
            <li className="mt-3">
              <strong>CBSE (10th)</strong>
              <br />
              Rani Laxmi Bai Memorial School, Lucknow, 2019 | 91.8%
            </li>
          </ul>
        </div>
        <a
          className="inline-flex items-center gap-2 mt-4 text-green-400 hover:underline text-base hover:scale-105 transition-transform"
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
