import React from "react";
import { Routes, Route } from "react-router-dom";

// styles

// components
import MainCard from "./components/MainCard";

// views
import Daily from "./views/Daily";
import Weekly from "./views/Weekly";
import Monthly from "./views/Monthly";

function App() {
  return (
    <main className="App">
      <MainCard />
      <section className="stats-dashboard">
        <Routes>
          <Route path="/" element={<Daily />} />
          <Route path="weekly" element={<Weekly />} />
          <Route path="monthly" element={<Monthly />} />
        </Routes>
      </section>

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
