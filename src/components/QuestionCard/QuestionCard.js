import React from "react";
import "./questionCard.css";

function QuestionCard(props) {
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
