import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./index.scss";

// components
import Layout from "./Layout";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
