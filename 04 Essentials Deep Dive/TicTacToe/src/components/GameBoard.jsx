import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onPlayerMove, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevGB) => {
      const updatedBoard = [...prevGB.map((row) => [...row])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      console.log(updatedBoard);
      return updatedBoard;
    });

    onPlayerMove();
  }

  return (
    <ol className="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>
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
