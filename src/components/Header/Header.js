import React, { useContext } from "react";
import "./header.css";
import GameContext from "../../context/gameContext";

function Header() {
  const { robotText, gamePhase, setGamePhase } = useContext(GameContext);

  const robotQuestion = () => {
    console.log("hej");
    setGamePhase(3);
  };

  return (
    <div className="header">
      <div className="headingBox">
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
