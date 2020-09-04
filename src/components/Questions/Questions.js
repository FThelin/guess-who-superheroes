import React, { useContext } from "react";
import "./questions.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import GameContext from "../../context/gameContext";

function Questions() {
  const { gamePhase } = useContext(GameContext);

  return (
    <div className={gamePhase === 1 ? "questions active" : "questions"}>
      <QuestionCard text="Pojke?" image="boy.png" question="boy" />
      <QuestionCard text="Flicka?" image="girl.png" question="girl" />
      <QuestionCard text="Mantel?" image="cape.png" question="cape" />
      <QuestionCard text="Ögonmask?" image="mask.png" question="mask" />
      <QuestionCard text="Bälte?" image="belt.png" question="belt" />
      <QuestionCard text="Logo?" image="logo.png" question="logo" />
      <QuestionCard text="Röda skor?" image="redshoes.png" question="redFeet" />
      <QuestionCard
        text="Gröna skor?"
        image="greenshoes.png"
        question="greenFeet"
      />
      <QuestionCard
        text="Gula skor?"
        image="yellowshoes.png"
        question="yellowFeet"
      />
      <QuestionCard
        text="Svarta skor?"
        image="blackshoes.png"
        question="blackFeet"
      />
      <QuestionCard
        text="Röd tröja?"
        image="redshirt.png"
        question="redShirt"
      />
      <QuestionCard
        text="Blå tröja?"
        image="blueshirt.png"
        question="blueShirt"
      />
      <QuestionCard
        text="Grön tröja?"
        image="greenshirt.png"
        question="greenShirt"
      />
      <QuestionCard
        text="Gul tröja?"
        image="yellowshirt.png"
        question="yellowShirt"
      />
      <QuestionCard
        text="Grå tröja?"
        image="grayshirt.png"
        question="grayShirt"
      />
      <QuestionCard
        text="Ljust hår?"
        image="lighthair.png"
        question="lightHair"
      />
      <QuestionCard
        text="Mörkt hår?"
        image="darkhair.png"
        question="darkHair"
      />
      <QuestionCard
        text="Syns hår?"
        image="nohair.png"
        question="showingHair"
      />
      <QuestionCard
        text="Mörka ögon?"
        image="darkeyes.png"
        question="darkEyes"
      />
      <QuestionCard text="Blå ögon?" image="blueeyes.png" question="blueEyes" />
      <QuestionCard
        text="Huvudbonad?"
        image="headgear.png"
        question="headGear"
      />
    </div>
  );
}

export default Questions;
