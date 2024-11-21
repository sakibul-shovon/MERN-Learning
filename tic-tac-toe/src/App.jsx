import { useState } from "react";
import "./App.css";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import ResetButton from './ResetButton';

function App() {
  const Win_Conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); 

  const handleClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      setWinner(winner); 
      if (winner === "O") {
        setScores((prevScores) => ({ ...prevScores, oScore: prevScores.oScore + 1 }));
      } else {
        setScores((prevScores) => ({ ...prevScores, xScore: prevScores.xScore + 1 }));
      }
    }
    setBoard(updatedBoard);
    setXplaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < Win_Conditions.length; i++) {
      const [x, y, z] = Win_Conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinner(null); 
  };

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
      <ResetButton resetBoard={resetBoard} />
      
      {/* Pop-up for winner */}
      {winner && (
        <div className="winner-popup">
          <div className="popup-content">
            <h2>{winner} Wins!</h2>
            <button onClick={resetBoard}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
