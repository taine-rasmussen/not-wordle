import React from 'react'

const Keyboard = () => {
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
        >{key}</button>
      ))}
    </div>
  )
}

export default Keyboard
