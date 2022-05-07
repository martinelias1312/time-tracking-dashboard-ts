import React from "react";

// styles
import "./App.scss";

// components
import MainCard from "./components/MainCard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className="App">
      <MainCard />
      <Dashboard />

      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/martin-eli%C3%A1%C5%A1-455550209/">
          Martin Eliáš
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
