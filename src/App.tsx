import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "../src/components/Name";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          data-testid="App-logo"
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <Name name={"tomato"} />
      </header>
    </div>
  );
}

export default App;
