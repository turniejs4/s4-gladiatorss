import React, { useState } from "react";

export const ResultForm = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Wynik dodany: ${team1} ${score1} - ${score2} ${team2}`);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-2">Dodaj wynik meczu</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input value={team1} onChange={e => setTeam1(e.target.value)} placeholder="Drużyna 1" className="w-full p-2 border rounded" />
        <input value={score1} onChange={e => setScore1(e.target.value)} placeholder="Wynik 1" className="w-full p-2 border rounded" />
        <input value={score2} onChange={e => setScore2(e.target.value)} placeholder="Wynik 2" className="w-full p-2 border rounded" />
        <input value={team2} onChange={e => setTeam2(e.target.value)} placeholder="Drużyna 2" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Zapisz wynik</button>
      </form>
    </div>
  );
};
