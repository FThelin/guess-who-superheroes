import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import GameControls from "./components/GameControls/GameControls";
import { GameProvider } from "./context/gameContext";

function App() {
  return (
    <GameProvider>
      <div className="game">
        <Header />
        <GameBoard />
        <GameControls />
      </div>
    </GameProvider>
  );
}

export default App;
