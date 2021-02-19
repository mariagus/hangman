import "./App.css";
import { useState } from "react";
import image1 from "./images/hang1.png";
import image2 from "./images/hang2.png";
import image3 from "./images/hang3.png";
import image4 from "./images/hang4.png";
import image5 from "./images/hang5.png";
import image6 from "./images/hang6.png";
import image7 from "./images/hang7.png";
import generateWord from "./words";

function App() {
  const [randomWord, setRandomWord] = useState(generateWord());
  const [image, setImage] = useState(image1);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="App">
      <header>
        <h1>HANGMAN</h1>
      </header>
      <img src={image} alt="hang" />
      <h2>
        {alphabet.map((val) => (
          <button>{val}</button>
        ))}
      </h2>
    </div>
  );
}

export default App;
