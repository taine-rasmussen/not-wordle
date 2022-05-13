import React, { useCallback, useEffect } from 'react'

import { StatsGraph } from './StatsGraph'

export const WinningScreen = (props) => {

  const {
    winState,
    gameSession,
    setGameSession,
    letter,
    guessRows,
    updateWinCount,
    handleGameReset
  } = props

  useEffect(() => {
    updateWinCount();
  }, [winState])


  return (
    <div className='winningscreen-container'>
      <div className='winningscreen-header'>
        <h3>You solved the wordle!</h3>
      </div>
      <div className='winningscreen-stats-container'>
        <ul>
          <li>Solved in {letter.currentRow} rounds</li>
          <li>Total wins: {gameSession[0].wins}</li>
        </ul>
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


