import "./App.css";

// Components
import Keyboard from "./Keyboard"
import Tiles from "./Tiles"

function App() {



  return (
    <div className="App">
      <div className="game-container">
        <div className="title-container">
          <h1>Wordle</h1>
        </div>
        <div className="message-container"></div>
        <Tiles />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
