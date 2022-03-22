import "./App.css";
import { useState, useCallback, useEffect } from 'react'

// Components
import Keyboard from "./Keyboard"
import Tiles from "./Tiles"

function App() {

  const wordle = 'SUPER'

  const [tileTracker, setTileTracker] = useState({
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
    if (tileTracker.currentTile > 4) {
      return tileTracker.currentRow++, tileTracker.currentTile = 0, setGuessRows([...guessRows], guessRows[tileTracker.currentRow][tileTracker.currentTile] = key)
    } else {
      return setGuessRows([...guessRows], guessRows[tileTracker.currentRow][tileTracker.currentTile] = key), tileTracker.currentTile++
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
