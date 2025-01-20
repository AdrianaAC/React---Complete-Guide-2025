import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onPlayerMove, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { coord, player } = turn;
    const { row, col } = coord;

    gameBoard[row][col] = player; //Deriving state from props
  }

  return (
    <ol className="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol}
                  onClick={() => onPlayerMove(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
