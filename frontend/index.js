import React from "react";
import ReactDOM from "react-dom";
import "./index.css";  // Assurez-vous que cette ligne est présente
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
