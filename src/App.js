import { useState, useEffect } from "react";
import Loading from "./Loading";
import Header from "./Header";
import WrongLetters from "./WrongLetters";
import './App.css';

const url =
  "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt";
function App() {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState("");

  const fetchWord = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const words = await res.text();
      const wordsArray = words.split("\n");
      let randomIndex = Math.floor(Math.random() * wordsArray.length);
      const randomWord = wordsArray[randomIndex].trim();
      setLoading(false)
      setWord(randomWord.toUpperCase());
      console.log(`From fetchWord we got: ${randomWord}`);
      console.log('type of randomword: ' + typeof randomWord);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <section className="grid">
        <div className="container flex-column f-jc-c">
          <div className="wrapper flex-column f-jc-sb">
            <Header />
            <WrongLetters />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
