import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

// UNSPLASH KEY TO MAKE REQUESTS
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
