import React from "react";

type wordProp = {
  guessedLetter: string[];
  wordGuess: string;
  revealedWord?: boolean
};

const HangmanWord = ({ guessedLetter, wordGuess,revealedWord = false }: wordProp) => {
  return (
    <div className="App-words">
      {wordGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid #000" }}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) || revealedWord ? "visible" : "hidden",
              color:!guessedLetter.includes(letter) && revealedWord ? "red" : "#000"
            }}
            key={index}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
