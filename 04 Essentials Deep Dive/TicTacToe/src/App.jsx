import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0]?.player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { coord: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div className="gameDashboard">
        <ol className="playersDashboard activePlayer">
          <Player
            playerName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="Player2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onPlayerMove={handlePlayerChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
