import React, { useState } from 'react'

const Tiles = (props) => {

  const {
    guessRows,
    keys
  } = props

  return (
    <div className="tile-container">
      {guessRows.map((row, i) => {
        return (
          <div id={`guess-row-index-${i}`} key={i}>
            {row.map((tile, j) => {
              let styleTest = null
              keys.map((key) => {
                if (key.key == tile && key.match == 'FOUND') {
                  return styleTest = { backgroundColor: '#c8b458' }
                } else if (key.key == tile && key.match == 'EXACT') {
                  return styleTest = { backgroundColor: '#6aa964' }
                } else {
                  return;
                }
              })
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                  style={styleTest = null ? null : styleTest}
                >
                  {tile}
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
