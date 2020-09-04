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
    setRobotHero,
    robotHero,
  } = useContext(GameContext);
  const [playerCharacter, setPlayerCharacter] = useState("hero.png");

  const startNewGame = () => {
    setGamePhase(10);
    setRobotText({ text: "Spännande..." });
    const startCharacterSelect = setInterval(characterSelect, 150);
    setTimeout(() => {
      stopCharacterSelect(startCharacterSelect);
      setGamePhase(1);
    }, 5000);
  };

  const characterSelect = () => {
    let randomNumber = Math.floor(Math.random() * 18);
    let randomNumber2 = Math.floor(Math.random() * 18);

    setPlayerCharacter(Heroes[randomNumber].image);
    setPlayerHero(Heroes[randomNumber]);

    if (randomNumber !== randomNumber2) {
      setRobotHero(Heroes[randomNumber2]);
    } else if (randomNumber !== 0) {
      setRobotHero(Heroes[randomNumber - 1]);
    } else {
      setRobotHero(Heroes[randomNumber + 1]);
    }
  };

  const stopCharacterSelect = (startCharacterSelect) => {
    clearInterval(startCharacterSelect);
    setRobotText({
      text:
        "Snyggt, jag har också valt en karaktär. Nu kan du börja med att ställa mig en fråga..",
    });
  };

  return (
    <div className="playerArea">
      {gamePhase === 0 ? (
        <button className="newGameBtn" onClick={() => startNewGame()}>
          Nytt spel
        </button>
      ) : null}
      {gamePhase === 3 ? <button className="yesBtn">Ja!</button> : null}

      <div className="heroCard">
        <img src={require(`../../img/${playerCharacter}`)} alt="no-hero-yet" />
        <p>{playerHero.name}</p>
        {console.log(robotHero)}
      </div>

      {gamePhase === 3 ? <button className="noBtn">Nej!</button> : null}
    </div>
  );
};

export default PlayerArea;
