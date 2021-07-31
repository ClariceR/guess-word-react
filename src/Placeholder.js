// import React, { useState } from "react";

// function Placeholder({ word, letter }) {
//   const [placeholder, setPlaceholder] = useState("");
//   const [updatedWord, setUpdatedWord] = useState(word);

//   const getPlaceholder = (word) => {
//     let hiddenWord = Array.prototype.map.call(word, (eachLetter) => {
//       return " _ ";
//     });
//     console.log(hiddenWord);
//     setPlaceholder(hiddenWord);
//     console.log(placeholder);
//   };

//   const updatePlaceholder = (letter) => {
//       if (word.includes(letter)) {
//           console.log()
//       }
//   }
//   return (
//     <div>
//       <button onClick={() => getPlaceholder(word)}>Get Placeholder</button>
//       <h1 className="placeholder">{placeholder}</h1>
//     </div>
//   );
// }

// export default Placeholder;
