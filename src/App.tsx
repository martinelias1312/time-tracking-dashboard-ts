import React, { useEffect, useState } from "react";

// styles
import "./App.scss";

// components
import MainCard from "./components/MainCard";
import Dashboard from "./components/Dashboard";

function App() {
  useEffect(() => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [data, setData] = useState([]);

  return (
    <main className="App">
      <MainCard />
      <Dashboard data={data} />

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
