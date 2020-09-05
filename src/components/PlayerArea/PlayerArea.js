import React, { useContext, useState } from "react";
import "./playerArea.css";
import GameContext from "../../context/gameContext";
import Heroes from "../../heroes.json";
import Questions from "../../questions.json";

const PlayerArea = () => {
  const {
    gamePhase,
    setGamePhase,
    robotText,
    setRobotText,
    playerHero,
    setPlayerHero,
    setRobotHero,
    heroesLeftforRobot,
    robotHeroesLeft,
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

  const answerQuestion = (answer) => {
    for (let i = 0; i < Questions.length; i++) {
      for (const [key, value] of Object.entries(Questions[i])) {
        if (value === robotText.text) {
          heroesLeftforRobot(Questions[i].name, answer);
        }
      }
    }
    setGamePhase(1);
    setRobotText({
      text: `Tack! Nu har jag ${robotHeroesLeft.length} hjätar kvar. Din tur!`,
    });
  };

  return (
    <div className="playerArea">
      {gamePhase === 0 ? (
        <button className="newGameBtn" onClick={() => startNewGame()}>
          Nytt spel
        </button>
      ) : null}
      {gamePhase === 3 ? (
        <button className="yesBtn" onClick={() => answerQuestion(true)}>
          Ja!
        </button>
      ) : null}

      <div className="heroCard">
        <img src={require(`../../img/${playerCharacter}`)} alt="no-hero-yet" />
        <p>{playerHero.name}</p>
      </div>
      {console.log(gamePhase)}
      {gamePhase === 3 ? (
        <button className="noBtn" onClick={() => answerQuestion(false)}>
          Nej!
        </button>
      ) : null}
    </div>
  );
};

export default PlayerArea;
