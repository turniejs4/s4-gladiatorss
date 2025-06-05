import React from "react";

export const MatchSchedule = () => {
  const matches = [
    { team1: "Alpha", team2: "Bravo", date: "2025-06-10" },
    { team1: "Charlie", team2: "Delta", date: "2025-06-11" },
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-2">Terminarz</h2>
      <ul className="space-y-1">
        {matches.map((match, index) => (
          <li key={index} className="border p-2 rounded">
            {match.team1} vs {match.team2} – {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
