
import { Award } from "lucide-react";

const achievements = [
  {
    title: "LeetCode Problem Solving",
    description: "Solved 650+ DSA problems on LeetCode and GFG.",
  },
  {
    title: "Hackathon Winner",
    description: "Secured 1st place at College Hackathon 2022, topic: Computer Vision.",
  },
  {
    title: "Ranked 5th (All India) in TCS CodeVita 2023",
    description: "Among top coders nationwide.",
  },
  {
    title: "Publication",
    description: "Published paper on OCR-based invoice data extraction at Nat. Conf. 2022.",
  },
];

const Achievements = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex items-center gap-2 text-xl font-semibold mb-6">
      <Award className="text-purple-400" /> Achievements
    </div>
    <ul className="grid sm:grid-cols-2 gap-6">
      {achievements.map((a) => (
        <li
          key={a.title}
          className="rounded-lg bg-gray-900 p-6 shadow hover-scale relative border-l-4 border-green-500"
        >
          <h4 className="text-white text-lg font-semibold mb-1">{a.title}</h4>
          <p className="text-gray-400 text-base">{a.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;
