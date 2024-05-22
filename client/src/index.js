import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext"; // Correct import
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
      <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);