import { useState } from "react";
import "../styles/App.css";
import { Typography } from "@mui/material";

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

  const incrementTeamOneScore = () => {
    setTeamOne((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  const incrementTeamTwoScore = () => {
    setTeamTwo((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  return (
    <div className="score-container">
      <Typography variant="h1">VolleyScore</Typography>
      <div className="button-container">
        <div className="score-container">
          <Typography variant="h4">{teamOne.name}</Typography>
          <button className="score-button" onClick={incrementTeamOneScore}>
            {teamOne.score}
          </button>
        </div>
        <div className="score-container">
          <Typography variant="h4">{teamTwo.name}</Typography>
          <button className="score-button" onClick={incrementTeamTwoScore}>
            {teamTwo.score}
          </button>
        </div>
      </div>
    </div>
  );
}
