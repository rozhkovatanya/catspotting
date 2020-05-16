import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
