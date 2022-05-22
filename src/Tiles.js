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
              // keys.map((key) => {
              //   if (key.key == tile.key && key.match == 'FOUND') {
              //     console.log(guessRows[letter.currentRow][letter.currentTile])
              //     return setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile].style = { backgroundColor: '#c8b458' })
              //   } else {
              //     return;
              //   }
              // })
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                // style={{ tile.style }}
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



