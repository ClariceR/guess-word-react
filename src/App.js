import { useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Placeholder from './Placeholder';
import Letter from './Letter';

import './App.css';

function App() {
  // const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('magnolia');
  const [guess, setGuess] = useState(8);
  // const [wordInProgress, setWordInProgress] = useState('');

  return (
    <>
    <Header />
    <Placeholder word={word}/>
    <h4>{`You have ${guess} guesses remaining`}</h4>
    <Letter />
    </>
  );
}

export default App;
