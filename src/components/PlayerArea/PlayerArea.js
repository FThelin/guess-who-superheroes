import React, { useContext, useState } from "react";
import "./playerArea.css";
import GameContext from "../../context/gameContext";
import Heroes from "../../heroes.json";

const PlayerArea = () => {
  const {
    gamePhase,
    setGamePhase,
    setRobotText,
    playerHero,
    setPlayerHero,
  } = useContext(GameContext);
  const [playerCharacter, setPlayerCharacter] = useState("hero.png");

  const characterSelect = () => {
    let randomNumber = Math.floor(Math.random() * 18);
    setPlayerCharacter(Heroes[randomNumber].image);
  };

  const stopCharacterSelect = () => {
    clearInterval(startCharacterSelect),
      setRobotText(
        "Snyggt, jag har också valt en karaktär. Nu kan du börja med att ställa mig en fråga.."
      ),
      console.log(playerCharacter);
  };

  const startNewGame = () => {
    setGamePhase(1);
    setRobotText("Spännande...");
    const startCharacterSelect = setInterval(characterSelect, 150);
    setTimeout(stopCharacterSelect, 5000);
  };

  return (
    <div className="playerArea">
      {gamePhase === 0 ? (
        <button className="newGameBtn" onClick={() => startNewGame()}>
          Nytt spel
        </button>
      ) : null}
      {gamePhase === 2 ? <button className="yesBtn">Ja!</button> : null}

      <div>
        {console.log(playerCharacter)}
        <img src={require(`../../img/${playerCharacter}`)} alt="no-hero-yet" />
      </div>

      {gamePhase === 2 ? <button className="noBtn">Nej!</button> : null}
    </div>
  );
};

export default PlayerArea;
