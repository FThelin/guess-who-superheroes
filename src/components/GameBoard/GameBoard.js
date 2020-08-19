import React from "react";
import "./gameBoard.css";
import Heroes from "../../heroes.json";

function GameBoard() {
  const deselectHero = (e) => {
    e.target.className === "deselected"
      ? e.target.classList.remove("deselected")
      : e.target.classList.add("deselected");
  };

  const getHeroImages = Heroes.map((hero) => {
    return (
      <img
        key={hero.name}
        src={require("../../img/" + hero.image)}
        alt="hero-card"
        onClick={deselectHero}
      />
    );
  });

  return (
    <div className="gameBoard">
      <div className="heroes">{getHeroImages}</div>
    </div>
  );
}

export default GameBoard;
