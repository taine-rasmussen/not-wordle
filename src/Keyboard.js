import React from 'react'

const Keyboard = (props) => {
  const {
    handleClick,
    keys
  } = props

  return (
    <div className="key-container">
      {keys.map((key) => (
        <button
          key={key.key}
          id={key.key}
          onClick={() => { handleClick(key.key) }}
          style={key.match == 'EXACT' ? { backgroundColor: '#6aa964' } : key.match == 'FOUND' ? { backgroundColor: '#c8b458' } : null}
        >{key.key}</button>
      ))}
    </div>
  )
}

export default Keyboard
