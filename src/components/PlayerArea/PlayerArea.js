import React from "react";
import "./playerArea.css";

function PlayerArea() {
  return (
    <div className="playerArea">
      <button className="yesBtn">Ja!</button>
      <div>
        <img src={require("../../img/hero.png")} />
      </div>
      <button className="noBtn">Nej!</button>
    </div>
  );
}

export default PlayerArea;
