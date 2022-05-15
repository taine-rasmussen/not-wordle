import "./App.css";
import { useState, useMemo, useCallback, useEffect } from 'react'

// Components
import Keyboard from "./Keyboard"
import Tiles from "./Tiles"
import { WinningScreen } from "./WinningScreen"

function App() {

  const wordle = 'SUPER'

  const [winState, setWinState] = useState(false)
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
  const [gameSession, setGameSession] = useState([{
    wins: 0,
    currentTurn: 0,
    totalAttemps: [1, 2, 4, 5, 2]
  }])

  const handleGameReset = useCallback(
    () => {
      setGuessRows([
        ['', '', '', '', '',],
        ['', '', '', '', '',],
        ['', '', '', '', '',],
        ['', '', '', '', '',],
        ['', '', '', '', '',],
        ['', '', '', '', '',]
      ]);
      setletter({
        currentRow: 0,
        currentTile: 0
      });
      setKeys([
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
      setWinState(false);
    }, [])

  const handleClick = (key) => {
    if (key == 'ENTER' && letter.currentTile == 5) {
      return handleSubmit();
    } else if (key == 'ENTER') return;

    if (key == '«') return handleDelete();
    if (letter.currentRow == 5 && letter.currentTile == 5) return;
    if (letter.currentTile == 5) return;

    if (letter.currentTile > 4) {
      return letter.currentRow++, letter.currentTile = 0, setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key), console.log(guessRows)
    } else {
      return setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = key), letter.currentTile++, console.log(guessRows)
    }

  }

  const handleDelete = () => {
    return letter.currentTile = letter.currentTile - 1,
      setGuessRows([...guessRows], guessRows[letter.currentRow][letter.currentTile] = '')
  }

  const handleSubmit = () => {
    let submittedWord = guessRows[letter.currentRow];
    let currentWord = wordle.split('')

    submittedWord.map((letter) => {
      currentWord.map((i) => {
        if (letter == i && submittedWord.indexOf(letter) == currentWord.indexOf(i)) {
          keys.map((key) => {
            if (key.key == letter) {
              if (key.match == 'FOUND' || key.match == '') {
                return [...keys], key.match = 'EXACT'
              } else {
                return;
              }
            }
          })
        } else if (letter == i) {
          keys.map((key) => {
            if (key.key == letter) {
              if (key.match == "EXACT") {
                return;
              } else if (key.match == '') {
                return [...keys], key.match = 'FOUND';
              }
            }
          })
        }
      })
    })
    checkForWin();
    return letter.currentRow++, letter.currentTile = 0, handleClick(), letter.currentTile = 0;
  };

  const checkForWin = useCallback(
    () => {
      return guessRows[letter.currentRow].join('') == wordle ? setWinState(true) : null
    }, [winState]);

  const updateWinCount = useCallback(
    () => {
      setGameSession([...gameSession], gameSession[0].wins = gameSession[0].wins + 1)
      setGameSession([...gameSession], gameSession[0].totalAttemps[letter.currentRow - 1] = gameSession[0].totalAttemps[letter.currentRow - 1] + 1)
    }, [winState])

  return (
    <>
      {winState == true ? (
        <WinningScreen
          handleGameReset={handleGameReset}
          updateWinCount={updateWinCount}
          winState={winState}
          setWinState={setWinState}
          gameSession={gameSession}
          setGameSession={setGameSession}
          letter={letter}
          guessRows={guessRows}
        />
      ) : (
        <div className="App">
          <div className="game-container">
            <div className="title-container">
              <h1>Wordle</h1>
            </div >
            <div className="message-container"></div>
            <Tiles
              guessRows={guessRows}
              keys={keys}
            />
            <Keyboard
              handleClick={handleClick}
              keys={keys}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
