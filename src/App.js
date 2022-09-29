import React from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Dogs from "./components/Dogs";
import Nav from "./components/Nav";

const URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dogImg, setDogImg] = React.useState(null);
  const getDog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDogImg(data);
  };
  return (
    <div className="App">
      <Nav />
      <Buttons dogSearch={getDog} />
      <Dogs foundDog={dogImg} />
    </div>
  );
}

export default App;
