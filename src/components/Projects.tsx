
import { Briefcase } from "lucide-react";

const projects = [
  {
    title: "Smart Attendance System",
    tech: "Python, OpenCV, SQL",
    description: "Automated face recognition-based attendance using OpenCV. Efficient backend and dashboard for real-time tracking.",
    url: "https://github.com/titanShubh/smart-attendance-system",
    image: "/lovable-uploads/photo-1461749280684-dccba630e2f6.jpeg",
  },
  {
    title: "Invoice Processing System",
    tech: "Python, MySQL, SQL",
    description: "End-to-end pipeline for invoice data extraction using OCR and database automation.",
    url: "https://github.com/titanShubh/invoice-processing",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.jpeg",
  }
];

const Projects = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex items-center gap-2 text-xl font-semibold mb-6">
      <Briefcase className="text-blue-400" /> Projects
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((proj) => (
        <div key={proj.title} className="bg-gray-900 rounded-lg overflow-hidden hover-scale shadow-lg flex flex-col transition-transform hover:shadow-xl hover:-translate-y-1 group">
          <img
            src={proj.image}
            alt={proj.title}
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-200"
            onError={e => {
              (e.currentTarget as HTMLImageElement).src = '/public/lovable-uploads/github.png';
            }}
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors">
              {proj.title}
            </h3>
            <div className="text-sm text-gray-500 mb-2">{proj.tech}</div>
            <p className="text-gray-300 flex-1">{proj.description}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-green-400 hover:underline text-sm font-medium hover:text-green-200 hover-scale transition"
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
