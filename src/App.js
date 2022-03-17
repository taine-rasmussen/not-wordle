import "./App.css";

// Components
import Keyboard from "./Keyboard"

function App() {

  return (
    <div className="App">
      <div className="game-container">
        <div className="title-container">
          <h1>Wordle</h1>
        </div>
        <div className="message-container"></div>
        <div className="tile-container"></div>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
