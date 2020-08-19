import React from "react";
import "./playerArea.css";

function PlayerArea() {
  return (
    <div className="playerArea">
      <button className="newGameBtn">Nytt spel</button>
      <button className="yesBtn disabled">Ja!</button>
      <div>
        <img src={require("../../img/hero.png")} />
      </div>
      <button className="noBtn disabled">Nej!</button>
    </div>
  );
}

export default PlayerArea;
