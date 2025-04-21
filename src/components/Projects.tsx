
import { Briefcase } from "lucide-react";

const projects = [
  {
    title: "Smart Attendance System",
    tech: "Python, OpenCV, SQL",
    description: "Face recognition-based attendance system for automated tracking.",
    url: "https://github.com/shubhgupta/smart-attendance",
    image: "/lovable-uploads/photo-1461749280684-dccba630e2f6.jpeg", // Placeholder image
  },
  {
    title: "Invoice Processing",
    tech: "Python, MySQL, SQL",
    description: "Automated invoice handling and OCR extraction pipeline.",
    url: "https://github.com/shubhgupta/invoice-processing",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.jpeg",
  },
  {
    title: "Coding Platform",
    tech: "MongoDB, Express, React, Node.js",
    description: "Competitive coding platform with live rankings and problem editor.",
    url: "https://github.com/shubhgupta/coding-platform",
    image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d.jpeg",
  },
  {
    title: "Data Visualization Dashboard",
    tech: "D3.js, React, TypeScript",
    description: "Interactive dashboard for exploring and visualizing complex datasets.",
    url: "https://github.com/shubhgupta/data-viz",
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpeg",
  },
];

const Projects = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex items-center gap-2 text-xl font-semibold mb-6">
      <Briefcase className="text-blue-400" /> Projects
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((proj) => (
        <div key={proj.title} className="bg-gray-900 rounded-lg overflow-hidden hover-scale shadow-lg flex flex-col">
          <img
            src={proj.image}
            alt={proj.title}
            className="h-56 w-full object-cover"
            onError={e => {
              (e.currentTarget as HTMLImageElement).src = '/lovable-uploads/c448bd06-79db-4245-9e31-826280faef31.png';
            }}
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-1">{proj.title}</h3>
            <div className="text-sm text-gray-500 mb-2">{proj.tech}</div>
            <p className="text-gray-300 flex-1">{proj.description}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-green-400 hover:underline text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
