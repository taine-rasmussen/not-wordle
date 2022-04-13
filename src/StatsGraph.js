import React from 'react'

export const StatsGraph = (props) => {

  const {
    gameSession
  } = props

  const block = <div className='graph-block'></div>

  const bar1 = Array(gameSession[0].totalAttemps.one).fill(block)
  const bar2 = Array(gameSession[0].totalAttemps.two).fill(block)
  const bar3 = Array(gameSession[0].totalAttemps.three).fill(block)
  const bar4 = Array(gameSession[0].totalAttemps.four).fill(block)
  const bar5 = Array(gameSession[0].totalAttemps.five).fill(block)

  return (
    <div className='graph-container'>
      <div className='graph-row'>
        {bar1.map(blc => (blc))}
      </div>
      <div className='graph-row'>
        {bar2.map(blc => (blc))}
      </div>
      <div className='graph-row'>
        {bar3.map(blc => (blc))}
      </div>
      <div className='graph-row'>
        {bar4.map(blc => (blc))}
      </div>
      <div className='graph-row'>
        {bar5.map(blc => (blc))}
      </div>
    </div>
  )
}
