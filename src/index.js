import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { JobFilterContextProvider } from "./context/JobFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JobFilterContextProvider>
      <App />
    </JobFilterContextProvider>
  </React.StrictMode>
);
