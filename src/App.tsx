import { useState } from "react";
import "./App.css";

// Class representing a volleyball team
class Team {
  name: string;
  sets: {
    won: number;
    lost: number;
  };

  constructor(name: string) {
    this.name = name;
    this.sets = {
      won: 0,
      lost: 0,
    };
  }
}

// Class representing a volleyball match
class Match {
  teamOne: Team;
  teamTwo: Team;
  finalScore: string;

  constructor(teamOne: Team, teamTwo: Team) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
    this.finalScore = "";
  }
}

export default function App() {
  // Initialize two team objects
  const teamOne = new Team("Team One");
  const teamTwo = new Team("Team Two");

  // Initialize a match object
  const match = new Match(teamOne, teamTwo);

  return <h1>Hello World</h1>;
}
