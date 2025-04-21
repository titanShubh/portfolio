
import Navbar from '@/components/Navbar';

const RecentWork = () => {
  const projects = [
    {
      title: "Smart Attendance System",
      description: "Face recognition-based attendance system using OpenCV",
      tech: "Python, OpenCV, SQL",
      date: "Jul 2023",
      githubUrl: "https://github.com/shubhgupta/smart-attendance"
    },
    {
      title: "Invoice Processing",
      description: "Automated invoice handling and tracking system",
      tech: "Python, MySQL, SQL",
      date: "Jul 2023",
      githubUrl: "https://github.com/shubhgupta/invoice-processing"
    },
    {
      title: "Coding Platform",
      description: "Competitive coding platform with live rankings",
      tech: "MongoDB, Express, React, Node.js",
      date: "2022",
      githubUrl: "https://github.com/shubhgupta/coding-platform"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets",
      tech: "D3.js, React, TypeScript",
      date: "2022",
      githubUrl: "https://github.com/shubhgupta/data-viz"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <div className="py-16 px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-8">Recent Work</h1>
          <p className="text-gray-400 text-lg mb-12">
            A selection of my recent projects and contributions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.tech}</span>
                    <span>{project.date}</span>
                  </div>
                  <div className="mt-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
