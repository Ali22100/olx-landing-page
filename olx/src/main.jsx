import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

const divElement = document.getElementById("root");

ReactDom.createRoot(divElement).render(
  <>
    <App />
  </>
);

