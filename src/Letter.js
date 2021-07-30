import React, { useState } from "react";

function Letter() {
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState([]);
  const [message, setMessage] = useState("");

  const validateInput = aLetter => {
      const accepted = /[a-zA-Z]/;
      if (aLetter && accepted.test(aLetter) && aLetter.length === 1) {
        const guess = aLetter.toUpperCase();
        console.log(guess);
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
  }

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    validateInput(letter);
  };

  return (
    <section>
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
      {/* <h5>Type one letter</h5>
            <input type="text" value={letter}/>
            <button onClick={() => getLetter}>GUESS</button> */}
    </section>
  );
}

export default Letter;
