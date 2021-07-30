import { useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Message from './Message';
import Placeholder from './Placeholder';

import './App.css';

function App() {
  const [word, setWord] = useState('magnolia');
  const [guess, setGuess] = useState(8);

  const [wordInProgress, setWordInProgress] = useState('');

  return (
    <>
    <Header />
    <Message />
    <Placeholder word={word}/>
    <h4>{`You have ${guess} guesses remaining`}</h4>
    </>
  );
}

export default App;
