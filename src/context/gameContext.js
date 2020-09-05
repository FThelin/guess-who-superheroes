import React, { useState } from "react";
import Heroes from "../heroes.json";
import Questions from "../questions.json";

const GameContext = React.createContext();

export function GameProvider({ children }) {
  const playerHeroList = [...Heroes];
  const robotHeroList = [...Heroes];
  const [gamePhase, setGamePhase] = useState(0);
  const [robotText, setRobotText] = useState({
    text:
      'Hej och välkommen! Tryck på "nytt spel" om du vågar möta mig i en match...',
    icon: <i></i>,
  });
  const [playerHero, setPlayerHero] = useState("");
  const [robotHero, setRobotHero] = useState(null);
  const [playerHeroesLeft, setPlayerHeroesLeft] = useState(playerHeroList);
  const [robotHeroesLeft, setRobotHeroesLeft] = useState(robotHeroList);
  const [robotQuestions, setRobotQuestions] = useState(Questions);

  const heroesLeftforPlayer = (q, bool) => {
    for (let i = 0; i < playerHeroesLeft.length; i++) {
      for (const [key, value] of Object.entries(playerHeroesLeft[i])) {
        if (key === q) {
          if (bool !== value) {
            playerHeroesLeft.splice(i, 1);
            i -= 1;
          }
        }
      }
    }
  };

  const heroesLeftforRobot = (q, bool) => {
    console.log(q, bool);
    for (let i = 0; i < robotHeroesLeft.length; i++) {
      for (const [key, value] of Object.entries(robotHeroesLeft[i])) {
        if (key === q) {
          if (bool !== value) {
            robotHeroesLeft.splice(i, 1);
            i -= 1;
          }
        }
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        gamePhase,
        setGamePhase,
        robotText,
        setRobotText,
        playerHero,
        setPlayerHero,
        robotHero,
        setRobotHero,
        playerHeroesLeft,
        setPlayerHeroesLeft,
        robotHeroesLeft,
        setRobotHeroesLeft,
        heroesLeftforPlayer,
        heroesLeftforRobot,
        robotQuestions,
        setRobotQuestions,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
