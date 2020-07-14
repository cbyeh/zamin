import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
