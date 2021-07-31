import { useState } from 'react';
// import logo from './logo.svg';
// import Header from './Header';
import Game from './Game';
// import Letter from './Letter';
import './App.css';

function App() {
  // const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('magnolia');
  // const [wordInProgress, setWordInProgress] = useState('');

  return (
    <>
    {/* <Header />
    <Letter word={word}/> */}
    <Game word={word}/>
    </>
  );
}

export default App;
