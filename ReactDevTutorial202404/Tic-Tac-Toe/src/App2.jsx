import React, { useState } from 'react';
import './App.css';

function Square({ index, reportState }) {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');  // Basitlik adına her tıklamada 'X' koyuyoruz
    reportState(index, 'X');  // Board'a durumu rapor ediyoruz
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squaresState, setSquaresState] = useState(Array(9).fill(null));

  function handleReport(index, value) {
    const newState = [...squaresState];
    newState[index] = value;
    setSquaresState(newState);  // Board'da durumu güncelliyoruz
  }

  return (
    <>
      <div className="board-row">
        <Square index={0} reportState={handleReport} />
        <Square index={1} reportState={handleReport} />
        <Square index={2} reportState={handleReport} />
      </div>
      <div className="board-row">
        <Square index={3} reportState={handleReport} />
        <Square index={4} reportState={handleReport} />
        <Square index={5} reportState={handleReport} />
      </div>
      <div className="board-row">
        <Square index={6} reportState={handleReport} />
        <Square index={7} reportState={handleReport} />
        <Square index={8} reportState={handleReport} />
      </div>
    </>
  );
}
