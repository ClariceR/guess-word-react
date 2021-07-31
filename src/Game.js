import React, { useState } from "react";

function Game({word}) {
  const [wordInProgress, setWordInProgress] = useState(word);

  const inicialPlaceholder = (word) => {
     let hiddenWord = Array.prototype.map.call(word, (eachLetter) => {
       return " _ ";
     });
     setWordInProgress(hiddenWord);
     console.log(wordInProgress)
  }
  return <>
      <button onClick={() => inicialPlaceholder(wordInProgress)}>Get Word</button>
      <h2>{wordInProgress}</h2>
  </>;
}

export default Game;
