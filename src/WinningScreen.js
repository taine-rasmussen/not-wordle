import React, { useMemo, useEffect } from 'react'

export const WinningScreen = (props) => {

  const {
    setWinState,
    gameSession,
    setGameSession,
    letter,
    guessRows
  } = props

  useEffect(() => {
    return setGameSession([...gameSession], gameSession[0].wins++)
  }, [])

  return (
    <div>
      <h1>Attemps: {letter.currentRow}</h1>
    </div>
  )
}


