
import { Star } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "D3.js"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Linux", "MySQL", "MongoDB"],
  },
  {
    title: "Other",
    skills: ["Data Structures & Algorithms", "Problem Solving", "Backend Systems"],
  },
];

const Skills = () => (
  <section className="py-12 px-4 md:px-8 bg-gray-950 rounded-xl my-8">
    <div className="flex items-center gap-2 text-xl font-semibold mb-6">
      <Star className="text-yellow-400" /> Skills
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-lg font-bold mb-2 text-white">{group.title}</h3>
          <ul className="space-y-1 text-gray-300">
            {group.skills.map(skill => (
              <li key={skill} className="pl-2 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-green-400 before:rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
