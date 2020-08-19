import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import GameControls from "./components/GameControls/GameControls";

function App() {
  return (
    <div className="game">
      <Header />
      <GameBoard />
      <GameControls />
    </div>
  );
}

export default App;
