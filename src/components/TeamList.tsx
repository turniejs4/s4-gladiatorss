import React from "react";

export const TeamList = () => {
  const teams = [
    { name: "Team Alpha", players: ["Adam", "Bartek"] },
    { name: "Team Bravo", players: ["Cezary", "Dawid"] },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-2">Lista drużyn</h2>
      <ul className="space-y-1">
        {teams.map((team, index) => (
          <li key={index} className="border p-2 rounded">
            <strong>{team.name}</strong>: {team.players.join(" & ")}
          </li>
        ))}
      </ul>
    </div>
  );
};
