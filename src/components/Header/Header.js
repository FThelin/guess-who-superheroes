import React, { useContext } from "react";
import "./header.css";
import GameContext from "../../context/gameContext";

function Header() {
  const {
    robotText,
    setRobotText,
    gamePhase,
    setGamePhase,
    robotQuestions,
    robotHeroesLeft,
    playerHeroesLeft,
  } = useContext(GameContext);

  const robotQuestion = () => {
    let randomNumber = Math.floor(Math.random() * robotQuestions.length);
    setRobotText({
      text: robotQuestions[randomNumber].question,
      icon: (
        <img
          src={require(`../../img/questions/${robotQuestions[randomNumber].image}`)}
          alt="question-card"
        ></img>
      ),
    });
    setGamePhase(3);
  };

  const log = () => {
    {
      console.log("Player ", playerHeroesLeft);
    }
    {
      console.log("Robot ", robotHeroesLeft);
    }
  };

  return (
    <div className="header">
      <div className="headingBox" onClick={() => log()}>
        <img src={require("../../img/logo.png")} alt="logo"></img>
      </div>
      <div className="computerBox">
        <img src={require("../../img/robot.png")} alt="robot-opponent"></img>
        <div className="textBox">
          <p>
            {robotText.text}
            {robotText.icon}
          </p>
          {gamePhase === 2 ? (
            <button onClick={() => robotQuestion()}>Redo för min fråga?</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
