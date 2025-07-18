import React, { useState } from "react";
import { calculateWinner } from "./common/Utils";
import Board from "./Board";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-evenly",
    height: "100%",
  },
  info: {
    fontSize: "2rem",
    opacity: "0.6",
    textShadow: "5px 5px #46474aff",
  },
  button: {
    padding: "0.5em 1em",
    fontSize: "1rem",
    marginTop: "1rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#444",
    color: "#f6be08",
    cursor: "pointer",
  },
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo?.winner || null;
  const winningLine = winnerInfo?.line || [];

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const tmpBoard = [...board];
    tmpBoard[i] = xTurn ? "X" : "O";
    setBoard(tmpBoard);
    setXTurn(!xTurn);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <div style={style.container}>
      <p style={style.info}>
        {winner ? `Winner: ${winner}` : `Next Player: ${xTurn ? "X" : "O"}`}
      </p>
      <Board
        squares={board}
        handleClick={handleClick}
        winningLine={winningLine}
      />
      <button style={style.button} onClick={resetBoard}>
        Start Game
      </button>
    </div>
  );
};

export default Game;