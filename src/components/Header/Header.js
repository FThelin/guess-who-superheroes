import React, { useContext } from "react";
import "./header.css";
import GameContext from "../../context/gameContext";

function Header() {
  const { robotText } = useContext(GameContext);

  return (
    <div className="header">
      <div className="headingBox">
        <img src={require("../../img/logo.png")} alt="logo"></img>
      </div>
      <div className="computerBox">
        <img src={require("../../img/robot.png")} alt="robot-opponent"></img>
        <div className="textBox">
          <p>{robotText}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
