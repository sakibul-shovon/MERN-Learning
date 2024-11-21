import React from "react";
import Box from "./Box";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Box  value={value} onClick={() => value ===null && onClick(idx)} />
      ))}
    </div>
  );
}

export default Board;
