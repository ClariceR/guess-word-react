import React, { useEffect, useState } from "react";

function Game({ word, fetchWord }) {
  const [wordInProgress, setWordInProgress] = useState("");
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [guessesLeft, setGuessesLeft] = useState(8);
  const [guessFeedback, setGuessFeedback] = useState("");
  const [gameOverMessage, setGameOverMessage] = useState("");

  const getPlaceholder = (word) => {
    let hiddenWord = Array.prototype.map.call(word, (eachLetter) => {
      return "*";
    });
    return setWordInProgress(hiddenWord);
  };

  useEffect(() => {
    getPlaceholder(word);
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

  const updateGuessesLeft = () => {
    setGuessesLeft((guessesLeft) => {
      return guessesLeft - 1;
    });
  };

  const getGuessCountMessage = (guessesLeft) => {
    console.log(`from get guess count message: ${guessesLeft}`);
    if (guessesLeft > 1) {
      return `You have ${guessesLeft} guesses left`;
    } else {
      return "This is your last guess";
    }
  };

  const isGoodGuess = (letterUpper) => {
    return word.includes(letterUpper);
  };

  const makeGuess = (letterUpper) => {
    if (isGoodGuess(letterUpper)) {
      updateWordInProgress(word, wordInProgress, letterUpper);
      setGuessFeedback("Good guess!");
    } else {
      updateGuessesLeft(guessesLeft);
      setGuessFeedback(`Oh, no! There's no ${letterUpper}.`);
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
      setMessage(`You already guessed ${letterUpper}, silly!`);
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
    checkGameOver();

    console.log(String(wordInProgress));
  };

  const checkGameOver = () => {
      let ast = "";
      [...wordInProgress].map((eachLetter) => {
        ast += eachLetter;
      });
    if (ast === word) {
      setGameOverMessage("Congratulations, you win!");
    } else if (guessesLeft === 0) {
      setGameOverMessage(`You lose! The word was ${word}`);
    }
  };

//   const isWin = (wordInProgress) => {
//     let ast = "";
//     [...wordInProgress].map((eachLetter) => {
//       ast += eachLetter;
//     });
//     if (ast === word) {
//       return true;
//     }
//   };

  return (
    <>
      <section className="grid">
        <div className="container flex-column f-jc-c">
          <div className="wrapper flex-column f-jc-sb">
            <h2 className="title">
              Guess <span>the</span> Word
            </h2>
            <div className="reserved-place">
              <h3>{gameOverMessage}</h3>
            </div>
            <h1 className="placeholder">{wordInProgress}</h1>
            <div className="reserved-place">
              <p className="feedback">{guessFeedback}</p>
            </div>
            <p>{getGuessCountMessage(guessesLeft)}</p>
            <div className="reserved-place">
              <h2 className="letters">{letters}</h2>
            </div>
            <form className="flex-column">
              <label htmlFor="letter">Type a letter</label>
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
              <div className="reserved-place">
                <p>{message}</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;
