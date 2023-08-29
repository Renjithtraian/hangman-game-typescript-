import React from "react";
import classes from "./keyBoard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyBoardProp = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disbled: boolean
};

const Keyboard = ({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
  disbled = false
}: keyBoardProp) => {
  return (
    <div className="App-keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${classes.btn} ${isActive ? classes.active : ""} ${
              isInActive ? classes.inactive : ""
            }`}
            disabled={isInActive || isActive || disbled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
