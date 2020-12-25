import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OWMapKeyAPIContext } from "./context";

const WEATHER_KEY = atob(
  process.env.REACT_APP_WEATHER_KEY ||
    "ZDc5ZTQ3M2MyN2UxY2U4NWExNDVjM2E1MWUyM2YyYzU="
);
ReactDOM.render(
  <React.StrictMode>
    <OWMapKeyAPIContext.Provider value={WEATHER_KEY}>
      <App />
    </OWMapKeyAPIContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
