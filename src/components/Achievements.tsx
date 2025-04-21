
import { Award, Book } from "lucide-react";

const achievements = [
  {
    title: "LeetCode (1700+ Problems)",
    description: "1700+ DSA problems solved. Highest Contest Rank: 15th (Weekly 422).",
    link: "https://leetcode.com/u/guptashubh6386/",
    secondaryLinks: [
      { label: "Rank 15 (W422)", url: "https://leetcode.com/contest/weekly-contest-422/ranking/15/" },
      { label: "Rank 27 (W421)", url: "https://leetcode.com/contest/weekly-contest-421/ranking/27/" }
    ]
  },
  {
    title: "Codeforces",
    description: "Regular participant, key standings in multiple contests.",
    link: "https://codeforces.com/profile/titan_2",
    secondaryLinks: [
      { label: "1980 standings", url: "https://codeforces.com/contest/1980/standings/page/4"},
      { label: "2071 standings", url: "https://codeforces.com/contest/2071/standings/participant/204952521##p204952521"}
    ]
  },
  {
    title: "CodeChef",
    description: "4⭐ Coder | MARCH221D Division: Top rank achieved.",
    link: "https://www.codechef.com/users/shubh_titan",
    secondaryLinks: [
      { label: "March 22 Ranking", url: "https://www.codechef.com/rankings/MARCH221D?itemsPerPage=100&order=asc&page=1&search=shubh_titan&sortBy=rank" }
    ]
  },
  {
    title: "AtCoder",
    description: "Active competitive programming participant.",
    link: "https://atcoder.jp/users/shubh_titan"
  },
  {
    title: "HackerCup 2024: Qualified Round 2",
    description: "See certificate.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/270751775350259"
  },
  {
    title: "Codingame",
    description: "Ranked globally in online AI coding competitions.",
    link: "https://www.codingame.com/profile/d61c20121be0b167fb73837b7c3c61787427174"
  }
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
          className="rounded-lg bg-gray-900 p-6 shadow hover-scale relative border-l-4 border-green-500 transition-all hover:shadow-lg"
        >
          <a href={a.link} target="_blank" rel="noopener noreferrer" className="group block">
            <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors">
              {a.title}
            </h4>
          </a>
          <p className="text-gray-400 text-base">{a.description}</p>
          {a.secondaryLinks && (
            <div className="flex flex-wrap gap-2 mt-2">
              {a.secondaryLinks.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="inline-block px-2 py-1 text-sm text-green-300 bg-gray-800 rounded hover:bg-green-600 hover:text-white transition-colors hover-scale"
                >
                  <Book size={13} className="inline-block mr-1" />{l.label}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;
