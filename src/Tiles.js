import React, { useState } from 'react'

const Tiles = (props) => {

  const {
    guessRows,
    keys,
    setGuessRows,
    letter
  } = props


  // convert guessRows to an array of objects with two values, one for tracking letters
  // and anothor to store bg colour info 


  return (
    <div className="tile-container">
      {guessRows.map((row, i) => {
        return (
          <div id={`guess-row-index-${i}`} key={i}>
            {row.map((tile, j) => {
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                  style={tile.style}
                >
                  {tile.key}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
export default Tiles



