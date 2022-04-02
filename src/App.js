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
  const [keys, setKeys] = useState([
    { key: 'Q', match: '' },
    { key: 'W', match: '' },
    { key: 'E', match: '' },
    { key: 'R', match: '' },
    { key: 'T', match: '' },
    { key: 'Y', match: '' },
    { key: 'U', match: '' },
    { key: 'I', match: '' },
    { key: 'O', match: '' },
    { key: 'P', match: '' },
    { key: 'A', match: '' },
    { key: 'S', match: '' },
    { key: 'D', match: '' },
    { key: 'F', match: '' },
    { key: 'G', match: '' },
    { key: 'H', match: '' },
    { key: 'J', match: '' },
    { key: 'K', match: '' },
    { key: 'L', match: '' },
    { key: '«', match: '' },
    { key: 'Z', match: '' },
    { key: 'X', match: '' },
    { key: 'C', match: '' },
    { key: 'V', match: '' },
    { key: 'B', match: '' },
    { key: 'N', match: '' },
    { key: 'M', match: '' },
    { key: 'ENTER', match: '' },
  ])

  const handleClick = (key) => {
    // Checks if key is == Enter and runs enter func if true
    if (key == 'ENTER' && letter.currentTile == 5) {
      return handleEnterClick();
    } else if (key == 'ENTER') return;

    // Early return if user attempts input on last tile of last row
    if (letter.currentRow == 5 && letter.currentTile == 5) return;
    // Early return if user is at end of current row
    if (letter.currentTile == 5) return;


    if (letter.currentTile > 4) {
      return letter.currentRow++, letter.currentTile = 0, setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key)
    } else {
      return setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key), letter.currentTile++
    }
  }

  const handleEnterClick = () => {
    let submittedWord = guessRows[letter.currentRow];
    let currentWord = wordle.split('')

    submittedWord.forEach((letter) => {
      currentWord.map((i) => {
        if (letter == i && submittedWord.indexOf(letter) == currentWord.indexOf(i)) {
          keys.map((key) => {
            if (key.key == letter) {
              return [...keys], key.match = 'EXACT'
            }
          })
        } else if (letter == i) {
          keys.map((key) => {
            if (key.key == letter) {
              return [...keys], key.match = 'FOUND'
            }
          })
        }
      })
    })
    return letter.currentRow++, letter.currentTile = 0
  };

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
          keys={keys}
        />
      </div>
    </div>
  );
}

export default App;
