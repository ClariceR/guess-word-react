import React, { useEffect, useState } from "react";

function Game({ word, fetchWord }) {
  const [wordInProgress, setWordInProgress] = useState("");
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  //   const [message, setMessage] = useState("");

  const getPlaceholder = (word) => {
    let hiddenWord = Array.prototype.map.call(word, (eachLetter) => {
      return " * ";
    });
    return setWordInProgress(hiddenWord);
  };

  useEffect(() => {
    getPlaceholder(word);
    console.log(...wordInProgress);
  }, [fetchWord]);

  const isLetter = (input) => {
    return /[a-zA-Z]/.test(input);
  };

  const isLengthValid = (input) => {
    return input.length === 1;
  };

  const isInputValid = (input) => {
    return isLetter(input) && isLengthValid(input);
  };

  const acceptLetter = (letter) => {
    if (isInputValid(letter)) {
      if (!letters.includes(letter)) {
        setLetters([...letters, letter]);
      }
      console.log(letters)
    } else {
      console.log("loggin a message to say it is invalid");
    }
  };

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    acceptLetter(letter);
  };
  return (
    <>
      <h2>Guess the Word</h2>
      <div>{console.log(`getting word prop from App into Game: ${word}`)}</div>
      <h1>{wordInProgress}</h1>
      <form>
        <label htmlFor="letter">Type a letter:</label>
        <input
          type="text"
          name="letter"
          id="letter"
          value={letter}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          GUESS
        </button>
        {/* <p>{message}</p> */}
      </form>
    </>
  );
}

export default Game;
