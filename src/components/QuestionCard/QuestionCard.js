import React, { useContext, useState } from "react";
import "./questionCard.css";
import GameContext from "../../context/gameContext";
import Questions from "../../questions.json";

function QuestionCard(props) {
  const {
    gamePhase,
    setGamePhase,
    robotHero,
    setRobotText,
    heroesLeftforPlayer,
  } = useContext(GameContext);
  const [status, setStatus] = useState(
    <i className="fas fa-question-circle gray"></i>
  );

  const askQuestion = (e) => {
    if (gamePhase === 1) {
      for (const [key, value] of Object.entries(robotHero)) {
        if (key === props.question) {
          const question = Questions.find(
            (item) => item.name === props.question
          );
          setGamePhase(2);
          e.target.parentNode.style.opacity = 0.5;
          if (value === true) {
            setRobotText({
              text: question.true,
              icon: <i className="fas fa-check-circle green"></i>,
            });
            setStatus(<i className="fas fa-check-circle green"></i>);
            heroesLeftforPlayer(key, true);
          } else if (value === false) {
            setRobotText({
              text: question.false,
              icon: <i className="fas fa-times-circle red"></i>,
            });
            setStatus(<i className="fas fa-times-circle red"></i>);
            heroesLeftforPlayer(key, false);
          }
        }
      }
    }
  };

  return (
    <div className="questionCard" onClick={askQuestion}>
      <img
        src={require(`../../img/questions/${props.image}`)}
        alt="question-card"
      ></img>
      <p>{props.text}</p>
      {status}
    </div>
  );
}

export default QuestionCard;
