import React, { useEffect, useState } from "react";

function Game({ word, fetchWord }) {
  const [wordInProgress, setWordInProgress] = useState("");
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");

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

  const isLetter = (letter) => {
    return /[a-zA-Z]/.test(letter);
  };

  const isLengthValid = (letter) => {
    return letter.length === 1;
  };

  const isInputValid = (letter) => {
    return isLetter(letter) && isLengthValid(letter);
  };

  const acceptInput = (letter) => {
    if (isInputValid(letter)) {
      handleInput(letter);
    } else {
      if (!isLetter(letter)) {
        setMessage("Please enter a letter from A to Z");
      } else {
        setMessage("Please enter only one letter at a time");
      }
    }
  };

  const handleInput = (letter) => {
    const letterUpper = letter.toUpperCase();
    if (!letters.includes(letterUpper)) {
      setLetters([...letters, letterUpper]);
    } else {
      setMessage(`You already guessed ${letterUpper}, silly :P`);
    }
    console.log(letters);
  };

  //   const acceptLetter = (letter) => {
  //     if (isInputValid(letter)) {
  //       if (!letters.includes(letter)) {
  //         setLetters([...letters, letter]);
  //       }
  //       console.log(letters);
  //     } else {
  //       helperMessages(letter);
  //     }
  //   };

  //   const helperMessages = (letter) => {
  //     if (!isLetter(letter)) setMessage("Please enter a letter from A to Z");
  //     if (!isLengthValid(letter)) setMessage("Please enter one letter at a time");
  //   };

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  const handleSubmit = (e) => {
    setLetter("");
    setMessage("");
    e.preventDefault();
    acceptInput(letter);
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
        <p>{message}</p>
      </form>
    </>
  );
}

export default Game;
