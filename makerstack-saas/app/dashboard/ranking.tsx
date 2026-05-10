"use client";

type Match = {
  name: string;
  score: number;
  report: {
    summary: string;
  };
};

type Props = {
  matches: Match[];
};

export default function Ranking({ matches }: Props) {
  return (
    <div>
      {matches.map((c, index) => (
        <div key={index} className="bg-gray-900 p-5 rounded-xl mb-4">
          <div className="flex justify-between">
            <h2 className="font-bold">{c.name}</h2>
            <span className="text-green-400">{c.score}%</span>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            {c.report.summary}
          </p>
        </div>
      ))}
    </div>
  );
}