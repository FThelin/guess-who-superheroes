import React from "react";
import "./gameControls.css";
import Questions from "../Questions/Questions";
import PlayerArea from "../PlayerArea/PlayerArea";

function GameControls() {
  return (
    <div className="gameControls">
      <PlayerArea />
      <Questions />
    </div>
  );
}

export default GameControls;
