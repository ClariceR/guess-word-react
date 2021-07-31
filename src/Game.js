import React, { useEffect, useState } from "react";

function Game({ word, fetchWord }) {
  const [wordInProgress, setWordInProgress] = useState("");

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

  return (
    <>
      <div>{console.log(`getting word prop from App into Game: ${word}`)}</div>
      <h1>{wordInProgress}</h1>
    </>
  );
}

export default Game;
