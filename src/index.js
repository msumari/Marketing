import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DateContext } from "./DateContext";

ReactDOM.render(
  <React.StrictMode>
    <DateContext.Provider>
      <App />
    </DateContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
