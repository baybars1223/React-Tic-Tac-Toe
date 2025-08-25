import { useState } from 'react';

export default function Board() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

function Square() {
  const [value, setValue] = useState(null)
  function handleClick() {
    if(value === 1) {
      setValue(0)
    } else {
      setValue(1)
    }
  }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value ? 'X' : ''}
    </button>
  );
}