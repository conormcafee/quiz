import React from "react";
import { Intro, Character } from "./components";
import { characters } from "./data";

function App() {
  return (
    <div className="App">
      <Intro />
      {characters.map((character, index) => (
        <Character key={index} id={index + 1} character={character} />
      ))}
    </div>
  );
}

export default App;
