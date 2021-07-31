import React, { useState } from "react";
// import Placeholder from "./Placeholder";

function Letter({ word }) {
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [guess, setGuess] = useState(8);

//   const updateNumGuesses = () => {
//     setGuess(guess - 1);
//     if (guess === 0) {
//       console.log("No more guesses remaining");
//     }
//   };

  const validateInput = (aLetter) => {
    const accepted = /[a-zA-Z]/;
    if (aLetter && accepted.test(aLetter) && aLetter.length === 1) {
      const guess = aLetter.toUpperCase();
    //   console.log(guess);
      if (!letters.includes(guess)) {
        setLetters([...letters, guess]);
      } else {
        setMessage(`You already guessed ${guess}, silly :P`);
      }
      setLetter("");
    } else {
      setMessage("Please enter one letter from A to Z");
      setLetter("");
    }
  };

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    validateInput(letter);
  };

  return (
    <section>
      <Placeholder word={word} letter={letter} />
      <h4>{`You have ${guess} guesses remaining`}</h4>
      <h4>{letters}</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="letter">Type one letter:</label>
        <input
          type="text"
          id="letter"
          name="letter"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        />
        <button type="submit">GUESS</button>
        <p>{message}</p>
      </form>
    </section>
  );
}

export default Letter;
