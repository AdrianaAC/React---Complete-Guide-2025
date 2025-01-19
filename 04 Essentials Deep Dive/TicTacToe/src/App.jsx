import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    console.log("activePlayer", activePlayer);
  }

  return (
    <main>
      <div className="gameDashboard">
        <ol className="playersDashboard activePlayer">
          <Player playerName="Player 1" playerSymbol="X" isActive={activePlayer === "X"}/>
          <Player playerName="Player2" playerSymbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onPlayerMove={handlePlayerChange}activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
