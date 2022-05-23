import React, { useState } from 'react'

const Tiles = (props) => {

  const {
    guessRows,
    keys,
    setGuessRows,
    letter
  } = props

  return (
    <div className="tile-container">
      {guessRows.map((row, i) => {
        return (
          <div id={`guess-row-index-${i}`} key={i}>
            {row.map((tile, j) => {
              keys.map((key) => {
                if (key.key === tile.key && key.match === "EXACT") {
                  return guessRows[i][j].style = { backgroundColor: '#6aa964' };
                } else if (key.key === tile.key && key.match === "FOUND") {
                  return guessRows[i][j].style = { backgroundColor: '#c8b458' };
                }
              })
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                  style={guessRows[i][j].style}
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



