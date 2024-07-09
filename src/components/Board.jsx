import React from 'react'
import Square from './Square';

const Board = ({square, handleClick}) => {

  return (
    <div className='board'>
        {squares.map((square,index) => (
            <Square key = {index} value = {sqaure} onClick={()=>handleClick(index)}/>
        ))}
      
    </div>
  )
}

export default Board;
