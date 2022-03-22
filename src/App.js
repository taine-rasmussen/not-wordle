import "./App.css";
import { useState, useCallback, useEffect } from 'react'

// Components
import Keyboard from "./Keyboard"
import Tiles from "./Tiles"

function App() {

  const wordle = 'SUPER'

  const [letter, setletter] = useState({
    currentRow: 0,
    currentTile: 0
  })
  const [guessRows, setGuessRows] = useState([
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',]
  ])

  const handleClick = (key) => {
    if (letter.currentRow == 5 && letter.currentTile == 5) return;

    if (letter.currentRow > 0 && letter.currentTile == 0) {
      return letter.currentTile = 1, setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key), letter.currentTile = letter.currentTile + 1
    }

    if (letter.currentTile > 4) {
      return letter.currentRow++, letter.currentTile = 0, setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key)
    } else {
      return setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key), letter.currentTile++
    }
  }

  return (
    <div className="App">
      <div className="game-container">
        <div className="title-container">
          <h1>Wordle</h1>
        </div>
        <div className="message-container"></div>
        <Tiles
          guessRows={guessRows}
        />
        <Keyboard
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
