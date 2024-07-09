import Reacr, { useState,useMemo } from 'react'
import Board from './components/Board';



function App() {
  
  const [ square,setSquare] = useState(Array(9)).fill(null);
  const [ XNext,setXNext] = useState(true);

  const [ winner,setWinner] = useState(null);


  const handleClick = (i) => {
    if(winner||square[i]) return;

    const newSquare = [...square];
    newSquare[i]=XNext?'X':'0';
    setSquare(newSquare);
    setXNext(!XNext);
    winnerss(newSquare);

  };

  const winnerss=(square)=>{

    const combinations = [
      [0,1,2] , [3,4,5] , [2,4,6],[0,4,8],[2,5,8],[0,3,6],[1,4,7],[6,7,8]];
      for(const comb of combinations){
        const [a,b,c]=comb;
        if(square[a] && square[a] === square[b] && square[a] === square[c]){
          setWinner(square[a]);
          return ;
        }
      }

      if(!square.includee(null)) setWinner('TIE');
    
  };

  const reset = () => {
    setSquare(Array(9).fill(null));
    setXNext(true);
    setWinner(null);
  }

  const what = winner ? `winner:${winner}` : `Next player : ${XNext ? 'X' : '0'}`;

  return (
    <>
     <div className='game'>

      <div className='game-board'>
        <Board square={square} handleClick={handleClick}/>

      </div>

      <div className='game-info'>
        <div>Status</div>
        <button onClick={reset}>Start Again</button>

      </div>

     </div>
    </>
  )
}

export default App
