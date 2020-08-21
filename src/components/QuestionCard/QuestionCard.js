import React, { useContext } from "react";
import "./questionCard.css";
import GameContext from "../../context/gameContext";
import Questions from "../../questions.json";

function QuestionCard(props) {
  const { gamePhase, setGamePhase, robotHero, setRobotText } = useContext(
    GameContext
  );

  const askQuestion = () => {
    if (gamePhase === 1) {
      for (const [key, value] of Object.entries(robotHero)) {
        if (key == props.question) {
          const question = Questions.find(
            (item) => item.name == props.question
          );
          setGamePhase(2);
          if (value === true) {
            setRobotText(question.true);
          } else if (value === false) {
            setRobotText(question.false);
          }
        }
      }
    }
  };

  return (
    <div className="questionCard" onClick={() => askQuestion()}>
      <img
        src={require(`../../img/questions/${props.image}`)}
        alt="question-card"
      ></img>
      <p>{props.text}</p>
    </div>
  );
}

export default QuestionCard;
