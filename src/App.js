import React, { useState } from 'react';
import './App.css';

function App() {

  const [boardData, setBoardData] = useState([null, null, null, null, null, null, null, null, null]);
  const [player,setPlayer] = useState('X');

  const checkForWinner = () => {
    const winnerCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    if(checkForTie()) {
      return 'Tie';
    }
    for(let i = 0; i<winnerCombos.length; i++){
      const [a,b,c] = winnerCombos[i];
      if(boardData[a] && boardData[a] === boardData[b] && boardData[a] === boardData[c]){
        console.log('winner', boardData[a]);
        return boardData[a];
      }
  } return null;
}

  const switchPlayer = () => {
    if(player === 'X') {
      setPlayer('O');
  } else {
    setPlayer('X');
  }}

  const checkForTie = () => {
    let isTie = true;
    boardData.forEach((value) => {
      if (value === null) {
        isTie = false;
      }
    });
    return isTie;
  }
  const updateBoard = (index) => {
    const newBoardData = [...boardData];
    if (newBoardData[index] === null) {
      newBoardData[index] = player;
      setBoardData(newBoardData);
      switchPlayer();
    }}

  function Tile({ index, tile}) {
    return (
      <div className='Tile' onClick={() => updateBoard(index)}>
        <h1>{tile}</h1>
      </div>
    )
  }
  
  function Board() {
    return (
      <div className='Board'>
        {
          boardData.map((tile, index) => {
            return <Tile key={index} tile={tile} index={index}/>
          
        })
      }
      </div>
    )
  }
  return (
    <div className="App">
      <Board />
      {checkForWinner() ? checkForWinner()==='Tie' ? <h1>Tie Game</h1> : <h1>Winner: {checkForWinner()}</h1> : null}
      {checkForWinner() ? <button onClick={() => setBoardData([null, null, null, null, null, null, null, null, null])}>New Game</button> : null}
    </div>
  );
}

export default App;
