import { useState, useEffect } from "react";
import "../styles/App.css";
import { Button, Typography } from "@mui/material";

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
  const [allowChange, setAllowChange] = useState<boolean>(true);

  const incrementTeamOneScore = () => {
    if (!allowChange) {
      return;
    }
    setTeamOne((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  const incrementTeamTwoScore = () => {
    if (!allowChange) {
      return;
    }
    setTeamTwo((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  const resetScore = () => {
    setAllowChange(true);
    setTeamOne((prevState) => ({
      ...prevState,
      score: 0,
    }));
    setTeamTwo((prevState) => ({
      ...prevState,
      score: 0,
    }));
    alert("Score has been reset!");
  };

  // use effect to check if score is 25
  // if score is 25, check if difference is 2
  // if difference is 2, set winner
  // if difference is not 2, continue
  // if score is not 25, continue
  useEffect(() => {
    // Function to check for winner
    const checkForWinner = (teamOne: Team, teamTwo: Team) => {
      if (teamOne.score >= 25 && teamOne.score - teamTwo.score >= 2) {
        alert(`${teamOne.name} wins!`);
        setAllowChange(false);
      } else if (teamTwo.score >= 25 && teamTwo.score - teamOne.score >= 2) {
        alert(`${teamTwo.name} wins!`);
        setAllowChange(false);
      }
    };

    checkForWinner(teamOne, teamTwo);
  }, [teamOne.score, teamTwo.score]);

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
      <button className="reset-button" onClick={resetScore}>
        Reset
      </button>
    </div>
  );
}
