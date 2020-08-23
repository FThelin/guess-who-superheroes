import React, { useState } from "react";
import Heroes from "../heroes.json";

const GameContext = React.createContext();

export function GameProvider({ children }) {
  const [gamePhase, setGamePhase] = useState(0);
  const [robotText, setRobotText] = useState(
    'Hej och välkommen! Tryck på "nytt spel" om du vågar möta mig i en match...'
  );
  const [playerHero, setPlayerHero] = useState("");
  const [robotHero, setRobotHero] = useState(null);
  const [playerHeroesLeft, setPlayerHeroesLeft] = useState(Heroes);
  const [robotHeroesLeft, setRobotHeroesLeft] = useState(Heroes);

  const heroesLeftforPlayer = (q, bool) => {
    for (let i = 0; i < playerHeroesLeft.length; i++) {
      for (const [key, value] of Object.entries(playerHeroesLeft[i])) {
        if (key === q) {
          if (bool !== value) {
            playerHeroesLeft.splice(i, 1);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
