import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headingBox">
        <img src={require("../../img/logo.png")} alt="logo"></img>
      </div>
      <div className="computerBox">
        <img src={require("../../img/robot.png")} alt="robot-opponent"></img>
        <div className="textBox">
          <p>
            Hej och välkommen! Tryck på "nytt spel" om du vågar möta mig i en
            match...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
