import React from 'react'

const Tiles = (props) => {

  const {
    guessRows,
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
