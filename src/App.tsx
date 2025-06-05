import React from "react";
import { TeamList } from "./components/TeamList";
import { GroupTables } from "./components/GroupTables";
import { MatchSchedule } from "./components/MatchSchedule";
import { ResultForm } from "./components/ResultForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-orange-400 p-4 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6">Turniej Smashing Four</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamList />
        <ResultForm />
      </div>
      <GroupTables />
      <MatchSchedule />
    </div>
  );
}
