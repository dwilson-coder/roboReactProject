import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// import Card from "../src/components/Card";
import App from "../src/containers/App";
/// import { robots } from "./robots";
// import CardList from "../src/components/CardList";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
