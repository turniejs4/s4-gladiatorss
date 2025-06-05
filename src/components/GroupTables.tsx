import React from "react";

export const GroupTables = () => {
  const groups = [
    {
      name: "Grupa A",
      teams: [
        { name: "Alpha", points: 6 },
        { name: "Bravo", points: 3 },
        { name: "Charlie", points: 0 },
      ],
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Tabele grupowe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">{group.name}</h3>
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Drużyna</th>
                  <th className="border px-2 py-1">Punkty</th>
                </tr>
              </thead>
              <tbody>
                {group.teams.map((team, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{team.name}</td>
                    <td className="border px-2 py-1">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
