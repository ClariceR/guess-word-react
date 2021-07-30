import React, {useState} from 'react'

function Placeholder({word}) {
    const [placeholder, setPlaceholder] = useState("");

    const getPlaceholder = word => {
        console.log(word)
    }
    return (
        <div>
            <button onClick={() => getPlaceholder(word)}>Get Placeholder</button>
            <p>{placeholder}</p>
        </div>
    )
}

export default Placeholder
