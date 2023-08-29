import { useEffect, useState, useCallback } from "react";
import "./App.scss";
import words from "../src/wordsList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordGuess, setWordGuess] = useState(getWord);
  console.log(wordGuess, "word");
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  console.log(guessedLetter, "guess");

  const incorrectLetters = guessedLetter?.filter((letter) => {
    return !wordGuess.includes(letter);
  });

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordGuess.split("").every(letter => guessedLetter.includes(letter))

  const addGuessedLetter = useCallback(
    (letters: string) => {
      if (guessedLetter.includes(letters) || isWinner || isLoser) {
        return;
      }
      setGuessedLetter((currentLetters) => {
        return [...currentLetters, letters];
      });
    },
    [guessedLetter,isWinner,isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) {
        return;
      }
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") {
        return;
      }
      e.preventDefault();
      setGuessedLetter([])
      setWordGuess(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  return (
    <div className="App">
      <div className="container">
        {isWinner && <h3>Congratulations..You won..!! Refresh to play again</h3>}
        {isLoser && <h3>You lost... :(</h3>}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetter={guessedLetter} wordGuess={wordGuess} revealedWord={isLoser}/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
        disbled={isWinner || isLoser} 
          activeLetters={guessedLetter.filter((letter) =>
            wordGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
