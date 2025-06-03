import { useState } from "react";

export default function Home() {
  const teams = [
    { name: "Miłość", players: ["IloveMygirl", "Mazur"] },
    { name: "Patkozaury", players: ["Patka", "Nexus"] },
    { name: "Somsiady", players: ["Anna", "Somsiad"] },
    { name: "Skubani", players: ["Loq12", "Skubaniec"] },
    { name: "Szefowie", players: ["Grachu", "Piotrek"] },
    { name: "Buntownicy", players: ["Halok", "D"] },
    { name: "Żelazny Legion", players: ["PanGrzesiu", "Yakuza"] },
    { name: "Cienie Ostrzy", players: ["Nędzny", "Skała"] },
    { name: "Ogniste Dzieci", players: ["Artur", "Maciek"] },
    { name: "Pogromcy", players: ["Bojek", "Robert"] },
    { name: "Karmazynowe Kły", players: ["Pit", "Bombal"] },
    { name: "Pogromcy Burzy", players: ["1", "Marcin2"] },
    { name: "Wojenny Klan", players: ["Darkan", "Szary ludź"] },
    { name: "Kruszyciele Kości", players: ["Daro", "Ecia"] },
    { name: "Furia Tytanów", players: ["Ariel", "Czesław"] },
    { name: "Stalowe Sępy", players: ["Araggorn", "Magunek"] },
    { name: "Panowanie Chaosu", players: ["Sebastian", "Kamaitachi"] },
    { name: "Synowie Furii", players: ["Mario", "Koper"] },
    { name: "Oddział Strzelców", players: ["Slaughter", "Damster"] },
    { name: "Oddział Otchłani", players: ["Laliama", "Warchlak"] },
    { name: "Duchowa Jednostka", players: ["Balu", "Kruszyn"] }
  ];

  const [points, setPoints] = useState({});
  const [view, setView] = useState("gladiators");

  const groups = [
    { name: "Grupa A", teams: teams.slice(0, 6) },
    { name: "Grupa B", teams: teams.slice(6, 11) },
    { name: "Grupa C", teams: teams.slice(11, 16) },
    { name: "Grupa D", teams: teams.slice(16, 21) }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto text-white min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center mb-6">S4 Gladiators</h1>
      <div className="flex justify-center mb-4 space-x-4 flex-wrap">
        <button onClick={() => setView("gladiators")} className={\`px-4 py-2 rounded \${view === "gladiators" ? "bg-white text-black" : "bg-zinc-800"}\`}>Gladiators</button>
        <button onClick={() => setView("teams")} className={\`px-4 py-2 rounded \${view === "teams" ? "bg-white text-black" : "bg-zinc-800"}\`}>Drużyny</button>
        <button onClick={() => setView("players")} className={\`px-4 py-2 rounded \${view === "players" ? "bg-white text-black" : "bg-zinc-800"}\`}>Zawodnicy</button>
        <button onClick={() => setView("groups")} className={\`px-4 py-2 rounded \${view === "groups" ? "bg-white text-black" : "bg-zinc-800"}\`}>Grupy</button>
      </div>

      {view === "gladiators" && (
        <div className="text-center text-lg leading-relaxed text-zinc-300">
          <p className="mb-4">Witajcie w <strong>S4 Gladiators</strong> — wyjątkowym turnieju Smashing Four,</p>
          <p className="mb-4">gdzie honor, strategia i walka łączą się w jedną epicką przygodę.</p>
          <p className="mb-4">Przed Wami starcie 21 elitarnych drużyn, które stają do rywalizacji o chwałę!</p>
          <p className="mb-4">Niech najlepsi gladiatorzy zwyciężą. Powodzenia wszystkim!</p>
        </div>
      )}

      {view === "teams" && (
        <div className="space-y-4">
          {teams.map((team, i) => (
            <div key={i} className="border border-zinc-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <ul className="text-sm pl-5 list-disc">
                {team.players.map((player, j) => (
                  <li key={j}>{player}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {view === "players" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teams.flatMap((team) => team.players.map((player) => ({ player, team: team.name }))).map((entry, idx) => (
            <div key={idx} className="border border-zinc-700 rounded-lg p-3">
              <p className="text-lg font-medium">{entry.player}</p>
              <p className="text-sm text-zinc-400">Drużyna: {entry.team}</p>
            </div>
          ))}
        </div>
      )}

      {view === "groups" && (
        <div className="space-y-6">
          {groups.map((group, idx) => (
            <div key={idx} className="border border-zinc-700 rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-2">{group.name}</h2>
              <ul className="list-disc pl-6">
                {group.teams.map((team, j) => (
                  <li key={j} className="text-zinc-300">{team.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
