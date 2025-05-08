import { useState } from 'react';
import './App.css'
import Square from './components/Square';

function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    if(squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    
    if(xIsNext) {
      nextSquares[i] = 'X';
    }

    else{
      nextSquares[i] = 'O'
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;

  if(winner) {
    status = 'Winner : '  + winner;
  }

  else if(!squares.includes(null)) {
    status = 'Draw!'
  }

  else{
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100">
    <div className="p-6 bg-white rounded-xl shadow-2xl">
    <div className='status mb-4 text-xl font-bold text-center text-blue-500'>
      {status}
    </div>
      {/* Row 1 */}
      <div className="flex gap-2 mb-2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      {/* Row 2 */}
      <div className="flex gap-2 mb-2">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      {/* Row 3 */}
      <div className="flex gap-2">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      return squares[a];
    }
  }
  return null;
}

export default Board;
