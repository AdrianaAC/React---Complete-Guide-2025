import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./data/winningCombos.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({ X: "Player 11", O: "Player 22" });
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { coord, player } = turn;
    const { row, col } = coord;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combo of WINNING_COMBINATIONS) {
    const firstCellSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondCellSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdCellSymbol = gameBoard[combo[2].row][combo[2].column];

    if (
      firstCellSymbol &&
      firstCellSymbol === secondCellSymbol &&
      firstCellSymbol === thirdCellSymbol
    ) {
      winner = players[firstCellSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

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

  function handlePlayerRename(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      console.log(prevPlayers);
      console.log(playerSymbol, newName);
      return {
        ...prevPlayers,
        [playerSymbol]: newName,
      };
    });
  }

  function handleReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div className="gameDashboard">
        <ol className="playersDashboard activePlayer">
          <Player
            playerName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
            onRename={handlePlayerRename}
          />
          <Player
            playerName="Player2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onRename={handlePlayerRename}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} reset={handleReset} />}
        <GameBoard onPlayerMove={handlePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
