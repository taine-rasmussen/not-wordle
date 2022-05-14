import React, { useCallback, useEffect } from 'react'

import { StatsGraph } from './StatsGraph'

export const WinningScreen = (props) => {

  const {
    winState,
    gameSession,
    setGameSession,
    letter,
    handleGameReset,
  } = props

  useEffect(() => {
    setGameSession([...gameSession], gameSession[0].wins = gameSession[0].wins + 1)
    setGameSession([...gameSession], gameSession[0].totalAttemps[letter.currentRow - 1] = gameSession[0].totalAttemps[letter.currentRow - 1] + 1)
  }, [winState])

  return (
    <div className='winningscreen-container'>
      <div className='winningscreen-header'>
        <h3>You solved the wordle!</h3>
      </div>
      <div className='winningscreen-stats-container'>
        <StatsGraph
          gameSession={gameSession}
        />
      </div>
      <div className='winningscreen-footer'>
        <button
          onClick={handleGameReset}
        >
          Play again
        </button>
      </div>
    </div>
  )
}


