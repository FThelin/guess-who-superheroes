import React from "react";
import "./questions.css";
import QuestionCard from "../QuestionCard/QuestionCard";

function Questions() {
  return (
    <div className="questions">
      <QuestionCard text="Pojke?" image="boy.png" />
      <QuestionCard text="Flicka?" image="girl.png" />
      <QuestionCard text="Mantel?" image="cape.png" />
      <QuestionCard text="Ögonmask?" image="mask.png" />
      <QuestionCard text="Bälte?" image="belt.png" />
      <QuestionCard text="Logo?" image="logo.png" />
      <QuestionCard text="Röda skor?" image="redshoes.png" />
      <QuestionCard text="Blå skor?" image="blueshoes.png" />
      <QuestionCard text="Gula skor?" image="yellowshoes.png" />
      <QuestionCard text="Svarta skor?" image="blackshoes.png" />
      <QuestionCard text="Röd tröja?" image="redshirt.png" />
      <QuestionCard text="Blå tröja?" image="blueshirt.png" />
      <QuestionCard text="Grön tröja?" image="greenshirt.png" />
      <QuestionCard text="Gul tröja?" image="yellowshirt.png" />
      <QuestionCard text="Grå tröja?" image="grayshirt.png" />
      <QuestionCard text="Ljust hår?" image="lighthair.png" />
      <QuestionCard text="Mörkt hår?" image="darkhair.png" />
      <QuestionCard text="Syns hår?" image="nohair.png" />
      <QuestionCard text="Mörka ögon?" image="darkeyes.png" />
      <QuestionCard text="Blå ögon?" image="blueeyes.png" />
      <QuestionCard text="Huvudbonad?" image="headgear.png" />
    </div>
  );
}

export default Questions;
