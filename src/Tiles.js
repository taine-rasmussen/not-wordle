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
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                  style={tile.found == 'EXACT' ? { backgroundColor: '#6aa964' } : tile.found === 'FOUND' ? { backgroundColor: '#c8b458' } : null}
                >
                  { tile.key}
                </div>
              )
            })}
          </div>
        )
      })}
    </div >
  )
}
export default Tiles



