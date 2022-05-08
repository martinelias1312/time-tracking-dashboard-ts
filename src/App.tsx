import React, { useEffect, useState } from "react";

// styles
import "./App.scss";

// components
import MainCard from "./components/MainCard";
import Dashboard from "./components/Dashboard";

// component
function App() {
  // data fetch
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

  // state
  const [data, setData] = useState([]);
  const [timeMode, setTimeMode] = useState("week");

  // function to change Time
  const switchTimeMode = (mode: string) => {
    setTimeMode(mode);
  };

  // template
  return (
    <main className="App">
      <MainCard timeMode={timeMode} switchTimeMode={switchTimeMode} />
      <Dashboard timeMode={timeMode} data={data} />

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
