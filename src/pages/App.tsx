import { useState } from "react";
import "../styles/App.css";

interface Match {
  teamOne: Team | null;
  teamOneScore: number;
  teamTwo: Team | null;
  teamTwoScore: number;
  winner: Team | null;
}
interface Team {
  name: string;
  sets: {
    won: number;
    lost: number;
  };
  matches: Match[];
}

export default function App() {
  const [teamOne, setTeamOne] = useState<Team | null>(null);
  const [teamTwo, setTeamTwo] = useState<Team | null>(null);

  const [teamOneCurrentGameScore, setTeamOneCurrentGameScore] = useState(0);
  const [teamTwoCurrentGameScore, setTeamTwoCurrentGameScore] = useState(0);

  return <h1>Hello World</h1>;
}
