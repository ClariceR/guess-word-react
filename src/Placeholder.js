import React, {useState} from 'react'

function Placeholder({word}) {
    const [placeholder, setPlaceholder] = useState("");

    const getPlaceholder = word => {
        let hiddenWord = Array.prototype.map.call(word, eachLetter => { return '*'});
        console.log(hiddenWord);
        setPlaceholder(hiddenWord);
        console.log(placeholder);
    }
    return (
        <div>
            <button onClick={() => getPlaceholder(word)}>Get Placeholder</button>
            <p>{placeholder}</p>
        </div>
    )
}

export default Placeholder
