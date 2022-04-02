import React from 'react'

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
              return (
                <div
                  id={`guess-row-index-${i}-tile-${j}`}
                  className='tile'
                  key={j}
                // style={key.match == 'EXACT' ? { backgroundColor: '#6aa964' } : key.match == 'FOUND' ? { backgroundColor: '#c8b458' } : null}
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
