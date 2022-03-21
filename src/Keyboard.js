import React from 'react'

const Keyboard = (props) => {
  const {
    handleClick,
  } = props

  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "«",
  ];

  return (
    <div className="key-container">
      {keys.map((key) => (
        <button
          key={key}
          id={key}
          onClick={() => { handleClick(key) }}
        >{key}</button>
      ))}
    </div>
  )
}

export default Keyboard
