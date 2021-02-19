import "./App.css";
import image1 from "./images/hang1.png";
import generateWord from "./words";

function App() {
  return (
    <div className="App">
      <header>
        <h1>HANGMAN</h1>
      </header>
      <img src={image1} alt="hang" />
    </div>
  );
}

export default App;
