import React, { useEffect, useState } from "react";

function Game({ word, fetchWord }) {
  const [wordInProgress, setWordInProgress] = useState("");
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [guessesLeft, setGuessesLeft] = useState(8);
  const [guessCountMessage, setGuessCountMessage] = useState(
    `You have ${guessesLeft} guesses left.`
  );

  const getPlaceholder = (word) => {
    let hiddenWord = Array.prototype.map.call(word, (eachLetter) => {
      return " * ";
    });
    return setWordInProgress(hiddenWord);
  };

  useEffect(() => {
    getPlaceholder(word);
    console.log("...wip from useEffect:" + [...wordInProgress]);
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

  const updateGuessesLeft = (guessesLeft) => {
    setGuessesLeft(guessesLeft - 1);
    getGuessCountMessage(guessesLeft);
  };

  const getGuessCountMessage = (guessesLeft) => {
    console.log(`from get guess count message: ${guessesLeft}`);
    guessesLeft > 1
      ? setGuessCountMessage(`You have ${guessesLeft} guesses left.`)
      : setGuessCountMessage(`This is your last guess`);
  };

  const isGoodGuess = (letterUpper) => {
    return word.includes(letterUpper);
  };

  const makeGuess = (letterUpper) => {
    if (isGoodGuess(letterUpper)) {
      updateWordInProgress(word, wordInProgress, letterUpper);
    } else {
      updateGuessesLeft(guessesLeft);
      console.log(guessesLeft);
    }
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

  const updateWordInProgress = (word, wordInProgress, letterUpper) => {
    [...word].map((element, index, letter) => {
      if (element === letterUpper) {
        let updatedWordInP = wordInProgress;
        updatedWordInP[index] = letterUpper;
        setWordInProgress(updatedWordInP);
      }
    });
  };

  const handleInput = (letter) => {
    const letterUpper = letter.toUpperCase();
    if (!letters.includes(letterUpper)) {
      setLetters([...letters, letterUpper]);
      makeGuess(letterUpper);
    } else {
      setMessage(`You already guessed ${letterUpper}, silly :P`);
    }
    console.log(letters);
  };

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
      <p>{guessCountMessage}</p>
      <h2>{letters}</h2>
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
