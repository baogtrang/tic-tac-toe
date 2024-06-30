import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(row, col) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[row][col] = activePlayerSymbol;
      onSelectSquare();
      return updatedBoard;
    });
  }

  return (
    <ol id='game-board'>
      {" "}
      {/* gameboard container */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          {" "}
          {/* each row of the board */}
          <ol>
            {" "}
            {/* container of cells */}
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                {" "}
                {/* each cell */}
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
