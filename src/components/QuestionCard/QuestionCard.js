import React, { useContext } from "react";
import "./questionCard.css";
import GameContext from "../../context/gameContext";

function QuestionCard(props) {
  const { playerHero } = useContext(GameContext);

  return (
    <div className="questionCard">
      <img
        src={require(`../../img/questions/${props.image}`)}
        alt="question-card"
      ></img>
      <p>{props.text}</p>
    </div>
  );
}

export default QuestionCard;
