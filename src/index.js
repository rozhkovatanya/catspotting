import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
    font-family: "Share Tech Mono", monospace;
  }
  
  a {
    text-decoration: none; 
    color: inherit; 
    font-family: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
