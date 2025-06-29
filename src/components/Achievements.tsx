import { Award, Book } from "lucide-react";

const achievements = [
  {
    title: "LeetCode (Highest Rating - 2245)",
    description: "Guardian Badge. Among 0.76% users in Leetcode",
    link: "https://leetcode.com/u/guptashubh6386/",
    secondaryLinks: [
      { label: "Global Rank 358th (W422)", url: "https://leetcode.com/contest/weekly-contest-422/ranking/15/" },
      { label: "Global Rank 653rd (W421)", url: "https://leetcode.com/contest/weekly-contest-421/ranking/27/" }
    ]
  },
  {
    title: "Codeforces (Highest Rating - 1709)",
    description: "Expert Rated",
    link: "https://codeforces.com/profile/titan_2",
    secondaryLinks: [
      { label: "Global Rank 768th Round 950 (Div.3)", url: "https://codeforces.com/contest/1980/standings/page/4"},
      { label: "Global Rank 838th Round 1007 (Div.2)", url: "https://codeforces.com/contest/2071/standings/participant/204952521##p204952521"}
    ]
  },
  {
    title: "CodeChef",
    description: "5⭐ Coder | MARCH221D Division: Rank 1st",
    link: "https://www.codechef.com/users/shubh_titan",
    secondaryLinks: [
      { label: "March 22 Ranking", url: "https://www.codechef.com/rankings/MARCH221D?itemsPerPage=100&order=asc&page=1&search=shubh_titan&sortBy=rank" }
    ]
  },
  {
    title: "AtCoder",
    description: "4 Kyu, Active competitive programming participant",
    link: "https://atcoder.jp/users/shubh_titan"
  },
  {
    title: "HackerCup 2024: Qualified for Round 2",
    description: "Round 1 Finalist",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/270751775350259"
  },
  {
    title: "Codingame",
    description: "Rookie, Ranked globally in online AI coding competitions.",
    link: "https://www.codingame.com/profile/d61c20121be0b167fb73837b7c3c61787427174"
  }
];

const Achievements = () => (
  <section className="py-12 px-4 md:px-8">
    <div className="flex items-center gap-2 text-xl font-semibold mb-6">
      <Award className="text-purple-400" aria-hidden="true" /> Achievements
    </div>
    <ul className="grid sm:grid-cols-2 gap-6">
      {achievements.map((a) => (
        <li
          key={a.title}
          className="rounded-lg bg-gray-900 p-6 shadow hover:scale-105 relative border-l-4 border-green-500 transition-all hover:shadow-lg"
        >
          <a href={a.link} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Link to ${a.title}`}>
            <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors">
              {a.title}
            </h4>
          </a>
          <p className="text-gray-400 text-base">{a.description}</p>
          {a.secondaryLinks && (
            <div className="flex flex-wrap gap-2 mt-2">
              {a.secondaryLinks.map(l => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 text-sm text-green-300 bg-gray-800 rounded hover:bg-green-600 hover:text-white transition-colors hover:scale-105"
                  aria-label={`Link to ${l.label}`}
                >
                  <Book size={13} className="inline-block mr-1" aria-hidden="true" />{l.label}
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
