import { useState } from "react";
import "../styles/App.css";

interface Team {
  name: string;
  score: number;
}

export default function App() {
  const [teamOne, setTeamOne] = useState<Team>({
    name: "Red",
    score: 0,
  });
  const [teamTwo, setTeamTwo] = useState<Team>({
    name: "Blue",
    score: 0,
  });

  return <h1>Hello World</h1>;
}
